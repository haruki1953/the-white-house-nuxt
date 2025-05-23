// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  elementPlus: {
    /** Options */
  },
  srcDir: 'src/',
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false // 取消自动前缀，避免名称冲突
  //   }
  // ],
  app: {
    // head
    head: {
      title: 'The White House',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0, user-scalable=no'
        },
        {
          name: 'description',
          content: 'ElementPlus + Nuxt3'
        }
      ],
      link: [
        // { rel: 'icon', type: 'image/png', href: '/favicon256.png' },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images-250515/favicon-196x196.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images-250515/favicon-96x96.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images-250515/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images-250515/favicon-16x16.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images-250515/favicon-128.png'
        },
        { rel: 'icon', type: 'image/png', href: '/images-250515/favicon.ico' },
        // 预加载字体
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-Italic.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-Medium.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-MediumItalic.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-SemiBold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-SemiBoldItalic.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-Bold.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSans-BoldItalic.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSerif-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'preload',
          href: '/whitehouse-fonts-250515/webfonts/InstrumentSerif-Italic.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/fontawesome.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/brands.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/solid.min.css'
        },
        {
          rel: 'stylesheet',
          href: '/fontawesome-free-6.7.1-web/css/regular.min.css'
        },
        // src\public\whitehouse-fonts-250515\css\all.css
        {
          rel: 'stylesheet',
          href: '/whitehouse-fonts-250515/css/all.css'
        }
      ]
      //   script: [
      //     {
      //       innerHTML: `
      // /* 在 index.html 中就初始化颜色，以避免加载过程中的白屏 */
      // // 读取本地存储中的 vueuse-color-scheme 值
      // const scheme = localStorage.getItem('vueuse-color-scheme') || 'auto';
      // // 根据 vueuse-color-scheme 的值设置主题
      // if (scheme === 'dark' || (scheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      //   document.documentElement.classList.add('dark');
      // }
      //       `
      //     }
      //   ]
    }
  },

  // css
  css: [
    '~/assets/styles/main.scss',
    'element-plus/theme-chalk/dark/css-vars.css',
    'element-plus/theme-chalk/display.css'
  ]
})
