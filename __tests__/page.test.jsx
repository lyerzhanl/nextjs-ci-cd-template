import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home page", () => {
  it("renders heading", () => {
    render(<Page />);
    expect(screen.getByText("Hello CI/CD")).toBeInTheDocument();
  });
});
