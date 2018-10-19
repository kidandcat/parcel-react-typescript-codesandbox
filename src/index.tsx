import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Char } from './char';

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          fontSize: 50,
          marginTop: '50%',
          width: '100%',
          textAlign: 'center'
        }}
      >
        {'Jairo Caro-Accino Viciana'.split('').map(c => <Char>{c}</Char>)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
