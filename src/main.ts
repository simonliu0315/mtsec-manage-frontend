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

document.body.classList.add('layout-fixed')
document.body.classList.add('sidebar-expand-lg')
document.body.classList.add('bg-body-tertiary')
const app = createApp(App)

app.use(createPinia())

app.use(router)
app.use(i18n)
app.use(VNetworkGraph)

app.mount('#app')
export default app
