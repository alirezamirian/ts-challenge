import { isValidPolygon } from "./isValidPolygone";

export type TriangleType = "Equilateral" | "Isosceles" | "Scalene";

/**
 * Given the lengths of a triangle's sides, returns the type of the triangle. If these side lengths can't shape a
 * triangle, returns null
 * @param firstSide
 * @param secondSide
 * @param thirdSide
 */
export function getTriangleType(
  firstSide: number,
  secondSide: number,
  thirdSide: number
): TriangleType | null {
  if (!isValidPolygon([firstSide, secondSide, thirdSide])) {
    return null;
  }
  let e1 = firstSide === secondSide;
  let e2 = secondSide === thirdSide;
  if (e1 || e2) {
    return e1 && e2 ? "Equilateral" : "Isosceles";
  }
  return "Scalene";
}
