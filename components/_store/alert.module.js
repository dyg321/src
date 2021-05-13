const state = {
  type: null,
  message: null,
  loading: false,
  mapLoaded: false
}

const actions = {
  success ({ commit }, message) {
    commit('success', message)
  },
  error ({ commit }, message) {
    commit('error', message)
  },
  clear ({ commit }) {
    commit('clear')
  },
  loading ({commit}, on) {
    commit('loading', on)
  },
  map ({commit}, on) {
    commit('map', on)
  }
}

const mutations = {
  success (state, message) {
    state.type = 'alert-success'
    state.message = message
  },
  error (state, message) {
    state.type = 'alert-danger'
    state.message = message
    state.loading = false
  },
  clear (state) {
    state.type = null
    state.message = null
  },
  loading (state, on) {
    state.loading = on
  },
  map (state, on) {
    state.mapLoaded = on
  }
}

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations
}
