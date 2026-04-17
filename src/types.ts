export interface ConversionResult {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface HistoryEntry {
  id: number;
  from: string;
  to: string;
  amount: number;
  result: number;
  date: string;
}

export type Status = "idle" | "loading" | "success" | "error";
