import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyPassword } from "@/lib/auth/password";
import { createSession, setSessionCookie } from "@/lib/auth/session";
import { checkAuthRateLimit, recordAuthFailure, recordAuthSuccess } from "@/lib/auth/rate-limit";

export async function POST(request: NextRequest) {
  // Rate limiting by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const rateLimitResult = checkAuthRateLimit(ip);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      {
        error: "Too many login attempts. Please try again later.",
        retryAfter: rateLimitResult.resetIn
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(rateLimitResult.resetIn)
        }
      }
    );
  }

  // Parse request body
  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { password } = body;
  if (!password || typeof password !== "string") {
    return NextResponse.json({ error: "Password is required" }, { status: 400 });
  }

  // Verify password
  const isValid = await verifyPassword(password);

  if (!isValid) {
    recordAuthFailure(ip);
    // Generic error message — no user enumeration
    return NextResponse.json(
      {
        error: "Invalid credentials",
        remaining: rateLimitResult.remaining
      },
      { status: 401 }
    );
  }

  recordAuthSuccess(ip);

  // Create JWT session token
  try {
    const token = await createSession();

    // Set httpOnly, secure, sameSite=strict cookie
    const response = NextResponse.json({ success: true });
    setSessionCookie(response, token);

    return response;
  } catch (err) {
    console.error("[api/admin/login] Error during session creation:", err);
    const message = err instanceof Error ? err.message : "Session creation failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
