<script>
import { DateTime } from 'luxon';

import HeadBar from '~/components/HeadBar';
import FootBar from '~/components/FootBar';

export default {
  components: { HeadBar, FootBar },

  beforeCreate() {
    this.$store.commit('getOpts');
    this.$store.dispatch('start');
  },
};
</script>

<template>
  <div class="main">
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
