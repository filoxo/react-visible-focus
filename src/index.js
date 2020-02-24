import React, { useState, useRef, useCallback } from "react";

export default function VisibleFocus({
  children,
  className = "focus-not-visible",
  elem: Elem = "div",
  ...props
}) {
  const s = useState(false),
    focusVisible = s[0],
    setFocusVisible = s[1], // optimized to prevent using babel destructuring helper
    kbdHeuristic = useRef(true);

  const onMouseDown = useCallback(e => {
    kbdHeuristic.current = e.target.nodeName === "INPUT";
  }, []);
  const onFocus = useCallback(() => {
    setFocusVisible(kbdHeuristic.current);
  }, []);
  const onKeyDown = useCallback(e => {
    // Keyboard heuristic keys
    kbdHeuristic.current = [
      "Tab",
      "ArrowUp",
      "ArrowDown",
      "ArrowRight",
      "ArrowLeft"
    ].includes(e.key);
  }, []);

  return (
    <Elem
      {...props}
      onKeyDown={onKeyDown}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
      data-focus-visible={!focusVisible ? "false" : null}
    >
      {children}
    </Elem>
  );
}
