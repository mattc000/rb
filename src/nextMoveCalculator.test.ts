import { nextMoveCalculator } from "./nextMoveCalculator";

test("should calculate next position when moving forward north", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "N";
  const instruction = "F";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 2 },
    orientation: "N",
  });
});

test("should calculate next position when moving forward east", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "E";
  const instruction = "F";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 2, y: 1 },
    orientation: "E",
  });
});

test("should calculate next position when moving forward south", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "S";
  const instruction = "F";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 0 },
    orientation: "S",
  });
});

test("should calculate next position when moving forward west", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "W";
  const instruction = "F";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 0, y: 1 },
    orientation: "W",
  });
});

test("should rotate left when north to west", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "N";
  const instruction = "L";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "W",
  });
});

test("should rotate left when west to south", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "W";
  const instruction = "L";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "S",
  });
});

test("should rotate left when south to east", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "S";
  const instruction = "L";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "E",
  });
});

test("should rotate left when east to north", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "E";
  const instruction = "L";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "N",
  });
});

test("should rotate right when north to east", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "N";
  const instruction = "R";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "E",
  });
});

test("should rotate right when east to south", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "E";
  const instruction = "R";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "S",
  });
});

test("should rotate right when south to west", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "S";
  const instruction = "R";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "W",
  });
});

test("should rotate right when west to north", () => {
  const coordinates = { x: 1, y: 1 };
  const orientation = "W";
  const instruction = "R";

  expect(nextMoveCalculator(coordinates, orientation, instruction)).toEqual({
    coordinates: { x: 1, y: 1 },
    orientation: "N",
  });
});
