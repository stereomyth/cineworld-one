import Vuex from 'vuex';
import { DateTime } from 'luxon';

import opts from '~/store/opts';

const store = () => {
  const store = new Vuex.Store({
    modules: { opts },

    state: {
      day: '',
    },

    mutations: {
      setDay(state) {
        state.day = DateTime.local().toISODate();
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
