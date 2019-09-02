import React, { useState } from "react";
import { InlineForm } from "./InlineForm.styled";
import { PolygonSidesEditor } from "./PolygonSidesEditor";
import { TriangleTypeResult } from "./TriangleTypeResult";

/**
 * Provides UI for getting the lengths of triangle's three sides and then shows the type of the triangle
 */
export function TriangleTypeDetector() {
  const [sides, setSides] = useState([3, 3, 3]);
  return (
    <>
      <InlineForm>
        <PolygonSidesEditor sides={sides} onChange={setSides} />
      </InlineForm>
      <TriangleTypeResult
        firstSide={sides[0]}
        secondSide={sides[1]}
        thirdSide={sides[2]}
      />
    </>
  );
}
