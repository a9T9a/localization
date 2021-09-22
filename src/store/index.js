import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:null,
    email:null,
    password:null
  },
  mutations: {
    setUser(state,user){
      state.name=user.name
      state.email=user.email
      state.password=user.password
    },
    logout(state){
      state.name=null
      state.email=null
      state.password=null
    },
  },
  actions: {
  },
  modules: {
  }
})
