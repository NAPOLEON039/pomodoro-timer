import React, { Component } from 'react';
import './App.css';

const moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workDuration: '2500',
      breakDuration: '500'
    }
  }
  render() {
    return (
      <div className="App container">
        <p className="sessions">Number of sessions</p>
        <p className="work-duration work">{moment('2500', 'mmss').format('mm:ss')}</p>
        <span class="break"><label for="break-duration">Select break duration</label>&nbsp;&nbsp;<select id="break-duration">
          <option>5 minutes</option>
          <option>10 minutes</option>
          <option>15 minutes</option>
          <option>20 minutes</option>
        </select></span>
      </div>
    );
  }
}

export default App;
