import { Container } from "unstated";

export default class NumberContainer extends Container {
  modes = ["is-dark", "is-danger", "is-warning", "is-info", "is-primary"];
  state = {
    number: false,
    bulmaMode: "is-dark"
  };

  generate = () => {
    const number = Math.round(Math.random() * 100);
    const bulmaMode = this.modes[Math.floor(Math.random() * this.modes.length)];
    this.setState({
      number,
      bulmaMode
    });
  };

  current = () => {
    console.log(this.state.number);
    return {
      number: this.state.number,
      bulmaMode: this.state.bulmaMode
    };
  };
}
