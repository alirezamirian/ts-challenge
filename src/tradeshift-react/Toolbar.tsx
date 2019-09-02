import React, {useLayoutEffect, useRef} from 'react';

interface Props {
  title?: string;
}

export function Toolbar({ title }: Props) {
  const toolbarRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (title && toolbarRef.current && typeof ts !== 'undefined') {
      ts.ui.get(toolbarRef.current).title(title);
    }
  }, [title]);

  return <header ref={toolbarRef} data-ts="ToolBar" />;
}
