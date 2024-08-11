import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import EN from '@/locale/en.json'
import AR from '@/locale/ar.json'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas,far,fab)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
import { mainStore } from './stores/mainStore'

if (localStorage.getItem('lang')) {
  mainStore().lang = localStorage.getItem('lang')
} else {
  mainStore().lang = 'en'
}
const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: mainStore().lang,
  //   locale: document.cookie.split('=')[1],
  messages: {
    en: EN,
    ar: AR
  }
})
app.use(MotionPlugin)
app.use(router)
app.use(i18n)
app.mount('#app')
