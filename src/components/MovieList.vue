<template>
  <div class="movie-list" :class="{ loading }">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.title"
      :description="movie.description"
      :release-date="new Date(movie.release_date)"
      :genres="movie.genres.map((g) => g.title)"
      :actors="movie.actors.map((a) => a.name)"
      :poster-url="movie.poster_url"
    />
  </div>
</template>

<script>
import { ref, toRefs, watch, onMounted } from "vue";
import debounce from "lodash/debounce";
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
    const loading = ref(true);

    const getMovies = async () => {
      loading.value = true;
      movies.value = await fetchMovies(params.value);
      loading.value = false;
    };
    onMounted(getMovies);
    watch(params, debounce(getMovies, 200));

    return { movies, loading };
  },
};
</script>

<style lang="less" scoped>
.movie-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
  transition: opacity 0.1s ease-in;

  &.loading {
    opacity: 0.5;
    cursor: wait;
  }
}
</style>
