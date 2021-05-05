<template>
  <div class="movie-list">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :release-date="new Date(movie.release_date)"
      :genres="movie.genre.map((g) => g.title)"
      :actors="movie.actors.map((a) => a.name)"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import Movie from "@/components/Movie.vue";
import { fetchMovies } from "@/api.js";

export default {
  name: "MovieList",
  components: {
    Movie,
  },
  setup() {
    const movies = ref([]);
    const getMovies = async () => {
      movies.value = await fetchMovies();
    };

    onMounted(getMovies);

    return { movies };
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
