import { createRouter, createWebHistory, RouteRecordRaw, useRouter } from 'vue-router'
import Home from './pages/Home.vue'
import Posts from './pages/Posts.vue'
import Users from './pages/Users.vue'
import User from './pages/User.vue'
import NotFound from './pages/NotFound.vue'
import Post from './pages/Post.vue'
import MutatePost from './pages/MutatePost.vue'
import Search from './pages/Search.vue'
import VuelidatePageVue from './pages/VuelidatePage.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/users', component: Users },
  { path: '/users/:id', component: User },
  {
    path: '/posts',
    component: Posts,
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  { path: '/posts/:id', component: Post },
  { path: '/search/:text', component: Search },
  { path: '/posts/edit/:id', component: MutatePost },
  { path: '/posts/create', component: MutatePost },
  { path: '/vuelidate', component: VuelidatePageVue },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  //   if (to.fullPath === '/users') {
  //     next(false)
  //   } else {
  //     next()
  //   }
  next()
})

export default router
