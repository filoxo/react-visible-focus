import React, { useState } from "react";

export default function VisibleFocus({
  children,
  className = "focus-not-visible",
  elem: Elem = "div",
  ...props
}) {
  const [focusVisible, setFocusVisible] = useState(false);
  const onKeyDown = useCallback(() => {
    setFocusVisible(true);
  }, []);
  const onClick = useCallback(() => {
    setFocusVisible(false);
  }, []);

  return (
    <Elem
      {...props}
      onKeyDown={onKeyDown}
      onClick={onClick}
      className={!focusVisible ? className : null}
    >
      {children}
    </Elem>
  );
}
