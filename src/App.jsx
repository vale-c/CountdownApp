import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'September 12 2018',
      newDeadline: ''
    }
  }

  changeDeadline() {
    console.log('state', this.state);
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return <div className="App container">
        <div className="wow zoomInUp countDownTitle">
          Countdown to {this.state.deadline}
        </div>

        <Clock deadline={this.state.deadline} />

        <div className="formContainer">
          <Form>
            <FormControl className="wow bounceInUp deadlineInput" placeholder="Enter a new date here..."
            onChange={event => this.setState({ newDeadline: event.target.value } )} />
          </Form>
          <Button className="wow rubberBand submitBtn" onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </div>
      </div>;
  }
}

export default App;
