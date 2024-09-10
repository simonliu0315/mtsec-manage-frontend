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
      component: () => import('../views/ResourceSoftware.vue')
    },
    {
      path: '/TopologyManage',
      name: 'TopologyManage',
      component: () => import('../views/TopologyManage.vue')
    },
    {
      path: '/DomesticCircuit',  //國內骨幹流量狀況
      name: 'DomesticCircuit',
      component: () => import('../views/DomesticCircuit.vue')
    },
    {
      path: '/monitoring-item-management/data-management/InventoryManage',  //資產管理
      name: 'InventoryManage',
      component: () => import('../views/InventoryManage.vue')
    },
    {
      path: '/monitoring-item-management/data-management/OperationTeamManagement',  //維運團隊管理
      name: 'OperationTeamManagement',
      component: () => import('../views/OperationTeamManagement.vue')
    },
    {
      path: '/contact-data/OperationTeam',  //維運團隊
      name: 'OperationTeam',
      component: () => import('../views/OperationTeam.vue')
    },
    {
      path: '/device-info/device-profile',  //設備資料設定檔
      name: 'DeviceProfile',
      component: () => import('../views/device-info/DeviceProfile.vue')
    },
    {
      path: '/device-info/device-configuration',  //設備組態歷史備份紀錄
      name: 'DeviceConfiguration',
      component: () => import('../views/device-info/DeviceConfiguration.vue')
    },
  ]
})

export default router
