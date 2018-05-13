import Vuex from 'vuex';
import data from '~/resource/data.js';

const store = () => {
  return new Vuex.Store({
    actions: {
      nuxtServerInit({ commit }, { req }) {
        return data.get().then(data => {
          commit('locations', data.locations);
          commit('films', data.films);
        });
      },
    },

    state: {
      locations: [],
      films: [],
    },

    mutations: {
      locations(state, locations) {
        state.locations = locations;
      },

      films(state, films) {
        state.films = films;
      },
    },
  });
};

export default store;
