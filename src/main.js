import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/css/iconcss/iconfont.css";

import router from "./router/index.js";

var app=createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
