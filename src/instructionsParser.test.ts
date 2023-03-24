import { instructionsParser } from "./instructionsParser";

test("should return instructions as array", () => {
  const result = instructionsParser("RFRFRFRF");

  expect(result).toEqual(["R", "F", "R", "F", "R", "F", "R", "F"]);
});

test("should throw error if instructions are longer than 100 characters in length", () => {
  expect(() =>
    instructionsParser(
      Array.from({ length: 101 })
        .map(() => "F")
        .join()
    )
  ).toThrowError("instructions must be less than 100 characters in length");
});
