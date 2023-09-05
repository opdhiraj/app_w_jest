import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctlly", () => {
    render(<Application />);
    const nameElement = screen.getByRole("textbox");
    expect(nameElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
