import React, { Component } from 'react';
import './App.css';
import Button from './component/Button';
import withDropdown from './hoc/withDropdown';

const ButtonWithDropdown = withDropdown(Button);

function renderDropdown(ref) {
  return (
    <div ref={ref} className="Dropdown">
      Hi there, I&rsquo;m a dropdown!
      Click anywhere outside my boundaries and I&rsquo;ll be closed;
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <span className="DropdownContainer">
          <ButtonWithDropdown
            className="Button"
            content="Click me! ▼"
            render={renderDropdown}
          />
        </span>
      </div>
    );
  }
}

export default App;
