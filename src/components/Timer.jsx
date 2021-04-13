import React, { useState, useEffect } from "react";

function Timer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);

  function changeTime(event) {
    const name = event.target.name;

    if (name === "add") {
      setMinutes(minutes + 1);
    } else if (name === "sub") {
      setMinutes(minutes - 1);
    }
  }

  function toggelStartStopTimer() {
    setActive(!isActive);
  }

  function resetTimer() {
    setMinutes(25);
    setSeconds(0);
    setActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds < 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(30);
      } else if (minutes < 0) {
        resetTimer()
        console.log("Times up!");
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, 1000);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

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

      <button
        name="start-pause"
        onClick={toggelStartStopTimer}
        className="btn-start-timer">
        {isActive ? "Pause" : "Start"}
      </button>
      <button name="reset" onClick={resetTimer} className="btn-start-timer">
        Reset
      </button>
    </>
  );
}

export default Timer;
