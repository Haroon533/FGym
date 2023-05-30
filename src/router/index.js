import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Nutrition from '../views/Nutrition.vue'
import Fitness from '../views/Fitness.vue'
import Boutique from '../views/Boutique.vue'
import Welcome from '../views/Welcome.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/views/Nutrition',
      name: 'Nutrition',
      component: Nutrition
    },
    {
      path: '/views/Fitness',
      name: 'Fitness',
      component: Fitness
    },
    {
      path: '/views/Boutique',
      name: 'Boutique',
      component: Boutique
    },
    {
      path: '/views/Welcome',
      name: 'Welcome',
      component: Welcome
    },
    
  ]
})

export default router
