import type { App, Plugin } from "vue";

//import "bootstrap/dist/css/bootstrap.css";
import '@/assets/scss/adminlte.scss';
import "bootstrap/dist/js/bootstrap";
import "@popperjs/core/dist/esm/popper"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import store from "@/stores";
import {
  NetworkPagination
} from "@/components";



import { eInvAxiosKey } from "@/ts/container/axios-container";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import type { RouteRecordRaw } from "vue-router";
import type { AxiosInstance } from "axios";

library.add(fas);

export declare interface EInvPluginConfig {
  env: string;
  axios: AxiosInstance;
  appName: string;
  appRoot: string;
  appHome: string;
  routes: Array<RouteRecordRaw>;
  i18n: { zh: object; en: object };
  enableServiceWork: boolean;
  enableAccessibility: boolean;
}

const EInvPlugin: Plugin = {
  install: (app: App, options: EInvPluginConfig) => {
    app.provide(eInvAxiosKey, options.axios);
    app
      .use(store)
      .component("network-pagination", NetworkPagination)
      .component("font-awesome-icon", FontAwesomeIcon)
  },
};

export default EInvPlugin;

export {
  createEInvAxios,
  useEInvAxios,
  dismissAlertConfig,
  dismissSecurityConfig,
} from "@/ts/container/axios-container";

export { useLoadingMasker } from "@/ts/container/loading-container";
