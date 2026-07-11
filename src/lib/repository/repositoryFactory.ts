import { ContentRepository } from "./ContentRepository";
import { LocalJsonRepository } from "./LocalJsonRepository";
import { ReadOnlyRepository } from "./ReadOnlyRepository";

let repositoryInstance: ContentRepository | null = null;

export function getRepository(): ContentRepository {
  if (!repositoryInstance) {
    if (process.env.NODE_ENV === "production") {
      repositoryInstance = new ReadOnlyRepository();
    } else {
      repositoryInstance = new LocalJsonRepository();
    }
  }
  return repositoryInstance;
}
