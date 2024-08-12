function FinishScreen({
  points,
  totalPoints,
  highscore,
  isNewHighScore,
  dispatch,
}) {
  const percentage = Math.ceil((points / totalPoints) * 100);
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
        {emoji} You scored <strong>{points}</strong> out of {totalPoints} (
        {percentage}%)
      </p>

      <p className="highscore">
        {isNewHighScore && "🎉NEW RECORD🎉"}
        Highscore: {highscore} points
      </p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
