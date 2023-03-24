import { isValidMove } from "./isValidMove";

test("should return true is next move is within bounds of grid", () => {
  const result = isValidMove({ x: 0, y: 0 }, { x: 1, y: 1 });

  expect(result).toEqual(true);
});

test("should return false if x is less than lower bounds of grid", () => {
  const result = isValidMove({ x: -1, y: 0 }, { x: 1, y: 1 });

  expect(result).toEqual(false);
});

test("should return false if y is less than lower bounds of grid", () => {
  const result = isValidMove({ x: 0, y: -1 }, { x: 1, y: 1 });

  expect(result).toEqual(false);
});

test("should return false if x is greater than upper bounds of grid", () => {
  const result = isValidMove({ x: 2, y: 0 }, { x: 1, y: 1 });

  expect(result).toEqual(false);
});

test("should return false if y is greater than upper bounds of grid", () => {
  const result = isValidMove({ x: 0, y: 2 }, { x: 1, y: 1 });

  expect(result).toEqual(false);
});
