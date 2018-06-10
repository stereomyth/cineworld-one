import { DateTime } from 'luxon';
import { without } from 'lodash';

export default {
  namespaced: true,

  state: {
    location: {},
    currentDay: '',
    hidden: [],
    showHidden: false,
    showOptions: false,
    screenTypes: {
      '2D': { name: '2D', show: true },
      '3D': { name: '3D', show: true },
      '2D-IMAX': { name: 'IMAX', show: true },
      '3D-IMAX': { name: 'IMAX 3D', show: true },
      '3D-4DX': { name: '4DX', show: true },
      '2D-4DX': { name: '4DX (2D)', show: true },
    },
  },

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
      state.currentDay = day;
    },

    setScreens(state, screens) {
      state.screenTypes = screens;
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
    toggleOptions(state) {
      state.showOptions = !state.showOptions;
    },
  },
};
