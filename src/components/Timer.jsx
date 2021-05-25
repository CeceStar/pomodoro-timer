import React, { useState } from "react";

import Popup from "./Popup";
import IntroText from "./IntroText";
import Countdown from "./Countdown";

function Timer() {
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
 


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
      <Countdown
          isBreakTime={isBreakTime}
          setIsBreakTime={setIsBreakTime}
          timeIsUp={timeIsUp}
          setTimeIsUp={setTimeIsUp}
          firstTime={firstTime}
          setFirstTime={setFirstTime}
        />
    </div>
  );
}

export default Timer;
