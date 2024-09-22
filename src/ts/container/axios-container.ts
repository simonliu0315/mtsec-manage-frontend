import type { InjectionKey } from "vue";
import { inject, provide } from "vue";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import Axios from "axios";

import { useLoadingMasker } from "@/ts/container/loading-container";
import { useAlerter } from "@/ts/container/toast-container";

const loadingMasker = useLoadingMasker();
const alerter = useAlerter();

export declare interface AxiosConfig {
  axiosRequestConfig?: AxiosRequestConfig;
  defaultDismissIn?: number;
}

export function createNetworkAxios(axiosConfig: AxiosConfig): AxiosInstance {
  const axios = Axios.create(axiosConfig.axiosRequestConfig);

  axios.interceptors.request.use(
    function (config) {
      console.log('loadingMasker show')
      loadingMasker.show();
      
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      console.log('loadingMasker hide')
      console.log('response', response)
      console.log("response header", response.headers["x-network-alert"])
      loadingMasker.hide();
      const traceId = response.headers["x-network-traceid"];
      const code = response.headers["x-network-alert"];
      //let code = "APP-APP001I-0001-E";
      
      const params = eval(decodeURIComponent(response.headers["x-network-params"]));
      if (code) {
        alerter.alert(code, params, undefined, traceId);
        console.log(code, params, undefined, traceId);
      }
      return response;
    },
    (error) => {
      const traceId = error.response?.headers?.["x-network-traceid"];
      
      const dismissIn = 
        error.config.headers["x-network-dismiss-alert"] ??
        axiosConfig.defaultDismissIn ??
        import.meta.env.VITE_ALERTER_AUTO_DISMISS_IN;
      loadingMasker.hide();
      if (!error.response) {
        alerter.alert(
          "NET-HTTP-0404-W",
          [escapeHtml(error.config.url)],
          dismissIn
        );
      } else {
        alerter.alert("NET-HTTP-0400-W", [], dismissIn, traceId);
      }
      return Promise.reject(error);
    }
  );

  return axios;
}

export const dismissAlertConfig = {
  headers: { "x-netwotk-dismiss-alert": 0 },
};

export const dismissSecurityConfig = {
  headers: { "x-netwotk-dismiss-security": true },
};

export const networkAxiosKey: InjectionKey<AxiosInstance> = Symbol("$axios");

export function setNetworkAxios(axios: AxiosInstance): void {
  provide(networkAxiosKey, axios);
}

export function useNetworkAxios(): AxiosInstance {
  return inject(networkAxiosKey);
}

function escapeHtml(message: string): string {
  const s = message.split("//");
  let url120 = "";
  if (s.length > 1 && s[1].length > 0) {
    url120 = s[0] + "//";
    const words = s[1].split("/");
    const size = words.length > 6 ? 6 : words.length;
    url120 = url120.concat("", words[0]);
    for (let i = 1; i < size; i++) {
      url120 = url120.concat("/", words[i]);
    }
    url120 = url120.substring(0, 120);
  }
  url120 = url120.length > 0 ? url120 : message;
  return url120.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
