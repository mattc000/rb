import { Coordinates } from "./types";

export const isValidMove = (
  nextMove: Coordinates,
  upperBounds: Coordinates
) => {
  const lowerBounds: Coordinates = { x: 0, y: 0 };

  if (nextMove.x < lowerBounds.x) {
    return false;
  }

  if (nextMove.y < lowerBounds.y) {
    return false;
  }

  if (nextMove.x > upperBounds.x) {
    return false;
  }

  if (nextMove.y > upperBounds.y) {
    return false;
  }

  return true;
};
