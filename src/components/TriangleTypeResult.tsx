import React from 'react';
import {getTriangleType} from '../helpers/getTriangleType';
import {Note} from '../tradeshift-react';
import {TriangleTypeOutput} from './TriangleTypeOutput';

interface Props {
  firstSide: number;
  secondSide: number;
  thirdSide: number;
}

/**
 * Given the length of triangle's three sides, displays triangle type or shows an error message if it's not possible
 * to have a triangle with these numbers as the length of the sides.
 */
export function TriangleTypeResult({
  firstSide,
  secondSide,
  thirdSide
}: Props) {
  const triangleType = getTriangleType(firstSide, secondSide, thirdSide);
  return (
    <>
      {triangleType ? (
        <div>
          <label>
            Triangle type: &nbsp;
            <TriangleTypeOutput type={triangleType} />
          </label>
        </div>
      ) : (
        <Note icon={"error"}>Not a valid triangle</Note>
      )}
    </>
  );
}
