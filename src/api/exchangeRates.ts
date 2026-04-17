import { ConversionResult } from "../types";

const BASE_URL = "https://open.er-api.com/v6/latest";

export async function fetchCurrencies(): Promise<Record<string, string>> {
  const response = await fetch(`${BASE_URL}/USD`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();
  const codes = Object.keys(data.rates);
  codes.push("USD");
  codes.sort();
  return Object.fromEntries(codes.map((code) => [code, code]));
}

export async function fetchConversion(
  amount: number,
  from: string,
  to: string,
): Promise<ConversionResult> {
  const response = await fetch(`${BASE_URL}/${from}`);
  if (!response.ok) throw new Error(`API error: ${response.status}`);
  const data = await response.json();
  const rate = data.rates[to];
  return {
    amount,
    base: from,
    date:
      data.time_last_update_utc?.slice(0, 16) ??
      new Date().toISOString().slice(0, 10),
    rates: { [to]: parseFloat((rate * amount).toFixed(2)) },
  };
}
