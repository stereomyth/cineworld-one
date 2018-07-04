import { DateTime } from 'luxon';
import { without } from 'lodash';

export default {
  namespaced: true,

  state: {
    currentDay: '',
    hidden: [],
    location: {},
    showHidden: false,
    showOptions: false,
    showScreens: {
      '2D': true,
      '3D': true,
      '2D-IMAX': true,
      '3D-IMAX': true,
      '3D-4DX': true,
      '2D-4DX': true,
    },
    theme: 'light',
  },

  mutations: {
    getOpts(state) {
      if (typeof localStorage != 'undefined' && localStorage.opts) {
        state = Object.assign(state, JSON.parse(localStorage.opts));
      }
    },

    setDay(state, day) {
      state.currentDay = day;
    },
    setLocation(state, location) {
      state.location = location;
    },
    setScreens(state, slug) {
      state.showScreens[slug] = !state.showScreens[slug];
    },
    setTheme(state, theme) {
      state.theme = theme;
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
