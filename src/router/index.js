import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Orders from '../components/Orders'
import Order from '../components/Order'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    },
    {
      path: '/order/:id',
      props: true,
      name: 'order',
      component: Order
    }
  ],
  mode: 'history'
})
