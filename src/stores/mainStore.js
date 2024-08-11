import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const mainStore = defineStore('mainStore', () => {
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
  // projects data
  const projects = ref([
    {
      name: 'my portfolio',
      imgs: [
        'portfolio_desktop1.webp',
        'portfolio_desktop2.webp',
        'portfolio_desktop3.webp',
        'portfolio_desktop4.webp',
        'portfolio_mobile1.webp',
        'portfolio_mobile2.webp'
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
        'special_template_desktop1.webp',
        'special_template_desktop2.webp',
        'special_template_desktop3.webp',
        'special_template_desktop5.webp',
        'special_template_mobile1.webp'
      ],
      technologies: ['HTML', 'CSS', 'JavaAcript'],
      link: 'https://anas-agha.github.io/special-website/'
    },
    {
      name: 'ella mart',
      imgs: [
        'ellamart_desktop1.webp',
        'ellamart_desktop2.webp',
        'ellamart_desktop3.webp',
        'ellamart_desktop4.webp',
        'ellamart_desktop5.webp',
        'ellamart_desktop6.webp',
        'ellamart_desktop7.webp',
        'ellamart_mobile1.webp'
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
        'shop_you_and_me_desktop1.webp',
        'shop_you_and_me_desktop2.webp',
        'shop_you_and_me_desktop3.webp',
        'shop_you_and_me_desktop4.webp',
        'shop_you_and_me_mobile1.webp',
        'shop_you_and_me_mobile2.webp'
      ],
      technologies: ['HTML', 'CSS', 'JavaAcript', 'Vue Js'],
      link: 'https://shopyouandme.netlify.app/'
    },
    {
      name: 'bondi',
      imgs: [
        'bondi_desktop1.webp',
        'bondi_desktop2.webp',
        'bondi_desktop3.webp',
        'bondi_desktop4.webp',
        'bondi_mobile1.webp'
      ],
      technologies: ['HTML', 'Bootstrap'],
      link: 'https://anas-agha.github.io/bondi/'
    },
    {
      name: 'leon template',
      imgs: ['template1_desktop1.webp', 'template1_mobile1.webp'],
      technologies: ['HTML', 'CSS'],
      link: 'https://anas-agha.github.io/template1/'
    }
  ])

  return { theme, switchTheme, lang, changeLang, dir, projects }
})
