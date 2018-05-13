<script>
import locations from '~/resource/locations';

export default {
  asyncData() {
    return locations.get().then(locations => {
      return { locations };
    });
  },
};
</script>

<template>
  <section class="container">
    <h2>Locations</h2>
     <div class="flex">
      <router-link :to="location.slug" v-for="location in locations" :key="location.slug" class="cinema">
        {{ location.name }}
      </router-link>
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
