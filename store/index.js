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
        const d = new Date();

        state.day = `${d.getFullYear()}-${('0' + (d.getMonth() + 1)).slice(
          -2
        )}-${('0' + d.getDate()).slice(-2)}`;
      },
    },
  });
};

export default store;
