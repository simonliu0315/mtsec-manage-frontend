import type { InjectionKey } from "vue";
import { inject, provide } from "vue";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import Axios from "axios";

import { useLoadingMasker } from "./loading-container";

const loadingMasker = useLoadingMasker();

export declare interface AxiosConfig {
  axiosRequestConfig?: AxiosRequestConfig;
  defaultDismissIn?: number;
}

export function createEInvAxios(axiosConfig: AxiosConfig): AxiosInstance {
  const axios = Axios.create(axiosConfig.axiosRequestConfig);

  axios.interceptors.request.use(
    function (config) {
      loadingMasker.show();
      
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      loadingMasker.hide();
      const traceId = response.headers["x-inv-traceid"];
      const code = response.headers["x-inv-alert"];
      const params = eval(decodeURIComponent(response.headers["x-inv-params"]));
      if (code) {
        console.log(code, params, undefined, traceId);
      }
      return response;
    },
    (error) => {
      const traceId = error.response?.headers?.["x-inv-traceid"];
      const dismissIn =
        error.config.headers["x-inv-dismiss-alert"] ??
        axiosConfig.defaultDismissIn ??
        import.meta.env.VITE_ALERTER_AUTO_DISMISS_IN;
      loadingMasker.hide();
      if (!error.response) {
        console.log(
          "INV-HTTP-0404-E",
          [escapeHtml(error.config.url)],
          dismissIn
        );
      } else {
        console.log("INV-HTTP-0400-E", [], dismissIn, traceId);
      }
      return Promise.reject(error);
    }
  );

  return axios;
}

export const dismissAlertConfig = {
  headers: { "x-inv-dismiss-alert": 0 },
};

export const dismissSecurityConfig = {
  headers: { "x-inv-dismiss-security": true },
};

export const eInvAxiosKey: InjectionKey<AxiosInstance> = Symbol("$axios");

export function setEInvAxios(axios: AxiosInstance): void {
  provide(eInvAxiosKey, axios);
}

export function useEInvAxios(): AxiosInstance {
  return inject(eInvAxiosKey);
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
