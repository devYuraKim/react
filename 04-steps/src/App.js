import React from "react";
import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return <Steps />;
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Yura" });

  function handlePrevious() {
    if (step > 1) setStep((curState) => curState - 1);
    else alert("can't go lower than 1");
  }
  function handleNext() {
    // setTest({ name: "" });
    if (step < 3) setStep((curState) => curState + 1);
    else alert("can't go higher than 3");
  }

  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((curState) => !curState)}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button onClick={handlePrevious} bgColor="#7950F2" textColor="#fff">
              <span>◀</span> Previous
            </Button>
            <Button onClick={handleNext} bgColor="#7950F2" textColor="#fff">
              Next <span>▶</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
