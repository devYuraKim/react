function NextButton({ dispatch }) {
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
