<script>
export default {
  props: ['list'],

  data() {
    return {
      term: '',
    };
  },

  computed: {
    locations() {
      return this.list.filter(l => {
        return l.name.toLowerCase().indexOf(this.term.toLowerCase()) >= 0;
      });
    },
  },

  methods: {
    choose(location) {
      this.$store.commit('setLocation', location);
      this.$router.push(location.slug);
    },
    clear() {
      this.term = '';
    },
  },
};
</script>

<template>
  <div class="container">

    <h3>Select location</h3>

    <input type="text" placeholder="search" class="search" v-model="term" @keyup.esc="clear">

    <transition-group name="list" class="row list">
      <div class="cinema col-sm-6" @click="choose(location)"
        v-for="location in locations" :key="location.slug">
        <div class="name">{{ location.name }}</div>
        <!-- <div class="postcode">{{ location.postcode }}</div> -->
      </div>
    </transition-group>
    <div v-if="!locations.length">No matching locations</div>

  </div>
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
  color: black;
  margin-bottom: 5px;
  margin-top: 5px;
}

.name {
  font-size: 16px;
  font-weight: 100;
}

.postcode {
  font-size: 12px;
  font-weight: 600;
}
.list {
  // margin: 10px 0;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
