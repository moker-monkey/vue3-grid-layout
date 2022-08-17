import {
    createApp
} from 'vue'
import App from './App.vue'
import TestApp from './TestBuild.vue'
import {
    install
} from '../dist/fleet-grid-layout.cjs'

createApp(TestApp).mount('#app').use(install)