<template>
  <div class="app">
    <MovieSearch />
  </div>
</template>

<script>
import MovieSearch from "@/components/MovieSearch.vue";

export default {
  name: "App",
  components: {
    MovieSearch,
  },
};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

html {
  font-family: Ubuntu, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 20px;
}
</style>
