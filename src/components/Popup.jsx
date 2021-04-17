import React from "react";

function Popup({ isBreakTime, setIsBreakTime, timeIsUp, setTimeIsUp }) {
  return (
    <div
      class={timeIsUp ? "dialog" : "dialog hidden"}
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description">
      <h2 id="dialog-title">Time is up!</h2>
      <p id="dialog-description">{isBreakTime ? "Time to take a 5 minutes break." : "Time to refocus."}</p>
      <button
        type="button"
        aria-label="Close dialog"
        class="close-dialog"
        onClick={() => {
          setIsBreakTime(false);
          setTimeIsUp(false);
        }}>
        <i class="fa fa-times"></i>
      </button>
    </div>
  );
}

export default Popup;
