import { createRouter, createWebHistory } from 'vue-router'
import View1 from './components/View1.vue'
import View2 from './components/View2.vue'
import View3 from './components/View3.vue'
import View4 from './components/View4.vue'
import View5 from './components/View5.vue'

const routes = [
  { path: '/view1', component: View1 },
  { path: '/view2', component: View2 },
  { path: '/view3', component: View3 },
  { path: '/view4', component: View4 },
  { path: '/view5', component: View5 }
]

const router = createRouter({
  history: createWebHistory(),
    routes
})

export default router;