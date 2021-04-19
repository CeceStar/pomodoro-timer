import React, { useState, useEffect } from "react";

function FocusTimer({ timeToFocus, setTimeToFocus, setTimeIsUp }) {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  function changeTime(event) {
    const name = event.target.name;
    if (name === "add") {
      setMinutes(minutes + 1);
    } else if (name === "sub") {
      setMinutes(minutes - 1);
    }
  }

  function resetTimer() {
    setMinutes(5);
    setSeconds(0);
    setActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds < 0) {
        setMinutes(minutes - 1);
        setSeconds(10);
      } else if (minutes < 0) {
        setTimeToFocus(true);
        setIsBreakTime(false);
        setTimeIsUp(true);
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setSeconds(seconds - 1);
        }, 1000);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, setTimeToFocus, setTimeIsUp]);

  return (
    <>
      <h1>Time to take a break</h1>
      <button
        name="add"
        onClick={changeTime}
        className="btn-change-time"
        aria-label="Add minutes">
        +
      </button>
      <p className="countdown">
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button
        name="sub"
        onClick={changeTime}
        className="btn-change-time"
        aria-label="Subtract minutes">
        -
      </button>
      <div>
        <button
          name="start-pause"
          onClick={() => {
            setActive(!isActive);
          }}
          className="btn-start-timer">
          {isActive ? "Pause" : "Start"}
        </button>
        <button name="reset" onClick={resetTimer} className="btn-start-timer">
          Reset
        </button>
      </div>
    </>
  );
}

export default FocusTimer;
