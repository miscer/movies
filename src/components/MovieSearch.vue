<template>
  <div class="movie-search">
    <header class="header">
      <h1 class="title">Movie search</h1>
      <Filters v-model:filters="filters" />
    </header>
    <MovieList :params="listParams" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import Filters from "@/components/Filters.vue";

export default {
  name: "MovieSearch",
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

<style lang="less" scoped>
.header {
  margin-bottom: 40px;
}

.title {
  font-size: 2rem;
}
</style>
