import { rest } from "msw";
import movies from "./movies.json";

export const handlers = [
  rest.get("/movies", (req, res, ctx) => {
    return res(ctx.json(movies));
  }),
];
