<template>
  <div id="app">
    <Filters v-model:filters="filters" />
    <MovieList :params="listParams" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "App",
  components: {
    Filters,
    MovieList,
  },
  data() {
    return {
      filters: undefined,
    };
  },
  computed: {
    listParams() {
      const filters = this.filters ?? {};
      const params = {};

      for (const name in filters) {
        if (filters[name]) params[name] = filters[name];
      }

      return params;
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
