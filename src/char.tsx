import * as React from "react";
import { randomColor } from "./constants";

export class Char extends React.Component {
  int: number;
  state = {
    color: randomColor(),
    blur: 80
  };
  componentDidMount() {
    this.int = setInterval(() => {
      this.setState(state => ({
        color: state.blur != 0 ? randomColor() : "#afafaf",
        blur: state.blur != 0 ? state.blur - 2 : state.blur
      }));
    }, rand(30, 60));
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
