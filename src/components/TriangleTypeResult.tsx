import React from 'react';
import {getTriangleType} from '../helpers/getTriangleType';
import {Note} from '../tradeshift-react';
import {TriangleTypeOutput} from './TriangleTypeOutput';

interface Props {
  firstSide: number;
  secondSide: number;
  thirdSide: number;
}
export function TriangleTypeResult({
  firstSide,
  secondSide,
  thirdSide
}: Props) {
  let triangleType = getTriangleType(firstSide, secondSide, thirdSide);
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
