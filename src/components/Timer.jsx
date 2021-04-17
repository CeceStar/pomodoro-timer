import React, { useState } from "react";
import FocusTimer from "./FocusTimer";
import BreakTimer from "./BreakTimer";
import Popup from "./Popup";
import IntroText from "./IntroText";

function Timer() {
  const [timeToFocus, setTimeToFocus] = useState(true);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [firstTime, setFirstTime] = useState(true);

  const renderTimer = () => {
    if (timeToFocus) {
      return (
        <FocusTimer
          timeToFocus={timeToFocus}
          setTimeToFocus={setTimeToFocus}
          isBreakTime={isBreakTime}
          setIsBreakTime={setIsBreakTime}
          timeIsUp={timeIsUp}
          setTimeIsUp={setTimeIsUp}
          firstTime={firstTime}
          setFirstTime={setFirstTime}
        />
      );
    } else {
      return (
        <BreakTimer
          timeToFocus={timeToFocus}
          setTimeToFocus={setTimeToFocus}
          isBreakTime={isBreakTime}
          setIsBreakTime={setIsBreakTime}
          timeIsUp={timeIsUp}
          setTimeIsUp={setTimeIsUp}
        />
      );
    }
  };

  const introText = () => {
    if (firstTime) {
      return <IntroText />;
    }
  };

  return (
    <div className="countdown-area">
      {introText()}
      <Popup
        isBreakTime={isBreakTime}
        setIsBreakTime={setIsBreakTime}
        timeIsUp={timeIsUp}
        setTimeIsUp={setTimeIsUp}
      />
      {renderTimer()}
    </div>
  );
}

export default Timer;
