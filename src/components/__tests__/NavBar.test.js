import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  const logInLink = screen.getByRole("link", { name: "Log in" });
  expect(logInLink).toBeInTheDocument();
});

test("renders Log in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const logOutLink = await screen.findByRole("link", { name: "Log out" });
  fireEvent.click(logOutLink);

  const logInLink = await screen.findByRole("link", { name: "Log in" });
  const signUpLink = await screen.findByRole("link", { name: "Sign up" });
  expect(logInLink).toBeInTheDocument();
  expect(signUpLink).toBeInTheDocument();
});
