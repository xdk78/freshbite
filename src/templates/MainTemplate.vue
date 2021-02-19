<template>
  <Header />
  <div class="container px-24 py-4 mx-auto">
    <slot />
  </div>
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
