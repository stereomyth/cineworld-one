<script>
import data from '~/resource/data.js';

export default {
  asyncData(context) {
    return data.get().then(data => {
      return {
        locations: data.locations,
        films: data.films,
      };
    });
  },
};
</script>

<template>
  <section class="container">
    <h2>Films</h2>
    <div class="flex">
      <div v-for="film in films" :key="film.id" class="film">
        {{ film.title }}
      </div>
    </div>
    <h2>Locations</h2>
    <div class="flex">
      <div v-for="location in locations" :key="location.slug" class="cinema">
        {{ location.name }}
      </div>
    </div>
  </section>
</template>

<style>
div {
  box-sizing: border-box;
}
.cinema {
  padding: 3px;
  /* margin: 3px; */
  width: 25%;
  font-size: 12px;
}

.film {
  padding: 3px;
  /* margin: 3px; */
  width: 33.3%;
  font-size: 12px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
