import { useEffect, useState} from "react";

const Timer = (props) => {
  //console.log(new Date(props.time));
  //console.log(new Date().getTime());
  const [nextDay, setNextDay] = useState(0);
  const [nextHours, setNextHours] = useState(0);
  const [nextMinutes, setNextMinutes] = useState(0);
  const [nextSeconds, setNextSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const finalDate = props.time;
      let timeLeft = finalDate - currentTime
      let nextDay = Math.floor(timeLeft / (24*60*60*1000));
      let daysms=timeLeft % (24*60*60*1000);
      let nextHours = Math.floor((daysms)/(60*60*1000));
      let hoursms=timeLeft % (60*60*1000);
      let nextMinutes = Math.floor((hoursms)/(60*1000));
      let minutesms=timeLeft % (60*1000);
      let nextSeconds = Math.floor((minutesms)/(1000));

      setNextDay(nextDay);
      setNextHours(nextHours);
      setNextMinutes(nextMinutes);
      setNextSeconds(nextSeconds);

    }, 1000);  

    return () => {
      clearInterval(interval);
    };
  });

  const handleReset = () =>{
    localStorage.removeItem("day");
    localStorage.removeItem("hour");
    localStorage.removeItem("minutes");
  }

  return (
  <div>
    <h1>{nextDay} / {nextHours} / {nextMinutes} / {nextSeconds} </h1>
    <button onClick={handleReset} >Reset</button>
  </div>
  );
}
 
export default Timer;

