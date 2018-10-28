import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'


import TodoList from './components/TodoList.vue'
import FetchList from './components/FetchList.vue'
import Counter from './components/Counter.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/todo-offline', component: TodoList },
    { path: '/fetch-list', component: FetchList },
    { path: '/counter', component: Counter }
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
