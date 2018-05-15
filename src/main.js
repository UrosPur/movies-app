import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AppMovies from './pages/AppMovies'
import BootstrapVue from 'bootstrap-vue'




Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes = [

    { path:'/',redirect:'/movies'},
    { path:'/movies', component: AppMovies, name:'movies'}

]


const router = new VueRouter({

    routes,
    mode: 'history'

})

new Vue({
    router,
  render: h => h(App)
}).$mount('#app')
