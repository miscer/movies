export async function fetchMovies(filters = {}) {
  const params = new URLSearchParams();

  for (const filter in filters) {
    params.set(filter, filters[filter]);
  }

  const response = await fetch(`/movies?${params}`);

  if (!response.ok) {
    throw new Error("Unable to fetch movies");
  }

  const { data } = await response.json();
  return data;
}
