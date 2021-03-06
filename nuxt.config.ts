import pkg from './package.json'

const recaptchaPlugin =
  process.env.RECAPTCHA_CLIENT_SECRET && process.env.RECAPTCHA_SERVER_SECRET
    ? ['@nuxtjs/recaptcha']
    : []

export const config: any = {
  telemetry: false,

  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['@/assets/stylesheets/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'].concat(recaptchaPlugin),
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  buildModules: ['@nuxt/typescript-build'],

  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: '/',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 4000
  },

  recaptcha: {
    siteKey: process.env.RECAPTCHA_CLIENT_SECRET,
    version: 3,
    hideBadge: false
  },

  module: {
    rules: [
        {
           test: /\.s[ac]ss$/i,
           use: ['style-loader','css-loader','sass-loader',],
         },
    ],
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config: any, ctx: any) {
      config.node = {
        fs: 'empty'
      }
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  }
}

export default config
