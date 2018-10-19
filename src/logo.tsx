import * as React from 'react';
import { randomColor } from './constants';

export class Logo extends React.Component<{ logo: string; url: string }> {
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
      <img
        style={{
          width: 35,
          filter: 'invert(1)',
          margin: 5,
          cursor: 'pointer'
        }}
        src={this.props.logo}
        onClick={() => {
          window.open(this.props.url, '_blank');
        }}
      />
    );
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
