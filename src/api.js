export async function fetchMovies(filters = {}) {
  const params = new URLSearchParams();

  for (const filter in filters) {
    if (filters[filter] != null) {
      params.set(filter, filters[filter]);
    }
  }

  const response = await fetch(`/movies?${params}`);

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
