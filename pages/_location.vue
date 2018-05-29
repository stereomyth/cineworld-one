<script>
import remedy from '~/plugins/remedy';
import Film from '~/components/Film';

export default {
  components: { Film },
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
      <Film v-for="film in films" :key="film.id" :film="film" />
    </div>
  </section>
</template>

<style lang="scss">
.film {
  padding: 3px;
  width: 50%;
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
