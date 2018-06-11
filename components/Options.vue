<script>
import { mapState, mapMutations } from 'vuex';
import mapSetters from '~/plugins/mapSetters';

export default {
  computed: {
    ...mapState('opts', ['location']),
    ...mapSetters('opts', { theme: 'setTheme', screenTypes: 'setScreens' }),
  },
  methods: {
    ...mapMutations('opts', ['setScreens']),
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
      <div class="label">Theme</div>
      <div class="row">
        <div class="value col-6">
          Light
          <input type="radio" id="themeSel" value="light" v-model="theme">
        </div>
        <div class="value col-6">
          Dark
          <input type="radio" id="themeSel" value="dark" v-model="theme">
        </div>
      </div>
    </div>
    <hr>
    <div>
      <div class="label">Show Screening Types</div>
      <div class="row">
        <div class="value col-6" v-for="(screen, key) in screenTypes" :key="key">
          {{screen.name}}
          <input type="checkbox" v-model="screen.show">
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
