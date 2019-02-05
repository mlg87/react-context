import * as React from 'react';
import './App.css';
import { Message, MessageButton } from './components';

class App extends React.Component {

  public render() {

    return (
      <div className="App">
        <div>Welcome to our extremely nice app</div>
        <div>
          <Message>
            <MessageButton content="Best Button Ever" messageContent="Psyche! that was not the best button ever" />
          </Message>
        </div>
      </div>
    );

  }

}

export default App;
