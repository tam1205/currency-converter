import React from "react";
import { HistoryEntry } from "../types";
import "./HistoryList.css";

interface Props {
  history: HistoryEntry[];
}

export function HistoryList({ history }: Props) {
  if (history.length === 0) return null;

  return (
    <div className="history">
      <h2 className="history-title">Recent conversions</h2>
      <ul className="history-list">
        {history.map((entry) => (
          <li key={entry.id} className="history-item">
            <div className="history-left">
              <span className="history-pair">{entry.from} → {entry.to}</span>
              <span className="history-date">{entry.date}</span>
            </div>
            <div className="history-right">
              <span className="history-amount">{entry.amount.toLocaleString()} {entry.from}</span>
              <span className="history-result">= {entry.result.toFixed(2)} {entry.to}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
