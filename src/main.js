import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes"
import VueResource from "vue-resource"

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'https://series7-api.herokuapp.com/api'

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
