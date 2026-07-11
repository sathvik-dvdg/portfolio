type RateLimitEntry = {
  count: number;
  resetAt: number;
  failures: number; // consecutive failures for exponential backoff
};

const store = new Map<string, RateLimitEntry>();

// Configurable thresholds via env variables with safe defaults
const AUTH_MAX = process.env.RATE_LIMIT_AUTH_MAX ? parseInt(process.env.RATE_LIMIT_AUTH_MAX, 10) : 5;
const AUTH_WINDOW = process.env.RATE_LIMIT_AUTH_WINDOW_MS ? parseInt(process.env.RATE_LIMIT_AUTH_WINDOW_MS, 10) : 15 * 60 * 1000;

const API_MAX = process.env.RATE_LIMIT_API_MAX ? parseInt(process.env.RATE_LIMIT_API_MAX, 10) : 60;
const API_WINDOW = process.env.RATE_LIMIT_API_WINDOW_MS ? parseInt(process.env.RATE_LIMIT_API_WINDOW_MS, 10) : 60 * 1000;

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetIn: number; // seconds until window reset
};

/**
 * Clean up expired entries periodically.
 */
function cleanupStore(now: number) {
  if (store.size > 1000) {
    for (const [k, v] of store) {
      if (now > v.resetAt) store.delete(k);
    }
  }
}

/**
 * Generic rate limiter.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now();
  cleanupStore(now);

  const entry = store.get(key);

  if (!entry || now > entry.resetAt) {
    store.set(key, {
      count: 1,
      resetAt: now + windowMs,
      failures: entry?.failures || 0
    });
    return {
      success: true,
      remaining: limit - 1,
      resetIn: Math.ceil(windowMs / 1000)
    };
  }

  if (entry.count >= limit) {
    return {
      success: false,
      remaining: 0,
      resetIn: Math.ceil((entry.resetAt - now) / 1000)
    };
  }

  entry.count += 1;
  return {
    success: true,
    remaining: limit - entry.count,
    resetIn: Math.ceil((entry.resetAt - now) / 1000)
  };
}

/**
 * Rate limit for authentication routes (login).
 * Features per-IP check with exponential backoff on consecutive failures.
 */
export function checkAuthRateLimit(ip: string): RateLimitResult {
  const now = Date.now();
  cleanupStore(now);

  const entry = store.get(ip) || { count: 0, resetAt: 0, failures: 0 };

  // Calculate exponential backoff window based on consecutive failures
  // failures: 0 -> no backoff, normal AUTH_WINDOW (15 min)
  // failures: 1 -> 30 sec
  // failures: 2 -> 1 min
  // failures: 3 -> 4 min
  // failures: 4 -> 16 min
  // failures: 5+ -> 1 hour
  let backoffMs = AUTH_WINDOW;
  if (entry.failures > 0) {
    backoffMs = Math.min(30 * 1000 * Math.pow(4, entry.failures - 1), 60 * 60 * 1000);
  }

  if (now < entry.resetAt && entry.count >= AUTH_MAX) {
    return {
      success: false,
      remaining: 0,
      resetIn: Math.ceil((entry.resetAt - now) / 1000)
    };
  }

  // If outside previous window, start fresh
  if (now > entry.resetAt) {
    store.set(ip, {
      count: 1,
      resetAt: now + backoffMs,
      failures: entry.failures
    });
    return {
      success: true,
      remaining: AUTH_MAX - 1,
      resetIn: Math.ceil(backoffMs / 1000)
    };
  }

  entry.count += 1;
  store.set(ip, entry);

  return {
    success: true,
    remaining: AUTH_MAX - entry.count,
    resetIn: Math.ceil((entry.resetAt - now) / 1000)
  };
}

/**
 * Register a login failure to increase consecutive failures count.
 */
export function recordAuthFailure(ip: string) {
  const entry = store.get(ip);
  if (entry) {
    entry.failures += 1;
    // Push the reset window out due to failure backoff
    const backoffMs = Math.min(30 * 1000 * Math.pow(4, entry.failures - 1), 60 * 60 * 1000);
    entry.resetAt = Date.now() + backoffMs;
    store.set(ip, entry);
  }
}

/**
 * Register a login success to clear consecutive failures.
 */
export function recordAuthSuccess(ip: string) {
  const entry = store.get(ip);
  if (entry) {
    entry.failures = 0;
    store.set(ip, entry);
  }
}

/**
 * Rate limit for authenticated API write/mutating endpoints.
 */
export function checkApiRateLimit(ip: string): RateLimitResult {
  return checkRateLimit(`api:${ip}`, API_MAX, API_WINDOW);
}
