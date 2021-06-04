import { useState } from "react";
import sound from "../img&sound/clock-timer.wav";
import Timer from "./TimerComponent";
import SetDay from "./SetDayComponent";
import Pizza from "./PizzaComponent";

const PizzaTimer = () => {
  const day = localStorage.getItem("day");
  const hour = localStorage.getItem("hour");
  const minutes = localStorage.getItem("minutes");
  const showSetDayStore = localStorage.getItem("showComponent");

  const [showState, setShowState] = useState(showSetDayStore);
  const [showStart, setShowStart] = useState("");

  if (day && showStart === "start") {
    console.log(day);
    const audio = new Audio(sound);
    audio.play();
  }

  var now = new Date();
  var targetDay = now.getDate() + ((Number(day) + (7 - now.getDay())) % 7);

  const nextDay = () => {
    let targetYear = now.getFullYear();
    let targetMonth = now.getMonth();
    let targetHour = hour;
    let targetMunites = minutes;
    var targetDate = new Date(
      targetYear,
      targetMonth,
      targetDay,
      targetHour,
      targetMunites,
      0,
      0
    );
    return targetDate;
  };
  const showSetDay = (showComponent) => {
    localStorage.setItem("showComponent", showComponent);
    var temp = localStorage.getItem("showComponent");
    setShowState(temp);
  };

  const handlestart = () => {
    setShowStart("start");
  };

  if (showStart === "") {
    console.log(showStart);
    return <button onClick={handlestart}>Attiva Timer</button>;
  } else {
    return (
      <div className="timerContainer">
        <Pizza day={targetDay} />
        {showState === "timer" ? (
          <Timer day={nextDay(day)} showSetDay={showSetDay} />
        ) : (
          <SetDay showSetDay={showSetDay} />
        )}
      </div>
    );
  }
};

export default PizzaTimer;
