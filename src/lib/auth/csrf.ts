import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CSRF_COOKIE = "csrf_token";
const CSRF_HEADER = "x-csrf-token";

/**
 * Generate a cryptographically random CSRF token.
 */
function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Set a CSRF token cookie on a response.
 * The cookie is readable by JavaScript (not httpOnly) so the admin UI
 * can read it and send it back as a header.
 */
export function setCsrfCookie(response: NextResponse): NextResponse {
  const token = generateToken();
  response.cookies.set(CSRF_COOKIE, token, {
    httpOnly: false, // Must be readable by client JS
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 // 24 hours
  });
  return response;
}

/**
 * Validate the CSRF token on a mutating request.
 * Compares the cookie value against the X-CSRF-Token header (double-submit pattern).
 * Returns true if both are present and match.
 */
export function validateCsrf(request: NextRequest): boolean {
  const cookieToken = request.cookies.get(CSRF_COOKIE)?.value;
  const headerToken = request.headers.get(CSRF_HEADER);

  if (!cookieToken || !headerToken) {
    return false;
  }

  // Constant-time comparison to prevent timing attacks
  if (cookieToken.length !== headerToken.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < cookieToken.length; i++) {
    result |= cookieToken.charCodeAt(i) ^ headerToken.charCodeAt(i);
  }

  return result === 0;
}
