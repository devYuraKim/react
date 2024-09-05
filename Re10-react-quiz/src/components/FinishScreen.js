function FinishScreen({
  points,
  totalPoints,
  highScore,
  dispatch,
  newHighScore,
}) {
  const percentage = (points / totalPoints) * 100;

  let emoji;
  switch (true) {
    case percentage === 100:
      emoji = "🥇";
      break;
    case percentage >= 80:
      emoji = "🥈";
      break;
    case percentage >= 70:
      emoji = "🥉";
      break;
    case percentage === 0:
      emoji = "🤦‍♀️";
      break;
    default:
      emoji = "🤔";
  }

  return (
    <>
      <p className="result">
        {emoji} You scored {points} out of {totalPoints} (
        {Math.ceil(percentage)}
        %)
      </p>

      <p className="highscore">
        {newHighScore && "🎉New Record🎉"} Highscore: {highScore} points
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Retry
      </button>
    </>
  );
}

export default FinishScreen;
