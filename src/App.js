import React from "react";
import { Subscribe } from "unstated";
import classnames from "classnames";
import NumberContainer from "./containers/NumberContainer";

const App = () => (
  <Subscribe to={[NumberContainer]}>
    {number => {
      const current = number.current();
      const classes = classnames([
        "hero",
        "is-medium",
        "container",
        "has-text-centered",
        current.bulmaMode
      ]);
      return (
        <>
          <section className={classes}>
            <div class="hero-body">
              <p class="title">
                <b>{current.number || "?"}</b>
              </p>
            </div>
          </section>
          <br />
          <section className="container has-text-centered">
            <button
              class="button is-large is-primary"
              onClick={number.generate}
            >
              Random Number
            </button>
          </section>
        </>
      );
    }}
  </Subscribe>
);

export default App;
