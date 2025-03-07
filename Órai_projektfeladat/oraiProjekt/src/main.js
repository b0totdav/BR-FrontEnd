import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import "../../../../BR-FrontEnd/jqueery-3.7.1.min.js"

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  });


app.mount('#app')