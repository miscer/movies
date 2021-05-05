<template>
  <div class="movie-list">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :release-date="movie.releaseDate"
      :genres="movie.genre.map((g) => g.title)"
      :actors="movie.actors.map((a) => a.name)"
    />
  </div>
</template>

<script>
import Movie from "@/components/Movie.vue";

export default {
  name: "MovieList",
  components: {
    Movie,
  },
  props: {
    movies: Array,
  },
};
</script>

<style scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
}
</style>
