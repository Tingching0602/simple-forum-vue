import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SingUp from '../views/SignUp.vue'
import NotFound from '../views/NotFound.vue'
import RestaurantsHome from '../views/RestaurantsHome'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurantshome'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: SingUp
  },
  {
    path: '/restaurantshome',
    name: 'restaurants-home',
    component: RestaurantsHome
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurantshome/:id',
    name: 'restaurantsingle',
    component: () => import('../views/RestaurantSingle.vue')
  },
  {
    path: '/restaurantshome/:id/dashboard',
    name: 'restaurantdashboard',
    component: () => import('../views/RestaurantSingle.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/admin',
    exact: true,
    redirect: 'admin/restaurants'
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
