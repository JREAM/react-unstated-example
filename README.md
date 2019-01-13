# React + Unstated (State Management)

Unstated uses React Context behind the scenes. It's a very simple library compared
to Redux and even simpler than Mobx. Im not sure if its too simple or not.

- You Only have **3 Components**:
  - `Provider` - Wraps around `src/index.js` as `<Provider><App /></Provider>`
  - `Subscribe` - Wraps around something to listen to (one or more), `<Subscribe to={[ContainerName]}>`
  - `Container`- These are your "store(s)", you also use `setState()` with the container component.

## Example

`./src/index.js` would have:

```js
import { Provider } from "unstated";

<Provider>
  <App />
</Provider>;
```

You'd create a "store" for something, perhaps in: `./src/containers/UserContainer.js`

```js
import { Container } from "unstated";
// ...
```

Finally, in `./src/App.js` (Or another Higher Order Component _[HOC]_) you would have:

```js
import { Subscribe } from "unstated";
```

---

Open Source: MIT

Jesse Boyer <[JREAM](http://jream.com)>
