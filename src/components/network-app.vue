<template>
    <div :class="{ en: locale === 'en' }">
      <loading
        :key="isLoading"
        :active="isLoading"
        :height="64"
        :is-full-page="true"
        :opacity="0.5"
        :width="64"
        :z-index="99999"
        background-color="#FFFFFF"
        color="#000000"
        loader="dots"
      />
      <suspense>
        <slot></slot>
      </suspense>
      <div class="toast_box">
        <network-function-toast
          v-for="alert in alerts"
          :key="alert"
          :item="alert"
        />
      </div>
    </div>
    QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ
  </template>
  
  <script lang="ts" name="network-app" setup>
  import Loading from "vue3-loading-overlay";
  import { NetworkFunctionToast } from "@/components";
  import { watch } from "vue";
  import { useI18n } from "vue-i18n";
  import { useToastStore } from "@/stores/toast";
  import { useLoadingStore } from "@/stores/loading";
  import { storeToRefs } from "pinia";
  
  const { locale } = useI18n();
  const toastStore = useToastStore();
  const { alerts } = storeToRefs(toastStore);
  
  const loadingStore = useLoadingStore();
  const { isLoading } = storeToRefs(loadingStore);
  console.log('isLoading')
  console.log(toastStore)
  console.log(isLoading)
  console.log(alerts)
  function selectLocale(): void {
    document.documentElement.setAttribute(
      "lang",
      locale.value == "zh" ? "zh-TW" : locale.value
    );
  }
  
  watch(locale, () => {
    selectLocale();
  });
  
  selectLocale();
  </script>
  
  <style scoped>
  @import url("vue3-loading-overlay/dist/vue3-loading-overlay.css");
  
  .toast_box {
    position: fixed;
    right: 20px;
    top: 80px;
    z-index: 99998;
  }
  </style>
  