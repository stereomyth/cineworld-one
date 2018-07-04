<script>
import { DateTime } from 'luxon';
import { mapGetters, mapState } from 'vuex';

export default {
  props: ['shows', 'type'],

  filters: {
    time(value) {
      return value.split('T')[1].split(':00Z')[0];
    },
  },

  computed: {
    title() {
      return this.screenTypes[this.type] || this.type;
    },
    not2d() {
      return this.type !== '2D';
    },
    ...mapState(['screenTypes']),
  },
};
</script>

<template>
  <div class="screen">
    <h3 v-if="not2d">{{ title }}</h3>
    <div class="shows">
      <div v-for="show in shows" :key="show.date" class="show">
        {{ show.date | time }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shows {
  display: flex;
  flex-wrap: wrap;
}
.show {
  padding: 2px 4px;
}
</style>
