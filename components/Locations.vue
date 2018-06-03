<script>
import { clamp } from 'lodash';

export default {
  props: ['list'],

  created: function() {
    if (process.client) {
      document.addEventListener('keydown', this.globalKeys);
    }
  },

  destroyed: function() {
    if (process.client) {
      document.removeEventListener('keydown', this.globalKeys);
    }
  },

  data() {
    return {
      term: '',
      selected: 0,
      keyb: false,
    };
  },

  computed: {
    locations() {
      return this.list.filter(l => {
        return l.name.toLowerCase().indexOf(this.term.toLowerCase()) >= 0;
      });
    },
  },

  watch: {
    locations() {
      this.selected = this.clamp(this.selected);
    },
  },

  methods: {
    choose(location) {
      location = location || this.locations[this.selected];
      this.$store.commit('setLocation', location);
      this.$router.push(location.slug);
    },
    clamp(val) {
      return clamp(val, 0, this.locations.length - 1);
    },
    clear() {
      this.term = '';
    },
    globalKeys(event) {
      if (event.keyCode === 40) {
        event.preventDefault();
        this.navigate(+1);
      } else if (event.keyCode === 38) {
        event.preventDefault();
        this.navigate(-1);
      } else if (event.keyCode === 13) {
        event.preventDefault();
        this.choose();
      } else {
        this.$refs.search.focus();
      }
    },
    navigate(dir) {
      if (!this.keyb) {
        this.keyb = true;
      } else {
        this.selected = this.clamp(this.selected + dir);
      }
    },
  },
};
</script>

<template>
  <div class="container">

    <h3>Select location</h3>

    <input type="text" placeholder="search" class="search" v-model="term"
      @keyup.esc="clear" ref="search">

    <transition-group name="list" class="row list">
      <div class="cinema col-sm-6" @click="choose(location)"
        v-for="(location, index) in locations" :key="location.slug"
        :class="{selected: index === selected && keyb}">
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
  padding-bottom: 5px;
  padding-top: 5px;

  &.selected {
    background-color: red;
    color: white;
  }
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
