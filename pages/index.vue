<script>
import axios from 'axios';

export default {
  asyncData() {
    const db = `https://firestore.googleapis.com/v1beta1/projects/splice-cw/databases/(default)/documents/`;

    return axios
      .get(db + 'locations', { params: { pageSize: 200 } })
      .then(res => ({
        locations: res.data.documents,
      }));
  },
};
</script>

<template>
  <section class="container">
    <h2>Locations</h2>
    <div class="flex">
      <nuxt-link :to="location.fields.slug.stringValue" v-for="location in locations" :key="location.fields.slug.stringValue" class="cinema">
        {{ location.fields.name.stringValue }}
      </nuxt-link>
    </div>
  </section>
</template>

<style>
div {
  box-sizing: border-box;
}
.cinema {
  padding: 3px;
  width: 25%;
  font-size: 12px;
  display: block;
}

.flex {
  display: flex;
  flex-wrap: wrap;
}
</style>
