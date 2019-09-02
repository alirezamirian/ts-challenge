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
    return "One side cannot be greater than the sum of other sides";
  }
}
