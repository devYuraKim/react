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

  function handleInput(event) {
    setCount(Number(event.target.value));
  }

  function handleDrag(event) {
    setStep(Number(event.target.value));
  }

  function handleClick() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          onChange={handleDrag}
          value={step}
        />
        {step}
        {/* <div>
          <button onClick={() => setStep((cur) => cur - 1)}>-</button>
          <span>step:{step}</span>
          <button onClick={() => setStep((cur) => cur + 1)}>+</button>
        </div> */}
        <div>
          <button onClick={handleMinus}>-</button>
          <input text="type" value={count} onChange={handleInput}></input>
          <button onClick={handlePlus}>+</button>
        </div>
        <p>
          {count === 0 && `today is ${date.toDateString()}`}
          {count > 0 && `${count} days from today is ${date.toDateString()}`}
          {count < 0 &&
            `${count} days ago from today was ${date.toDateString()}`}
        </p>
      </div>

      <button
        onClick={handleClick}
        disabled={count === 0 && step === 1 ? true : false}
      >
        reset
      </button>
    </div>
  );
}

export default App;
