type Coordinates = {
  x: number;
  y: number;
};
type Orientation = "N" | "E" | "S" | "W";
type Instruction = "L" | "R" | "F";

export const nextMoveCalculator = (
  coordinates: Coordinates,
  orientation: Orientation,
  instruction: Instruction
) => {
  if (instruction === "L" || instruction === "R") {
    const orientationMovement: Record<"L" | "R", number> = {
      L: -1,
      R: 1,
    };

    const orientationValues: Orientation[] = ["N", "E", "S", "W"];
    const nextIndex =
      orientationValues.indexOf(orientation) + orientationMovement[instruction];
    const nextOrientation = orientationValues[nextIndex];

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