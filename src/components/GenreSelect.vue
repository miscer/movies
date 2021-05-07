<template>
  <select :value="selected" @change="updateValue">
    <option value=""></option>
    <option v-for="genre in genres" :key="genre.id" :value="genre.id">
      {{ genre.title }}
    </option>
  </select>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchGenres } from "@/api.js";

export default {
  name: "GenreSelect",
  props: {
    selected: String,
  },
  emits: ["update:selected"],
  setup() {
    const genres = ref([]);
    const getGenres = async () => {
      genres.value = await fetchGenres();
    };

    onMounted(getGenres);

    return { genres };
  },
  methods: {
    updateValue(event) {
      this.$emit("update:selected", event.target.value);
    },
  },
};
</script>
