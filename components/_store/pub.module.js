import { pubService } from '../_services'

const state = {status: { loading: false }, pubs: [], pub: { title: null, description: null }}
const actions = {
  getAll ({ dispatch, commit }) {
    commit('pubsRequest')
    dispatch('alert/loading', true, { root: true })

    pubService.getAll()
      .then(
        data => {
          commit('pubsSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('pubsFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  getById ({dispatch, commit}, id) {
    commit('pubRequest')
    dispatch('alert/loading', true, { root: true })

    pubService.getById(id)
      .then(
        data => {
          commit('pubSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('pubFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

const mutations = {
  pubsRequest (state) {
    state.status = { loading: true }
  },
  pubsSuccess (state, data) {
    state.status = { loading: false }
    state.pubs = data
  },
  pubsFailure (state) {
    state.status = {loading: false}
  },
  pubRequest (state) {
    state.status = { loading: true }
    state.pub = { title: null, description: null }
  },
  pubSuccess (state, data) {
    state.status = { loading: false }
    state.pub = data
  },
  pubFailure (state) {
    state.status = {loading: false}
    state.pub = { title: null, description: null }
  }
}

export const pub = {
  namespaced: true,
  state,
  actions,
  mutations
}
