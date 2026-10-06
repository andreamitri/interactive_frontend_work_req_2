import { useOutletContext } from "react-router-dom";

export default function Settings() {
  const { preferences, updatePreference } = useOutletContext();

  return (
    <div className="card">
      <h2>Settings</h2>

      <label htmlFor="theme">Theme</label>
      <select
        id="theme"
        value={preferences.theme}
        onChange={(event) => updatePreference("theme", event.target.value)}
      >
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>

      <label htmlFor="mood">Mood</label>
      <select
        id="mood"
        value={preferences.mood}
        onChange={(event) => updatePreference("mood", event.target.value)}
      >
        <option value="happy">Happy 😊</option>
        <option value="calm">Calm 😌</option>
        <option value="focused">Focused 🎯</option>
      </select>
    </div>
  );
}
