<template>
  <MainTemplate>
    <div
      class="flex items-center justify-between w-full px-8 py-6 mb-4 overflow-hidden bg-green-300 rounded-lg food-pattern"
    >
      <div class="p-4">
        <div
          id="header-title"
          class="font-serif text-5xl font-black text-gray-900"
        >
          <span>Fresh </span>
          <span> and</span>
          <span class="font-serif"> tasty</span> <br />
          <span>recipes.</span>
        </div>
        <button
          id="header-button"
          class="inline-flex items-center px-5 py-3 my-4 text-base font-semibold text-green-600 transition-all duration-200 bg-green-100 border-0 rounded focus:outline-none hover:text-green-900"
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
      <Plate />
    </div>
    <h1>Discover</h1>
    <div
      class="flex flex-col items-center justify-center pb-4 text-base font-medium text-gray-700 sm:flex-row"
    >
      <button
        class="w-32 px-4 py-2 mx-1 transition-colors duration-200 rounded-md hover:text-green-600 hover:bg-green-200 hover:no-underline hover:font-semibold active:border-green-200"
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
    <div class="grid gap-24 my-4 gtc-auto">
      <GridItem
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :bgcolor="item.bgcolor"
        :xltextcolor="item.xltextcolor"
        :smtextcolor="item.smtextcolor"
        :calories="item.calories"
        :duration="item.duration"
        :people="item.people"
        :image="item.image"
      />
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import { reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'
gsap.registerPlugin(Draggable)

import MainTemplate from '/@/templates/MainTemplate.vue'
import GridItem from '/@/components/GridItem.vue'

import Plate from '/@/assets/plate.svg?component'

export default {
  name: 'Index',
  components: {
    MainTemplate,
    GridItem,
    Plate,
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
        bgcolor: 'bg-yellow-300',
        xltextcolor: 'text-yellow-800',
        smtextcolor: 'text-yellow-700',
      },
      {
        id: 1,
        title: 'Pancakes with banana',
        calories: '443',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        bgcolor: 'bg-red-300',
        xltextcolor: 'text-red-800',
        smtextcolor: 'text-red-700',
      },
      {
        id: 2,
        title: 'Schabowy with rice',
        calories: '243',
        duration: '23',
        people: '2',
        image:
          'https://images.unsplash.com/photo-1585238342070-61e1e768b1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        bgcolor: 'bg-purple-300',
        xltextcolor: 'text-purple-800',
        smtextcolor: 'text-purple-700',
      },
      {
        id: 3,
        title: 'Salad with eggs',
        calories: '243',
        duration: '23',
        people: '3',
        image:
          'https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        bgcolor: 'bg-green-300',
        xltextcolor: 'text-green-800',
        smtextcolor: 'text-green-700',
      },
      {
        id: 4,
        title: 'Rice with eggs',
        calories: '243',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1557038684-abb03178899e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        bgcolor: 'bg-yellow-300',
        xltextcolor: 'text-yellow-800',
        smtextcolor: 'text-yellow-700',
      },
      {
        id: 5,
        title: 'Rice with eggs',
        calories: '243',
        duration: '23',
        people: '4',
        image:
          'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512',
        bgcolor: 'bg-green-300',
        xltextcolor: 'text-green-800',
        smtextcolor: 'text-green-700',
      },
    ]

    function selectedCategoryHandler(value) {
      state.selectedCategory = value
    }
    onMounted(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, opacity: 0 },
      })
      tl.from('#header-title', {
        y: -50,
      })
        .from('#header-button', {
          x: -50,
        })
        .from(
          '.plate',
          { delay: 0.4, scale: 0.2, rotation: 360, transformOrigin: 'center' },
          '=.2'
        )
        .from('.salad', {
          delay: 0.4,
          rotation: 120,
          transformOrigin: 'center',
        })
        .from('.salad-shadow', {
          delay: 0.1,
        })
        .from('.shrim-1, .shrim-2', {
          scale: 3,
          z: 5,
        })
        .from('.shrim-3', {
          scale: 3,
          z: 5,
        })
        .from('.shrim-4, .shrim-5', {
          scale: 3,
          z: 5,
        })

      Draggable.create('.shrim-1, .shrim-2, .shrim-3, .shrim-4, .shrim-5', {
        type: 'x,y',
        edgeResistance: 1,
        bounds: '.plate',
      })
    })
    return {
      categories,
      state,
      selectedCategoryHandler,
      data,
    }
  },
}
</script>
