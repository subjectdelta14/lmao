import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './components/css/app.css'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)  
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
