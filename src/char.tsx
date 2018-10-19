import * as React from 'react';
import { randomColor } from './constants';

export class Char extends React.Component {
  int: number;
  state = {
    color: randomColor()
  };
  componentDidMount() {
    this.int = setInterval(() => {
      this.setState({
        color: randomColor()
      });
    }, rand(500, 1000));
  }
  componentWillUnmount() {
    clearInterval(this.int);
  }
  render() {
    return (
      <span
        style={{
          color: this.state.color
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
