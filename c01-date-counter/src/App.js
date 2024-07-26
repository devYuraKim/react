import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handleMinus() {
    setCount((cur) => cur - 1);
  }

  function handlePlus() {
    setCount((cur) => cur + 1);
  }

  return (
    <div>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>count:{count}</span>
        <button onClick={handlePlus}>+</button>

        <p>
          {count} days from today is {date.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default App;
