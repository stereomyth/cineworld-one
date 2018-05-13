<script>
import AppLogo from '~/components/AppLogo.vue';
import data from '~/resource/data.js';

export default {
  components: { AppLogo },

  created() {
    // this.$nuxt.$loading.start();
    data.get().then(data => {
      this.locations = data.locations;
      this.films = data.films;
    });
  },

  data() {
    return {
      films: [],
      locations: [],
    };
  },
};
</script>

<template>
  <section class="container">
    <h2>Films</h2>
    <div class="flex">
      <div v-for="film in films" :key="film.id" class="film">
        {{ film.title }}
        <!-- <p>{{location.postcode}}</p> -->
      </div>
    </div>
    <h2>Locations</h2>
    <div class="flex">
      <div v-for="location in locations" :key="location.slug" class="cinema">
        {{ location.name }}
        <!-- <p>{{location.postcode}}</p> -->
      </div>
    </div>
  </section>
</template>

<style>
.cinema {
  padding: 3px;
  /* margin: 3px; */
  width: 25%;
  font-size: 12px;
}

.film {
  padding: 3px;
  /* margin: 3px; */
  width: 50%;
  font-size: 12px;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
