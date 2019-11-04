
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(document);
import React, { useState, useRef, useCallback } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var kbdHeuristicKeys = ["Tab", "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft"];
function VisibleFocus(_ref) {
  var children = _ref.children,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "focus-not-visible" : _ref$className,
      _ref$elem = _ref.elem,
      Elem = _ref$elem === void 0 ? "div" : _ref$elem,
      props = _objectWithoutProperties(_ref, ["children", "className", "elem"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      focusVisible = _useState2[0],
      setFocusVisible = _useState2[1];

  var kbdHeuristic = useRef(true);
  var onMouseDown = useCallback(function (e) {
    kbdHeuristic.current = e.target.nodeName === "INPUT";
  }, []);
  var onFocus = useCallback(function () {
    setFocusVisible(kbdHeuristic.current);
  }, []);
  var onKeyDown = useCallback(function (e) {
    kbdHeuristic.current = kbdHeuristicKeys.includes(e.key);
  }, []);
  return React.createElement(Elem, _extends({}, props, {
    onKeyDown: onKeyDown,
    onFocus: onFocus,
    onMouseDown: onMouseDown,
    className: !focusVisible ? className : null
  }), children);
}

export default VisibleFocus;
