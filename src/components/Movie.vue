<template>
  <article class="movie">
    <img
      class="poster"
      :src="posterUrl"
      :alt="'Poster for ' + title"
      width="400"
      height="600"
      loading="lazy"
    />
    <h3 class="title">{{ title }} ({{ releaseYear }})</h3>
    <article class="info">
      <ul class="genres">
        <!--
        the key is not needed here as the list is simple, but this is needed to
        suppress a lint error
        -->
        <li v-for="(genre, index) in genres" :key="index">{{ genre }}</li>
      </ul>
      <p class="description">{{ description }}</p>
      <ul class="actors">
        <li v-for="(actor, index) in actors" :key="index">{{ actor }}</li>
      </ul>
    </article>
  </article>
</template>

<script>
export default {
  name: "Movie",
  props: {
    title: String,
    description: String,
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

<style lang="less" scoped>
.movie {
  max-width: 300px;
  position: relative;
  overflow: hidden;
  background-color: #ccc;
}

.poster {
  display: block;
  width: 100%;
  height: auto;
}

.title {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 40px 20px 20px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  font-size: 1.5rem;
  color: #fff;
}

.info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  left: 0;
  padding: 20px;
  transition: transform 200ms ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  .movie:hover & {
    transform: translateY(-100%);
  }
}

.description {
  margin: 0 0 20px;
}

.genres {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0 0 10px;

  li {
    display: block;
    padding: 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    color: black;
    background-color: rgba(255, 255, 255, 0.9);
  }
}

.actors {
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 1.2rem;

  li {
    margin-bottom: 10px;
  }
}
</style>
