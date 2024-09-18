import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Footer from "./Footer";
import Timer from "./Timer";
import StartScreen from "./StartScreen";
import FinishScreen from "./FinishScreen";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Progress />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Question />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
