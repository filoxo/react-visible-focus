# react-visible-focus

This component attempts to emulate the [:focus-visible pseudoselector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) behavior using similar heuristics but does not follow the spec completely

## Installation

```sh
yarn add -S react-visible-focus
# or
npm i -S react-visible-focus
```

## Import

```js
import FocusVisible from 'react-visible-focus';

export default function YourComponent(props) {
  return (
    <FocusVisible>{/* more components */}</FocusVisible>
  )
}
```

or via CDN

```html
<script src="/react-visible-focus.umd.js"></script>

<script>
  const App = () => React.createElement(
    ReactVisibleFocus,
    null,
    React.createElement("p", null, "Your app goes here")  
  )
  ReactDOM.render(App(), document.querySelector("#root"))
</script>
```

## CSS

Provide the following CSS globally. 

```css
.focus-not-visible * {
  outline: none;
}
```

## Props

| prop name | default value | description |
|---|---|---|
| className | "focus-not-visible" | the class name to be applied when focus should not be visible |
| elem | "div" | the wrapping element type; should always be a React element that renders an HTML node event handlers are bound to this |
| ...rest | | any additional props are forwarded to the wrapper element |

## Development 

Run `yarn start` to run the example page with livereloading enabled.

Run `yarn build` to create a production build.