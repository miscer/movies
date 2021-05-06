<template>
  <div id="app">
    <label for="filter-title">Title:</label>
    <input v-model="title" id="filter-title" />
    <MovieList :title="title" />
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
