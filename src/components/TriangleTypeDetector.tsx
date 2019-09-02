import React, { useState } from "react";
import { InlineForm } from "./InlineForm.styled";
import { PolygonSidesEditor } from "./PolygonSidesEditor";
import { TriangleTypeResult } from "./TriangleTypeResult";

interface Props {}
export function TriangleTypeDetector(props: Props) {
  const [sides, setSides] = useState([3, 3, 3]);
  return (
    <>
      <InlineForm>
        <div style={{ display: "flex" }}>
          <PolygonSidesEditor sides={sides} onChange={setSides} />
        </div>
      </InlineForm>
      <TriangleTypeResult
        firstSide={sides[0]}
        secondSide={sides[1]}
        thirdSide={sides[2]}
      />
    </>
  );
}
