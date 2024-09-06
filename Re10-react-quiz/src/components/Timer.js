import { useEffect } from "react";

function Timer({ dispatch, time }) {
  useEffect(
    function () {
      const timer = setInterval(() => dispatch({ type: "countdown" }), 1000);

      return () => {
        clearInterval(timer);
      };
    },
    [dispatch]
  );
  return <div className="timer">{time}</div>;
}

export default Timer;
