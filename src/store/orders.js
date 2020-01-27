import axios from 'axios'

const url = 'http://134.209.138.34/'

export default {
  state: {
    orders: [],
    loading: false
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    },
    async fetchOrders ({ commit }) {
      commit('setLoading', true)
      const resOrders = []
      try {
        const orders = (await axios.get(`${url}items`)).data
        Object.keys(orders).forEach(key => {
          const order = orders[key]
          resOrders.push(order)
        })
        commit('loadOrders', resOrders)
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        throw e
      }
    },
    async loadOrderById ({ commit }, payload) {
      commit('setLoading', true)
      const resOrders = []
      try {
        const orders = (await axios.get(`${url}item/${payload}`)).data
        Object.keys(orders).forEach(key => {
          const order = orders[key]
          resOrders.push(order)
        })
        commit('loadOrders', resOrders)
        commit('setLoading', false)
      } catch (e) {
        commit('setLoading', false)
        throw e
      }
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    orders (state) {
      return state.orders
    }
  }
}
