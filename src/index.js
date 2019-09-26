import React, { useState, useRef, useCallback } from "react";

const kbdHeuristicKeys = [
  "Tab",
  "ArrowUp",
  "ArrowDown",
  "ArrowRight",
  "ArrowLeft"
];

export default function VisibleFocus({
  children,
  className = "focus-not-visible",
  elem: Elem = "div",
  ...props
}) {
  const [focusVisible, setFocusVisible] = useState(false);
  const kbdHeuristic = useRef(false);
  const onKeyDown = useCallback(e => {
    kbdHeuristic.current = kbdHeuristicKeys.includes(e.key);
  }, []);
  const onFocus = useCallback(() => {
    setFocusVisible(kbdHeuristic.current);
  }, []);
  const onClick = useCallback(() => {
    setFocusVisible(false);
    kbdHeuristic.current = false;
  }, []);

  return (
    <Elem
      {...props}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onClick={onClick}
      className={!focusVisible ? className : null}
    >
      {children}
    </Elem>
  );
}
