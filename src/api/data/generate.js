const _ = require("lodash");
const casual = require("casual");

const genres = {
  1: { id: "1", title: "Action" },
  2: { id: "2", title: "Drama" },
  3: { id: "3", title: "Comedy" },
  4: { id: "4", title: "Horror" },
  5: { id: "5", title: "Documentary" },
  6: { id: "6", title: "Romance" },
  7: { id: "7", title: "Thriller" },
  8: { id: "8", title: "Western" },
  9: { id: "9", title: "Sci-fi" },
  10: { id: "10", title: "Fantasy" },
};

const actors = {};

for (let id = 1; id <= 30; id++) {
  actors[id] = {
    id: String(id),
    name: casual.full_name,
  };
}

const movies = {};

for (let id = 1; id <= 100; id++) {
  movies[id] = {
    id: String(id),
    title: casual.title,
    genres: _.sampleSize(genres, 2).map((genre) => genre.id),
    actors: _.sampleSize(actors, 3).map((actor) => actor.id),
    release_date: new Date(casual.unix_time * 1000).toISOString(),
    poster_url: `https://picsum.photos/400/600?random=${id}`,
  };
}

const data = { genres, movies, actors };
const output = JSON.stringify(data, null, 2);
console.log(output);
