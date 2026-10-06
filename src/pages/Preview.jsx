import { useOutletContext } from "react-router-dom";

export default function Preview() {
  const { preferences } = useOutletContext();

  const moodMessages = {
    happy: "😊 Have a happy day!",
    calm: "😌 Take it easy and enjoy the moment.",
    focused: "🎯 Stay focused and keep going!",
  };

  return (
    <div className={`card preview ${preferences.theme}`}>
      <h2>Preview</h2>
      <p>{moodMessages[preferences.mood]}</p>
    </div>
  );
}
