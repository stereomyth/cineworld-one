<script>
import { mapState, mapMutations } from 'vuex';

export default {
  created() {
    this.screens = Object.assign({}, this.screenTypes);
  },
  computed: {
    ...mapState('opts', ['location', 'screenTypes']),
  },
  methods: {
    ...mapMutations('opts', ['setScreens']),
  },
  data() {
    return {
      screens: {},
    };
  },
};
</script>

<template>
  <div class="container">
    <h3>Options</h3>
    <div>
      <div class="label">Location</div>
      <div class="value">{{location.name}}</div>
    </div>
    <hr>
    <div>
      <div class="label">Show Screening Types</div>
      <div class="row">
        <div class="value col-6" v-for="(screen, key) in screens" :key="key">
          {{screen.name}}
          <input type="checkbox" v-model="screen.show" @change="setScreens(screens)">
        </div>
      </div>
    </div>
    <hr>

  </div>
</template>

<style lang="scss">
.label {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;
}
input {
  float: right;
}
</style>
