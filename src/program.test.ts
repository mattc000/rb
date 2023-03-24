import { program } from "./program";

describe("with grid bounds `5 3`", () => {
  const gridBounds = "5 3";

  it("should return output `1 1 E` when processing instructions `RFRFRFRF` with initial position `1 1 E`", () => {
    const initialPosition = "1 1 E";
    const instructions = "RFRFRFRF";

    expect(program(gridBounds, initialPosition, instructions).run()).toEqual(
      "1 1 E"
    );
  });

  it("should return output `3 3 N LOST` when processing instructions `FRRFLLFFRRFLL` with initial position `3 2 N``", () => {
    const initialPosition = "3 2 N";
    const instructions = "FRRFLLFFRRFLL";

    expect(program(gridBounds, initialPosition, instructions).run()).toEqual(
      "3 3 N LOST"
    );
  });

  it("should return leave scent at `3 2 N` when a robot is lost`", () => {
    const initialPosition = "3 2 N";
    const instructions = "FRRFLLFFRRFLL";

    const programFunc = program(gridBounds, initialPosition, instructions);
    programFunc.run();

    expect(programFunc.getScents()).toEqual([
      { coordinates: { x: 3, y: 3 }, orientation: "N" },
    ]);
  });

  describe("with program run previously", () => {
    let previouslyRunProgram: ReturnType<typeof program>;

    beforeEach(() => {
      previouslyRunProgram = program(gridBounds, "3 2 N", "FRRFLLFFRRFLL");
      previouslyRunProgram.run();
    });

    it("should return output `0 3 W` when processing instructions `LLFFFLFLFL` with initial position `0 3 W``", () => {
      const initialPosition = "0 3 W";
      const instructions = "LLFFFLFLFL";

      expect(
        previouslyRunProgram.runAgain(initialPosition, instructions)
      ).toEqual("2 3 S");
    });
  });
});
