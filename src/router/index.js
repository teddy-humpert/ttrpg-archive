import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SingleBookView from '../views/SingleBookView.vue'
import MultipleBooksView from '../views/MultipleBooksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/books',
    name: 'books',
    props: true,
    component: MultipleBooksView
  },
  {
    path: '/book/:id',
    name: 'book',
    props: true,
    component: SingleBookView,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 
