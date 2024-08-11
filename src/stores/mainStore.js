import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import portfolio_desktop1 from '@/assets/projects/portfolio_desktop1.webp'
import portfolio_desktop2 from '@/assets/projects/portfolio_desktop2.webp'
import portfolio_desktop3 from '@/assets/projects/portfolio_desktop3.webp'
import portfolio_desktop4 from '@/assets/projects/portfolio_desktop4.webp'
import portfolio_mobile1 from '@/assets/projects/portfolio_mobile1.webp'
import portfolio_mobile2 from '@/assets/projects/portfolio_mobile2.webp'
//
import special_template_desktop1 from '@/assets/projects/special_template_desktop1.webp'
import special_template_desktop2 from '@/assets/projects/special_template_desktop2.webp'
import special_template_desktop3 from '@/assets/projects/special_template_desktop3.webp'
import special_template_desktop5 from '@/assets/projects/special_template_desktop5.webp'
import special_template_mobile1 from '@/assets/projects/special_template_mobile1.webp'
//
import ellamart_desktop1 from '@/assets/projects/ellamart_desktop1.webp'
import ellamart_desktop2 from '@/assets/projects/ellamart_desktop2.webp'
import ellamart_desktop3 from '@/assets/projects/ellamart_desktop3.webp'
import ellamart_desktop4 from '@/assets/projects/ellamart_desktop4.webp'
import ellamart_desktop5 from '@/assets/projects/ellamart_desktop5.webp'
import ellamart_desktop6 from '@/assets/projects/ellamart_desktop6.webp'
import ellamart_desktop7 from '@/assets/projects/ellamart_desktop7.webp'
import ellamart_mobile1 from '@/assets/projects/ellamart_mobile1.webp'
//
import shop_you_and_me_desktop1 from '@/assets/projects/shop_you_and_me_desktop1.webp'
import shop_you_and_me_desktop2 from '@/assets/projects/shop_you_and_me_desktop2.webp'
import shop_you_and_me_desktop3 from '@/assets/projects/shop_you_and_me_desktop3.webp'
import shop_you_and_me_desktop4 from '@/assets/projects/shop_you_and_me_desktop4.webp'
import shop_you_and_me_mobile1 from '@/assets/projects/shop_you_and_me_mobile1.webp'
import shop_you_and_me_mobile2 from '@/assets/projects/shop_you_and_me_mobile2.webp'
//
import bondi_desktop1 from '@/assets/projects/bondi_desktop1.webp'
import bondi_desktop2 from '@/assets/projects/bondi_desktop2.webp'
import bondi_desktop3 from '@/assets/projects/bondi_desktop3.webp'
import bondi_desktop4 from '@/assets/projects/bondi_desktop4.webp'
import bondi_mobile1 from '@/assets/projects/bondi_mobile1.webp'
//
import template1_desktop1 from '@/assets/projects/template1_desktop1.webp'
import template1_mobile1 from '@/assets/projects/template1_mobile1.webp'
export const mainStore = defineStore('mainStore', () => {
  // projects data
  const projects = ref([
    {
      name: 'my portfolio',
      imgs: [
        portfolio_desktop1,
        portfolio_desktop2,
        portfolio_desktop3,
        portfolio_desktop4,
        portfolio_mobile1,
        portfolio_mobile2
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaAcript',
        'Vue Js',
        'pinia',
        'vuelidate',
        'i18n',
        'vueuse/motion'
      ],
      link: '#'
    },
    {
      name: 'special template',
      imgs: [
        special_template_desktop1,
        special_template_desktop2,
        special_template_desktop3,
        special_template_desktop5,
        special_template_mobile1
      ],
      technologies: ['HTML', 'CSS', 'JavaAcript'],
      link: 'https://anas-agha.github.io/special-website/'
    },
    {
      name: 'ella mart',
      imgs: [
        ellamart_desktop1,
        ellamart_desktop2,
        ellamart_desktop3,
        ellamart_desktop4,
        ellamart_desktop5,
        ellamart_desktop6,
        ellamart_desktop7,
        ellamart_mobile1
      ],
      technologies: [
        'HTML',
        'CSS',
        'JavaAcript',
        'Vue Js',
        'Vuetify',
        'Pinia',
        'Material Design Icons'
      ],
      link: 'https://ella-a.web.app'
    },
    {
      name: 'shop you and me',
      imgs: [
        shop_you_and_me_desktop1,
        shop_you_and_me_desktop2,
        shop_you_and_me_desktop3,
        shop_you_and_me_desktop4,
        shop_you_and_me_mobile1,
        shop_you_and_me_mobile2
      ],
      technologies: ['HTML', 'CSS', 'JavaAcript', 'Vue Js'],
      link: 'https://shopyouandme.netlify.app/'
    },
    {
      name: 'bondi',
      imgs: [bondi_desktop1, bondi_desktop2, bondi_desktop3, bondi_desktop4, bondi_mobile1],
      technologies: ['HTML', 'Bootstrap'],
      link: 'https://anas-agha.github.io/bondi/'
    },
    {
      name: 'leon template',
      imgs: [template1_desktop1, template1_mobile1],
      technologies: ['HTML', 'CSS'],
      link: 'https://anas-agha.github.io/template1/'
    }
  ])
  // theme functionality
  const theme = ref('light')
  // get theme from locale storgae
  let localTheme = localStorage.getItem('theme')
  if (localTheme) {
    if (localTheme === 'light') {
      theme.value = 'light'
    } else {
      theme.value = 'dark'
    }
  }
  // theme switching
  function switchTheme() {
    if (theme.value == 'light') {
      theme.value = 'dark'
    } else {
      theme.value = 'light'
    }
    localStorage.setItem('theme', theme.value)
  }
  // lang functionality
  const lang = ref('en')
  if (localStorage.getItem('lang')) {
    lang.value = localStorage.getItem('lang')
  }
  function changeLang(ln) {
    if (ln == 'ar') {
      lang.value = 'en'
    } else {
      lang.value = 'ar'
    }
    localStorage.setItem('lang', lang.value)
    return lang.value
  }
  // direction functionality
  const dir = computed(() => (lang.value == 'en' ? 'ltr' : 'rtl'))

  return { theme, switchTheme, lang, changeLang, dir, projects }
})
