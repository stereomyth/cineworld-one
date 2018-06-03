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
    },
  },
};
</script>

<template>
  <div class="container">

    <h3>Select location</h3>

    <input type="text" placeholder="search" class="search" v-model="term">

    <transition-group name="list" class="row">
      <div class="cinema col-sm-6" @click="choose(location)"
        v-for="location in locations" :key="location.slug">
        <div class="name">{{ location.name }}</div>
        <!-- <div class="postcode">{{ location.postcode }}</div> -->
      </div>
    </transition-group>

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
