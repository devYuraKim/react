import Options from "./Options";
import NextButton from "./NextButton";

function Question({ question, dispatch, answer, points }) {
  s;
  return (
    <div>
      <h3>{points}</h3>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
      {answer !== null && <NextButton dispatch={dispatch} />}
    </div>
  );
}

export default Question;
