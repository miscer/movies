import { setupServer } from "msw/node";
import { handlers } from "@/api/handlers.js";

export const setupMockApi = () => {
  return setupServer(...handlers);
};
