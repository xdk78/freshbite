<template>
  <Header />
  <div class="container mx-auto p-4">
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
