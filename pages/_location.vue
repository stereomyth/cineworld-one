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
    <div class="row">
      <Film v-for="film in films" :key="film.id" :film="film"
        class="col-md-6 col-lg-4 col-xl-3" />
    </div>
  </section>
</template>

<style lang="scss">
</style>
