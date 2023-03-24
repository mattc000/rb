import { Coordinates, Orientation, Instruction } from "./types";

export const orientationValues: Orientation[] = ["N", "E", "S", "W"];

export const nextMoveCalculator = (
  coordinates: Coordinates,
  orientation: Orientation,
  instruction: Instruction
): { coordinates: Coordinates; orientation: Orientation } => {
  if (instruction === "L" || instruction === "R") {
    // no movement so just rotate
    const orientationMovement: Record<"L" | "R", number> = {
      L: -1,
      R: 1,
    };

    const nextIndex =
      orientationValues.indexOf(orientation) + orientationMovement[instruction];
    const nextOrientation = orientationValues[nextIndex];

    // rotated left past North so must now be west
    if (!nextOrientation && nextIndex < 0) {
      return {
        coordinates,
        orientation: "W",
      };
    }

    if (!nextOrientation && nextIndex > orientationValues.length - 1) {
      return {
        coordinates,
        orientation: "N",
      };
    }

    return {
      coordinates,
      orientation: nextOrientation,
    };
  }

  // map of possible movements
  const vectorMap: Record<Orientation, Coordinates> = {
    N: { x: 0, y: 1 },
    E: { x: 1, y: 0 },
    S: { x: 0, y: -1 },
    W: { x: -1, y: 0 },
  };

  return {
    coordinates: {
      x: coordinates.x + vectorMap[orientation].x,
      y: coordinates.y + vectorMap[orientation].y,
    },
    orientation,
  };
};
