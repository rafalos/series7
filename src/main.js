import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import {routes} from "./routes"
import VueResource from "vue-resource"
import store from "./store/store"
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'https://series7-api.herokuapp.com/api/'

export const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  beforeCreate() {
    this.$store.dispatch("fetchSerieList")
  },
  el: '#app',
  router,
  store,
  render: h => h(App)
})
