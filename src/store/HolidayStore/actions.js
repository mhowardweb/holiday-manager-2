import { uid } from 'quasar';
import * as types from '../types';

export function saveSettings({ commit }, settings) {
  const workDays = [];
  if (settings.sun) {
    workDays.push(0);
  }

  if (settings.mon) {
    workDays.push(1);
  }

  if (settings.tue) {
    workDays.push(2);
  }

  if (settings.wed) {
    workDays.push(3);
  }

  if (settings.thu) {
    workDays.push(4);
  }

  if (settings.fri) {
    workDays.push(5);
  }

  if (settings.sat) {
    workDays.push(6);
  }

  commit(types.SAVE_SETTINGS, { settings, workDays });

  this.$router.replace({ path: 'holidays' });
}

export function addHoliday({ commit }, holiday) {
  const setId = uid();
  holiday = { ...holiday, id: setId };

  commit(types.ADD_HOLIDAY, holiday);
  this.$router.replace({ path: 'holidays' });
}

export function deleteHoliday({ state, commit }, holiday) {
  const oldHols = state.holidays;
  const holidays = oldHols.filter(hols => hols.id !== holiday.id);
  commit(types.DELETE_HOLIDAY, holidays);
}

export function clearForm({ commit }) {
  const holiday = {
    holName: '',
    holStart: '',
    holEnd: '',
    daysBooked: 0,
    details: '',
  };
  commit(types.CLEAR_FORM, holiday);
}

export function selectHoliday({ commit }, id) {
  commit(types.SELECT_HOLIDAY, id);

  this.$router.replace({ path: 'edit' });
}

/**
 *
 * copies holidays array, finds holiday by id and overwrites it.
 * @param {*} holiday
 */
export function updateHoliday({ state, commit }, holiday) {
  const { holidays } = state.holidays;
  const index = holidays.findIndex(obj => obj.id === holiday.id);
  holidays[index] = holiday;
  commit(types.UPDATE_HOLIDAY, holidays);
  this.$router.replace({ path: 'holidays' });
}
