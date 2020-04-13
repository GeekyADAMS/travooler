import axios from 'axios'

const state = {
  chosenFilterOptions: {
    country: '', degree: '', course: ''
  },
  availableCountries: [ { tag: 'USA', selected: false }, { tag: 'UK', selected: false }, { tag: 'CANADA', selected: false }, { tag: 'NEW ZEALAND', selected: false }, { tag: 'UAE', selected: false }, { tag: 'CHINA', selected: false }, { tag: 'INDIA', selected: false }, { tag: 'RUSSIA', selected: false }, { tag: 'SWITZERLAND', selected: false }, { tag: 'DUBAI', selected: false }, { tag: 'JAPAN', selected: false }, { tag: 'SAUDI ARABIA', selected: false }, { tag: 'DENMARK', selected: false }, { tag: 'SCOTLAND', selected: false } ],
  availableDegrees: [ { tag: 'Ordinary Diploma', selected: false }, { tag: 'Bachelor\'s', selected: false }, { tag: 'Post-bac Diploma', selected: false }, { tag: 'Graduate Diploma', selected: false }, { tag: 'Master\'s Degree', selected: false }, { tag: 'Doctorate Degree', selected: false } ],
  availableCourses: [ { tag: 'Arts', selected: false }, { tag: 'Physical Sciences', selected: false }, { tag: 'Engineering', selected: false }, { tag: 'Business', selected: false }, { tag: 'Health Sciences', selected: false }, { tag: 'Social Sciences', selected: false }, { tag: 'Law', selected: false }, { tag: 'Medical Sciences', selected: false }, { tag: 'Agriculture', selected: false }, { tag: 'Finance', selected: false } ],
  allSchoolsData: [],
  schoolDetails: {
    name: '',
    state: '',
    score: '',
    status: '',
    degree: '',
    appFee: '',
    country: '',
    course: '',
    cost: '',
    sendState: 'Submit',
    count: 0
  },
  schools: []
}

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
  }
}

const mutations = {
  newSchool: (state, school) => {
    state.schools.unshift(school)
  },
  processing: state => {
    state.schoolDetails.sendState = 'Sending...'
  },
  done: state => {
    let details = state.schoolDetails

    details.sendState = 'Done'
    details.sendState = 'Submit'

    details.name = ''
    details.state = ''
    details.score = ''
    details.status = ''
    details.degree = ''
    details.appFee = ''
    details.country = ''
    details.course = ''
    details.cost = ''
    details.count += 1
  },
  fetch: (state, schools) => {
    state.allSchoolsData = schools
  }
}

const actions = {
  async addSchool ({ commit }, schoolData) {
    const response = await axios.post('https://travooler.herokuapp.com/schools/published', {
      name: schoolData.name,
      state: schoolData.state,
      score: schoolData.score,
      status: schoolData.status,
      degree: schoolData.degree,
      appFee: schoolData.appFee,
      country: schoolData.country,
      course: schoolData.course,
      cost: schoolData.cost
    })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          commit('done')
        }
        console.log(response.status)
      }, (error) => {
        console.log(error)
      })

    commit('newSchool', response.data)
  },
  processing: context => {
    context.commit('processing')
  },
  done: context => {
    context.commit('done')
  },
  async fetchSchools ({ commit }) {
    console.log('fetching....')
    const response = await axios.get('https://travooler.herokuapp.com/schools/published')

    commit('fetch', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
