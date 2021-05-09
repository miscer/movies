<template>
  <div class="filters">
    <div class="filter">
      <label for="filter-title">Title:</label>
      <input
        name="title"
        :value="filters.title"
        @input="updateInputFilter"
        id="filter-title"
      />
    </div>
    <div class="filter">
      <label>Released:</label>
      <PeriodSelect
        :selected="filters.period"
        @update:selected="updatePeriodFilter"
      />
    </div>
    <div class="filter">
      <label>Genre:</label>
      <GenreSelect
        :selected="filters.genre"
        @update:selected="updateGenreFilter"
      />
    </div>
  </div>
</template>
<script>
import GenreSelect from "@/components/GenreSelect.vue";
import PeriodSelect from "@/components/PeriodSelect.vue";

export default {
  name: "Filters",
  components: { PeriodSelect, GenreSelect },
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
    updatePeriodFilter(selected) {
      const filters = { ...this.filters, period: selected };
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
  genre: [],
  period: null,
};
</script>

<style lang="less" scoped>
.filters {
}

.filter {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>
