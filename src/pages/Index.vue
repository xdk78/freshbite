<template>
  <MainTemplate>
    <h1>Discover</h1>
    <div
      class="flex flex-col sm:flex-row items-center justify-center text-base font-medium text-gray-700"
    >
      <button
        class="py-2 px-4 mx-1 hover:text-green-600 hover:bg-green-200 rounded-md hover:no-underline transition-colors duration-200 hover:font-semibold w-32 active:border-green-200"
        v-for="category in categories"
        :key="category"
        :class="
          state.selectedCategory == category ? 'bg-green-200 font-semibold' : ''
        "
        @click="selectedCategoryHandler(category)"
      >
        {{ category }}
      </button>
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { reactive } from 'vue'
import MainTemplate from '/@/templates/MainTemplate.vue'

export default {
  name: 'Index',
  components: {
    MainTemplate,
  },
  setup() {
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']
    const state = reactive({ selectedCategory: '' })

    function selectedCategoryHandler(value) {
      state.selectedCategory = value
    }

    return {
      categories,
      state,
      selectedCategoryHandler,
    }
  },
}
</script>
