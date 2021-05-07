<template>
  <div>
    <p>
      <label for="filter-title">Title:</label>
      <input
        name="title"
        :value="filters.title"
        @input="updateInputFilter"
        id="filter-title"
      />
    </p>
    <p>
      <label for="filter-year">Release year:</label>
      <input
        name="year"
        :value="filters.year"
        @input="updateInputFilter"
        id="filter-year"
      />
    </p>
    <p>
      <label for="filter-genre">Genre:</label>
      <GenreSelect
        name="genre"
        :selected="filters.genre"
        @update:selected="updateGenreFilter"
        id="filter-genre"
      />
    </p>
  </div>
</template>
<script>
import GenreSelect from "@/components/GenreSelect.vue";

export default {
  name: "Filters",
  components: { GenreSelect },
  props: {
    filters: {
      type: Object,
      default: () => initialFilters,
    },
  },
  emits: ["update:filters"],
  methods: {
    updateInputFilter(event) {
      const { name, value } = event.target;
      const filters = { ...this.filters, [name]: value };
      this.$emit("update:filters", filters);
    },
    updateGenreFilter(selected) {
      const filters = { ...this.filters, genre: selected };
      this.$emit("update:filters", filters);
    },
  },
};

const initialFilters = {
  title: "",
  genre: "",
  year: "",
};
</script>
<style lang="less"></style>
