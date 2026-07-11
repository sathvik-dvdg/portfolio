import { ContentRepository } from "./ContentRepository";
import { PortfolioData, portfolioSchema } from "../schema/portfolio.schema";
import portfolioJson from "../../data/portfolio.json";

export class ReadOnlyRepository implements ContentRepository {
  async getPortfolio(): Promise<PortfolioData> {
    return portfolioSchema.parse(portfolioJson);
  }

  async updatePortfolio(_data: PortfolioData): Promise<void> {
    throw new Error(
      "Content is read-only in production. To update your portfolio:\n" +
      "1. Run `npm run dev` locally\n" +
      "2. Navigate to /admin and make your edits\n" +
      "3. Commit and push to deploy the changes"
    );
  }

  isWritable(): boolean {
    return false;
  }
}
