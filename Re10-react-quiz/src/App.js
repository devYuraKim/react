import { useEffect, useReducer } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

const initialState = {
  questions: [],
  //loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    const controller = new AbortController();

    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions", {
          signal: controller.signal,
        });
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        if (err.message === "AbortError") console.log("Fetch aborted");
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>questions</p>
      </Main>
    </div>
  );
}

export default App;
