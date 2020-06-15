
const state = {
  successModalState: true,
  editPrefModalState: false
}
  
const getters = {
  successModal: state => {
    return state.successModalState
  },
  editPrefModal: state => {
    return state.editPrefModalState
  }
}
  
const mutations = {
  switchSuccessModal: state => {
    if (state.successModalState) {
        state.successModalState = false
    } else {
        state.successModalState = true
    }
  },
  switchEditPrefModal: state => {
    if (state.editPrefModalState) {
        state.editPrefModalState = false
    } else {
        state.editPrefModalState = true
    }
  }
}
  
const actions = {
  switchSuccessModal: ({commit}) => {
    commit('switchSuccessModal')
  },
  switchEditPrefModal: ({commit}) => {
    commit('switchEditPrefModal')
  }
}

export default {
    state,
    getters,
    mutations,
    actions
}