<script>
import remedy from '~/plugins/remedy';

export default {
  asyncData({ params }) {
    return remedy('weekly', params.location).then(data => {
      const { films, ...cinema } = data;
      return { films, cinema };
    });
  },
};
</script>

<template>
  <section class="container">
    <h1>{{cinema.name}}</h1>
    <h2>Films</h2>
    <div class="flex">
      <div v-for="film in films" :key="film.id" class="film">
        <img :src="film.img" alt="">
        <div>{{ film.title }}</div>
        <div>{{ film.length }}m</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.film {
  padding: 3px;
  width: 20%;
  font-size: 12px;

  img {
    width: 100px;
  }
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
