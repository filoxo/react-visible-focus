# react-visible-focus

![](https://img.badgesize.io/https://unpkg.com/react-visible-focus/dist/react-visible-focus.umd.js?compression=gzip&label=umd%20gzipped)
![](https://img.badgesize.io/https://unpkg.com/react-visible-focus/dist/react-visible-focus.esm.js?compression=gzip&label=esm%20gzipped)

This component attempts to emulate the [:focus-visible pseudoselector](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) behavior using similar heuristics but does not follow the spec completely

See it in action at https://filoxo.github.io/react-visible-focus/

## Installation

```sh
yarn add react-visible-focus
# or
npm i react-visible-focus
```

## Import

```js
import React from 'react'
import FocusVisible from 'react-visible-focus'

export default function YourComponent(props) {
  return (
    <FocusVisible>{/* more components */}</FocusVisible>
  )
}
```

or via CDN

```html
<main id="root"></main>
<script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
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
[data-focus-visible="false"] * {
  outline: none;
}
```

### styled-components example

CSS-in-JS options, such as [`styled-components`](https://styled-components.com/), are easily supported through the `elem` prop.

```js
import React from 'react'
import styled from 'styled-components'
import FocusVisible from 'react-visible-focus'

const MyContainer = styled.div`
  // Other styles

  &[data-focus-visible="false"] * {
    outline: none;
  }
`
// usage
<FocusVisible elem={MyContainer}>{/*...*/}</FocusVisible>
```

## Props

| prop name | default value | description |
|---|---|---|
| elem | "div" | the wrapping element type; should always be a React element that renders an HTML node as event handlers are bound to this |
| ...rest | | any additional props are forwarded to the wrapper element |

## Development 

Run `yarn start` to run [the example page](http://localhost:10001/) with livereloading enabled.

Run `yarn build` to create a production build.

Run `yarn test:watch` to run tests locally with livereload enabled to test changes.
