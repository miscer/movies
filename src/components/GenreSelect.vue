<template>
  <ul class="genre-select">
    <li>
      <label>
        <input type="checkbox" :checked="allSelected" @click="selectAll" />
        All
      </label>
    </li>
    <li v-for="genre in genres" :key="genre.id">
      <label>
        <input
          type="checkbox"
          :value="genre.id"
          :checked="isGenreSelected(genre.id)"
          @change="selectGenre"
        />
        {{ genre.title }}
      </label>
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchGenres } from "@/api.js";

export default {
  name: "GenreSelect",
  props: {
    selected: Array,
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
    isGenreSelected(id) {
      return this.selected.includes(id);
    },
    selectGenre(event) {
      const { value, checked } = event.target;
      const selected = new Set(this.selected);

      if (checked) {
        selected.add(value);
      } else {
        selected.delete(value);
      }

      this.$emit("update:selected", [...selected]);
    },
    selectAll() {
      this.$emit("update:selected", []);
    },
  },
  computed: {
    allSelected() {
      return this.selected.length === 0;
    },
  },
};
</script>

<style lang="less" scoped>
.genre-select {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 5px;
  }

  label {
    cursor: pointer;
  }
}
</style>
