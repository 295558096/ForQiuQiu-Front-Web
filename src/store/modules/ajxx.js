import * as types from '../mutation-types'
const state = {
  currentSuspectName: '',
  pageNoBegin: ''
}

// getters
const getters = {
  currentSuspectName: state => state.currentSuspectName
}

// actions
const actions = {
  changeSuspectName({ commit, state }, obj) {
    commit(types.CHANGE_SUSPECT_NAME, obj)
  }
}

// mutations
const mutations = {
  // data 载荷
  [types.CHANGE_SUSPECT_NAME](state, data) {
    state.currentSuspectName = data
  },
  changePageNo(state, pageNoBegin) {
    state.pageNoBegin = pageNoBegin.pageNoBegin
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
