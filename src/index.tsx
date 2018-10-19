import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Char } from './char';
import { env } from '../now.json';

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          fontSize: 50,
          marginTop: '50vh',
          width: '100%',
          textAlign: 'center'
        }}
      >
        {JSON.stringify(process)}
        {env.name.split('').map(c => <Char>{c}</Char>)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
