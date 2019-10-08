import React, { Component } from 'react';
import './App.css';
import { Icon, Button } from 'flwww';
import moment from 'moment';

// const moment = require('moment');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workDuration: moment.duration({
        seconds: 0,
        minutes: 25,
        hours: 0
      }),
      breakDuration: moment.duration(5, 'm'),
      status: 'work'
    }
    this.workTimer = null;
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
  }

  startTimer(){
    console.log('Hello');
    // console.log(time.get('hours') === 0 ? `${time.get('minutes')}:` + (time.get('seconds') === 0 ? time.get('seconds') + '0': time.get('seconds')) : `${time.get('hours')}:${time.get('minutes')}:` + (time.get('seconds') === 0 ? time.get('seconds') + '0': time.get('seconds')));
     this.workTimer = setInterval(() => {
       let time = this.state.workDuration;
      time.subtract(1, 's');
      this.setState(time);
    }, 1000)
  }

  stopTimer() {
    console.log("Hey");
    clearInterval(this.workTimer);
  }

  render() {
    return (
      <div className="App container">
        <p className="sessions">Number of sessions</p>
        <div className = "timer">
          <p className="timer-display">{this.state.workDuration.get('hours') === 0 ? `${this.state.workDuration.get('minutes')}:` + (this.state.workDuration.get('seconds') === 0 ? this.state.workDuration.get('seconds') + '0': this.state.workDuration.get('seconds')) : `${this.state.workDuration.get('hours')}:${this.state.workDuration.get('minutes')}:` + (this.state.workDuration.get('seconds') === 0 ? this.state.workDuration.get('seconds') + '0': this.state.workDuration.get('seconds'))}</p>
          <div className="control-buttons">
            <Button type="primary" outlined onClick = {this.startTimer}><Icon type="play" size="30px" /></Button>&nbsp;&nbsp;
            <Button type="danger" outlined onClick = {this.stopTimer}><Icon type="stopCircle" size="30px" /></Button>
          </div>
        </div>
        {/* <span classname="play-button"><Icon type="play" size="5px" /></span> */}
        <span className="break"><label for="break-duration">Select break duration</label>&nbsp;&nbsp;<select id="break-duration">
          <option>5 minutes</option>
          <option>10 minutes</option>
          <option>15 minutes</option>
          <option>20 minutes</option>
        </select></span>
        <span className="work-duration"><label for="work-duration">Select a duration you'd like to work for</label>&nbsp;&nbsp;<select id="work-duration">
          <option>25 minutes</option>
          <option>30 minutes</option>
          <option>45 minutes</option>
          <option>1 hour</option>
          <option>2 hours hour</option>
        </select></span>
      </div>
    );
  }
}

export default App;
