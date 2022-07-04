# vite-vue3-VueRouter-Pinia-startkit
vite + vue3 + Vue-Router + Pinia Startkit

#### 安装`pnpm`包管理器

```bash
npm install -g pnpm
```

#### 使用`vite`创建项目

`vite`相当于 `vue-cli`脚手架，因此应该首先安装它：

```bash
# 创建项目
pnpm create vite@latest
# 或
npm init vite
```

按照提示选择`vue`完成创建



#### 启动项目

```bash
# 进入项目目录
cd vite-project

# 安装依赖包
pnpm install
```

pnpm install 404错误解决

```bash
pnpm config set registry https://registry.npmmirror.com
```


```bash
# 启动项目
pnpm dev
```

默认web服务启动后，访问地址为：http://localhost:3000/



#### 安装`Vue-Router`

```bash
pnpm add vue-router
```

在项目`src`目录，创建`router/index.js`文件

```js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
```

再编辑`src`目录下的`main.js`文件，增加路由表的路由器实例，并以插件形式使用

```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router)

app.mount('#app')
```



#### 视图页面

在项目`src`目录下创建`views`目录，用于存放前端展示页面

在views目录中创建`Home.vue`文件

```vue
<template>
    <div>
        Home Page
    </div>
</template>
```

在views目录中创建`About.vue`文件

```vue
<template>
    <div>
        About Page
    </div>
</template>
```

编辑App.vue文件实现Home和About页面渲染

```vue
<template>
    <div id="app">
        <RouterView />
    </div>
</template>
```



#### 更新新页面至路由表

`router/index.js`

```js
const routes = [{
    name: '首页',
    path: '/',
    component: () => import('../views/Home.vue')
}, {
    name: '关于',
    path: '/about',
    component: () => import('../views/About.vue')
}]
```



#### 测试路由地址

```bash
# 启动服务
pnpm dev

# 打开浏览器输入地址
http://localhost:3000/
```

地址http://localhost:3000/#/ 进入 Home页面，地址http://localhost:3000/#/about 进入About页面



#### 模版嵌套

在`src`目录创建`layout/components`目录

创建`Header.vue`文件

```vue
<template>
    <header>
        <router-link to="/home">首页</router-link> ｜
        <router-link to="/about">关于</router-link>
    </header>
</template>
```

创建`Footer.vue`文件

```vue
<template>
    <footer>footer</footer>
</template>
```

在`src/layout`目录，创建`Layout.vue`文件

```vue
<script setup>
    import Header from './components/header.vue'
    import Footer from './components/footer.vue'
</script>

<template>
    <Header />
    <RouterView />
    <Footer />
</template>
```

更新`router/index.js`文件

```js
const routes = [{
    path: '/',
    component: () => import('../layout/index.vue'),
    redirect: '/home',
    children: [
        {
            name: '首页',
            path: 'home',
            component: () => import('../views/Home.vue')
        }, {
            name: '关于',
            path: 'about',
            component: () => import('../views/About.vue')
        }
    ]
}]
```

更改后，首页和关于页都会共用`Layout`模版，页面布局会包含`Header`和`Footer`部分



#### 安装配置pinia

在项目根目录执行安装命令

```bash
pnpm add pinia
```

在`src`目录创建`store/index.js`

```js
import { createPinia } from "pinia"

const pinia = createPinia()

export default pinia
```

在main.js中引入pinia，并以插件方式使用

```js
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
```

#### 配置Store

创建`store/comm.js`

```js
import { defineStore } from "pinia";

const useStore = defineStore(
    'comm',
    {
        state: () => ({
            count: 0
        }),
        actions: {
            inc() {
                this.count ++
            }
        }
    }
)

export default useStore
```

在About组件修改state数据，在Home组件显示state数据

修改Home组件

```vue
<script setup>
import { useStore } from "../store/comm"

const commStore = useStore()
</script>

<template>
    <div>
        Home Page - {{ commStore.count }}
    </div>
</template>
```

修改About组件

```vue
<script setup>
import { useStore } from '../store/comm'

const commStore = useStore()

function clickHandler() {
    commStore.inc()
}
</script>

<template>
    <div>
        About Page - <button @click="clickHandler">增加count</button>
    </div>
</template>
```


