import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'materialize-css/dist/js/materialize.min'
import Toaster from '@meforma/vue-toaster'

createApp(App).use(store).use(router).use(Toaster, { position: 'top-right' }).mount('#app')
