//import 'admin-lte/dist/css/adminlte.css'

//import 'bootstrap'
//import 'admin-lte'

//import { CardWidget, DirectChat, FullScreen, Layout, PushMenu, Treeview } from 'admin-lte'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'

import { i18n } from '@/i18n' // 引入 I18n 套件

import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

import NetworkPagination  from "@/components/network-pagination.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import NetworkPaginationPlugin from "@/NetworkPaginationPlugin";
import VueAwesomePaginatePlugin from "@/VueAwesomePaginatePlugin";


import {
    createEInvAxios
  } from "@/ts/container/axios-container";
  
document.body.classList.add('layout-fixed')
document.body.classList.add('sidebar-expand-lg')
document.body.classList.add('bg-body-tertiary')

import EInvPortalPlugin from "@/entry";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(EInvPortalPlugin, {
    env: import.meta.env.MODE,
    axios: createEInvAxios({  }),
    appName: import.meta.env.VITE_APP_NAME,
    appRoot: import.meta.env.BASE_URL,
    appHome: import.meta.env.VITE_APP_HOME,
    i18n,
    enableServiceWork: import.meta.env.MODE === "production",
  })
app.use(VNetworkGraph)
app.use(NetworkPaginationPlugin)
app.use(VueAwesomePaginatePlugin)
//app.component("network-grid-pagination", NetworkPagination)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
//export default app
