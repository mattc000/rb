import { program } from "./program";
import promptSync from "prompt-sync";

const prompt = promptSync();

const gridBoundsText = prompt(
  "Enter upper-right coordinates of the rectangular world:"
);

const coordinatesText = prompt("Enter initial coordinates of the robot:");
const instructionsText = prompt("Enter sequence of robot instructions:");

const programFunc = program(gridBoundsText, coordinatesText, instructionsText);
console.log("Output was: " + programFunc.run());

const runMultipleTimes = prompt("Run multiple times? (y/n)");

let running = runMultipleTimes === "y";
while (running) {
  const newCoordinatesText = prompt("Enter new coordinates of the robot:");
  const newInstructionsText = prompt(
    "Enter new sequence of robot instructions:"
  );

  console.log(
    "Output was: " +
      programFunc.runAgain(newCoordinatesText, newInstructionsText)
  );

  const runAgain = prompt("Continue? (y/n)");

  running = runAgain === "y";
}
