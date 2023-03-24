import {
  getRobotCoordinatesFromText,
  getRobotPositionFromText,
  parsePositionAsString,
} from "./textParsers";

describe("getRobotCoordinatesFromText", () => {
  it("should return coordinates for text `1 1`", () => {
    expect(getRobotCoordinatesFromText("1 1")).toEqual({ x: 1, y: 1 });
  });

  it("should throw error if x is greater than 50", () => {
    expect(() => getRobotCoordinatesFromText("51 0")).toThrowError(
      "Coordinate cannot be greater than 50"
    );
  });

  it("should throw error if y is greater than 50", () => {
    expect(() => getRobotCoordinatesFromText("0 51")).toThrowError(
      "Coordinate cannot be greater than 50"
    );
  });
});

describe("getRobotPositionFromText", () => {
  it("should return position for text `1 1 N`", () => {
    expect(getRobotPositionFromText("1 1 N")).toEqual({
      coordinates: { x: 1, y: 1 },
      orientation: "N",
    });
  });

  it("should throw orientation is not valid", () => {
    expect(() => getRobotPositionFromText("1 1 X")).toThrowError();
  });
});

describe("getRobotPositionFromText", () => {
  it("should return text `1 1 N` for position", () => {
    expect(parsePositionAsString({ x: 1, y: 1 }, "N")).toEqual("1 1 N");
  });
});
