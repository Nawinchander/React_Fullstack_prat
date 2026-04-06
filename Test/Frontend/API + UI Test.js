//// API + UI Test (UserList)


import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("renders users", () => {
  const mockUsers = [{ id: 1, name: "Nawin" }];

  render(<UserList users={mockUsers} />);

  expect(screen.getByText("Nawin")).toBeInTheDocument();
});


