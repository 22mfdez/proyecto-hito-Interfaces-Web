import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
// import router from './router'

import { createRouter, createWebHistory } from 'vue-router'
import ViewOne from './components/View1.vue'
import ViewTwo from './components/View2.vue'
import ViewThree from './components/View3.vue'
import ViewFour from './components/View4.vue'
import ViewFive from './components/View5.vue'
// importa los demás componentes de vista aquí

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/view1',
        name: 'View1',
        component: ViewOne
      },
    {
        path: '/view2',
        name: 'View2',
        component: ViewTwo
      },
      {
        path: '/view3',
        name: 'View3',
        component: ViewThree
      },
      {
        path: '/view4',
        name: 'View4',
        component: ViewFour
      },
      {
        path: '/view5',
        name: 'View5',
        component: ViewFive
      }
    // agrega las demás rutas aquí
  ]
})

createApp(App).use(router).mount('#app')