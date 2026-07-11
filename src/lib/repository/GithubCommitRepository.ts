import { ContentRepository } from "./ContentRepository";
import { PortfolioData, portfolioSchema } from "../schema/portfolio.schema";
import portfolioJson from "../../data/portfolio.json";

function encodeBase64(str: string): string {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(str, "utf-8").toString("base64");
  }
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

export class GithubCommitRepository implements ContentRepository {
  async getPortfolio(): Promise<PortfolioData> {
    // In production, we return the statically imported JSON data from the build
    return portfolioSchema.parse(portfolioJson);
  }

  async updatePortfolio(data: PortfolioData): Promise<void> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error(
        "GitHub token is not configured on Vercel. " +
        "Please add GITHUB_TOKEN to your Vercel Environment Variables."
      );
    }

    const validated = portfolioSchema.parse(data);
    const content = JSON.stringify(validated, null, 2) + "\n";

    // Repository coordinates
    const owner = "sathvik-dvdg";
    const repo = "portfolio";
    const path = "src/data/portfolio.json";

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // 1. Get the current file's SHA from GitHub
    const getRes = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "nextjs-portfolio-cms"
      },
      next: { revalidate: 0 } // Bypass Next.js fetch cache
    } as any);

    if (!getRes.ok) {
      throw new Error(
        `Failed to retrieve file metadata from GitHub (${getRes.status}). ` +
        "Please check if GITHUB_TOKEN has write permission to the repository."
      );
    }

    const fileMetadata = await getRes.json();
    const sha = fileMetadata.sha;

    // 2. Commit the updated content back to the main branch
    const putRes = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "nextjs-portfolio-cms"
      },
      body: JSON.stringify({
        message: "chore: update portfolio content via Admin CMS",
        content: encodeBase64(content),
        sha,
        branch: "main"
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(
        `Failed to commit file to GitHub: ${errData.message || putRes.statusText}`
      );
    }
  }

  isWritable(): boolean {
    // If the token is present in the environment variables, editing is enabled!
    return !!process.env.GITHUB_TOKEN;
  }
}
