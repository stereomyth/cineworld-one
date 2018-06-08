<script>
import remedy from '~/plugins/remedy';
import Film from '~/components/Film';
import DaySelect from '~/components/DaySelect';

export default {
  components: { Film, DaySelect },
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
    <DaySelect/>
    <h1>{{cinema.name}}</h1>
    <no-ssr>
      <div class="row">
        <Film v-for="film in films" :key="film.id" :film="film"
          class="col-md-6 col-lg-4 col-xl-3" />
      </div>
    </no-ssr>
  </section>
</template>

<style lang="scss">
</style>
