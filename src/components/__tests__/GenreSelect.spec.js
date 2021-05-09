import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import GenreSelect from "@/components/GenreSelect.vue";
import { setupMockApi } from "@/mock-api/test";

const api = setupMockApi();

beforeAll(() => api.listen());
afterAll(() => api.close());

test("shows all genres", async () => {
  const { findByLabelText } = render(GenreSelect, {
    props: { selected: [] },
  });

  expect(await findByLabelText("All")).toBeChecked();
  expect(await findByLabelText("Comedy")).not.toBeChecked();
  expect(await findByLabelText("Horror")).not.toBeChecked();
});

test("selects multiple genres", async () => {
  const { findByLabelText, emitted } = render(GenreSelect, {
    props: { selected: ["2", "3"] },
  });

  expect(await findByLabelText("All")).not.toBeChecked();
  expect(await findByLabelText("Drama")).toBeChecked();
  expect(await findByLabelText("Comedy")).toBeChecked();

  userEvent.click(await findByLabelText("Western"));

  const events = emitted();
  expect(events["update:selected"]).toEqual([[["2", "3", "8"]]]);
});
