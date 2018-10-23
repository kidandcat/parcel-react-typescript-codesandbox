import * as React from "react";
import { randomColor, lowRandom } from "./constants";

export class Char extends React.Component {
  int: number;
  state = {
    color: randomColor(),
    blur: 80,
    fastBlink: false
  };
  componentDidMount() {
    this.int = setInterval(() => {
      this.setState(state => ({
        color:
          state.blur > 3
            ? randomColor()
            : this.state.fastBlink
              ? "white"
              : "#afafaf",
        blur: state.blur > 3 ? state.blur - 5 : this.state.fastBlink ? 0 : 3
      }));
      if (lowRandom() || this.state.fastBlink) {
        this.setState(state => ({
          fastBlink: !state.fastBlink
        }));
      }
    }, rand(50, 150));
  }
  componentWillUnmount() {
    clearInterval(this.int);
  }
  render() {
    return (
      <span
        style={{
          color: "rgba(0,0,0,0)",
          textShadow: `0 0 ${this.state.blur}px ${this.state.color}`,
          fontSize: "2em"
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
