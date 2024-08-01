import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  function handleChange(e) {
    setBill(e.target.value);
  }

  return (
    <div>
      <Bill bill={bill} onChange={handleChange} />
      <Tip setTotalTip={setTotalTip} />
      <div>{bill + bill * totalTip}</div>
      <button>reset</button>
    </div>
  );
}

function Tip({ setTotalTip }) {
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleChange1(e) {
    setTip1(Number(e.target.value));
    setTotalTip(Math.round((tip1 + tip2) / 2));
  }

  function handleChange2(e) {
    setTip2(Number(e.target.value)); 
    setTotalTip(Math.round((tip1 + tip2) / 2));
  }

  return (
    <>
      <TipSeparate onChange={handleChange1}>
        How did you like the service?
      </TipSeparate>
      <TipSeparate onChange={handleChange2}>
        How did your friend like the service?
      </TipSeparate>
    </>
  );
}

function TipSeparate({ onChange, children }) {
  return (
    <div>
      {children}
      <select onChange={onChange}>
        <option value={0}>0%</option>
        <option value={0.05}>5%</option>
        <option value={0.1}>10%</option>
        <option value={0.2}>20%</option>
      </select>
    </div>
  );
}

function Bill({ bill, onChange }) {
  return (
    <div>
      How much was the bill?
      <input type="text" value={bill} onChange={onChange}></input>
    </div>
  );
}
