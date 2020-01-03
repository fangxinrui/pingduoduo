import './css/index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'mint-ui/lib/style.css'
import {
   Button,
   Header,
   Swipe,
   SwipeItem
} from 'mint-ui'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import Vue from "../node_modules/vue/dist/vue.js"
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import router from "./router.js"
import app from "./App.vue"
import moment from 'moment'

Vue.component(Button.name, Button)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
   return moment(dateStr).format(pattern)
})
var vm = new Vue({
   el: "#app",
   data: {},
   render: function (createElement) {
      return createElement(app)
   },
   router
})