const { dateAdder } = require('../date-adder');

describe('date adder', () => {
  const testDate = new Date ('10/21/19');
  const secondsDiff = '10s';
  const minutesDiff = '10m';
  const hoursDiff = '2h';
  const daysDiff = '2d';
  const weekDiff = '1w';

  it('adds seconds to a time object', () => {
    const newDate = dateAdder(testDate, secondsDiff);
    expect(newDate.toUTCString()).toBe('Mon, 21 Oct 2019 07:00:10 GMT');
  });

  it('adds minutes to a time object', () => {
    const newDate = dateAdder(testDate, minutesDiff);
    expect(newDate.toUTCString()).toBe('Mon, 21 Oct 2019 07:10:00 GMT');
  });

  it('adds hours to a time object', () => {
    const newDate = dateAdder(testDate, hoursDiff);
    expect(newDate.toUTCString()).toBe('Mon, 21 Oct 2019 09:00:00 GMT');
  });

  it('adds days to a time object', () => {
    const newDate = dateAdder(testDate, daysDiff);
    expect(newDate.toUTCString()).toBe('Wed, 23 Oct 2019 07:00:00 GMT');
  });

  it('adds a week to a time object', () => {
    const newDate = dateAdder(testDate, weekDiff);
    expect(newDate.toUTCString()).toBe('Mon, 28 Oct 2019 07:00:00 GMT');
  });
});