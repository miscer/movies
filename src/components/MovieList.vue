<template>
  <div class="movie-list">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :release-date="new Date(movie.release_date)"
      :genres="movie.genres.map((g) => g.title)"
      :actors="movie.actors.map((a) => a.name)"
      :poster-url="movie.poster_url"
    />
  </div>
</template>

<script>
import { ref, toRefs, watch, onMounted } from "vue";
import Movie from "@/components/Movie.vue";
import { fetchMovies } from "@/api.js";

export default {
  name: "MovieList",
  components: {
    Movie,
  },
  props: {
    params: Object,
  },
  setup(props) {
    const { params } = toRefs(props);
    const movies = ref([]);

    const getMovies = async () => {
      movies.value = await fetchMovies(params.value);
    };
    onMounted(getMovies);
    watch(params, getMovies);

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
