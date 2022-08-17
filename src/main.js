import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    install
} from '../dist/fleet-grid-layout.mjs'

createApp(App).use(install).mount('#app')