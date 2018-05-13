<script>
export default {
  computed: {
    locations() {
      return this.$store.state.locations;
    },
  },
};
</script>

<template>
  <section class="container">
    <h2>Locations</h2>
     <div class="flex">
      <nuxt-link :to="location.slug" v-for="location in locations" :key="location.slug" class="cinema">
        {{ location.name }}
      </nuxt-link>
    </div>
  </section>
</template>

<style>
div {
  box-sizing: border-box;
}
.cinema {
  padding: 3px;
  width: 25%;
  font-size: 12px;
  display: block;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
