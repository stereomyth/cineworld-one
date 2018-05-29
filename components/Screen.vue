<script>
const types = {
  '3D-IMAX': 'IMAX 3D',
  '2D-IMAX': 'IMAX',
  '3D-4DX': '4DX',
  '2D-4DX': '4DX (2D)',
};

export default {
  props: ['shows', 'type'],

  filters: {
    hours(value) {
      if (!value) return '';
      const hours = Math.floor(value / 60);
      const mins = value % 60;
      return (hours ? hours + 'h ' : '') + (mins ? mins + 'm' : '');
    },
  },

  computed: {
    title() {
      return types[this.type] || this.type;
    },
  },
};
</script>

<template>
  <div class="screen">
    <h3>{{ title }}</h3>
    <div v-for="show in shows" :key="show.date">
      {{show.date}}
    </div>
  </div>
</template>

<style lang="scss">
</style>
