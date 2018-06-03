<script>
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
    day() {
      return this.$store.state.day;
    },
    screens() {
      // return this.film.screens.filter(sc);
      return Object.keys(this.film.screens).reduce((acc, screen) => {
        const dayShows = this.film.screens[screen].filter(show => {
          return show.date.includes(this.day);
        });

        if (dayShows.length) {
          acc[screen] = dayShows;
        }

        return acc;
      }, {});
    },
    hasScreens() {
      return Object.keys(this.screens).length;
    },
  },
};
</script>

<template>
  <div class="film" v-if="hasScreens">
    <div class="poster-slot">
      <div class="poster">
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
}

.hours {
  // font-style: italic;
  color: #444;
}
</style>
