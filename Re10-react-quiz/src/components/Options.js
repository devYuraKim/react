import { useState } from "react";

function Options({ question }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${
            selectedOption !== null
              ? i === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={i}
          onClick={() => {
            setSelectedOption(i);
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
