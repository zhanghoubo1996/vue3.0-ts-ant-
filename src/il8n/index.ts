import { createI18n } from 'vue-i18n'
import en from "./componets/en"
import zh from "./componets/zh"
// call with I18n option
export const i18n = createI18n({
  locale: 'zh',
  messages: {
    en: en,
    zh:zh
  }
});