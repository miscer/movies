import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import PeriodSelect from "@/components/PeriodSelect.vue";

test("selects the anytime option", () => {
  const { getByLabelText } = render(PeriodSelect, {
    props: { selected: null },
  });
  expect(getByLabelText("Anytime")).toBeChecked();
});

test("selects the 2010s option", () => {
  const { getByLabelText } = render(PeriodSelect, {
    props: { selected: 2010 },
  });
  expect(getByLabelText("2010s")).toBeChecked();
});

test("emits event when a period is selected", () => {
  const { getByLabelText, emitted } = render(PeriodSelect, {
    props: { selected: null },
  });

  userEvent.click(getByLabelText("1980s"));
  expect(emitted()["update:selected"]).toBeTruthy();
});
