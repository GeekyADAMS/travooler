import axios from 'axios'
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
    },
    searchLocation: {
      searchedFrom: {
        city: '',
        country: '',
        ipAddress: ''
      }
    }
  },
  uploadSuccessStatus: false
}

const plugins = [createPersistedState()]
  
const getters = {
    userDetail: (state) => {
      return state.userDetails
    },
    uploadSuccessStatus: state => {
      return state.uploadSuccessStatus
    }
}
  
const mutations = {
  uploadUserDetails: (state, userSearchData) => {

    state.userDetails = userSearchData
    state.uploadSuccessStatus = true

  },
  setUserDetails: (state, userSearchData) => {

    state.userDetails = userSearchData
    state.userDetails.searchLocation = {
      searchedFrom: userSearchData.searchLocation
    }
    console.log(userSearchData)
  }
}
  
const actions = {
  async uploadUserDetails (context, userChatData) {

    let searchData = {
      name: userChatData.name,
      mail: userChatData.email,
      searchID: userChatData.searchID,
      preference: userChatData.preference,
      searchLocation: userChatData.searchedFrom
    }

    const response = await axios.post('https://travooler-api.herokuapp.com/api/users/school-search/?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY, searchData)
      .then((response) => {
        if ([200, 201].includes(response.status)) {
        }
        if ([500].includes(response.status)) {
          console.log(response.status)
        }
        console.log(response.status)
      }, (error) => {
        console.log(error)
      })

    context.commit('uploadUserDetails', searchData)
  },
  setUserDetails: (context, fetchedUserData) => {
    let searchData = {
      name: fetchedUserData.name,
      mail: fetchedUserData.mail,
      searchID: fetchedUserData.searchID,
      preference: fetchedUserData.preference,
      searchLocation: fetchedUserData.searchLocation
    }

    context.commit('setUserDetails', searchData)
  }

}

export default {
    state,
    plugins,
    getters,
    mutations,
    actions
}