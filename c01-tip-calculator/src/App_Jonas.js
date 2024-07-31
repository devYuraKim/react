import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);

  function handleChange(e) {
    setBill(e.target.value);
  }

  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleChange1(e) {
    setTip1(Number(e.target.value));
  }

  function handleChange2(e) {
    setTip2(Number(e.target.value));
  }

  const totalTip = bill * ((tip1 + tip2) / 2);

  function handleReset() {
    setTip1(0);
    setTip2(0);
    setBill(0);
  }

  return (
    <div>
      <Bill bill={bill} onChange={handleChange} />
      <TipSeparate tip={tip1} onChange={handleChange1}>
        How did you like the service?
      </TipSeparate>
      <TipSeparate tip={tip2} onChange={handleChange2}>
        How did your friend like the service?
      </TipSeparate>
      <div>{Number(bill) + Number(totalTip)}</div>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}

export default App;

function Bill({ bill, onChange }) {
  return (
    <div>
      How much was the bill?
      <input type="text" value={bill} onChange={onChange}></input>
    </div>
  );
}

function TipSeparate({ tip, onChange, children }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={onChange}>
        <option value="0">0%</option>
        <option value="0.05">5%</option>
        <option value="0.1">10%</option>
        <option value="0.2">20%</option>
      </select>
    </div>
  );
}
