<template>
  <header class="bg-white ring-1 ring-black ring-opacity-5">
    <div
      class="container flex flex-col flex-wrap items-center px-24 py-4 mx-auto md:flex-row"
    >
      <router-link
        class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0 hover:no-underline"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-10 h-10 p-2 text-white bg-green-400 rounded-full"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          ></path>
        </svg>
        <span class="ml-3 font-serif text-2xl hover:no-underline"
          >FreshBite</span
        >
      </router-link>
      <nav
        class="flex flex-wrap items-center justify-center text-base font-medium text-gray-600 md:ml-auto"
      >
        <router-link class="mr-5 hover:text-gray-900 hover:no-underline" to="/"
          >Discover</router-link
        >
        <router-link class="mr-5 hover:text-gray-900 hover:no-underline" to="/"
          >My Cookbook</router-link
        >
        <router-link class="mr-5 hover:text-gray-900 hover:no-underline" to="/"
          >My Fridge</router-link
        >
      </nav>
      <button
        class="inline-flex items-center px-3 py-1 mt-4 text-base font-semibold text-green-600 transition-all duration-200 bg-green-200 border-0 rounded focus:outline-none hover:bg-green-300 hover:text-green-700 md:mt-0"
      >
        Sign In
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
          ></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  name: 'Header',
}
</script>
