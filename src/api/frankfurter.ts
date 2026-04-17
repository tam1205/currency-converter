import { ConversionResult } from "../types";

const BASE_URL = import.meta.env.DEV ? "/api" : "https://api.frankfurter.app";

export async function fetchConversion(
  amount: number,
  from: string,
  to: string,
): Promise<ConversionResult> {
  const response = await fetch(
    `${BASE_URL}/latest?amount=${amount}&from=${from}&to=${to}`,
  );
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}

export async function fetchCurrencies(): Promise<Record<string, string>> {
  const response = await fetch(`${BASE_URL}/currencies`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  return response.json();
}
