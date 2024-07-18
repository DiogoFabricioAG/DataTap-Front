import './assets/base.css'
import '@fontsource/bungee'
import '@fontsource-variable/teachers'
import '@fontsource/aclonica'
import '@fontsource-variable/afacad'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
