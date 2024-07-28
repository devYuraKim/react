import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleMinus() {
    setCount((cur) => cur - step);
  }

  function handlePlus() {
    setCount((cur) => cur + step);
  }

  return (
    <div>
      <div>
        <div>
          <button onClick={() => setStep((cur) => cur - 1)}>-</button>
          <span>step:{step}</span>
          <button onClick={() => setStep((cur) => cur + 1)}>+</button>
        </div>

        <div>
          <button onClick={handleMinus}>-</button>
          <span>count:{count}</span>
          <button onClick={handlePlus}>+</button>
        </div>

        <p>
          {count === 0 && `today is ${date.toDateString()}`}
          {count > 0 && `${count} days from today is ${date.toDateString()}`}
          {count < 0 &&
            `${count} days ago from today was ${date.toDateString()}`}
        </p>
      </div>
    </div>
  );
}

export default App;
