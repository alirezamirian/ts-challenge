import React, { HTMLProps } from "react";

interface Props {
  hasError?: boolean;
  helperTexts?: string[];
  value?: HTMLProps<HTMLInputElement>["value"];
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputProps?: Omit<HTMLProps<HTMLInputElement>, "value" | "onChange">;
}

export function FormInput({
  hasError,
  onChange,
  helperTexts = [],
  label,
  value,
  inputProps = {}
}: Props) {
  return (
    <fieldset>
      <label className={hasError ? "ts-error" : ""}>
        <span>{label}</span>
        <input value={value} onChange={onChange} type="text" {...inputProps} />
      </label>
      <dl className={hasError ? "ts-errors" : "ts-info"}>
        {helperTexts.map((helperText, index) => (
          <dd key={index}>{helperText}</dd>
        ))}
      </dl>
    </fieldset>
  );
}
