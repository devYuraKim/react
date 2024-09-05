import { useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(function () {
    const controller = new AbortController();

    async function fetchQuestions() {
      const res = await fetch("http://localhost:8000/questions", {
        signal: controller.signal,
      });
      const data = await res.json();
      console.log(data);
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
        <p>Question</p>
      </Main>
    </div>
  );
}

export default App;
