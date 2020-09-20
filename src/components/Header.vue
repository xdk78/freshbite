<template>
  <header class="bg-white shadow-sm">
    <div
      class="flex flex-wrap py-4 flex-col md:flex-row items-center container mx-auto"
    >
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 hover:no-underline"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-10 h-10 text-white p-2 bg-green-400 rounded-full"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
          />
        </svg>
        <span class="font-serif ml-3 text-2xl hover:no-underline"
          >FreshBite</span
        >
      </a>
      <nav
        class="md:ml-auto flex flex-wrap items-center text-base justify-center font-medium text-gray-600"
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
        class="inline-flex items-center font-semibold text-green-600 bg-green-200 border-0 py-1 px-3 focus:outline-none hover:bg-green-300 hover:text-green-700 rounded text-base mt-4 md:mt-0 transition-all duration-200"
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
          />
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
