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
    async createOrder({ commit }, { name, phone, adId, userId }) {
      console.log(name)
      console.log(phone)
      console.log(adId)
      console.log(userId)
      
      commit('clearError', null, { root: true })
      
      // Имитация запроса к серверу
      let isRequestOk = true
      let promise = new Promise(function(resolve) {
        setTimeout(() => resolve('Done'), 3000)
      })
      
      if (isRequestOk) {
        await promise.then(() => {
          commit('createOrder', {
            id: Math.random(),
            name,
            phone,
            adId,
            userId,
            done: false
          })
        })
      } else {
        await promise.then(() => {
          commit('setError', 'Ошибка создания заказа', { root: true })
          throw new Error('Упс... Ошибка создания заказа')
        })
      }
    }
  },
  getters: {
    orders(state) {
      return state.orders
    }
  }
}