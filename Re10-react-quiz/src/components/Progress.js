function Progress({ index, numQuestions, points, totalPoints, answer }) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question {index + 1}/{numQuestions}
      </p>
      <p>
        {points}/{totalPoints} points
      </p>
    </header>
  );
}

export default Progress;
