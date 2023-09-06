import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Application", () => {
  test("render correctlly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      name: "Job Application form",
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    //by getbytext
    const paragraphElement = screen.getByText("All feilds are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    //getbytitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //getbyalttext

    const imgElement = screen.getByAltText("Tree with sun");
    expect(imgElement).toBeInTheDocument();

    //getbytestid
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    // const nameElement = screen.getByRole("textbox");
    const nameElement = screen.getByRole("textbox", { name: "Name:" });
    expect(nameElement).toBeInTheDocument();

    //getbylabeltext
    const nameElement2 = screen.getByLabelText("Name:");
    expect(nameElement2).toBeInTheDocument();
    // getbyplaceholder
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //getbydisplayvalue
    const nameElement4 = screen.getByDisplayValue("om");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termElement = screen.getByRole("checkbox");
    expect(termElement).toBeInTheDocument();

    //getbylabeltext

    const termElement2 = screen.getByLabelText("I agree TNC");
    expect(termElement2).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });
});
