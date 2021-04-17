import React, { useState, useEffect } from "react";

function FocusTimer({
  setTimeToFocus,
  setIsBreakTime,
  setTimeIsUp,
  firstTime,
  setFirstTime,
}) {
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

  function resetTimer() {
    setMinutes(25);
    setSeconds(0);
    setActive(false);
    setFirstTime(true);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds < 0) {
        setMinutes(minutes - 1);
        setSeconds(10);
      } else if (minutes < 0) {
        setTimeToFocus(false);
        setIsBreakTime(true);
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
  }, [isActive, seconds, minutes, setTimeToFocus, setIsBreakTime, setTimeIsUp]);

  return (
    <>
      <h1>{firstTime ? null : "Time to focus"}</h1>
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
            setFirstTime(false);
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
