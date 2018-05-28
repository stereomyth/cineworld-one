<script>
export default {};
</script>

<template>
  <header>
    <div class="button"></div>
    <h1 class="brand">Cineworld <span>One</span></h1>
    <div class="button"></div>
  </header>
</template>

<style lang="scss">
header {
  background-color: red;
  color: white;
  display: flex;
  height: 60px;
  align-items: center;
  margin-bottom: 10px;
}

.brand {
  font-weight: 100;
  font-size: 1.3rem;
  flex-grow: 1;
  text-align: center;
  margin-bottom: 0;

  span {
    font-weight: 900;
  }
}

.button {
  width: 60px;
}
</style>
