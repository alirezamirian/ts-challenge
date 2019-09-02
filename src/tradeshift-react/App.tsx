import React, {ReactNode} from 'react';

interface Props {
  children?: ReactNode;
}

export function App({ children }: Props) {
  return (
    <div data-ts="App">
      <div data-ts="Main">
        <div data-ts="Content">{children}</div>
      </div>
    </div>
  );
}
