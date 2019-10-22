const dropOperator = (str) => {
  const newStr = str.slice(0, -1)
  return newStr
}

const createNewDate = (originDate, parsedDiff) => {
  const parsedNewDate = originDate + parsedDiff;
  return new Date (parsedNewDate)
}

const dateAdder = (date, diff) => {
  const originDate = Date.parse(date);
  if(diff.includes('s')) {
    const seconds = Number(dropOperator(diff));
    const parsedSeconds = seconds * 1000;
    return createNewDate(originDate, parsedSeconds)
  }

  if(diff.includes('m')) {
    const minutes = Number(dropOperator(diff));
    const parsedMinutes = minutes * 60000;
    return createNewDate(originDate, parsedMinutes)
  }

  if(diff.includes('h')) {
    const hours = Number(dropOperator(diff));
    const parsedHours = hours * 3600000;
    return createNewDate(originDate, parsedHours)
  }

  if(diff.includes('d')) {
    const days = Number(dropOperator(diff));
    const parsedDays = days * 86400000;
    return createNewDate(originDate, parsedDays)
  }

  if(diff.includes('w')) {
    const weeks = Number(dropOperator(diff));
    const parsedWeeks = weeks * 604800000;
    return createNewDate(originDate, parsedWeeks)
  }

  if(diff.includes('M')) {
    const months = Number(dropOperator(diff));
    const parsedMonths = months * 2678400000;
    return createNewDate(originDate, parsedMonths)
  }

  if(diff.includes('y')) {
    const years = Number(dropOperator(diff));
    const parsedYears = years * 31622400000;
    return createNewDate(originDate, parsedYears)
  }
}

module.exports = { dateAdder }