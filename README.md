# Preference Dashboard

A React app where users can select a theme and mood and see their preferences on a preview page.

## How to Run

Install the dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open the local URL shown in the terminal.

## Shared State and Custom Hook

The app uses a custom hook called `usePreferences` to store the selected theme and mood.

The preferences are shared between the Settings and Preview pages using React Router's Outlet context. The `Layout` component passes the preferences through `<Outlet context={...} />`, and the pages access them using `useOutletContext()`.
