import { getTriangleType } from "./getTriangleType";

describe("getTriangleTypes", () => {
  it("should return null when input is invalid", () => {
    expect(getTriangleType(1, 1, 3)).toBe(null);
    expect(getTriangleType(0, 0, 0)).toBe(null);
    expect(getTriangleType(-1, 2, 3)).toBe(null);
  });

  it('should return "Equilateral" when all sides are equal', () => {
    expect(getTriangleType(3, 3, 3)).toBe("Equilateral");
  });

  it('should return "Isosceles" when only two sides are equal', () => {
    expect(getTriangleType(2, 2, 3)).toBe("Isosceles");
  });

  it('should return "Scalene" when three sides have different lengths', () => {
    expect(getTriangleType(2, 3, 4)).toBe("Scalene");
  });
});
