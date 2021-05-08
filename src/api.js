export async function fetchMovies(params = {}) {
  const query = new URLSearchParams();

  if (params.title) {
    query.set("title", params.title);
  }

  if (params.year) {
    query.set("year", params.year);
  }

  if (params.genre != null) {
    for (const genre of params.genre) {
      query.append("genre", genre);
    }
  }

  const response = await fetch(`/movies?${query}`);

  if (!response.ok) {
    throw new Error("Unable to fetch movies");
  }

  const { data } = await response.json();
  return data;
}

export async function fetchGenres() {
  const response = await fetch("/genres");

  if (!response.ok) {
    throw new Error("Unable to fetch genres");
  }

  const { data } = await response.json();
  return data;
}
