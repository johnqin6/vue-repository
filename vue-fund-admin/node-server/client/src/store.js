import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED:'SET_AUTHENTICATED',
  SET_USER:'SET_USER'
}

const state = {
  isAuthebticated: false,
  user: {}
}

const getters = {
  isAuthebticated: state => state.isAuthebticated,
  user: state => state.user
}

const mutations = {
  // 设置是否授权
  [types.SET_AUTHENTICATED](state, isAuthebticated) {
    if (isAuthebticated) {
      state.isAuthebticated = isAuthebticated
    } else {
      state.isAuthebticated = false
    }
  },
  [types.SET_USER](state, user) {
    if (user) {
      state.user = user
    } else {
      state.user = {}
    }
  }
}

const actions = {
  setAuthenticated: ({ commit }, isAuthebticated) => {
    commit(types.SET_AUTHENTICATED, isAuthebticated)
  },
  setUser: ({ commit }, user) => {
    commit(types.SET_USER, user)
  },
  clearCurrentState: ({ commit }) => {
    commit(types.SET_AUTHENTICATED, false)
    commit(types.SET_USER, null)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
