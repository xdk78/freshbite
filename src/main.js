import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from '/@/App.vue'
import routes from '/@/routes'
import './css/index.css'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

createApp(App).use(router).mount('#app')
