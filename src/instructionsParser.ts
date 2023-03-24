import { Instruction } from "./types";

export const instructionsParser = (instructions: string) => {
  if (instructions.length > 100) {
    throw new Error("instructions must be less than 100 characters in length");
  }

  return [...instructions] as Instruction[];
};
