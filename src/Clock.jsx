import React, { Component } from 'react';
import './App.css';
import WOW from "wowjs";
import { Grid, Col, Row } from 'react-bootstrap';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    //check component and update the time every second
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    //init WOW JS animations
    const wow = new WOW.WOW();
    wow.init();
  }

  leading0(num) {
    //if number is less than 10 add a leading 0
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, minutes, seconds});
  }

  render() {
    return <Grid>
        <Row className="myClock show-grid">
          <Col sm={6} md={3} className="clockDays">
            {this.state.days} days
          </Col>
          <Col sm={6} md={3} className="clockHours">
            {this.state.hours} hours
          </Col>
          <Col sm={6} md={3} className="clockMinutes">
            {this.state.minutes} minutes
          </Col>
          <Col sm={6} md={3} className="clockSeconds">
            {this.state.seconds} seconds
          </Col>
        </Row>
      </Grid>;
  }
}

export default Clock;
