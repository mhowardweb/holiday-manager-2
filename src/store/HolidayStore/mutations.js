import * as types from '../types';

const mutations = {
  [types.SAVE_SETTINGS]: (state, { settings, workDays }) => {
    state.settings = settings;
    state.workDays = workDays;
  },
  [types.ADD_HOLIDAY]: (state, holiday) => {
    state.holidays.push(holiday);
  },
  [types.UPDATE_HOLIDAY]: (state, holidays) => {
    state.holidays = holidays;
  },
  [types.DELETE_HOLIDAY]: (state, holidays) => {
    state.holidays = holidays;
  },
  [types.SELECT_HOLIDAY]: (state, id) => {
    state.holiday = id;
  },
  [types.CLEAR_FORM]: (state, holiday) => {
    state.holiday = holiday;
  },
};

export default mutations;
