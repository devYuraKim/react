import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [totalTip, setTotalTip] = useState(0);

  function handleChange(e) {
    setBill(Number(e.target.value));
  }

  return (
    <div>
      <Bill bill={bill} onChange={handleChange} />
      <Tip setTotalTip={setTotalTip} />
      <div>
        bill: {bill} | tip: {totalTip}
      </div>
      <button>reset</button>
    </div>
  );
}

function Tip({ setTotalTip }) {
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleChange1(e) {
    const newTip1 = Number(e.target.value);
    setTip1(newTip1);
    setTotalTip((newTip1 + tip2) / 2);
  }

  function handleChange2(e) {
    const newTip2 = Number(e.target.value);
    setTip2(newTip2);
    setTotalTip((newTip2 + tip1) / 2);
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
        <option value={5}>5%</option>
        <option value={10}>10%</option>
        <option value={20}>20%</option>
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
