import { PortfolioData } from "../schema/portfolio.schema";

export interface ContentRepository {
  /**
   * Retrieve the full portfolio data structure.
   */
  getPortfolio(): Promise<PortfolioData>;

  /**
   * Update the portfolio data.
   * Implementation depends on the environment (e.g. fs write vs read-only guard).
   */
  updatePortfolio(data: PortfolioData): Promise<void>;

  /**
   * Returns true if the repository is writable.
   */
  isWritable(): boolean;
}
