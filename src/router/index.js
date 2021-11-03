import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Category from '../views/Category.vue'
import Search from '../views/Search.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/:category_slug/:product_slug/',
    name: 'Product',
    component: Product,
  },
  {
    path: '/:category_slug/',
    name: 'Category',
    component: Category,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
