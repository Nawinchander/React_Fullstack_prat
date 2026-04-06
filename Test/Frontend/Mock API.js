import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

test("fetches and displays users", async () => {
  axios.get.mockResolvedValue({ data: [{ id: 1, name: "Test User" }] });

  render(<App />);

  await waitFor(() =>
    expect(screen.getByText("Test User")).toBeInTheDocument()
  );
});


