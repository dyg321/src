import { aveService } from '../_services'

const state = {
  status: { loading: false },
  aves: [],
  photos: [],
  ave: { title: null, description: null },
  pag: { start: 0, limit: 10 },
  results: []
}
const actions = {
  getAll ({ dispatch, commit }) {
    commit('avesRequest')
    dispatch('alert/loading', true, { root: true })

    aveService.getAll()
      .then(
        data => {
          commit('avesSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('avesFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  getById ({dispatch, commit}, id) {
    commit('aveRequest')
    dispatch('alert/loading', true, { root: true })

    aveService.getById(id)
      .then(
        data => {
          commit('aveSuccess', data)
          commit('flickrRequest')

          aveService.getFlickr(data.title)
            .then(
              data => {
                commit('flickrSuccess', data)
                dispatch('alert/loading', false, { root: true })
              },
              error => {
                commit('flickrFailure', error)
                dispatch('alert/error', error, { root: true })
              }
            )
        },
        error => {
          commit('aveFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  search ({dispatch, commit}, q) {
    commit('avesSearch')
    dispatch('alert/loading', true, { root: true })

    aveService.search(q)
      .then(
        data => {
          commit('searchSuccess', data)
          dispatch('alert/loading', false, { root: true })
        },
        error => {
          commit('searchFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}

const mutations = {
  avesRequest (state) {
    state.status = { loading: true }
  },
  avesSuccess (state, data) {
    state.status = { loading: false }
    state.aves = data
  },
  avesFailure (state) {
    state.status = {loading: false}
  },
  aveRequest (state) {
    state.status = { loading: true }
    state.ave = { title: null, description: null }
  },
  aveSuccess (state, data) {
    state.status = { loading: false }
    state.ave = data
  },
  aveFailure (state) {
    state.status = {loading: false}
    state.ave = { title: null, description: null }
  },
  flickrRequest (state) {
    state.status = { loading: true }
    state.photos = []
  },
  flickrSuccess (state, data) {
    state.status = { loading: false }
    state.photos = data
  },
  flickrFailure (state) {
    state.status = {loading: false}
    state.photos = []
  },
  avesSearch (state) {
    state.status = { loading: true }
  },
  searchSuccess (state, data) {
    state.status = { loading: false }
    state.results = data
  },
  searchFailure (state) {
    state.status = {loading: false}
    state.results = []
  }
}

export const ave = {
  namespaced: true,
  state,
  actions,
  mutations
}
