import Vuex from 'vuex';
import { DateTime } from 'luxon';

import opts from '~/store/options';

const store = () => {
  const store = new Vuex.Store({
    modules: { opts },

    state: {
      today: '',
    },

    mutations: {
      today(state, today) {
        state.today = today;
      },
    },

    actions: {
      days({ commit, state, dispatch }) {
        const d = DateTime.local();
        const today = d.toISODate();
        const end = d.plus({ days: 4 }).toISODate();

        commit('today', today);

        if (today > state.opts.day || end < state.opts.day) {
          commit('setDay', today);
        }
      },
    },
  });

  store.subscribe((mutation, state) => {
    if (typeof localStorage != 'undefined') {
      localStorage.opts = JSON.stringify(state.opts);
    }
  });

  return store;
};

export default store;
