import { setupServer } from "msw/node";
import { handlers } from "@/mock-api/handlers.js";

export const setupMockApi = () => {
  return setupServer(...handlers);
};
