import { useState } from "react";
import sound from "../img&sound/clock-timer.wav";
import Timer from "./TimerComponent";
import SetDay from "./SetDayComponent";
import Pizza from "./PizzaComponent";
import { nextDay } from "../components/TimerFunctions";

const PizzaTimer = () => {
  const now = new Date();
  const day = localStorage.getItem("day");
  const hour = localStorage.getItem("hour");
  const minutes = localStorage.getItem("minutes");
  const showSetDayStore = localStorage.getItem("showComponent");

  const [showState, setShowState] = useState(showSetDayStore);
  const [showStart, setShowStart] = useState("");

  if (day && showStart === "start") {
    const audio = new Audio(sound);
    audio.play();
  }

  var targetDay = now.getDate() + ((Number(day) + (7 - now.getDay())) % 7);
  const showSetDay = (showComponent) => {
    localStorage.setItem("showComponent", showComponent);
    var temp = localStorage.getItem("showComponent");
    setShowState(temp);
  };

  const handlestart = () => {
    setShowStart("start");
  };

  if (showStart === "") {
    return <button onClick={handlestart}>Attiva Timer</button>;
  } else {
    return (
      <div className="timerContainer">
        <Pizza day={targetDay} />
        {showState === "timer" ? (
          <Timer
            day={nextDay(now, hour, minutes, targetDay)}
            showSetDay={showSetDay}
          />
        ) : (
          <SetDay showSetDay={showSetDay} />
        )}
      </div>
    );
  }
};

export default PizzaTimer;
