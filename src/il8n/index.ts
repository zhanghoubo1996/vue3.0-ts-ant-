import { createI18n,useI18n } from 'vue-i18n'
import en from "./componets/en"
import zh from "./componets/zh"

const messages = {
   zh: {
    ...zh,
  },
  en: {
    ...en,
  },
 
}
// call with I18n option
export const i18n = createI18n({
  locale: 'zh',
  messages
});