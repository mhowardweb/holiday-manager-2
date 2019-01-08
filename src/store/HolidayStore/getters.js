/* eslint-disable import/prefer-default-export */

export function calcSummary(state) {
  const {
    daysHol, bankHols, yearEnd, name,
  } = state.settings;
  let totals = 0;
  state.holidays.forEach((holiday) => {
    totals += holiday.daysBooked;
  });
  const totalDaysHol =
    parseInt(daysHol, 10) + parseInt(bankHols, 10);
  const totalDaysUsed = totals;
  const totalDaysRemaining = totalDaysHol - totalDaysUsed;
  return {
    totalDaysHol, totalDaysRemaining, totalDaysUsed, yearEnd, name,
  };
}

export function getHolidays(state) {
  // Get holidays array and sort by holStart
  const data = state.holidays;
  return data.sort((a, b) => a[data.holStart] > b[data.holStart]);
}

export function getWorkDays(state) {
  const data = state.workDays;
  return data;
}

export function getSettings(state) {
  const data = state.settings;
  return data;
}
