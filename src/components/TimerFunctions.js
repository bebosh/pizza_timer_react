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
  return {targetDate};
};

export {nextDay};
