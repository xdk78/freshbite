<template>
  <MainTemplate>
    <div class="pb-4 text-5xl font-bold text-gray-900">
      {{ title }}
    </div>
    <div
      :style="{
        backgroundImage: `url(${image})`,
      }"
      class="flex flex-col items-center justify-end w-full mx-auto bg-gray-300 bg-center bg-no-repeat bg-cover rounded-lg shadow-md h-96"
    >
      <div class="p-5 m-3 -mb-6 rounded-lg" :class="`bg-${color}-300`">
        <div class="flex flex-row">
          <div class="flex flex-row text-sm" :class="`text-${color}-700`">
            <div v-if="calories" class="inline-flex items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 mr-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ calories }} kcal</span>
            </div>
            <div v-if="duration" class="inline-flex items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 mx-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>{{ duration }} min</span>
            </div>
            <div v-if="people" class="inline-flex items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-6 h-6 mx-2"
              >
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                /></svg
              ><span>{{ people }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-gray-700 body-font">
      <div class="flex flex-col px-5 py-24 mx-auto">
        <div class="flex items-center mb-4">
          <button
            @click="selectedTab = 0"
            class="inline-flex items-center justify-center flex-1 py-3 font-medium leading-none tracking-wider text-red-500 bg-gray-100 border-b-2 border-red-500 rounded-t title-font"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg
            >Ingredients
          </button>
          <button
            @click="selectedTab = 1"
            class="inline-flex items-center justify-center flex-1 py-3 font-medium leading-none tracking-wider text-red-500 bg-gray-100 rounded-t title-font"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg
            >Step by step
          </button>
          <button
            @click="selectedTab = 2"
            class="inline-flex items-center justify-center flex-1 py-3 font-medium leading-none tracking-wider text-red-500 bg-gray-100 rounded-t title-font"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path></svg
            >Photos
          </button>
          <button
            @click="selectedTab = 3"
            class="flex items-center justify-center flex-1 py-3 font-medium leading-none tracking-wider text-red-500 bg-gray-100 rounded-t title-font"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle></svg
            >Reviews
          </button>
        </div>
        <div v-if="selectedTab == 0">
          <div class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-2">
                <div class="w-full p-2 lg:w-1/3 md:w-1/2">
                  <div
                    class="flex items-center h-full p-4 border border-gray-200 rounded-lg"
                  >
                    <div class="flex-grow">
                      <h3 class="font-medium text-gray-900 title-font">
                        Krewetki
                      </h3>
                      <p class="text-gray-500">20 sztuk</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <transition name="fade">
          <div v-if="selectedTab == 1">
            <section name="fade" class="text-gray-700 body-font">
              <div class="container flex flex-wrap px-5 py-24 mx-auto">
                <div
                  class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center w-6 h-full"
                  >
                    <div
                      class="w-1 h-full bg-gray-200 pointer-events-none"
                    ></div>
                  </div>
                  <div
                    class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-teal-500 rounded-full sm:mt-0 title-font"
                  >
                    1
                  </div>
                  <div
                    class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
                  >
                    <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
                      <h2
                        class="mb-1 text-xl font-medium text-gray-900 title-font"
                      >
                        Shooting Stars
                      </h2>
                      <p class="leading-relaxed">
                        VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                        Kinfolk bespoke try-hard cliche palo santo offal.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="relative flex pb-20 mx-auto sm:items-center md:w-2/3"
                >
                  <div
                    class="absolute inset-0 flex items-center justify-center w-6 h-full"
                  >
                    <div
                      class="w-1 h-full bg-gray-200 pointer-events-none"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </transition>
        <div v-if="selectedTab == 2">third tab</div>
        <div v-if="selectedTab == 3"></div>
      </div>
    </div>
  </MainTemplate>
</template>

<script lang="ts">
import MainTemplate from '/@/templates/MainTemplate.vue'
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
export default {
  name: 'Recipe',
  props: {
    id: String,
  },
  components: {
    MainTemplate,
  },
  setup({ id }) {
    const selectedTab = ref(0)
    onMounted(() => {
      const tl = gsap.timeline()
      console.log(tl)
    })
    return {
      selectedTab,
      id,
      title: 'Schabowy with rice',
      people: '2',
      duration: '20',
      color: 'red',
      calories: '500',
      image:
        'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1262&q=80',
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
