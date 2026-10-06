import { useState } from "react";

export default function usePreferences() {
  const [preferences, setPreferences] = useState({
    theme: "blue",
    mood: "happy",
  });

  const updatePreference = (name, value) => {
    setPreferences((currentPreferences) => ({
      ...currentPreferences,
      [name]: value,
    }));
  };

  return { preferences, updatePreference };
}
