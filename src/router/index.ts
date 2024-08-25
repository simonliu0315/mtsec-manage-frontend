import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  //TWAREN監控儀錶板
      name: 'MtsecDashboard',
      component: () => import('../views/MtsecDashboard.vue')
    },
    {
      path: '/DomesticBackboneTrafficMonitor',  //TANet監控儀錶板
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
      path: '/DomesticCircuit',  //國內骨幹流量狀況
      name: 'DomesticCircuit',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DomesticCircuit.vue')
    },
    {
      path: '/monitoring-item-management/data-management/InventoryManage',  //TANet監控儀錶板
      name: 'InventoryManage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InventoryManage.vue')
    },
    {
      path: '/monitoring-item-management/data-management/OperationTeamManagement',  //TANet監控儀錶板
      name: 'OperationTeamManagement',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/InventoryManage.vue')
    },
  ]
})

export default router
