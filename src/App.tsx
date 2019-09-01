import React, { useState } from "react";
import styled from "styled-components";
import { Form } from "./ts-react/Form";
import { FormInput } from "./ts-react/FormInput";

const Container = styled.div`
  max-width: 400px;
  margin: auto;
`;

const App: React.FC = () => {
  const [sides, setSides] = useState([0, 0, 0]);
  return (
    <Container>
      <Form>
        <PolygonSides sides={sides} onChange={setSides} />
      </Form>
    </Container>
  );
};

interface Props {
  sides: number[];
  onChange: (sides: number[]) => void;
}

function PolygonSides({ sides, onChange }: Props) {
  return (
    <>
      {sides.map((side, index) => {
        let handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          return onChange(
            sides.map((side, i) =>
              i === index ? event.target.valueAsNumber : side
            )
          );
        };

        const error = validatePolygonSide(
          side,
          sides.filter((_, i) => i !== index)
        );
        return (
          <FormInput
            key={index}
            label={`Side #${index + 1}`}
            value={side}
            hasError={!!error}
            helperTexts={error ? [error] : []}
            onChange={handleChange}
            inputProps={{ type: "number" }}
          />
        );
      })}
    </>
  );
}

function removeIndex<T>(arr: T[], index: number): T[] {
  return arr.filter((item, i) => i !== index);
}

function isValidPolygon(sides: number[]) {
  return sides.every(
    (side, sideIndex) =>
      !validatePolygonSide(side, removeIndex(sides, sideIndex))
  );
}

function validatePolygonSide(
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

export default App;
