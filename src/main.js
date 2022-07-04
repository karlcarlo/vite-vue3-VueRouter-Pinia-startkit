import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from './store'

const app = createApp(App)

// 使用路由器插件
app.use(router)

// 使用Pinia插件
app.use(pinia)

app.mount('#app')