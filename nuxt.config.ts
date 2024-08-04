import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["nuxtjs-naive-ui", 'nuxt-windicss'],
  vite: {
    plugins: [
      AutoImport({
        imports: [
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ]
  },
  css: [
    "~/assets/main.css"
  ],
  app: {
    head: {
      titleTemplate: '%s - 小魏同学的Nuxt项目',
      title: '小魏同学的Nuxt项目',
      charset: 'utf-8',
      htmlAttrs: {
        lang: "zh-cn"
      },
      meta: [
        {
          name: 'description',
          content: '这个是项目项目描述'
        },

        {
          name: 'keywords',
          content: '关键词'
        }
      ],
      // 引入一些第三方cdn
      script: [],
      link:[]
    }
  }
})