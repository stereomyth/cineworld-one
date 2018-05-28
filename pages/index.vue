<script>
import remedy from '~/plugins/remedy';

export default {
  asyncData() {
    return remedy('locations').then(data => ({ locations: data }));
  },
};
</script>

<template>
  <section class="container">
    <h2>Locations</h2>
     <div class="flex">
      <nuxt-link :to="location.slug" class="cinema"
        v-for="location in locations" :key="location.slug">
        {{ location.name }}
      </nuxt-link>
    </div>
  </section>
</template>

<style>
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
