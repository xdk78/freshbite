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
      >{{ category }}</button>
    </div>
    <div class="m-4 grid sm:grid-flow-col-dense grid-flow-row-dense gap-4">
      <div
        class="contianer h-64 w-1/2 p-8 grid sm:grid-flow-col-dense grid-flow-row-dense bg-orange-300 rounded-lg"
      >
        <div class="flex flex-col text-orange-700">
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span> 228 cal</span>
          </div>
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>15 min</span>
          </div>
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              /></svg
            ><span>2 people</span>
          </div>
        </div>
        <img
          class="object-fit rounded-lg sm:absolute sm:mx-48"
          src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256"
          alt="dish"
        />
      </div>

      <div
        class="contianer h-64 w-1/2 p-8 grid sm:grid-flow-col-dense grid-flow-row-dense bg-purple-300 rounded-lg"
      >
        <div class="flex flex-col text-purple-700">
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span> 228 cal</span>
          </div>
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            <span>15 min</span>
          </div>
          <div class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mr-2"
            >
              <path
                d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
              /></svg
            ><span>2 people</span>
          </div>
        </div>
        <img
          class="object-fit rounded-lg sm:absolute sm:mx-48"
          src="https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256"
          alt="dish"
        />
      </div>
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
