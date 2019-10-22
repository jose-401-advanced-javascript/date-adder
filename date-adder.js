const dropOperator = (str) => {
  const newStr = str.slice(0, -1)
  return newStr
}

const dateAdder = (date, diff) => {
  const originDate = Date.parse(date);
  if(diff.includes('s')) {
    const seconds = Number(dropOperator(diff));
    const parsedSeconds = seconds * 1000;
    const parsedNewDate = originDate + parsedSeconds;
    const newDate = new Date (parsedNewDate)
    return newDate
  }

  if(diff.includes('m')) {
    const minutes = Number(dropOperator(diff));
    const parseMinutes = minutes * 60000;
    const parsedNewDate = originDate + parseMinutes;
    const newDate = new Date(parsedNewDate)
    return newDate
  }
}

module.exports = { dateAdder }