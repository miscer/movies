import { rest } from "msw";
import data from "./data/data.json";

export const handlers = [
  rest.get("/movies", (req, res, ctx) => {
    const query = req.url.searchParams;
    const params = {
      title: query.get("title"),
      genre: query.get("genre"),
      year: query.get("year"),
    };

    const all = Object.values(data.movies);
    const filtered = all.filter(getMovieFilter(params));

    const result = filtered.map((movie) => ({
      ...movie,
      genres: movie.genres.map((id) => data.genres[id]),
      actors: movie.actors.map((id) => data.actors[id]),
    }));

    return res(ctx.delay(500), ctx.json({ data: result }));
  }),

  rest.get("/genres", (req, res, ctx) => {
    const result = Object.values(data.genres);
    return res(ctx.delay(500), ctx.json({ data: result }));
  }),
];

const getMovieFilter = (params) => {
  const title = params.title?.toLowerCase().trim();
  const year = params.year != null ? parseInt(params.year, 10) : undefined;
  const genre = params.genre;

  return (movie) => {
    const releaseDate = new Date(movie.release_date);

    return (
      (title == null || movie.title.toLowerCase().includes(title)) &&
      (genre == null || movie.genres.includes(genre)) &&
      (year == null || releaseDate.getFullYear() === year)
    );
  };
};
