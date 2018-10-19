import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Char } from './char';
import { Logo } from './logo';
import { env } from '../now';
import github from '../github.svg';
import linkedin from '../linkedin.svg';

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
        {env.name.split('').map(c => <Char>{c}</Char>)}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: 50,
            justifyContent: 'center'
          }}
        >
          <Logo logo={github} url="https://github.com/kidandcat" />
          <Logo logo={linkedin} url="https://www.linkedin.com/in/kidandcat/" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
