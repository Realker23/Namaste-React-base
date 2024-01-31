import {sum} from "../sum";

test("this test is use to check the sum for 2 number", () => {
  const result = sum(1, 4);

  //assertion
  expect(result).toBe(5);
});
