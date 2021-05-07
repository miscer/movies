import { rest } from "msw";
import movies from "./movies.json";
import genres from "./genres.json";
import actors from "./actors.json";

export const handlers = [
  rest.get("/movies", (req, res, ctx) => {
    const query = req.url.searchParams;
    const params = {
      title: query.get("title"),
      genre: query.get("genre"),
      year: query.get("year"),
    };

    const all = Object.values(movies);
    const filtered = all.filter(getMovieFilter(params));

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

const getMovieFilter = (params) => {
  const title = params.title?.toLowerCase().trim();
  const year = params.year != null ? parseInt(params.year, 10) : undefined;
  const genre = params.genre;

  return (movie) => {
    const releaseDate = new Date(movie.release_date);

    return (
      (title == null || movie.title.toLowerCase().includes(title)) &&
      (genre == null || movie.genre.includes(genre)) &&
      (year == null || releaseDate.getFullYear() === year)
    );
  };
};
