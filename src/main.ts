import { createApp } from 'vue'
import ProductList from './examples/ProductList.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme:{
    defaultTheme: "system"
  },
  defaults:{
    VBtn: {
      color: '#ba2e1b',
      block: true,
      rounded: false
    },
  }
})
// End Vuetify

createApp(ProductList).use(vuetify).mount('#app')
