<script>
import remedy from '~/plugins/remedy';

export default {
  asyncData() {
    return remedy('locations').then(data => ({ locations: data }));
  },
};
</script>

<template>
  <section class="container">
    <h2>Locations</h2>
     <div class="row">
      <input type="text" placeholder="search" class="search">
      <nuxt-link :to="location.slug" class="cinema col-sm-6"
        v-for="location in locations" :key="location.slug">
        <div class="name">{{ location.name }}</div>
        <!-- <div class="postcode">{{ location.postcode }}</div> -->
      </nuxt-link>
    </div>
  </section>
</template>

<style lang="scss">
.search {
  width: 100%;
  background-color: #eee;
  border: none;
  padding: 10px 0;
  padding-left: 15px;
}
.cinema {
  //   padding: 3px;
  //   width: 25%;
  //   font-size: 12px;
  //   display: block;
  color: black;
  margin-bottom: 10px;
}

.name {
  font-size: 16px;
  font-weight: 100;
}

.postcode {
  font-size: 12px;
  font-weight: 600;
}
</style>
