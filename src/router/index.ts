import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MtsecDashboard',
      component: () => import('../views/MtsecDashboard.vue')
    },
    {
      path: '/DomesticBackboneTrafficMonitor',
      name: 'DomesticBackboneTrafficMonitor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DomesticBackboneTrafficMonitor.vue')
    },
    {
      path: '/ResourceSoftware',
      name: 'ResourceSoftware',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ResourceSoftware.vue')
    },
    {
      path: '/TopologyManage',
      name: 'TopologyManage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TopologyManage.vue')
    },
    {
      path: '/DomesticCircuit',
      name: 'DomesticCircuit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DomesticCircuit.vue')
    }
  ]
})

export default router
