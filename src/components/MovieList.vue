<template>
  <div class="movie-list" :class="{ loading }">
    <div class="grid">
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
    <div class="empty" v-if="movies.length === 0">No movies found.</div>
  </div>
</template>

<script>
import { ref, toRefs, watchEffect } from "vue";
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

    watchEffect(async (onInvalidate) => {
      let canceled = false;
      onInvalidate(() => (canceled = true));

      loading.value = true;
      const result = await fetchMovies(params.value);

      if (!canceled) {
        movies.value = result;
        loading.value = false;
      }
    });

    return { movies, loading };
  },
};
</script>

<style lang="less" scoped>
.movie-list {
  transition: opacity 0.2s ease-in;

  &.loading {
    opacity: 0.5;
    cursor: wait;
  }
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 40px;
}

.empty {
  padding: 60px 40px;
  text-align: center;
  color: #666;
}
</style>
