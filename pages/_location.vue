<script>
import { mapState, mapMutations } from 'vuex';

import remedy from '~/plugins/remedy';
import Film from '~/components/Film';
import DaySelect from '~/components/DaySelect';
import Options from '~/components/Options';

export default {
  components: { Film, DaySelect, Options },

  asyncData({ params }) {
    return remedy('weekly', params.location).then(data => {
      const { films, ...cinema } = data;
      return { films, cinema };
    });
  },

  created() {
    if (!this.location.name) {
      this.setLocation(this.cinema);
    }
  },

  computed: mapState('opts', ['showOptions', 'location']),
  methods: mapMutations('opts', ['setLocation']),
};
</script>

<template>
  <section class="container">
    <Options v-if="showOptions"/>
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
