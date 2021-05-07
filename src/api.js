export async function fetchMovies(params = {}) {
  const query = new URLSearchParams();

  for (const filter in params) {
    query.set(filter, params[filter]);
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
