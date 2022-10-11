import React, { useEffect, useState } from "react";

const Balll = (props) => {
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });

  // const removeListner = props.eventRemoval;
  // console.log(removeListner);

  const ballPositionHandler = (e) => {
    let ballPositionClone = { ...ballPosition };
    // console.log({ ...ballPosition });
    if (e.keyCode === 37) {
      // console.log("h");
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballPosition.left.indexOf("p"))) -
        5 +
        "px";
      // console.log(ballPosition.left);
    } else if (e.keyCode === 39) {
      ballPositionClone.left =
        Number(ballPosition.left.slice(0, ballPosition.left.indexOf("p"))) +
        5 +
        "px";
    } else if (e.keyCode === 38) {
      ballPositionClone.top =
        Number(ballPosition.top.slice(0, ballPosition.top.indexOf("p"))) -
        5 +
        "px";
    } else if (e.keyCode === 40) {
      ballPositionClone.top =
        Number(ballPosition.top.slice(0, ballPosition.top.indexOf("p"))) +
        5 +
        "px";
    }
    // console.log(ballPosition.left);

    setBallPosition(ballPositionClone);
  };
  useEffect(() => {
    if (ballPosition.left === "250px" && ballPosition.top === "250px") {
      document.removeEventListener("keydown", ballPositionHandler);
    } else {
      document.addEventListener("keydown", ballPositionHandler);
      return () => document.removeEventListener("keydown", ballPositionHandler);
    }
  }, [ballPositionHandler]);

  props.position(ballPosition);

  return (
    <div
      className="ball"
      style={{
        left: ballPosition.left,
        top: ballPosition.top,
      }}
    ></div>
  );
};

export default Balll;
