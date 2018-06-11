<script>
import { DateTime } from 'luxon';
import { mapState } from 'vuex';

import HeadBar from '~/components/HeadBar';
import FootBar from '~/components/FootBar';

export default {
  components: { HeadBar, FootBar },

  beforeCreate() {
    this.$store.commit('opts/getOpts');
    this.$store.dispatch('start');
  },

  computed: mapState('opts', ['theme']),
};
</script>

<template>
  <div class="main" :class="[theme]">
    <HeadBar/>
    <nuxt class="page" />
    <FootBar/>
  </div>
</template>

<style lang="scss">
body {
  font-family: 'sofia-pro';
}

.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &.dark {
    background-color: #333;
    color: #eee;
  }
}

.page {
  flex-grow: 1;
}

pre {
  background-color: #eee;
  padding: 10px;
  font-size: 10px;
}
</style>
