import { createI18n, useI18n } from 'vue-i18n'
import en from '@/i18n/message-en.json'
import zh from '@/i18n/message-zh.json'

//const i18n = { en, zh };

const i18n = new createI18n({
  //locale: 'zh-TW',
  locale: localStorage.getItem("locale") || "zh-TW",
  fallbackLocale: "en",
  globalInjection: true,
  legacy: false,
  messages: {
    zh,
    en
  },
  //fallbackLocale: 'zh-TW'
})
export { i18n }

import { dismissAlertConfig, useNetworkAxios } from "@/ts/container/axios-container";
import { CommonStatusApi } from 'mtsec-manage-client'

export function installStatusCodes(basePath?: string) {
  const eInvAxios = useNetworkAxios();
  const { mergeLocaleMessage } = useI18n();
  const commonStatusApi = new CommonStatusApi(undefined, basePath, eInvAxios);
  commonStatusApi.statusCodes("zh", dismissAlertConfig).then((response) => {
    mergeLocaleMessage("zh", { statusCodes: { ...response?.data } });
  });
  commonStatusApi.statusCodes("en", dismissAlertConfig).then((response) => {
    mergeLocaleMessage("en", { statusCodes: { ...response?.data } });
  });
}