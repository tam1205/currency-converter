# Currency Converter

A lightweight currency conversion app using live exchange rates.

## Live demo

[View live →](https://tam1205.github.io/currency-converter)

## Features

- Live exchange rates via open.er-api.com
- 30+ currencies supported
- Swap button to instantly reverse conversion direction
- Loading and error states handled gracefully
- Conversion history showing your last 8 lookups

## Tech stack

- React 18
- TypeScript
- Vite
- Open Exchange Rates API via open.er-api.com (free, no API key required)

## Architecture

```
src/
  api/
    frankfurter.ts    # all API calls isolated here
  components/         # presentational UI components
  hooks/
    useConverter.ts   # all state and logic, none in components
  types.ts            # shared TypeScript interfaces
```

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Deploying to GitHub Pages

```bash
npm run deploy
```
