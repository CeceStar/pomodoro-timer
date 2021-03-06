import React, { useState, useEffect } from "react";

function Countdown({
  isBreakTime,
  setIsBreakTime,
  setTimeIsUp,
  firstTime,
  setFirstTime,
}) {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const alarmSound =
    new Audio("http://soundbible.com/grab.php?id=2189&type=mp3");

  function changeTime(event) {
    const name = event.target.name;
    if (name === "add") {
      setMinutes(minutes + 1);
    } else if (name === "sub") {
      setMinutes(minutes - 1);
    }
  }

  function resetTimer() {
    setActive(false);
    setFirstTime(true);
    setSeconds(0);
    setMinutes(25);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      if (seconds < 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes < 0) {
        setTimeIsUp(true);
        setActive(false);
        setSeconds(0);
        alarmSound.play();
        if (isBreakTime) {
          setIsBreakTime(false);
          setMinutes(25);
        } else {
          setIsBreakTime(true);
          setMinutes(5);
        }
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
  }, [
    isActive,
    seconds,
    minutes,
    isBreakTime,
    setIsBreakTime,
    setTimeIsUp,
    alarmSound,
  ]);

  const textAboveTimer = () => {
    if (firstTime) {
      return;
    } else {
      return <h1>{isBreakTime ? "Time to have a break" : "Time to focus"}</h1>;
    }
  };

  return (
    <>
      {textAboveTimer()}
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

export default Countdown;
