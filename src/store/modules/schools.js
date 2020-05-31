import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

const state = {
  chosenFilterOptions: {
    country: '', degree: '', course: ''
  },
  availableCountries: [ { tag: 'USA', selected: false }, { tag: 'UK', selected: false }, { tag: 'CANADA', selected: false }, { tag: 'NEW ZEALAND', selected: false }, { tag: 'UAE', selected: false }, { tag: 'CHINA', selected: false }, { tag: 'INDIA', selected: false }, { tag: 'RUSSIA', selected: false }, { tag: 'SWITZERLAND', selected: false }, { tag: 'DUBAI', selected: false }, { tag: 'JAPAN', selected: false }, { tag: 'SAUDI ARABIA', selected: false }, { tag: 'DENMARK', selected: false }, { tag: 'SCOTLAND', selected: false } ],
  availableDegrees: [ { tag: 'Ordinary Diploma', selected: false }, { tag: 'Bachelor\'s', selected: false }, { tag: 'Post-bac Diploma', selected: false }, { tag: 'Graduate Diploma', selected: false }, { tag: 'Master\'s Degree', selected: false }, { tag: 'Doctorate Degree', selected: false } ],
  availableCourses: [ { tag: 'Arts', selected: false }, { tag: 'Physical Sciences', selected: false }, { tag: 'Engineering', selected: false }, { tag: 'Business', selected: false }, { tag: 'Health Sciences', selected: false }, { tag: 'Social Sciences', selected: false }, { tag: 'Law', selected: false }, { tag: 'Medical Sciences', selected: false }, { tag: 'Agriculture', selected: false }, { tag: 'Finance', selected: false } ],
  allSchoolsData: [],
  schoolDetails: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  processState: {
    sendState: "Submit",
    count: 0
  },
  schools: [],
  draftedSchools: []
}

const plugins = [createPersistedState()]

const getters = {
  availableCountries: state => {
    return state.availableCountries
  },
  availableDegrees: state => {
    return state.availableDegrees
  },
  availableCourses: state => {
    return state.availableCourses
  },
  eachCardDetails: state => {
    return state.allSchoolsData
  },
  schoolDetails: state => {
    return state.schoolDetails
  },
  processState: state => {
    return state.processState
  },
  allSchools: state => {
    return state.allSchoolsData
  }
}

const mutations = {
  newSchool: (state, school) => {
    state.schools.unshift(school)
  },
  processing: state => {
    state.processState.sendState = 'Sending...'
  },
  done: state => {
    let details = state.schoolDetails
    let processState = state.processState

    processState.sendState = 'Done'
    processState.sendState = 'Submit'

    details.length = 0
    processState.count += 1
  },
  postFailed: state => {
    let processState = state.processState

    processState.sendState = 'Failed.. (Retry)'
  },
  resetPostBtn: state => {
    let processState = state.processState

    processState.sendState = 'Submit'
  },
  fetch: (state, schools) => {
    state.allSchoolsData = schools
  },
  fetchDrafts: (state, drafts) => {
    state.draftedSchools = drafts
  }
}

const actions = {
  async addSchool ({ commit }, schoolData) {
    const response = await axios.post('https://travooler-api.herokuapp.com/schools/drafts', {
      name: schoolData[0],
      city: schoolData[1],
      score: schoolData[2],
      status: schoolData[3],
      degree: schoolData[4],
      appFee: schoolData[5],
      country: schoolData[6],
      course: schoolData[7],
      cost: schoolData[8],
      url: schoolData[9],
      prevlink: schoolData[10],
      sessMonth: schoolData[11],
      sessYear: schoolData[12],
      schoolID: schoolData[13],
      invoiceFee: schoolData[14]
    })
      .then((response) => {
        if ([200, 201].includes(response.status)) {
          commit('done')
        }
        if ([500].includes(response.status)) {
          commit('postFailed')
          console.log(response.status)
        }
        console.log(response.status)
      }, (error) => {
        console.log(error)
        commit('postFailed')
      })

    commit('newSchool', 'trash')
  },
  processing: context => {
    context.commit('processing')
  },
  done: context => {
    console.log('fetching...')
    context.commit('done')
  },
  resetPostBtn: context => {
    context.commit('resetPostBtn')
  },
  async fetchSchools ({ commit }) {
    const response = await axios.get('https://travooler-api.herokuapp.com/schools/published')

    commit('fetch', response.data)
  },
  async fetchDraftedSchools ({ commit }) {
    const response = await axios.get('https://travooler-api.herokuapp.com/schools/drafts')
    console.log('fetched drafts')
    commit('fetchDrafts', response.data)
  }
}

export default {
  state,
  plugins,
  getters,
  mutations,
  actions
}
