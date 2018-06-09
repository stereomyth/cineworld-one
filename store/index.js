import Vuex from 'vuex';
import { DateTime } from 'luxon';

import opts from '~/store/options';

const store = () => {
  const store = new Vuex.Store({
    modules: { opts },

    state: {
      now: '',
    },

    mutations: {
      updateTime(state, now) {
        state.now = now;
      },
    },

    getters: {
      ztime(state) {
        return state.now ? state.now.toFormat("yyyy-MM-dd'T'HH:mm:ss'Z'") : '';
      },
    },

    actions: {
      start({ dispatch }) {
        dispatch('now');
        setInterval(() => dispatch('now'), 1000 * 60);
      },

      now({ commit, state }) {
        const d = DateTime.local();
        const today = d.toISODate();

        commit('updateTime', d);

        if (
          today > state.opts.day ||
          d.plus({ days: 4 }).toISODate() < state.opts.day
        ) {
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
