import { useState } from "react";

import Timer from "./TimerComponent";
import SetDay from "./SetDayComponent";
import Pizza from "./PizzaComponent";

const PizzaTimer = () => {
  const day = localStorage.getItem("day");
  const hour = localStorage.getItem("hour");
  const minutes = localStorage.getItem("minutes");
  const showSetDayStore = localStorage.getItem("showComponent");
  
  const [showState, setShowState] = useState(showSetDayStore);

  const nextDay = (day) => {
    var now = new Date();
    let targetYear = now.getFullYear();
    let targetMonth = now.getMonth();
    let targetDay = now.getDate() + ((Number(day) + (7 - now.getDay())) % 7);
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

  const showSetDay = (showComponent)=>{
    localStorage.setItem("showComponent", showComponent);
    var temp = localStorage.getItem("showComponent");
    setShowState(temp);
  }
  return (
    <div className="timerContainer">
      <Pizza day={nextDay(day)} />
      {showState === 'timer' ? <Timer day={nextDay(day)} showSetDay = {showSetDay} /> : <SetDay showSetDay ={showSetDay} />}
    </div>
  );
};

export default PizzaTimer;
