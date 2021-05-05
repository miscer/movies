<template>
  <div id="app">
    <MovieList :movies="movies" />
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: "App",
  components: {
    MovieList,
  },
  data() {
    return {
      movies: [
        {
          id: 163979287265942016,
          title: "An American Tail: Fievel Goes West",
          genre: [
            {
              id: 3,
              title: "Comedy",
            },
            {
              id: 8,
              title: "Western",
            },
          ],
          actors: [
            {
              id: 163978496991957504,
              name: "Fievel Mousekewitz",
            },
            {
              id: 163978647315813376,
              name: "Tanya MouseKewitz",
            },
          ],
          releaseDate: new Date("1991-11-17T00:00:00.000000Z"),
        },
        {
          id: 163982121944357888,
          title: "The Notebook",
          genre: [
            {
              id: 2,
              title: "Drama",
            },
            {
              id: 6,
              title: "Romance",
            },
          ],
          actors: [
            {
              id: 163982182073900544,
              name: "Ryan Gosling",
            },
            {
              id: 163982199253770240,
              name: "Rachel McAdams",
            },
          ],
          releaseDate: new Date("2004-06-25T00:00:00.000000Z"),
        },
      ],
    };
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
