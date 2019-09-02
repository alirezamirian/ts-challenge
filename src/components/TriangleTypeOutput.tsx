import React from "react";
import { TriangleType } from "../helpers/getTriangleType";

interface Props {
  type: TriangleType;
}
export function TriangleTypeOutput({ type }: Props) {
  switch (type) {
    case "Equilateral":
      return <span style={{ color: "#4CAF50" }}>Equilateral</span>;
    case "Isosceles":
      return <span style={{ color: "#1976D2" }}>Isosceles</span>;
    default:
      return <>{type}</>;
  }
}
