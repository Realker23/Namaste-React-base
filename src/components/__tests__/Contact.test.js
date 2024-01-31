import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Check if contact us page is rendered", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  //assertion
  expect(heading).toBeInTheDocument();
});

test("Check if button is present with submit text", () => {
  render(<Contact />);

  const button = screen.getByText("Submit");

  //assertion
  expect(button).toBeInTheDocument();
});

test("Check if input box is present with name as a placeholder", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("Name");

  //assertion
  expect(inputName).toBeInTheDocument();
});

test("Check if how many input box is present", () => {
  render(<Contact />);

  const input = screen.getAllByRole("textbox");
  //   console.log(input);

  //assertion
  expect(input.length).toBe(2);
});
