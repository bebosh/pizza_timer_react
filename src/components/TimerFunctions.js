const nextDay = (now, hour, minutes, targetDay) => {
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
  /* if the targetDate is les or equal than the actual date, 
  add 7 days to go to next week automatically*/
  if(targetDate <= now){
    targetDate.setDate(targetDate.getDate() + 7);
  }
  return {targetDate};
};


export {nextDay};
