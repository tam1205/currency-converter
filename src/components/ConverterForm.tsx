import React from "react";
import "./ConverterForm.css";

interface Props {
  amount: string;
  from: string;
  to: string;
  currencies: Record<string, string>;
  onAmountChange: (val: string) => void;
  onFromChange: (val: string) => void;
  onToChange: (val: string) => void;
  onConvert: () => void;
  onSwap: () => void;
  loading: boolean;
}

export function ConverterForm({
  amount, from, to, currencies,
  onAmountChange, onFromChange, onToChange,
  onConvert, onSwap, loading,
}: Props) {
  const currencyList = Object.entries(currencies);

  return (
    <div className="form">
      <div className="field">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          min="0"
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>
      <div className="form-row">
        <div className="field">
          <label>From</label>
          <select value={from} onChange={(e) => onFromChange(e.target.value)}>
            {currencyList.map(([code, name]) => (
              <option key={code} value={code}>{code} — {name}</option>
            ))}
          </select>
        </div>
        <button className="swap-btn" onClick={onSwap} title="Swap currencies">⇄</button>
        <div className="field">
          <label>To</label>
          <select value={to} onChange={(e) => onToChange(e.target.value)}>
            {currencyList.map(([code, name]) => (
              <option key={code} value={code}>{code} — {name}</option>
            ))}
          </select>
        </div>
      </div>
      <button className="convert-btn" onClick={onConvert} disabled={loading}>
        {loading ? "Converting..." : "Convert"}
      </button>
    </div>
  );
}
