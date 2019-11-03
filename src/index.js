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

  const onMouseDown = useCallback(e => {
    kbdHeuristic.current = e.target.nodeName === "INPUT";
  }, []);
  const onFocus = useCallback(() => {
    setFocusVisible(kbdHeuristic.current);
  }, []);
  const onKeyDown = useCallback(e => {
    kbdHeuristic.current = kbdHeuristicKeys.includes(e.key);
  }, []);

  return (
    <Elem
      {...props}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      className={!focusVisible ? className : null}
    >
      {children}
    </Elem>
  );
}
