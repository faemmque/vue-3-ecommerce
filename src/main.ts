import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' //Icons
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
      color: '#b94866',
      // block: true,
      rounded: false
    },
  }
})
// End Vuetify


const app = createApp(App)

app.use(router);
app.use(vuetify);
app.use(createPinia())

app.mount('#app')
