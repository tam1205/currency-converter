import { Status } from "../types";
import "./ResultDisplay.css";

interface Props {
  status: Status;
  amount: string;
  from: string;
  to: string;
  result: number | null;
  error: string | null;
}

export function ResultDisplay({
  status,
  amount,
  from,
  to,
  result,
  error,
}: Props) {
  if (status === "idle") return null;

  if (status === "loading") {
    return (
      <div className="result result--loading">
        <div className="spinner" />
        <span>Fetching live rate...</span>
      </div>
    );
  }

  if (status === "error" || error) {
    return (
      <div className="result result--error">
        <span className="error-icon">!</span>
        <span>{error}</span>
      </div>
    );
  }

  if (status === "success" && result !== null) {
    return (
      <div className="result result--success">
        <p className="result-label">
          {amount} {from} =
        </p>
        <p className="result-value">
          {result.toFixed(2)} <span className="result-currency">{to}</span>
        </p>
      </div>
    );
  }

  return null;
}
