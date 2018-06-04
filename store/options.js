import { DateTime } from 'luxon';

export default {
  state: { location: {}, day: '' },

  mutations: {
    getOpts(state) {
      if (typeof localStorage != 'undefined' && localStorage.opts) {
        state = Object.assign(state, JSON.parse(localStorage.opts));
      }
    },

    setLocation(state, location) {
      state.location = location;
    },

    selectDay(state, day) {
      state.day = day || DateTime.local().toISODate();
    },
  },
};
