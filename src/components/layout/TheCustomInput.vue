<template>
  <div class="form-group">
    <label :for="id">{{ label }}</label>
    <div class="btn-group btn-group-toggle d-flex" data-toggle="buttons">
      <label
        class="btn btn-outline-primary flex-fill"
        :class="{ active: selectedQuality === 'poor' }"
        @click="updateQuality('poor')"
      >
        <input
          type="radio"
          name="quality"
          autocomplete="off"
          :checked="selectedQuality === 'poor'"
        />
        Poor Quality
      </label>
      <label
        class="btn btn-outline-primary flex-fill"
        :class="{ active: selectedQuality === 'average' }"
        @click="updateQuality('average')"
      >
        <input
          type="radio"
          name="quality"
          autocomplete="off"
          :checked="selectedQuality === 'average'"
        />
        Average Quality
      </label>
      <label
        class="btn btn-outline-primary flex-fill"
        :class="{ active: selectedQuality === 'excellent' }"
        @click="updateQuality('excellent')"
      >
        <input
          type="radio"
          name="quality"
          autocomplete="off"
          :checked="selectedQuality === 'excellent'"
        />
        Excellent Quality
      </label>
    </div>
    <p class="text-danger mt-2" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props:['modelValue'],
  emits:['update:modelValue'],
  data() {
    return {
      selectedQuality: this.value || "",
    };
  },
  methods: {
    updateQuality(quality) {
      this.selectedQuality = quality;
      this.$emit("update:modelValue", quality);
    },
  },
  watch: {
    value(newValue) {
      this.selectedQuality = newValue;
    },
  },
};
</script>

<style scoped>
.btn-group-toggle .btn {
  border-radius: 0;
}
</style>
