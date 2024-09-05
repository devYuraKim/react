function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return;
  if (index + 1 === numQuestions)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finish
      </div>
    );

  return (
    <div
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </div>
  );
}

export default NextButton;
