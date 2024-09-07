// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  css: [
    './assets/css/global-style.css',
    './assets/css/index.css',
    './assets/css/userAgreement.css',
    './assets/css/contacts.css',
    './assets/css/offer.css',
    './assets/css/returnPolicy.css',
    './assets/css/productModal.css',
    './assets/css/gameMap.css',
    './assets/css/hover.css',
    './assets/css/design.css',
  ],

  plugins: [
  ],

  head: {
    link: [
      { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/favicon-16.svg' },
      { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/favicon-32.svg' },
      { rel: 'icon', type: 'image/svg+xml', sizes: '64x64', href: '/favicon-64.svg' },
      { rel: 'icon', type: 'image/svg+xml', sizes: '120x120', href: '/favicon-120.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.svg' },
      { rel: 'mask-icon', href: '/favicon-64', color: '#f6f6f6' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  components: true,

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],

  site: {
    url: 'https://darkness.pw/', // Укажите свой URL
    name: 'Darkness'  // Опционально: имя, отображаемое на вашей карте сайта
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://darkness.pw/',
    routes: [
      {
        url: '/',
        changefreq: 'monthly',
        priority: 1.0
      },
      {
        url: '/gameMap',
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        url: '/contacts',
        changefreq: 'monthly',
        priority: 0.8
      },
      {
        url: '/design',
        changefreq: 'monthly',
        priority: 0.7
      },
    ]
  },

  build: {
  },

  hooks: {
    'render:route': (route) => {
      route.headers['X-Frame-Options'] = 'DENY';
    }
  },

}