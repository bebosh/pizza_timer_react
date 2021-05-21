import Timer from './components/TimerComponent'
import SetDay from './components/SetDayComponent'

const PizzaTimer = () => {
  const day = localStorage.getItem("day");
  const hour = localStorage.getItem("hour");  

  const nextDay = (day, hour) => {

    var now = new Date();    
    var timestamp = now.setDate(now.getDate() + (Number(day)+(7-now.getDay())) % 7);
    return timestamp;
  }
  
  return ( 
    <div className="timerContainer">
    {day ? <Timer time = {nextDay(day)} /> : <SetDay /> }
    </div>
   );
}
 
export default PizzaTimer;