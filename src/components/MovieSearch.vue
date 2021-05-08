<template>
  <section class="movie-search">
    <h1 class="title">Movie search</h1>
    <div class="body">
      <nav class="sidebar">
        <Filters v-model:filters="filters" />
      </nav>
      <div class="main">
        <MovieList :params="listParams" />
      </div>
    </div>
  </section>
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
.title {
  font-size: 2rem;
}

.body {
  display: flex;
  align-items: flex-start;
}

.main {
  order: 0;
  width: 75%;
}

.sidebar {
  order: 1;
  width: 25%;
  padding-left: 40px;
  position: sticky;
  top: 40px;
}
</style>
