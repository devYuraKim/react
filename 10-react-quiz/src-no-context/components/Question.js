import Options from "./Options";
function Question({ question, dispatch, index, answer }) {
  return (
    <div>
      <p>{index + 1}</p>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
