import {fireEvent, render, screen} from "@testing-library/react";
import Header from "../Header";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
// import logoImage from "../../images/logo.jpg";

it("Should render Header component check for button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should render Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginButton = screen.getByRole("button", {name: "Login"});

  expect(loginButton).toBeInTheDocument();
});

it("Should render Logout button after clicking login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const loginButton = screen.getByRole("button", {name: "Login"});

  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", {name: "Logout"});

  expect(logoutButton).toBeInTheDocument();
});

it("Should render Cart with any items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //querying
  const cart = screen.getByText(/Cart/); //can also use regex

  expect(cart).toBeInTheDocument();
});
