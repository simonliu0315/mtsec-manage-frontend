import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoadingStore = defineStore("loading", () => {
  const counter = ref(0);

  const isLoading = computed((): boolean => counter.value > 0);

  function show(): void {
    counter.value++;
  }

  function hide(): void {
    counter.value--;
  }

  function close(): void {
    counter.value = 0;
  }

  return { isLoading, show, hide, close };
});
