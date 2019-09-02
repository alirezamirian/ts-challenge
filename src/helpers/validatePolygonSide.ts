/**
 * Validates the length of one side of a polygon. Checks if it's a positive number and it's not greater than the
 * sum of the length of the other sides of the polygon.
 * @returns validation error message, if invalid. Otherwise, undefined.
 */
export function validatePolygonSide(
  side: number,
  otherSides: number[]
): string | undefined {
  if (!Number.isFinite(side)) {
    return "Side value is required";
  }
  if (side <= 0) {
    return "Each side must be greater than zero";
  }
  if (side >= otherSides.reduce((soFar, someSide) => soFar + someSide, 0)) {
    return "One side cannot be greater than the sum of the other sides";
  }
}
