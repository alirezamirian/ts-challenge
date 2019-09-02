import React from "react";
import { validatePolygonSide } from "../helpers/validatePolygonSide";
import { FormInput } from '../tradeshift-react';
import numberToWord from "number-to-words";

interface Props {
  sides: number[];
  onChange: (sides: number[]) => void;
}

export function PolygonSidesEditor({ sides, onChange }: Props) {
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
        let sideName = numberToWord.toWordsOrdinal(index + 1) + " side";
        return (
          <FormInput
            key={index}
            label={`${sideName}`}
            value={side}
            hasError={!!error}
            helperTexts={error ? [error] : []}
            onChange={handleChange}
            inputProps={{
              type: "number",
              placeholder: `Length of ${sideName}`
            }}
          />
        );
      })}
    </>
  );
}
