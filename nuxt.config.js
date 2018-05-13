const data = require('./resource/data.js');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cineworld One',
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
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
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

  generate: {
    routes: function() {
      return data.get().then(data => {
        return data.locations.map(location => {
          return {
            route: '/' + location.slug,
            payload: location,
          };
        });
      });
    },
  },
};
