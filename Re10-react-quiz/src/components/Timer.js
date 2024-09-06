import { useEffect } from "react";

function Timer({ dispatch, time }) {
  useEffect(
    function () {
      setInterval(() => dispatch({ type: "countdown" }), 1000);
    },
    [dispatch]
  );
  return <div className="timer">{time}</div>;
}

export default Timer;
