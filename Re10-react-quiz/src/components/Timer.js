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

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;
