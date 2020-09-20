<template>
  <div
    :style="{
      backgroundImage: `url(${image})`,
    }"
    class="flex flex-col items-center justify-end w-full h-64 bg-no-repeat bg-cover rounded-lg shadow-md bg-bottom bg-gray-300"
  >
    <div class="p-5 m-3 rounded-lg -mb-6" :class="`bg-${color}-300`">
      <h3 class="font-serif text-xl pb-2" :class="`text-${color}-800`">
        {{ title }}
      </h3>
      <div class="flex flex-row">
        <div class="flex flex-row text-sm" :class="`text-${color}-700`">
          <div v-if="calories" class="inline-flex items-center font-semibold">
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
            <span>{{ calories }} kcal</span>
          </div>
          <div v-if="duration" class="inline-flex items-center font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="h-6 w-6 mx-2"
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
              class="h-6 w-6 mx-2"
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
</template>

<script lang="ts">
export default {
  name: 'GridIem',
  props: {
    color: String,
    title: String,
    calories: String,
    duration: String,
    people: String,
    image: String,
  },
  setup() {},
}
</script>
