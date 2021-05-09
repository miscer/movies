<template>
  <section class="movie-search">
    <h1 class="title">Movie search</h1>
    <div class="body">
      <nav class="sidebar">
        <Filters v-model:filters="selectedFilters" />
      </nav>
      <div class="main">
        <MovieList :params="listParams" />
      </div>
    </div>
  </section>
</template>

<script>
import debounce from "lodash/debounce";
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
      selectedFilters: undefined,
      listParams: getListParams(),
    };
  },
  watch: {
    selectedFilters: debounce(function (filters) {
      this.listParams = getListParams(filters);
    }, 500),
  },
};

const getListParams = (filters = {}) => {
  const params = {};

  if (filters.title) params.title = filters.title;
  if (filters.genre?.length > 0) params.genre = filters.genre;

  if (filters.period) {
    params.from = new Date(Date.UTC(filters.period, 0));
    params.to = new Date(Date.UTC(filters.period + 9, 11, 31, 23, 59, 59));
  }

  return params;
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

@media (max-width: 1000px) {
  .main {
    width: 70%;
  }

  .sidebar {
    width: 30%;
  }
}

@media (max-width: 650px) {
  .body {
    flex-direction: column;
    align-items: stretch;
  }

  .main,
  .sidebar {
    order: initial;
    width: auto;
  }

  .sidebar {
    padding-left: 0;
    position: static;
  }
}
</style>
