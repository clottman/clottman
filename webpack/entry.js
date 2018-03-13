import React, { Component } from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';

import Search from './search.js';
let search = new Search();

class App extends Component {
  render() {
    return (
      <Hello />
    )
  }
}

// render(<App />, document.getElementById('root'));
