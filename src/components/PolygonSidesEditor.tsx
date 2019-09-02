import React from "react";
import { validatePolygonSide } from "../helpers/validatePolygonSide";
import { FormInput } from "../tradeshift-react";
import numberToWord from "number-to-words";

interface Props {
  /**
   * length of sides
   */
  sides: number[];
  /**
   * change handler for length of sides.
   */
  onChange: (sides: number[]) => void;
}

/**
 * A controlled component for editing the length of polygon's sides.
 * @param sides
 * @param onChange
 * @constructor
 */
export function PolygonSidesEditor({ sides, onChange }: Props) {
  return (
    <>
      {sides.map((side, index) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        const sideName = numberToWord.toWordsOrdinal(index + 1) + " side";
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
