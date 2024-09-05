import { useState } from "react";

function Options({ question }) {
  const [result, setResult] = useState("");

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${result}`}
          key={i}
          onClick={() =>
            i === question.correctOption
              ? setResult("correct")
              : setResult("wrong")
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
