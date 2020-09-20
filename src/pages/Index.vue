<template>
  <MainTemplate>
    <div
      class="w-full flex items-center justify-between bg-green-300 rounded-lg py-6 px-8 mb-4 food-pattern"
    >
      <div class="p-4">
        <span class="text-gray-900 text-5xl font-black font-serif">
          Fresh
          <span> and</span>
          <span class="font-serif"> tasty</span>
          <div>recipes.</div>
        </span>
        <button
          class="inline-flex items-center font-semibold text-green-600 bg-green-100 border-0 py-3 px-5 focus:outline-none hover:text-green-900 rounded text-base transition-all duration-200"
        >
          Discover
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 mx-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>

      <div
        :style="{
          width: '512px',
          height: '512px',
          backgroundImage: `url(https://img.pngio.com/hd-previous-food-on-plate-png-transparent-png-image-download-food-plate-png-578_580.png)`,
        }"
        class="bg-no-repeat bg-cover bg-center"
      ></div>
    </div>
    <h1>Discover</h1>
    <div
      class="flex flex-col sm:flex-row items-center justify-center text-base font-medium text-gray-700 pb-4"
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
    <div class="my-4 grid gtc-auto gap-24">
      <GridItem
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :color="item.color"
        :calories="item.calories"
        :duration="item.duration"
        :people="item.people"
        :image="item.image"
      />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { reactive } from 'vue'
import MainTemplate from '/@/templates/MainTemplate.vue'
import GridItem from '/@/components/GridItem.vue'

export default {
  name: 'Index',
  components: {
    MainTemplate,
    GridItem,
  },
  setup() {
    const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Dessert']
    const state = reactive({ selectedCategory: '' })
    const data = [
      {
        id: 0,
        title: 'Ramen with eggs',
        calories: '243',
        duration: '23',
        people: '1',
        image:
          'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'orange',
      },
      {
        id: 1,
        title: 'Pancakes with banana',
        calories: '443',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'red',
      },
      {
        id: 2,
        title: 'Schabowy with rice',
        calories: '243',
        duration: '23',
        people: '2',
        image:
          'https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'purple',
      },
      {
        id: 3,
        title: 'Salad with eggs',
        calories: '243',
        duration: '23',
        people: '3',
        image:
          'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'green',
      },
      {
        id: 4,
        title: 'Rice with eggs',
        calories: '243',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1557038684-abb03178899e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'yellow',
      },
      {
        id: 5,
        title: 'Rice with eggs',
        calories: '243',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        color: 'teal',
      },
    ]
    function selectedCategoryHandler(value) {
      state.selectedCategory = value
    }

    return {
      categories,
      state,
      selectedCategoryHandler,
      data,
    }
  },
}
</script>
