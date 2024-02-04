import {render, screen} from "@testing-library/react";
import ResCard, {withFasterLable} from "../ResCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";

test("Should render ResCard component", () => {
  //render
  render(<ResCard resdata={MOCK_DATA} />);

  //querying
  const resCardName = screen.getByText("Chaayos Chai+Snacks=Relax");

  //assertion
  expect(resCardName).toBeInTheDocument();
});

test("Should render faster lable in ResCard component", () => {
  const WithFasterLableComponent = withFasterLable(ResCard);
  //render
  render(<WithFasterLableComponent resdata={MOCK_DATA} />);

  //querying
  const fasterResCardName = screen.getByText("Faster");

  //assertion
  expect(fasterResCardName).toBeInTheDocument();
});
