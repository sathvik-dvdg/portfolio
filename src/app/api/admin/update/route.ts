import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRepository } from "@/lib/repository/repositoryFactory";
import { portfolioSchema } from "@/lib/schema/portfolio.schema";
import { checkApiRateLimit } from "@/lib/auth/rate-limit";
import { ZodError } from "zod";

/**
 * GET /api/admin/update
 * Returns the current portfolio data and whether the repository is writable.
 */
export async function GET() {
  try {
    const repo = getRepository();
    const data = await repo.getPortfolio();

    return NextResponse.json({
      data,
      writable: repo.isWritable()
    });
  } catch (err) {
    console.error("[api/admin/update] GET error:", err);
    const message = err instanceof Error ? err.message : "Failed to load portfolio data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * PATCH /api/admin/update
 * Validates and persists updated portfolio data.
 * Dev-only write; prod returns 403 with guidance.
 */
export async function PATCH(request: NextRequest) {
  // Rate limiting by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  const rateLimitResult = checkApiRateLimit(ip);

  if (!rateLimitResult.success) {
    return NextResponse.json(
      { error: "Too many updates. Please try again later." },
      { status: 429 }
    );
  }

  const repo = getRepository();

  // Check if writable
  if (!repo.isWritable()) {
    return NextResponse.json(
      {
        error:
          "Content is read-only in production. To update your portfolio:\n" +
          "1. Run `npm run dev` locally\n" +
          "2. Navigate to /admin and make your edits\n" +
          "3. Commit and push to deploy the changes"
      },
      { status: 403 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Validate with Zod
  try {
    const validated = portfolioSchema.parse(body);
    await repo.updatePortfolio(validated);

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Validation failed",
          errors: err.issues.map((e) => ({
            path: e.path.map(String),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }

    console.error("[api/admin/update] PATCH error:", err);
    const message = err instanceof Error ? err.message : "Failed to save portfolio data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
