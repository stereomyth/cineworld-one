<script>
import { DateTime } from 'luxon';

const names = ['Today', 'Tomorrow', '', ''];

export default {
  computed: {
    selected() {
      return this.$store.state.opts.day;
    },

    days() {
      const today = DateTime.fromISO(this.$store.state.today);

      return names.map((name, i) => {
        const d = today.plus({ days: i });

        return {
          name: name ? name : d.toFormat('cccc'),
          date: d.toFormat('MMM d'),
          slug: d.toISODate(),
        };
      });
    },
  },

  methods: {
    select(day) {
      this.$store.commit('setDay', day.slug);
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
