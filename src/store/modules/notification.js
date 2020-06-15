
const state = {
  message: {
    title: '',
    text: ''
  },
  types: [{ name: 'warn', active: false }, { name: 'neutral', active: false }, { name: 'success', active: false }, { name: 'error', active: false }],
  notifStatus: false
}
  
const getters = {
  notifMessage: state => {
    return state.message
  },
  notifTypes: state => {
    return state.types
  },
  notifStatus: state => {
    return state.notifStatus
  }
}
  
const mutations = {
  flashNotif: (state, payload) => {
    state.message.title = payload.message.title
    state.message.text = payload.message.text
    let typesSize = state.types.length
    for (let i = 0; i < typesSize; i++) {
      if (state.types[i].name === payload.type) {
        state.types[i].active = true
      } else {
        state.types[i].active = false
      }
    }
    state.notifStatus = true
    setTimeout(() => {
      state.notifStatus = false
    }, 7000)
  },
  closeNotif: state => {
    setTimeout(() => {
      state.notifStatus = false
    }, 200)
  }
}

const actions = {
  flashNotif: (context, arg) => {
    context.commit('flashNotif', arg)
  },
  closeNotif: context => {
    context.commit('closeNotif')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
  