import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("KRW");
  const [result, setResult] = useState("");

  function handleInput(e) {
    setAmount(e.target.value);
  }

  useEffect(
    function () {
      async function fetchData() {
        const host = "api.frankfurter.app";
        const res = await fetch(
          `https://${host}/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        const rates = data.rates[to];
        setResult(rates);
        console.log(result);
      }
      fetchData();
    },
    [amount, from, to, result]
  );

  return (
    <div className="App">
      <input type="number" onChange={handleInput} />
      <select onChange={(e) => setFrom(e.target.value)} value={from}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
      </select>
      <select onChange={(e) => setTo(e.target.value)} value={to}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
      </select>
      <p>OUTPUT</p>
      <p>
        {amount} {from} is {result} {to}
      </p>
    </div>
  );
}
