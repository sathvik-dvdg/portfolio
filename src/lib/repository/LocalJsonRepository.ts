import fs from "node:fs";
import path from "node:path";
import { ContentRepository } from "./ContentRepository";
import { PortfolioData, portfolioSchema } from "../schema/portfolio.schema";

export class LocalJsonRepository implements ContentRepository {
  private readonly filepath: string;

  constructor() {
    this.filepath = path.join(process.cwd(), "src", "data", "portfolio.json");
  }

  async getPortfolio(): Promise<PortfolioData> {
    const raw = fs.readFileSync(this.filepath, "utf-8");
    const json = JSON.parse(raw);
    return portfolioSchema.parse(json);
  }

  async updatePortfolio(data: PortfolioData): Promise<void> {
    const validated = portfolioSchema.parse(data);
    const tempFile = this.filepath + ".tmp";
    const content = JSON.stringify(validated, null, 2) + "\n";

    fs.writeFileSync(tempFile, content, "utf-8");
    fs.renameSync(tempFile, this.filepath);
  }

  isWritable(): boolean {
    return true;
  }
}
