import Vuex from 'vuex';

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
      // locations: [],
      // films: [],
      day: '',
    },

    mutations: {
      // weekly(state, weekly) {
      //   state.weekly = weekly;
      // },

      // locations(state, locations) {
      //   state.locations = locations;
      // },

      // films(state, films) {
      //   state.films = films;
      // },

      setDay(state) {
        const d = new Date();
        const m = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : d.getMonth();
        state.day = `${d.getFullYear()}-${m}-${d.getDate()}`;
      },
    },
  });
};

export default store;
