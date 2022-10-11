import React, { Component, useState } from "react";
import "../styles/App.css";
// import Balll from "./Balll";
// import Hole from "./Hole";
import StartButtonAndTimer from "./StartButtonAndTimer";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { time: 0, x: 0, y: 0 };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <StartButtonAndTimer />
      </>
    );
  }
}

export default Timer;
