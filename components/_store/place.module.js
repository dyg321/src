import { placeService } from '../_services'

const state = { status: { loading: false }, places: [], place: {fotos: [{ filename: 'noimage.png' }]} }
const actions = {
  getAll ({ dispatch, commit }) {
    commit('placesRequest')
    dispatch('alert/loading', true, { root: true })

    placeService.getAll()
      .then(
        data => {
          commit('placesSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('placesFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  getById ({dispatch, commit}, id) {
    commit('placeRequest')
    dispatch('alert/loading', true, { root: true })

    placeService.getById(id)
      .then(
        data => {
          commit('placeSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('placeFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

const mutations = {
  placesRequest (state) {
    state.status = { loading: true }
  },
  placesSuccess (state, data) {
    state.status = { loading: false }
    state.places = data
  },
  placesFailure (state) {
    state.status = {loading: false}
  },
  placeRequest (state) {
    state.status = { loading: true }
    state.place = {fotos: [{ filename: 'noimage.png' }]}
  },
  placeSuccess (state, data) {
    state.status = { loading: false }
    state.place = data
  },
  placeFailure (state) {
    state.status = {loading: false}
  }
}

export const place = {
  namespaced: true,
  state,
  actions,
  mutations
}
