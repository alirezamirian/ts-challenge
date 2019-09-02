/**
 * Returns a new array in which the element at {@param index} is removed.
 * @param array
 * @param index
 */
export function removeIndex<T>(array: T[], index: number): T[] {
  return array.filter((item, i) => i !== index);
}
