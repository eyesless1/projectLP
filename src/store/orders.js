export default {
  state: {
    orders: []
  },
  mutations: {
    createOrder(state, payload) {
      state.orders.push(payload)
    }
  },
  actions: {
    createOrder({ commit }, { name, phone, adId, userId }) {
      console.log('Order created:', { name, phone, adId, userId })
      
      commit('clearError', null, { root: true })
      
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            commit('createOrder', {
              id: Math.random(),
              name,
              phone,
              adId,
              userId,
              done: false
            })
            resolve()
          } catch (error) {
            reject(error)
          }
        }, 3000)
      })
    }
  },
  getters: {
    // Все заказы
    orders(state) {
      return state.orders
    },
    // Заказы текущего пользователя
    userOrders(state, getters) {
      const currentUser = getters.user
      if (!currentUser || !currentUser.id) return []
      return state.orders.filter(order => order.userId == currentUser.id)
    }
  }
}