<template>
  <div id="app">
    <p>
      <label for="filter-title">Title:</label>
      <input v-model="title" id="filter-title" />
    </p>
    <p>
      <label for="filter-year">Release year:</label>
      <input v-model="year" id="filter-year" />
    </p>
    <MovieList :title="title || undefined" :year="year || undefined" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: "App",
  components: {
    MovieList,
  },
  data() {
    return {
      title: "",
      year: "",
    };
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
