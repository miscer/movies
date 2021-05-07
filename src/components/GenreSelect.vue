<template>
  <select :value="modelValue" @change="updateValue">
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
    modelValue: String,
  },
  emits: ["update:modelValue"],
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
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
