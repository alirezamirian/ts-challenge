import React, { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  children: ReactNode;
}
export function Form({ children, ...props }: Props) {
  return (
    <form data-ts="Form" {...props}>
      {children}
    </form>
  );
}
