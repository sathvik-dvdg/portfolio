import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { setCsrfCookie } from "@/lib/auth/csrf";

const COOKIE_NAME = "admin_session";

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) return new TextEncoder().encode("fallback-dev-only");
  return new TextEncoder().encode(secret);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page and login API without auth
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    const response = NextResponse.next();
    // Set CSRF cookie on login page load
    if (pathname === "/admin/login") {
      setCsrfCookie(response);
    }
    return response;
  }

  // All other /admin/* and /api/admin/* routes require auth
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    await jwtVerify(token, getSecret());
    const response = NextResponse.next();
    // Ensure CSRF cookie is present on all authenticated admin pages
    if (!request.cookies.get("csrf_token")) {
      setCsrfCookie(response);
    }
    return response;
  } catch {
    // Invalid or expired token — redirect to login
    const response = NextResponse.redirect(new URL("/admin/login", request.url));
    // Clear the invalid cookie
    response.cookies.set(COOKIE_NAME, "", { maxAge: 0, path: "/" });
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path((?!login).*)"]
};
