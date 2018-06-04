<script>
import { DateTime } from 'luxon';

export default {
  beforeCreate() {
    this.days = [];

    for (let i = 0; i < 4; i++) {
      const d = DateTime.local().plus({ days: i });
      this.days.push({
        title: d.toFormat('MMM d'),
        slug: d.toISODate(),
      });
    }
  },

  computed: {
    selected() {
      return this.$store.state.opts.day;
    },
  },

  methods: {
    select(day) {
      this.$store.commit('selectDay', day.slug);
    },
  },
};
</script>

<template>
  <div class="ds">
    <div v-for="day in days" :key="day.slug" class="day" :class="{selected: selected === day.slug}" @click="select(day)">
      {{day.title}}
    </div>
    <!-- <div>Today</div> -->
  </div>
</template>

<style lang="scss">
.ds {
  display: flex;

  div {
    padding: 10px;
  }
}

.day {
  &.selected {
    background-color: red;
    color: white;
  }
}
</style>
