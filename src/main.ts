//import 'admin-lte/dist/css/adminlte.css'

//import 'bootstrap'
//import 'admin-lte'

//import { CardWidget, DirectChat, FullScreen, Layout, PushMenu, Treeview } from 'admin-lte'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import moment from 'moment';
import {i18n , installStatusCodes } from '@/i18n' // 引入 I18n 套件

import VNetworkGraph from "v-network-graph"
import "v-network-graph/lib/style.css"

//import NetworkPagination  from "@/components/network-pagination.vue";
//import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import NetworkPaginationPlugin from "@/NetworkPaginationPlugin";
//import VueAwesomePaginatePlugin from "@/VueAwesomePaginatePlugin";


import {
    createNetworkAxios
  } from "@/ts/container/axios-container";
  
document.body.classList.add('layout-fixed')
document.body.classList.add('sidebar-expand-lg')
document.body.classList.add('bg-body-tertiary')
import NetworkPortalPlugin from "@/entry";



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(NetworkPortalPlugin, {
    env: import.meta.env.MODE,
    axios: createNetworkAxios({  }),
    appName: import.meta.env.VITE_APP_NAME,
    appRoot: import.meta.env.BASE_URL,
    appHome: import.meta.env.VITE_APP_HOME,
    i18n,
    enableServiceWork: import.meta.env.MODE === "production",
  })
app.use(VNetworkGraph)
//app.use(NetworkPaginationPlugin)
//app.use(VueAwesomePaginatePlugin)
//app.component("network-grid-pagination", NetworkPagination)
//app.component("font-awesome-icon", FontAwesomeIcon)
app.config.globalProperties.$filters = {
  getRelativeTime(isoString: string): string {
    const targetDate = moment(isoString);
    const now = moment();
    const duration = moment.duration(now.diff(targetDate));
    if (duration.days() > 0) {
      return `${duration.days()}d ${duration.hours()}hr ${duration.minutes()}min`;
    }
    // 自行定義輸出格式，可根據需求調整
    return `${duration.hours()}hr ${duration.minutes()}min`;
  },
  formatDate(isoString: string): string {
    if (isoString) {
      return moment(String(isoString)).format('YYYY-MM-DD hh:mm:ss')
     }
   

  }
}
app.mount('#app')
//export default app
