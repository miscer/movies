<template>
  <ul class="period-select">
    <li v-for="[value, label] in periods" :key="value">
      <label>
        <input
          type="radio"
          :value="String(value)"
          :checked="selected === value"
          @change="$emit('update:selected', value)"
        />
        {{ label }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PeriodSelect",
  data: () => ({
    periods: [
      [null, "Anytime"],
      [1970, "1970s"],
      [1980, "1980s"],
      [1990, "1990s"],
      [2000, "2000s"],
      [2010, "2010s"],
      [2020, "2020s"],
    ],
  }),
  props: {
    selected: Number,
  },
  emits: ["update:selected"],
};
</script>

<style lang="less" scoped>
.period-select {
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
