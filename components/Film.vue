<script>
import { mapState } from 'vuex';

import Screen from '~/components/Screen';

export default {
  components: { Screen },
  props: ['film'],

  filters: {
    hours(value) {
      if (!value) return '';
      const hours = Math.floor(value / 60);
      const mins = value % 60;
      return (hours ? hours + 'h ' : '') + (mins ? mins + 'm' : '');
    },
  },

  computed: {
    // day() {
    //   return this.$store.state.opts.day;
    // },
    screens() {
      // return this.film.screens.filter(sc);
      return Object.keys(this.film.screens).reduce((acc, screen) => {
        const dayShows = this.film.screens[screen].filter(show => {
          return show.date.includes(this.day);
        });

        if (dayShows.length && this.screenTypes[screen].show) {
          acc[screen] = dayShows;
        }

        return acc;
      }, {});
    },
    hasScreens() {
      return Object.keys(this.screens).length;
    },
    hidden() {
      return this.$store.state.opts.hidden.includes(this.film.slug);
    },

    ...mapState({
      showHidden: state => state.opts.showHidden,
      day: state => state.opts.day,
      screenTypes: state => state.opts.screens,
    }),
  },

  methods: {
    toggle() {
      this.$store.commit('toggleFilm', this.film.slug);
    },
  },
};
</script>

<template>
  <div class="film" v-if="hasScreens && (!hidden || showHidden)" :class="{hidden}" >
    <div class="poster-slot">
      <div class="poster" @click="toggle">
        <img :src="film.img" alt="">
      </div>
    </div>
    <div>
      <div class="title">{{ film.title }}</div>
      <div class="hours">{{ film.length | hours }}</div>
      <Screen v-for="(shows, type) in screens" :key="type" :shows="shows" :type="type" />
    </div>
  </div>
</template>

<style lang="scss">
.poster-slot {
  width: 100px;
  flex-shrink: 0;
}
.poster {
  height: 100px;
  height: 0;
  padding-bottom: (716/483) * 100%;
  overflow: hidden;
  background-color: #eee;

  img {
    width: 100%;
  }
}
.film {
  display: flex;
  margin-bottom: 20px;

  &.hidden {
    opacity: 0.5;
  }
}

.hours {
  // font-style: italic;
  color: #444;
}
</style>
