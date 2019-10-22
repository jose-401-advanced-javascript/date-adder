const { dateAdder } = require('../date-adder');

describe('date adder', () => {
  const testDate = new Date ('10/21/19');
  const secondsDiff = '10s';
  const minutesDiff = '10m';

  it('adds seconds to a time object', () => {
    const newDate = dateAdder(testDate, secondsDiff);
    expect(newDate.toUTCString()).toBe('Mon, 21 Oct 2019 07:00:10 GMT');
  });

  it('adds minutes to a time object', () => {
    const newDate = dateAdder(testDate, minutesDiff);
    expect(newDate.toUTCString()).toBe('Mon, 21 Oct 2019 07:10:00 GMT');
  });
});