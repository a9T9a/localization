import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrapvue from  "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import i18n from "./i18n"
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.use(bootstrapvue)
Vue.config.productionTip = false


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
