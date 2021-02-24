<template>
  <Header />

  <transition name="slide-fade" appear>
    <div class="container px-24 py-4 mx-auto">
      <slot />
    </div>
  </transition>

  <Footer />
</template>

<script>
import Header from '/@/components/Header.vue'
import Footer from '/@/components/Footer.vue'

export default {
  name: 'MainTemplate',
  components: {
    Header,
    Footer,
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateX(-50px); */
  opacity: 0;
}
</style>
