import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getRepository } from "@/lib/repository/repositoryFactory";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ role: string }> }
) {
  // In Next.js 15, params is a Promise
  const resolvedParams = await params;
  const roleSlug = (resolvedParams.role || "").toLowerCase();

  try {
    const repo = getRepository();
    const portfolio = await repo.getPortfolio();

    // Find the tailored resume matching the role case-insensitively
    const match = (portfolio.tailoredResumes || []).find(
      (r) => r.role.toLowerCase() === roleSlug
    );

    let redirectPath = portfolio.resumeHref;

    // Defensively validate the matched path to prevent open redirect vulnerabilities
    if (match && match.href.startsWith("/") && !match.href.startsWith("//")) {
      redirectPath = match.href;
    }

    const redirectUrl = new URL(redirectPath, request.url);
    return NextResponse.redirect(redirectUrl, 307);
  } catch (err) {
    console.error("[resume/redirect] Error handling redirect:", err);
    // Fall back to main home page if anything fails
    return NextResponse.redirect(new URL("/", request.url), 307);
  }
}
