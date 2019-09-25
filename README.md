# react-visible-focus

This component attempts to emulate the [:focus-visible pseudoselector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) behavior, though it does not follow the spec completely, using similar heuristics. 

## Installation

```bash
yarn add -S react-visible-focus
# or
npm i -S react-visible-focus
```

## Import

```js
import FocusVisible from 'react-visible-focus';

export default function YourComponent(props) {
  // your component code
  return (
    <FocusVisible>{/* more components */}</FocusVisible>
  )
}
```

## Props

*none* for now.


