import React, { useEffect, useState } from "react";
import "../styles/App.css";
import Balll from "./Balll";
import Hole from "./Hole";
const StartButtonAndTimer = () => {
  const [timer, setTimer] = useState("");
  const [positionOfBall, setPositionOfBall] = useState({
    left: "0px",
    top: "0px",
  });
  const [stopTimer, setStopTimer] = useState(false);

  const holePosition = {
    left: "250px",
    top: "250px",
  };
  console.log(positionOfBall);
  //   console.log(holePosition);

  const ballCoordinateHandler = (ballPositionData) => {
    setPositionOfBall(ballPositionData);
  };

  //   console.log(stopTimer);

  const timerHandler = () => {
    setStopTimer(true);
  };

  useEffect(() => {
    if (
      positionOfBall.left === holePosition.left &&
      positionOfBall.top === holePosition.top
    ) {
      setStopTimer(false);
      console.log("balle");
      // clearInterval(interval);
    }
    if (stopTimer) {
      const interval = setInterval(() => {
        setTimer((prevData) => +prevData + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stopTimer, timer]);

  //   if (!stopTimer) clearInterval(interval);
  // return () => clearInterval(interval);

  //   console.log(positionOfBall.left);

  return (
    <div>
      <button className="start" onClick={timerHandler}>
        Start Timer
      </button>
      <p className="heading-timer">{timer}</p>
      {stopTimer && <Balll position={ballCoordinateHandler} />}
      <Hole position={holePosition} />
    </div>
  );
};

export default StartButtonAndTimer;
