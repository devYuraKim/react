import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { index, numQuestions, points, totalPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        Points <strong>{points}</strong>/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
