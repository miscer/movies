import { render, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { setupMockApi } from "@/api/test";
import MovieSearch from "@/components/MovieSearch.vue";

const api = setupMockApi();

beforeAll(() => api.listen());
afterAll(() => api.close());

test("shows a list of movies", async () => {
  const { findByText } = render(MovieSearch);

  expect(await findByText("Doloribus cum placeat (2015)"));
  expect(await findByText("Minima pariatur (1997)"));
});

test("filters movies", async () => {
  const { queryByText, findByLabelText } = render(MovieSearch);

  userEvent.type(await findByLabelText("Title:"), "et");
  userEvent.click(await findByLabelText("2000s"));
  userEvent.click(await findByLabelText("Sci-fi"));

  await waitFor(
    () => {
      expect(queryByText("Sit et voluptatibus (2003)")).toBeInTheDocument();
      expect(queryByText("Maxime enim (2003)")).toBeNull();
      expect(queryByText("Et quia (2007)")).toBeNull();
      expect(queryByText("Amet est (1973)")).toBeNull();
    },
    { timeout: 2000 }
  );
});
