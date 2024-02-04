import {fireEvent, render, screen} from "@testing-library/react";
import ResMenu from "../ResMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/ResMenuMock.json";
import {act} from "react-dom/test-utils";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("should render ResMenu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />

          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("RICE BOWLZ (7)");
  const cartItemBefore = screen.getByText("Cart (0)");
  expect(cartItemBefore).toBeInTheDocument();
  const accordionItem = screen.getByText("Chicken Chizza");
  fireEvent.click(accordionHeader);
  const accordionHeaderItem = screen.getByText("Plain Rice Bowlz");
  expect(accordionHeaderItem).toBeInTheDocument();

  const addItemsBeforeAdd = screen.getAllByTestId("addItem");

  expect(addItemsBeforeAdd.length).toBe(7);

  fireEvent.click(addItemsBeforeAdd[0]);

  const cartItemAfter = screen.getByText("Cart (1)");
  expect(cartItemAfter).toBeInTheDocument();

  fireEvent.click(cartItemAfter);
  const addItemAfterAdd = screen.getAllByTestId("addItem");
  expect(addItemAfterAdd.length).toBe(8);
});
