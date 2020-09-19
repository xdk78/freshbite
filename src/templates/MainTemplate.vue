<template>
  <div class="container mx-auto">
    <Header />
    <slot />
  </div>
</template>

<script>
import Header from '/@/components/Header.vue'

export default {
  name: 'MainTemplate',
  components: {
    Header,
  },
}
</script>
