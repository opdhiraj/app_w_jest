import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  test("render correctly", () => {
    render(<Counter />);

    //to check heading count display
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    //to check increment button

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  //state check
  test("render a a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });
  test("renders a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButton1 = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton1);
    const countElement1 = screen.getByRole("heading");
    expect(countElement1).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();
    render(<Counter />);
    //stimulate input element
    const amountInput = screen.getByRole("spinbutton"); //input with type[number]="spinbutton"||||||input with type[text]="textbox"
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    //to stimulate click button
    const setButton = screen.getByRole("button", { name: "Set" });
    await user.click(setButton);
    //find heading element

    const countElement3 = screen.getByRole("heading");
    expect(countElement3).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    user.setup();
    render(<Counter />);
    const amountInput1 = screen.getByRole("spinbutton");
    const setButton1 = screen.getByRole("button", { name: "Set" });
    const incrementButton2 = screen.getByRole("button", { name: "Increment" });
    await user.tab();
    expect(incrementButton2).toHaveFocus();
    await user.tab();
    expect(amountInput1).toHaveFocus();
    await user.tab();
    expect(setButton1).toHaveFocus();
  });
});
