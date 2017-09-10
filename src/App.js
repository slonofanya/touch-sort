import React, { Component } from 'react';
import Sort from './modules/Sort.js';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Test sort algoritmes</h2>
        </div>

        <Sort/>
      </div>
    );
  }
}

