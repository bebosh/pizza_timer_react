import { useEffect, useState } from "react";
import partySound from "../img&sound/happy-crowd-cheer.wav";

const Timer = (props) => {
  const currentTime = new Date().getTime();
  const finalDate = props.day.targetDate;
  const finalTime = finalDate.getTime();
  const timeZero = finalTime - currentTime;

  const [nextDay, setNextDay] = useState(0);
  const [nextHours, setNextHours] = useState(0);
  const [nextMinutes, setNextMinutes] = useState(0);
  const [nextSeconds, setNextSeconds] = useState(0);
  const [partyStarted, setPartyStarted] = useState("");
  const [party, setParty] = useState("");

  const playSound = () => {
    if (timeZero < 1000) {
      setPartyStarted("partyStarted");
      setParty("party");
    }
    if (timeZero < 0) {
      setPartyStarted("partyStarted");
      setParty("");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      let timeLeft = finalDate - currentTime;
      let nextDay = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
      let daysms = timeLeft % (24 * 60 * 60 * 1000);
      let nextHours = Math.floor(daysms / (60 * 60 * 1000));
      let hoursms = timeLeft % (60 * 60 * 1000);
      let nextMinutes = Math.floor(hoursms / (60 * 1000));
      let minutesms = timeLeft % (60 * 1000);
      let nextSeconds = Math.floor(minutesms / 1000);

      setNextDay(nextDay);
      setNextHours(nextHours);
      setNextMinutes(nextMinutes);
      setNextSeconds(nextSeconds);
    }, 1000);
    
    playSound();
    return () => {
      clearInterval(interval);
    };
  });

  const handleReset = () => {
    localStorage.removeItem("day");
    localStorage.removeItem("hour");
    localStorage.removeItem("minutes");
    props.showSetDay("setDay");
  };

  if (partyStarted === "partyStarted") {
    if (party === "party") {
      const audio = new Audio(partySound);
      audio.volume = 0.2;
      audio.play();
    }
    return (
      <div>
        <h1>PARTY MODE ON !!!</h1>
        <div className="buttonCenterReset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>
          Days: {nextDay} - Hours: {nextHours} - Min: {nextMinutes} - Sec:{" "}
          {nextSeconds}{" "}
        </h3>
        <div className="buttonCenterReset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
  }
};

export default Timer;
