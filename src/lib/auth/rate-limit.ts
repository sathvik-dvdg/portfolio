const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

/**
 * In-memory rate limiter for the login endpoint.
 * Limits to 5 attempts per 15-minute window per IP.
 *
 * Note: In serverless environments (Vercel), this resets on cold starts.
 * Acceptable for a single-admin portfolio site.
 */
const store = new Map<string, RateLimitEntry>();

export type RateLimitResult = {
  success: boolean;
  remaining: number;
  resetIn: number; // seconds until window reset
};

/**
 * Check and consume a rate limit attempt for the given key (typically IP).
 */
export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();

  // Clean up expired entries periodically
  if (store.size > 1000) {
    for (const [k, v] of store) {
      if (now > v.resetAt) store.delete(k);
    }
  }

  const entry = store.get(key);

  // No existing entry or window expired — start fresh
  if (!entry || now > entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return {
      success: true,
      remaining: MAX_ATTEMPTS - 1,
      resetIn: Math.ceil(WINDOW_MS / 1000)
    };
  }

  // Window still active
  if (entry.count >= MAX_ATTEMPTS) {
    return {
      success: false,
      remaining: 0,
      resetIn: Math.ceil((entry.resetAt - now) / 1000)
    };
  }

  entry.count += 1;
  return {
    success: true,
    remaining: MAX_ATTEMPTS - entry.count,
    resetIn: Math.ceil((entry.resetAt - now) / 1000)
  };
}
