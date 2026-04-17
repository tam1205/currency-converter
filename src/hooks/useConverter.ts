import { useState, useEffect } from "react";
import { HistoryEntry, Status } from "../types";
import { fetchConversion, fetchCurrencies } from "../api/frankfurter";

export function useConverter() {
  const [amount, setAmount] = useState<string>("100");
  const [from, setFrom] = useState("GBP");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<Record<string, string>>({});
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    fetchCurrencies()
      .then(setCurrencies)
      .catch(() => setError("Could not load currencies. Please refresh."));
  }, []);

  async function convert() {
    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || parsedAmount <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    if (from === to) {
      setError("Please select two different currencies");
      return;
    }
    setStatus("loading");
    setError(null);
    setResult(null);
    try {
      const data = await fetchConversion(parsedAmount, from, to);
      const converted = data.rates[to];
      setResult(converted);
      setStatus("success");
      setHistory((prev) =>
        [{ id: Date.now(), from, to, amount: parsedAmount, result: converted, date: data.date }, ...prev].slice(0, 8)
      );
    } catch {
      setError("Failed to fetch conversion. Please try again.");
      setStatus("error");
    }
  }

  function swap() {
    setFrom(to);
    setTo(from);
    setResult(null);
    setStatus("idle");
    setError(null);
  }

  return {
    amount, setAmount,
    from, setFrom,
    to, setTo,
    result,
    status, error,
    currencies,
    history,
    convert,
    swap,
  };
}
