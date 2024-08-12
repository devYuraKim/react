export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, optionIndex) => (
        <button
          className={`btn btn-option ${
            optionIndex === answer ? "answer" : ""
          } ${
            hasAnswered
              ? optionIndex === question.correctOption
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
