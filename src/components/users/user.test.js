import { render, screen } from "@testing-library/react";
import Users from "./Users";

describe("users", () => {
  test("render heading correctly", () => {
    render(<Users />);
    const headingElement = screen.getByText("Users");
    expect(headingElement).toBeInTheDocument();
  });
  test("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
