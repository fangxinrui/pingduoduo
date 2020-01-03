import $ from 'jquery'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vue from "../node_modules/vue/dist/vue.js"
import 'mint-ui/lib/style.css'
import { Button, Header, Swipe, SwipeItem } from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import app from "./App.vue"
import router from "./router.js"
import VueRouter from "vue-router"
import VueResource from "vue-resource"

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)
Vue.use(VueResource)

var vm = new Vue({
   el: "#app",
   data: {
   },
   render: function (createElement) {
      return createElement(app)
   },
   router
})
