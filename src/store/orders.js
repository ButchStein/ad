import axios from 'axios'

const url = 'http://134.209.138.34/'

export default {
  state: {
    orders: [],
    loading: false,
    error: null
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    loadOrders (state, payload) {
      state.orders = payload
    }
  },
  actions: {
    setLoading ({ commit }, payload) {
      commit('setLoading', payload)
    },
    setError ({ commit }, payload) {
      commit('setError', payload)
    },
    clearError ({ commit }) {
      commit('clearError')
    },
    async fetchOrders ({ commit }) {
      commit('clearError')
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
        commit('setError', e.message)
        commit('setLoading', false)
        throw e
      }
    },
    async loadOrderById ({ commit }) {
      commit('clearError')
      commit('setLoading', true)
      const resOrders = []
      try {
        const orders = (await axios.get(`${url}item/`)).data
        Object.keys(orders).forEach(key => {
          const order = orders[key]
          resOrders.push(order)
        })
        commit('loadOrders', resOrders)
        commit('setLoading', false)
      } catch (e) {
        commit('setError', e.message)
        commit('setLoading', false)
        throw e
      }
    }
  },
  getters: {
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    },
    orders (state) {
      return state.orders
    },
    orderById (state) {
      return orderId => {
        return state.orders.find(order => order.id === orderId)
      }
    }
  }
}
