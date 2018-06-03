<script>
export default {
  computed: {
    location() {
      return this.$store.state.opts.location;
    },
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

  </div>
</template>

<style lang="scss">
.label {
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1em;
}
</style>
