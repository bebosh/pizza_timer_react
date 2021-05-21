import { useState } from "react";

const SetDay = () => {
  const [day, setDay] = useState("1");
  const [hour, setHour] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    // convert date in number for the function in TimerComponent
    let hourMinutes = hour.split(":");
    let setHours = hourMinutes[0];
    let setMinutes = hourMinutes[1];
    localStorage.setItem("day", day);
    localStorage.setItem("hour", setHours);
    localStorage.setItem("minutes", setMinutes);
  };

  return (
    
      
    <div>
    <h2>Select next pizza time !</h2>
      <form onSubmit={handleSubmit}>
        <span className="selection">Select a day: </span>
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          name="Days"
        >
          <option value ="1">Monday</option>
          <option value ="2">Tuesday</option>
          <option value ="3">Wednesday</option>
          <option value ="4">Thursday</option>
          <option value ="5">Friday</option>
          <option value ="6">Saturday</option>
          <option value ="0">Sunday</option>
        </select>
        <span className="selection">Select time: </span>
        <input
          onChange={(e) => setHour(e.target.value)}
          type="time"
          id="appt"
          name="appt"
        ></input> 
          <button>Set date</button>
      </form>
    </div>
  );
};

export default SetDay;
