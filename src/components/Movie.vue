<template>
  <article>
    <img :src="posterUrl" :alt="'Poster for ' + title" />
    <h3>{{ title }} ({{ releaseYear }})</h3>
    <div>Genres: {{ genres.join(", ") }}</div>
    <div>Actors: {{ actors.join(", ") }}</div>
  </article>
</template>

<script>
export default {
  name: "Movie",
  props: {
    title: String,
    releaseDate: Date,
    posterUrl: String,
    genres: Array,
    actors: Array,
  },
  computed: {
    releaseYear() {
      return this.releaseDate.getFullYear();
    },
  },
};
</script>

<style scoped></style>
