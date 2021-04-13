import React, { useState } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(10);

  function changeTime(event) {
    const name = event.target.name;

    if (name === "add") {
      setMinutes(minutes + 1);
    } else if (name === "sub") {
      setMinutes(minutes - 1);
    }
  }

  function startTimer() {
    const myInterval = setInterval(() => {
        if (seconds > 0) {
            setSeconds(seconds => seconds - 1)
        } else if (seconds === 0){
            setMinutes(minutes => minutes - 1)
            setSeconds(59)
        } else {
            console.log("HEj")
        }
        
    }, 1000)
  }

  return (
    <>
      <div className="countdown-area">
        <button
          name="add"
          onClick={changeTime}
          className="btn-change-time"
          aria-label="Add minutes">
          +
        </button>
        <p className="countdown">
          {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button
          name="sub"
          onClick={changeTime}
          className="btn-change-time"
          aria-label="Subtract minutes">
          -
        </button>
      </div>

      
      <button name="start" onClick={startTimer} className="btn-start-timer">
        Start timer
      </button>
    </>
  );
}

export default Timer;
