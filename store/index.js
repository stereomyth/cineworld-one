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
      day: '',
    },

    mutations: {
      setDay(state) {
        const date = new Date();
        const y = date.getFullYear();
        const m = ('0' + (date.getMonth() + 1)).slice(-2);
        const d = ('0' + date.getDate()).slice(-2);

        state.day = `${y}-${m}-${d}`;
      },
    },
  });
};

export default store;
