import { DateTime } from 'luxon';
import { without } from 'lodash';

export default {
  state: { location: {}, day: '', hidden: [], showHidden: false },

  mutations: {
    getOpts(state) {
      if (typeof localStorage != 'undefined' && localStorage.opts) {
        state = Object.assign(state, JSON.parse(localStorage.opts));
      }
    },

    setLocation(state, location) {
      state.location = location;
    },

    setDay(state, day) {
      state.day = day;
    },

    toggleFilm(state, film) {
      if (state.hidden.includes(film)) {
        state.hidden = without(state.hidden, film);
      } else {
        state.hidden.push(film);
      }
    },

    toggleHidden(state) {
      state.showHidden = !state.showHidden;
    },
  },
};
