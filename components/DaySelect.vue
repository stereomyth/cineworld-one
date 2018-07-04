<script>
import { DateTime } from 'luxon';
import { mapMutations, mapState } from 'vuex';

const names = ['Today', 'Tomorrow', '', ''];

export default {
  computed: {
    ...mapState('opts', ['currentDay']),

    days() {
      const today = this.$store.state.now;

      return names.map((name, i) => {
        const d = today.plus({ days: i });

        return {
          name: name || d.toFormat('cccc'),
          date: d.toFormat('MMM d'),
          slug: d.toISODate(),
        };
      });
    },
  },

  methods: {
    ...mapMutations('opts', ['setDay']),
  },
};
</script>

<template>
  <div class="ds">
    <div v-for="day in days" :key="day.slug" class="day"
      :class="{selected: currentDay === day.slug}" @click="setDay(day.slug)">
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
  user-select: none;

  &.selected {
    background-color: red;
    color: white;
  }
}

.name {
  font-weight: bold;
}
</style>
