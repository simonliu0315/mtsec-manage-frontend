import { createI18n } from 'vue-i18n'
import en from '@/i18n/message-en.json'
import zh from '@/i18n/message-zh.json'

//const i18n = { en, zh };

const i18n = new createI18n({
  locale: 'zh-TW',
  messages: {
    zh,
    en
  },
  fallbackLocale: 'zh-TW'
})
export { i18n }
