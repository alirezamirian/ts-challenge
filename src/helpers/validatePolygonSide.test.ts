import { validatePolygonSide } from "./validatePolygonSide";

describe("validatePolygonSide", () => {
  it("should return an error when the input is negative", () => {
    expect(validatePolygonSide(-1, [])).not.toBeUndefined();
  });
  it("should return an error when the input is zero", () => {
    expect(validatePolygonSide(0, [])).not.toBeUndefined();
  });
  it("should return an error when the input is greater than the sum of the other sides", () => {
    // more info: https://en.wikipedia.org/wiki/Triangle_inequality#Generalization_to_any_polygon
    expect(validatePolygonSide(5, [2, 3])).not.toBeUndefined();
    expect(validatePolygonSide(8, [2, 3])).not.toBeUndefined();
    expect(validatePolygonSide(4, [2, 3])).toBeUndefined();
  });

  it("should return undefined when there is no error", () => {
    expect(validatePolygonSide(1, [2, 3])).toBeUndefined();
  });
});
