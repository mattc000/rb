import { instructionsParser } from "./instructionsParser";
import { isValidMove } from "./isValidMove";
import { nextMoveCalculator } from "./nextMoveCalculator";
import { Coordinates, Orientation } from "./types";
import {
  getRobotCoordinatesFromText,
  getRobotPositionFromText,
  parsePositionAsString,
} from "./textParsers";

export const program = (
  gridBoundsText: string,
  coordinatesText: string,
  instructionsText: string
) => {
  // state stored between runs
  const scents: Array<{
    coordinates: Coordinates;
    orientation: Orientation;
  }> = [];

  // function allows program to be run again with previous state
  const runAgain = (
    newCoordinatesText: string,
    newInstructionsText: string
  ) => {
    const gridBounds = getRobotCoordinatesFromText(gridBoundsText);
    const initalRobotPosition = getRobotPositionFromText(newCoordinatesText);
    const instructions = instructionsParser(newInstructionsText);

    let lastRobotPosition = initalRobotPosition;
    for (const instruction of instructions) {
      const nextMove = nextMoveCalculator(
        lastRobotPosition.coordinates,
        lastRobotPosition.orientation,
        instruction
      );

      if (!isValidMove(nextMove.coordinates, gridBounds)) {
        const isScentAtThisLocation = scents.some(
          (scent) =>
            scent.coordinates.x === lastRobotPosition.coordinates.x &&
            scent.coordinates.y === lastRobotPosition.coordinates.y &&
            scent.orientation === lastRobotPosition.orientation
        );

        if (!isScentAtThisLocation) {
          // new scent that hasn't already been added
          scents.push(lastRobotPosition);

          return (
            parsePositionAsString(
              lastRobotPosition.coordinates,
              lastRobotPosition.orientation
            ) + " LOST"
          );
        }
      } else {
        // only make a move if there hasn't been an invalid move with scent at location
        // so move can be skipped
        lastRobotPosition = nextMove;
      }
    }

    return parsePositionAsString(
      lastRobotPosition.coordinates,
      lastRobotPosition.orientation
    );
  };

  return {
    run: () => runAgain(coordinatesText, instructionsText),
    runAgain,
    getScents: () => scents,
  };
};
