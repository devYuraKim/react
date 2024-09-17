import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";
function Question() {
  const { questions, index } = useQuiz();
  return (
    <div>
      <p>{index + 1}</p>
      <h4>{questions[index].question}</h4>
      <Options />
    </div>
  );
}

export default Question;
