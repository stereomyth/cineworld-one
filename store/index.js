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
      today(state) {
        state.today = DateTime.local().toISODate();
      },
    },

    actions: {
      days({ commit, state }) {
        commit('today');
        // commit('selectDay', state.opts.day);
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
