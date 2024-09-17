import { createContext, useContext } from "react";

const QuizContext = createContext();

function QuizProvider({ children }) {
  return <QuizContext.Provider>{children}</QuizContext.Provider>;
}

function useQuiz() {
  const context = useContext("QuizContext");
  if (!context)
    throw new Error("QuizContext used outside QuizContext Provider");
  return context;
}

export { QuizProvider, useQuiz };
