const apiUrl = "http://api";

export async function fetchMovies(params = {}) {
  const query = new URLSearchParams();

  if (params.title) query.set("title", params.title);
  if (params.from) query.set("from", params.from.toISOString());
  if (params.to) query.set("to", params.to.toISOString());

  if (params.genre != null) {
    for (const genre of params.genre) {
      query.append("genre", genre);
    }
  }

  const response = await fetch(`${apiUrl}/movies?${query}`);

  if (!response.ok) {
    throw new Error("Unable to fetch movies");
  }

  const { data } = await response.json();
  return data;
}

export async function fetchGenres() {
  const response = await fetch(`${apiUrl}/genres`);

  if (!response.ok) {
    throw new Error("Unable to fetch genres");
  }

  const { data } = await response.json();
  return data;
}
