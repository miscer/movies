import { rest } from "msw";
import movies from "./movies.json";
import genres from "./genres.json";
import actors from "./actors.json";

export const handlers = [
  rest.get("/movies", (req, res, ctx) => {
    const params = req.url.searchParams;
    const filters = {
      title: params.get("title"),
    };

    const all = Object.values(movies);

    const filtered = all.filter((movie) => {
      return filters.title == null || movie.title.includes(filters.title);
    });

    const data = filtered.map((movie) => ({
      ...movie,
      genre: movie.genre.map((id) => genres[id]),
      actors: movie.actors.map((id) => actors[id]),
    }));

    return res(ctx.json({ data }));
  }),

  rest.get("/genres", (req, res, ctx) => {
    const data = Object.values(genres);
    return res(ctx.json({ data }));
  }),
];
