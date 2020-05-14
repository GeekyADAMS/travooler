// import axios from 'axios'

const state = {
  userDetails: {
    name: '',
    mail: '',
    preference: {
      country: '',
      degree: '',
      program: ''
    }
  }
}
  
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
    getters,
    mutations,
    actions
}