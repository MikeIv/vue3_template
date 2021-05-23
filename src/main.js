import { createApp } from 'vue'
import Header from './Header.vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/styles.scss'


createApp(Header).use(store).use(router).mount( '#header')
createApp(App).use(store).use(router).mount( '#app')
