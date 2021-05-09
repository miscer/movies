import { render } from "@testing-library/vue";
import Movie from "@/components/Movie.vue";

test("renders a movie", () => {
  const { getByText, getByAltText } = render(Movie, {
    props: {
      title: "Sample movie",
      description: "Movie about something",
      releaseDate: new Date(2013, 3, 1),
      posterUrl: "https://example.com/poster.jpg",
      genres: ["Comedy", "Horror"],
      actors: ["First Actor", "Second Actor"],
    },
  });

  expect(getByText("Sample movie (2013)")).toBeInTheDocument();
  expect(getByText("Movie about something")).toBeInTheDocument();
  expect(getByAltText("Poster for Sample movie")).toBeInTheDocument();
  expect(getByText("Comedy")).toBeInTheDocument();
  expect(getByText("Second Actor")).toBeInTheDocument();
});
