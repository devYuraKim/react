import Options from "./Options";

function Question({ question, dispatch, answer, points }) {
  return (
    <div>
      <h3>{points}</h3>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
