import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("Home Test", () => {
    render(<Home />);
    let homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
  });
  describe("Nested", () => {
    test("render with props", () => {
      render(<Home name={"OM"} />);
      let homeProps = screen.getByText("Home OM");
      expect(homeProps).toBeInTheDocument();
    });
  });
});
