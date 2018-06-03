<script>
import remedy from '~/plugins/remedy';

import Intro from '~/components/Intro';
import Locations from '~/components/Locations';

export default {
  components: { Intro, Locations },

  asyncData() {
    return remedy('locations').then(data => ({ locations: data }));
  },

  data() {
    return {};
  },
};
</script>

<template>
  <section>
    <Intro/>
    <Locations :list="locations"/>
  </section>
</template>

<style lang="scss">
</style>
