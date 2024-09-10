import { useToastStore } from "@/stores/toast";

const showToast = (
  code: string,
  params?: Array<string>,
  dismissIn = 5000,
  traceId?: string
) => {
  if (code && dismissIn >= 0) {
    useToastStore().push({
      traceId,
      code,
      params: params ? params : [],
      dismissIn,
    });
  }
};

const alertToast = (
  code: string,
  message: string,
  params?: Array<string>,
  title?: string,
  dismissIn = 5000
): void => {
  if (dismissIn >= 0) {
    useToastStore().push({
      code,
      params,
      title,
      message,
      dismissIn,
    });
  }
};

const clear = (): void => {
  useToastStore().clear();
};

export declare interface Alerter {
  alert(
    code: string,
    params?: Array<string>,
    dismissIn?: number,
    traceId?: string
  ): void;

  success(message: string, params?: Array<string>, title?: string): void;

  info(message: string, params?: Array<string>, title?: string): void;

  warning(message: string, params?: Array<string>, title?: string): void;

  error(message: string, params?: Array<string>, title?: string): void;

  clear(): void;
}

export function useAlerter(): Alerter {
  console.log('useAlerter');
  console.log(useAlerter);
  console.log(showToast);
  return {
    alert: showToast,
    success: (
      message: string,
      params?: Array<string>,
      title?: string
    ): void => {
      alertToast("INV-COMMON-0001-S", message, params, title);
    },
    info: (message: string, params?: Array<string>, title?: string): void => {
      alertToast("INV-COMMON-0001-I", message, params, title);
    },
    warning: (
      message: string,
      params?: Array<string>,
      title?: string
    ): void => {
      alertToast("INV-COMMON-0001-W", message, params, title);
    },
    error: (message: string, params?: Array<string>, title?: string): void => {
      alertToast("INV-COMMON-0001-E", message, params, title);
    },
    clear: clear,
  };
}