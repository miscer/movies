import { setupWorker } from "msw";
import { handlers } from "@/api/handlers.js";

export const setupMockApi = () => {
  const worker = setupWorker(...handlers);
  worker.start();
};
