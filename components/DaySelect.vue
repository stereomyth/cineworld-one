<script>
import { DateTime } from 'luxon';

const names = ['Today', 'Tomorrow'];

export default {
  // beforeCreate() {
  //   this.days = [];

  //   for (let i = 0; i < 4; i++) {
  //     const d = DateTime.local().plus({ days: i });
  //     this.days.push({
  //       name: d.toFormat('cccc'),
  //       date: d.toFormat('MMM d'),
  //       slug: d.toISODate(),
  //     });
  //   }
  // },

  computed: {
    selected() {
      return this.$store.state.opts.day;
    },

    days() {
      const days = [];

      for (let i = 0; i < 4; i++) {
        const d = DateTime.local().plus({ days: i });
        days.push({
          name: i < 2 ? names[i] : d.toFormat('cccc'),
          date: d.toFormat('MMM d'),
          slug: d.toISODate(),
        });
      }

      return days;
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
    <div v-for="day in days" :key="day.slug" class="day"
      :class="{selected: selected === day.slug}" @click="select(day)">
      <div class="name">{{ day.name }}</div>
      {{day.date}}
    </div>
    <!-- <div>Today</div> -->
  </div>
</template>

<style lang="scss">
.ds {
  display: flex;
}

.day {
  padding: 10px;
  &.selected {
    background-color: red;
    color: white;
  }
}

.name {
  font-weight: bold;
}
</style>
