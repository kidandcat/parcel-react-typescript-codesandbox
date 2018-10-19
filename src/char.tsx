import * as React from 'react';

const colors = ['white', 'yellow', 'green', 'blue', 'red', 'pink'];

export class Char extends React.Component {
  state = {
    color: colors[rand(0, 5)]
  };
  componentDidMount() {
    this.int = setInterval(() => {
      this.setState({
        color: colors[rand(0, 5)]
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
