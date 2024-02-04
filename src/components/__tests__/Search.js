import {fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestaurantCardMock.json";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should check for the search functionality ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // querying
  const resListBeforeSearch = screen.getAllByTestId("resList");
  expect(resListBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {name: "Search"});
  // expect(searchBtn).toBeInTheDocument();
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {target: {value: "Bakery"}});

  fireEvent.click(searchBtn);

  const resListAfterSearch = screen.getAllByTestId("resList");
  expect(resListAfterSearch.length).toBe(2);
});

test("should check for the filter functionality ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  // querying
  const resListBeforeFilter = screen.getAllByTestId("resList");
  expect(resListBeforeFilter.length).toBe(20);

  const filterBtn = screen.getByRole("button", {name: "Rating 4.5+"});
  // expect(searchBtn).toBeInTheDocument();

  fireEvent.click(filterBtn);

  const resListAfterFilter = screen.getAllByTestId("resList");
  expect(resListAfterFilter.length).toBe(6);
});
