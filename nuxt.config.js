module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cineworld One',
    htmlAttrs: { lang: 'en-GB' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'More efficient cinema info',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [{ rel: 'stylesheet', href: 'https://use.typekit.net/rzd3grg.css' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  mode: 'spa',

  generate: {
    routes: ['/birmingham-broad-street'],
  },

  css: [
    'bootstrap/scss/bootstrap-reboot.scss',
    'bootstrap/scss/bootstrap-grid.scss',
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['~/plugins/remedy'],

    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
