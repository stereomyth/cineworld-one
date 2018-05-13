<script>
export default {
  methods: {
    log(message) {
      console.log(message);
    },
  },

  computed: {
    location() {
      return this.$store.state.locations[0];
    },
  },
};
</script>

<template>
  <section class="container">
    <pre>location: {{location}}</pre>
    <!-- <h2>Films</h2>
    <div class="flex">
      <div v-for="film in films" :key="film.id" class="film" @click="log('hello')">
        {{ film.title }}
      </div>
    </div> -->
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
