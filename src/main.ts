import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

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
      // block: true,
      rounded: false
    },
  }
})
// End Vuetify


const app = createApp(App)

app.use(router);
app.use(vuetify);

app.mount('#app')
