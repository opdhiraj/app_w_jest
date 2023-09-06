import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JS", "react"];
  test("renders correctly", () => {
    render(<Skills skillslist={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders a list of skills", () => {
    render(<Skills skillslist={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders with button", () => {
    render(<Skills skillslist={skills} />);
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  //to check something is not render
  test("start learning button is not present", () => {
    render(<Skills skillslist={skills} />);
    const startLearningButton = screen.queryByRole("button", { name: "start learning" });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //to apperance /disapperance
  test("start learning button is eventually displayed", async () => {
    render(<Skills skillslist={skills} />);
    const startlearningbutton = await screen.findByRole(
      "button",
      { name: "start learning" },
      { timeout: 2000 }
    );
    expect(startlearningbutton).toBeInTheDocument();
  });
});
