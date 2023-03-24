import { orientationValues } from "./nextMoveCalculator";
import { Coordinates, Orientation } from "./types";

export const getRobotCoordinatesFromText = (text: string): Coordinates => {
  const textSplits = text.split(" ");

  const coordinates = {
    x: parseInt(textSplits[0]),
    y: parseInt(textSplits[1]),
  };

  if (coordinates.x > 50 || coordinates.y > 50) {
    throw new Error("Coordinate cannot be greater than 50");
  }

  return coordinates;
};

export const getRobotPositionFromText = (
  text: string
): {
  coordinates: Coordinates;
  orientation: Orientation;
} => {
  const textSplits = text.split(" ");

  if (!orientationValues.includes(textSplits[2] as Orientation)) {
    throw new Error();
  }

  return {
    coordinates: getRobotCoordinatesFromText(
      `${textSplits[0]} ${textSplits[1]}`
    ),
    orientation: textSplits[2] as Orientation,
  };
};

export const parsePositionAsString = (
  coordinates: Coordinates,
  orientation: Orientation
) => {
  return `${coordinates.x} ${coordinates.y} ${orientation}`;
};
