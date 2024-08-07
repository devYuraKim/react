import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function handleInput(e) {
    setAmount(e.target.value);
  }

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        const host = "api.frankfurter.app";
        const res = await fetch(
          `https://${host}/latest?amount=${amount}&from=${from}&to=${to}`
        );
        const data = await res.json();
        const rates = data.rates[to];
        setResult(rates);
        setIsLoading(false);
      }
      if (amount === 0) {
        setIsLoading(false);
        setResult(amount);
        return;
      }
      if (to === from) {
        setIsLoading(false);
        setResult(amount);
        return;
      }
      fetchData();
    },
    [amount, from, to, result]
  );

  return (
    <div className="App">
      <input type="number" onChange={handleInput} disabled={isLoading} />
      <select
        onChange={(e) => setFrom(e.target.value)}
        value={from}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
      </select>
      <select
        onChange={(e) => setTo(e.target.value)}
        value={to}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="KRW">KRW</option>
        <option value="JPY">JPY</option>
      </select>

      {isLoading ? (
        <p>⏱️ Please wait. We are fetching the data now...</p>
      ) : (
        <p>
          {from} {amount} is {to} {result}
        </p>
      )}
    </div>
  );
}
