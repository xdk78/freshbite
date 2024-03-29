const Index = () => import('/@/pages/Index.vue')
const Recipe = () => import('/@/pages/Recipe.vue')

const routes = [
  { path: '/', component: Index },
  { path: '/recipe/:id', component: Recipe, props: true },
]

export default routes
