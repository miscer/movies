import { rest } from "msw";
import movies from "./movies.json";
import genres from "./genres.json";
import actors from "./actors.json";

export const handlers = [
  rest.get("/movies", (req, res, ctx) => {
    const params = req.url.searchParams;
    const filters = {
      title: params.get("title"),
      genre: params.get("genre"),
      year: params.get("year"),
    };

    const all = Object.values(movies);
    const filtered = all.filter(getMovieFilter(filters));

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

const getMovieFilter = (filters) => {
  const title = filters.title?.toLowerCase().trim();
  const year = filters.year != null ? parseInt(filters.year, 10) : undefined;
  const genre = filters.genre;

  return (movie) => {
    const releaseDate = new Date(movie.release_date);

    return (
      (title == null || movie.title.toLowerCase().includes(title)) &&
      (genre == null || movie.genre.includes(genre)) &&
      (year == null || releaseDate.getFullYear() === year)
    );
  };
};
