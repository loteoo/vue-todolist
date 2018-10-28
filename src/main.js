import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'


import TodoList from './components/TodoList.vue'
import Counter from './components/Counter.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    { path: '/todo-offline', component: TodoList },
    { path: '/todo-rest', component: TodoList },
    { path: '/counter', component: Counter }
  ]
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
