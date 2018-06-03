import Vuex from 'vuex';
import { DateTime } from 'luxon';

const store = () => {
  return new Vuex.Store({
    // actions: {
    //   nuxtServerInit({ commit }, { req }) {
    //     return data.get().then(data => {
    //       commit('locations', data.locations);
    //       commit('films', data.films);
    //       commit('weekly', data.weekly);
    //     });
    //   },
    // },

    state: {
      day: '',
    },

    mutations: {
      setDay(state) {
        state.day = DateTime.local().toISODate();
      },
    },
  });
};

export default store;
