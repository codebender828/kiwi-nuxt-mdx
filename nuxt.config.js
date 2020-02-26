
export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/router'
  ],
  plugins: [
    'plugins/links.js',
    'plugins/editor.js'
  ],
  css: [
    'css/page.css',
    'css/night-owl.css'
  ],
  build: {
    extend (config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
      config.module.rules.push({
        test: /\.mdx$/,
        use: [
          'babel-loader',
          {
            loader: '@mdx-js/vue-loader'
          }
        ]
      })
    }
  }
}
