import { useQuiz } from "../contexts/QuizContext";

export default function Options() {
  const { questions, index, dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, optionIndex) => (
        <button
          className={`btn btn-option ${
            optionIndex === answer ? "answer" : ""
          } ${
            hasAnswered
              ? optionIndex === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: optionIndex })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
