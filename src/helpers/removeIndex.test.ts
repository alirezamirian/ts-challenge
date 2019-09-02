import { removeIndex } from "./removeIndex";

describe("removeIndex", () => {
  it("should not mutate the array", () => {
    const input = [1, 2, 3];
    const output = removeIndex(input, 2);
    expect(output).not.toBe(input);
    expect(input).toEqual([1, 2, 3]);
  });

  it("should remove the item at index, only if index is valid", () => {
    expect(removeIndex([1, 2, 3], 2)).toEqual([1, 2]);
    expect(removeIndex([1, 2, 3], 0)).toEqual([2, 3]);
    expect(removeIndex([1, 2, 3], 10)).toEqual([1, 2, 3]);
    expect(removeIndex([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });
});
