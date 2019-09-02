import { removeIndex } from "./removeIndex";
import { validatePolygonSide } from "./validatePolygonSide";

/**
 * Determines if numbers specified in {@param sides} can be sides of a polygon
 * @returns true if sides so.
 */
export function isValidPolygon(sides: number[]): boolean {
  return sides.every(
    (side, sideIndex) =>
      !validatePolygonSide(side, removeIndex(sides, sideIndex))
  );
}
