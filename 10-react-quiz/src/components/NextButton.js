import { useQuiz } from "../contexts/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  if (answer === null) return null;

  if (index + 1 < numQuestions) {
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );
  } else {
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Done
      </div>
    );
  }
}

export default NextButton;
