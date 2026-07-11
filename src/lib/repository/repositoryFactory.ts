import { ContentRepository } from "./ContentRepository";
import { LocalJsonRepository } from "./LocalJsonRepository";
import { GithubCommitRepository } from "./GithubCommitRepository";

let repositoryInstance: ContentRepository | null = null;

export function getRepository(): ContentRepository {
  if (!repositoryInstance) {
    if (process.env.NODE_ENV === "production") {
      repositoryInstance = new GithubCommitRepository();
    } else {
      repositoryInstance = new LocalJsonRepository();
    }
  }
  return repositoryInstance;
}
