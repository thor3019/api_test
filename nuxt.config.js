const VuetifyLoaderPlugin=require('vuetify-loader/lib/plugin')

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


Vue.use(Vuetify)
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
plugins: [
    '~/plugins/vuetify',
    '~/plugins/vuetify',
  ],
  build: {
    plugins: [
      new VuetifyLoaderPlugin(),
    ],
  },