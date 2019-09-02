import { fireEvent, render } from "@testing-library/react";
import React, { useState } from "react";
import { PolygonSidesEditor } from "./PolygonSidesEditor";

describe("PolygonSidesEditor", function() {
  it("should render", () => {
    render(<PolygonSidesEditor sides={[1, 2, 3]} onChange={() => {}} />);
  });

  it("should render inputs for each side of the polygon", () => {
    const { baseElement } = render(
      <PolygonSidesEditor sides={[1, 2, 3]} onChange={() => {}} />
    );
    expect(baseElement.querySelectorAll("input").length).toBe(3);
  });

  it("should call on change when input values change", () => {
    const changeHandler = jest.fn().mockImplementation(() => {});

    const { getByDisplayValue } = render(
      <PolygonSidesEditor sides={[1, 2, 3]} onChange={changeHandler} />
    );

    fireEvent.change(getByDisplayValue("1"), {
      target: { valueAsNumber: 10, value: "10" }
    } as any);

    expect(changeHandler).toBeCalledWith([10, 2, 3]);
  });

  it("should show an error message when the value of an input is invalid", () => {
    const { getByDisplayValue, getByText } = render(
      <StateFullPolygonSidesEditor initialValues={[1, 2, 3]} />
    );

    fireEvent.change(getByDisplayValue("1"), {
      target: { valueAsNumber: 0, value: "0" }
    } as any);
    expect(getByText("must be greater than zero", { exact: false })).not.toBeNull();

    fireEvent.change(getByDisplayValue("3"), {
      target: { valueAsNumber: 10, value: "10" }
    } as any);

    expect(getByText("cannot be greater", { exact: false })).not.toBeNull();


    fireEvent.change(getByDisplayValue("2"), {
      target: { valueAsNumber: '', value: "" }
    } as any);
    expect(getByText("required", { exact: false })).not.toBeNull();

  });
});

function StateFullPolygonSidesEditor({
  initialValues
}: {
  initialValues: number[];
}) {
  const [sides, setSides] = useState(initialValues);

  return <PolygonSidesEditor sides={sides} onChange={setSides} />;
}
