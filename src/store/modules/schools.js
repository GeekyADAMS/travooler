
const state = {
  chosenFilterOptions: {
    country: '', degree: '', course: ''
  },
  availableCountries: [ { tag: 'USA', selected: false }, { tag: 'UK', selected: false }, { tag: 'CANADA', selected: false }, { tag: 'NEW ZEALAND', selected: false }, { tag: 'UAE', selected: false }, { tag: 'CHINA', selected: false }, { tag: 'INDIA', selected: false }, { tag: 'RUSSIA', selected: false }, { tag: 'SWITZERLAND', selected: false }, { tag: 'DUBAI', selected: false }, { tag: 'JAPAN', selected: false }, { tag: 'SAUDI ARABIA', selected: false }, { tag: 'DENMARK', selected: false }, { tag: 'SCOTLAND', selected: false } ],
  availableDegrees: [ { tag: 'Ordinary Diploma', selected: false }, { tag: 'Bachelor\'s', selected: false }, { tag: 'Post-bac Diploma', selected: false }, { tag: 'Graduate Diploma', selected: false }, { tag: 'Master\'s Degree', selected: false }, { tag: 'Doctorate Degree', selected: false } ],
  availableCourses: [ { tag: 'Arts', selected: false }, { tag: 'Physical Sciences', selected: false }, { tag: 'Engineering', selected: false }, { tag: 'Business', selected: false }, { tag: 'Health Sciences', selected: false }, { tag: 'Social Sciences', selected: false }, { tag: 'Law', selected: false }, { tag: 'Medical Sciences', selected: false }, { tag: 'Agriculture', selected: false }, { tag: 'Finance', selected: false } ],
  eachCardDetails: [
    {
      schoolName: 'Bentley University',
      schoolLocation: 'Watham, MA',
      creditScore: '95',
      totalCost: '$2,478,665',
      degreeOffered: 'Bachelor\'s',
      bookAmount: '$1,255',
      match: 'matchYes',
      trophy: true,
      country: 'UK',
      courseOffered: 'Finance'
    },
    {
      schoolName: 'Bryant University',
      schoolLocation: 'Smithfield, RS',
      creditScore: '90',
      totalCost: '$1,986,688',
      degreeOffered: 'Ordinary Diploma',
      bookAmount: '$1,240',
      match: 'matchYes',
      trophy: false,
      country: 'USA',
      courseOffered: 'Engineering'
    },
    {
      schoolName: 'Illinus Institute',
      schoolLocation: 'Chicago, N',
      creditScore: '84',
      totalCost: '$1,933,502',
      degreeOffered: 'Master\'s Degree',
      bookAmount: '$1,200',
      match: 'matchYes',
      trophy: true,
      country: 'Saudi Arabia',
      courseOffered: 'Law'
    },
    {
      schoolName: 'Centley University',
      schoolLocation: 'Watham, MA',
      creditScore: '95',
      totalCost: '$2,478,665',
      degreeOffered: 'Doctorate Degree',
      bookAmount: '$1,255',
      match: 'matchYes',
      trophy: true,
      country: 'CANADA',
      courseOffered: 'Business'
    },
    {
      schoolName: 'Harvard University',
      schoolLocation: 'Watham, MA',
      creditScore: '95',
      totalCost: '$2,478,665',
      degreeOffered: 'Bachelor\'s',
      bookAmount: '$1,255',
      match: 'matchYes',
      trophy: true,
      country: 'UAE',
      courseOffered: 'Medical Sciences'
    },
    {
      schoolName: 'Oxford University',
      schoolLocation: 'Smithfield, RS',
      creditScore: '90',
      totalCost: '$1,986,688',
      degreeOffered: 'Master\'s Degree',
      bookAmount: '$1,240',
      match: 'matchYes',
      trophy: false,
      country: 'Denmark',
      courseOffered: 'Physical Sciences'
    }
  ]
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
    return state.eachCardDetails
  }
}

const mutations = {

}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
