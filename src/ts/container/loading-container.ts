import { useLoadingStore } from "@/stores/loading";

export declare interface LoadingMasker {
  show(): void;

  hide(): void;
}

export function useLoadingMasker(): LoadingMasker {
  return {
    show: () => {
      useLoadingStore().show();
    },
    hide: () => {
      useLoadingStore().hide();
    },
  };
}
