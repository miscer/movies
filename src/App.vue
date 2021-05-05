<template>
  <div id="app">
    <Movie
      title="The Notebook"
      :release-date="new Date('2004-06-25T00:00:00.000000Z')"
      :genres="['Drama', 'Romance']"
      :actors="['Ryan Gosling', 'Rachel McAdams']"
    />
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";

export default {
  name: "App",
  components: {
    Movie,
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
