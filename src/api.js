export async function fetchMovies() {
  const response = await fetch("/movies");

  if (!response.ok) {
    throw new Error("Unable to fetch movies");
  }

  const data = await response.json();
  return data.movies;
}
