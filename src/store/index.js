import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: {
      items: [],
    },
    isAuthenticated: false,
    token: '',
    isLoading: false,
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('cart')) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
      } else {
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
    },
    addToCart(state, item) {
      //  we are checking that if item exists in the cart before
      const exists = state.cart.items.filter((i) => i.product.id === item.product.id)
      if (exists.length) {
        // if exists we are incrementing the quantity
        exists[0].quantity = parseInt(exists[0].quantity) + parseInt(item.quantity)
      } else {
        // if not exist we are adding item
        state.cart.items.push(item)
      }
      // then we are saving cart to the localstorage
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    setIsLoading(state, status) {
      state.isLoading = status
    },
  },
  actions: {},
  modules: {},
})
