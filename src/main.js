import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import App from './App.vue'
import Calendar from './components/Calendar';
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  vuetify,
  render: h => h(Calendar)
}).$mount('#app')
