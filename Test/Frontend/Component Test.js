/// Component Test (Header)

// Header.test.jsx
import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("renders title", () => {
  render(<Header title="Full Stack App" />);
  expect(screen.getByText("Full Stack App")).toBeInTheDocument();
});

