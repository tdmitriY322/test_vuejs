import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '@/views/Form.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'MyForm',
    meta: {
      layout: 'main'
    },
    component: Form
  },
  {
    path: '/preview',
    name: 'MyPre',
    meta: {
      layout: 'main'
    },
    component: () => import('@/views/Preview.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router