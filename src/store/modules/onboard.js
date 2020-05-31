// import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

const state = {
  userDetails: {
    name: '',
    mail: '',
    searchID: '',
    preference: {
      country: '',
      degree: '',
      program: ''
    }
  }
}

const plugins = [createPersistedState()]
  
const getters = {
    userDetail: (state) => {
        return state.userDetails
    }
}
  
const mutations = {
  updateUserDetails: (state, userReply) => {
    state.userDetails = {
      name: userReply.name,
      mail: userReply.email,
      searchID: userReply.searchID,
      preference: {
        country: userReply.country,
        degree: userReply.qualification,
        program: userReply.program
      }
    }
  }
}
  
const actions = {
  updateUserDetails: (context, userReply) => {
    context.commit('updateUserDetails', userReply)
  }
}
  
export default {
    state,
    plugins,
    getters,
    mutations,
    actions
}