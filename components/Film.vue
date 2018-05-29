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
};
</script>

<template>
  <div class="film">
    <div class="poster">
      <!-- <img :src="film.img" alt=""> -->
    </div>
    <div>
      <div>{{ film.title }}</div>
      <div>{{ film.length | hours }}</div>
      <Screen v-for="(shows, type) in film.screens" :key="type" :shows="shows" :type="type" />
    </div>
  </div>
</template>

<style lang="scss">
.poster {
  width: 100px;

  img {
    width: 100%;
  }
}
.film {
  display: flex;
}
</style>
