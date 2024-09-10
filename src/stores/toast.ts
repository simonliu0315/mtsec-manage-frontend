import { defineStore } from "pinia";
import { ref } from "vue";

export declare interface NetworkToast {
  traceId?: string;
  dismissIn: number;
  title?: string;
  message?: string;
  code: string;
  params: Array<string>;
  time?: Date;
}

export const useToastStore = defineStore("toast", () => {
  const alerts = ref<NetworkToast[]>([]);
  const history = ref<NetworkToast[]>([]);

  function push(alert: NetworkToast): void {
    console.log('push')
    if (import.meta.env.VITE_ALERTER_DISPLAY_MODE == "REPLACE") {
      clear();
    }
    alert.time = new Date();
    alerts.value.unshift(alert);
  }

  function clear(): void {
    alerts.value.forEach((item) => remove(item));
  }

  function remove(alert: NetworkToast): void {
    alerts.value = alerts.value.filter((item) => item != alert);

    if (history.value.indexOf(alert) < 0) {
      if (history.value.length >= 99) {
        history.value.pop();
      }
      history.value.unshift(alert);
    }
  }

  return { alerts, history, push, remove, clear };
});
