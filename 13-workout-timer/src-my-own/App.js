import { useState } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import Timer from "./Timer";

function App() {
  const [allowSound, setAllowSound] = useState(true);

  // Will be be AM or PM
  const partOfDay = new Date().getHours() < 12 ? "AM" : "PM";

  const workouts = [
    {
      name: "Full-body workout",
      numExercises: partOfDay === "AM" ? 9 : 8,
    },
    {
      name: "Arms + Legs",
      numExercises: 6,
    },
    {
      name: "Arms only",
      numExercises: 3,
    },
    {
      name: "Legs only",
      numExercises: 4,
    },
    {
      name: "Core only",
      numExercises: partOfDay === "AM" ? 5 : 4,
    },
  ];

  return (
    <main>
      <h1>Workout timer</h1>
      <Timer />
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default App;
