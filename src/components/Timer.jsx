import React, { useState } from "react";
import FocusTimer from "./FocusTimer";
import BreakTimer from "./BreakTimer";

function Timer() {
  const [timeToFocus, setTimeToFocus] = useState(true)

  const renderTimer = () => {
    if (timeToFocus) {
      return <FocusTimer timeToFocus={timeToFocus} setTimeToFocus={setTimeToFocus} />
    } else {
      return <BreakTimer timeToFocus={timeToFocus} setTimeToFocus={setTimeToFocus} />
    }
  }

  return (
      <div className="countdown-area">
      {renderTimer()}
      </div>
  );
}

export default Timer;
