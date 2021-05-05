<template>
  <div id="app">
    <MovieList />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: "App",
  components: {
    MovieList,
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
