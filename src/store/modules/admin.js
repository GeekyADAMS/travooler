// import axios from 'axios'

const state = {
  clickedIndex: 0,
  popPublishedModal: false
}

const getters = {
  clickedIndex: (state) => {
    return state.clickedIndex
  },
  popPublishedModal: (state) => {
    return state.popPublishedModal
  }
}

const mutations = {
  expandPublishedDetails: (state, index) => {
    state.clickedIndex = index
    state.popPublishedModal = true
  },
  collapsePublishedDetails: (state) => {
    state.popPublishedModal = false
  },
  nextClicked: (state) => {
    state.clickedIndex += 1
  },
  prevClicked: (state) => {
    state.clickedIndex -= 1
  }
}

const actions = {
  expandPubDetails: (context, index) => {
    context.commit('expandPublishedDetails', index)
  },
  collapsePubDetails: (context) => {
    context.commit('collapsePublishedDetails')
  },
  nxtClicked: (context) => {
    context.commit('nextClicked')
  },
  preClicked: (context) => {
    context.commit('prevClicked')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
