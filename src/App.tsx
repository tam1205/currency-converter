import React from "react";
import { useConverter } from "./hooks/useConverter";
import { ConverterForm } from "./components/ConverterForm";
import { ResultDisplay } from "./components/ResultDisplay";
import { HistoryList } from "./components/HistoryList";

export default function App() {
  const {
    amount, setAmount,
    from, setFrom,
    to, setTo,
    result,
    status, error,
    currencies,
    history,
    convert,
    swap,
  } = useConverter();

  return (
    <div className="app">
      <header className="header">
        <h1>Currency converter</h1>
        <p>Live rates via frankfurter.app</p>
      </header>
      <main className="main">
        <div className="card">
          <ConverterForm
            amount={amount}
            from={from}
            to={to}
            currencies={currencies}
            onAmountChange={setAmount}
            onFromChange={setFrom}
            onToChange={setTo}
            onConvert={convert}
            onSwap={swap}
            loading={status === "loading"}
          />
          <ResultDisplay
            status={status}
            amount={amount}
            from={from}
            to={to}
            result={result}
            error={error}
          />
        </div>
        <HistoryList history={history} />
      </main>
    </div>
  );
}
