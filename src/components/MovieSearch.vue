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

      if (filters.title) params.title = filters.title;
      if (filters.genre?.length > 0) params.genre = filters.genre;

      if (filters.period) {
        params.from = new Date(Date.UTC(filters.period, 0));
        params.to = new Date(Date.UTC(filters.period + 9, 11, 31, 23, 59, 59));
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
