import { ReactNode } from "react";
import React from "react";

interface Props {
  children: ReactNode;
  icon?: string;
}
export function Note({ icon, children }: Props) {
  return (
    (children && (
      <div data-ts="Panel" style={{ height: "auto", overflow: "auto" }}>
        <div data-ts="Note">
          {icon && <i className={`ts-icon-${icon}`} />}
          <p>{children}</p>
        </div>
      </div>
    )) ||
    null
  );
}
