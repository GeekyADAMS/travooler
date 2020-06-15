<template>
    <div class="w100 h90 off-white-2 flex-row a-c hide-overflow">

        <section :class="{'w20 h100p white_bg flex-col a-c hide-overflow-x scroll-y s-fixed-l top-50 s-w70 animated': true, slideInLeft: !burgerClick,  slideOutLeft: burgerClick, blur: applicationState||editPrefModal}">
            <div class="w80p h100p flex-col">
                <p class="poppins text-2 mt-3 w100p mb-1 s-mt-5">Adjust your preference</p>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">COUNTRY</p>
                        <p class="poppins fade-9">{{userSearchDetails.preference.country}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userSearchDetails.preference.country}} is popular for its top ranked schools, post-graduation and path to permanent reside... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">LEVEL</p>
                        <p class="poppins fade-9">{{userSearchDetails.preference.degree}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userSearchDetails.preference.degree}} program requires a bachelors programme... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">PROGRAM</p>
                        <p class="poppins fade-9">{{userSearchDetails.preference.program}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userSearchDetails.preference.program}} graduates are highly sort after in Canada for the reasons that... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col">
                    <p class="text-p7 poppins fade-7 mt-3">SHOW ME ALL PROGRAMS</p>

                    <div class="flex-row space-btw mt-1">
                        <span class="point">
                            <input type="radio" name="sub" id="no" value="no" v-model="showAll"
                            class="point hide">
                            <label for="#no" class="poppins point">No</label>
                        </span>

                        <div class="mr-2"><label class="pure-material-switch">
                            <input type="checkbox" id="yes" @change="$router.push('/find-programs/more')">
                            <span></span>
                        </label></div>

                        <span class="point">
                            <input type="radio" name="sub" id="" style="color: blue; background: blue" value="yes" v-model="showAll"
                            @change="$router.push('/find-programs/more')"
                            class="point hide">
                            <label for="yes" class="poppins point">Yes</label>
                        </span>
                    </div>

                    <button class="outlined-black-btn mt-2 poppins point fade-8 hover-fade-5" @click="switchEditPrefModal()"> Edit your preference</button>
                </div>
            </div>
        </section>

        <!-- MOdal starts here -->
        <transition name="fade">
            <div class="flex-col a-c w100p h100p modal-bg  fixed top-100" style="top: 0;" v-if="modal.state">
                <div class="flex-col a-c round-edge-md w70 h80 s-h85 s-w90 top-100 point white_bg mt-5 border-box modal-inner holds-the-iframe" ref="modal" @focus="popModal()" @focusout="closeModal()" @mouseenter="modalFocus = true" @mouseleave="closeModal()" tabindex="-1">
                    <iframe :src="modal.link" frameborder="1" name="school-details" scrolling="auto" class="w100p h100p round-edge-sm no-outline"></iframe>
                </div>
            </div>
        </transition>
        <!-- MOdal ends here -->

        <!-- Application Success modal starts here -->
        <ApplicationSuccesssModal />
        <!-- MOdal ends here -->

        <!-- Edit Preference modal starts here -->
        <EditPreference />
        <!-- MOdal ends here -->

        <section :class="{'w80 s-w100 scroll-y h100p flex-col a-c': true, blur: applicationState||editPrefModal}">

            <div class="w85p s-w90 h100p flex-col tes-frame">
                <div class="w100p flex-col">
                    <h2 class="poppins mt-3 fade-8">Hey {{userSearchDetails.name}}, Here's your top<span v-if="!isSearchResultEmpty"> {{showing}}</span> programs!</h2>
                    <div class="flex-row flex-col-m a-c space-btw w100p mt-1">
                        <p class="poppins_light text-p8 w60p s-w90">
                            <b></b>Tip: Choose the school you like best. If you're not sure, the lowest tuition is a good place to start. All you need to do is send us your choice and we'll show you how to apply.
                        </p>

                        <div class="flex-col s-mt-2 s-mr-auto">
                            <p class="poppins">Not sure where to start?</p>
                            <button class="outlined-black-btn mt-p5 poppins point" @click="popChat"> ASK A TRAVOOLER AGENT</button>
                        </div>
                    </div>
                </div>

                <div class="flex-col w100p mt-3p5">

                    <div class="flex-col a-c no-result w100p" v-if="isSearchResultEmpty">
                        <img src="@/assets/img/illustrations/no_results.png" alt="" class="no-drag" draggable="false">
                    </div>


                    <div class="w100p flex-col mb-p5 s-pad-4">

                        <div class="w100p white_bg flex-row a-c wrap space-btw long-card border-box mb-1 mat-shadow-square" v-for="(program, index) in searchResults.slice(0, showing)" :key="index">
                            <label class="checkbox path point s-mb-1 mr-1">
                                <input type="checkbox" class="point" :value="index" v-model="userChoice" :name="program">
                                <svg viewBox="0 0 21 21">
                                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                </svg>
                            </label>

                            <div class="flex-col w30p s-w-auto">
                                <p class="text-2p5 Poppins fade-9">{{program.degreeOffered}} {{program.courseOffered}}</p>
                                <p class="text-p7 poppins fade-7">{{program.name}}, {{program.city}}, {{program.country}}</p>
                            </div>

                            <div class="y-seperator fade-2 ml-p2 mr-p2"></div>

                            <div class="flex-col a-c w20p s-w-auto">
                                <p class="text-2p5 Poppins fade-9">{{program.admissionMonth}} {{program.admissionYear}}</p>
                                <p class="text-p7 poppins fade-7">Next start date</p>
                            </div>

                            <div class="y-seperator h100p fade-2 ml-p2 mr-p2"></div>

                            <div class="flex-row a-c s-mt-1 w20p s-w-auto">
                                    <p class=""><span class="text-25 Poppins fade-9">${{program.schoolCost.toString().slice(0, 2)}}</span><span class="text-5 Poppins fade-9">k </span><span class="text-p7 poppins fade-8"> / SESSION</span></p>
                            </div>

                            <div class="y-seperator h100p fade-2 s-mt-1 ml-p2 mr-p2"></div>

                            <button class="no-border white text-p7 point red_bg pad-stretch hover-fade Poppins s-mt-1 ml-auto" @click="popModal(program.previewLink)" >SEE PROGRAM DETAILS</button>

                        </div>
                    </div>

                    <div :class="{'flex-row w100p a-c s-fixed-b s-white-bg s-w100': true, 'white_bg fixed-bottom': userChoice.length > 0}">
                        <p class="poppins text-2 blueTxt black mr-1 t-center point mt-1 mb-1" @click="showMore" v-if="!isSearchResultEmpty">See more</p>
                        <p class="poppins text-2 blueTxt black mr-1 t-center point mt-1 mb-1" v-if="isSearchResultEmpty" @click="switchEditPrefModal">Edit preference</p>
                        <button class="round-edge-btn white no-border poppins mr-1 point send-btn no-outline hide-overflow" v-if="userChoice.length == 1" @click="sendInvoice()"><div class="lds-ripple" v-show="sending"><div></div><div></div></div>{{sendBtnText}}<span style="margin-left: 0" v-if="!sending">Send</span></button>
                        <button class="round-edge-btn white no-border poppins mr-1 point send-btn no-outline hide-overflow" v-if="userChoice.length > 1" @click="sendInvoice()"><div class="lds-ripple" v-show="sending"><div></div><div></div></div>{{sendBtnText}}<span v-if="!sending">Send All - {{userChoice.length}}</span></button>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import EditPreference from '@/components/edit-preference-modal'
import ApplicationSuccesssModal from '@/components/applySuccessModal'

export default {
  props: ['burgerClick'],
  components: {
    EditPreference,
    ApplicationSuccesssModal
  },
  data () {
    return {
      userSearchDetails: null,
      userChoice: [],
      modal: {
          state: false,
          link: ''
      },
      previewLink: '',
      modalFocus: null,
      showing: 3,
      sending: false,
      sendBtnText: null,
      showAll: ''
    }
  },
  computed: {
    ...mapGetters(['allSchools', 'editPrefModal']),
    mobile () {
      return this.$store.state.mobile
    },
    applicationState () {
        return this.$store.getters.successModal
    },
    searchResults () {
      let results = []
      let details = this.userSearchDetails

      results = this.allSchools.filter(obj => {
          return obj.country.toLowerCase() === details.preference.country.toLowerCase() || obj.courseOffered.toLowerCase() === details.preference.program.toLowerCase() || obj.degreeOffered.toLowerCase() === details.preference.degree.toLowerCase()
        })
      
      return results
    },
    isSearchResultEmpty () {
        if (this.searchResults.length > 0) {
          return false
        } else {
          return true
        }
    },
    showCount () {
        if (this.searchResults.length >= 3) {
            this.showing = 3
        } else {
            this.showing = this.searchResults.length
        }
    }
  },
  methods: {
    popChat () {
      window.fcWidget.open()
      window.fcWidget.show()
    },
    sendingApplication () {
        this.sending = true
        this.sendBtnText = 'Sending...'
    },
    done () {
        this.sending = false
        this.sendBtnText = ''
        this.userChoice.length = 0
    },
    showMore () {
      if (this.showing < this.searchResults.length - 1) this.showing += 2
      if (this.showing === this.searchResults.length - 1) this.showing += 1
    },
    popModal (link) {
      this.modal.link = 'https://'+link
      this.modal.state = true
    },
    closeModal (index) {
      if (this.modalFocus = true){
          this.modal.state = false
      }
    },
    popEditPrefModal () {
    },
    closeEditPrefModal () {
    },
    async sendSchoolSuggestions () {

        await axios.post('https://travooler-api.herokuapp.com/mail/api/suggest-schools?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY, { name: this.userSearchDetails.name, mail: this.userSearchDetails.mail, filteredResult: this.searchResults.slice(0, this.showing), generatedURL: this.$route.params.searchID }).then(response => {
            if ([200, 201].includes(response.status)) {
              this.$store.dispatch('flashNotif', {
                message: {
                title: 'Welcome to Travooler',
                text: 'We just sent you a mail containing carefully selected programs we think you will like.'
                },
                type: 'neutral'
              })
              window.navigator.vibrate(1000)
            }
            if ([500].includes(response.status)) {
              console.log(response.status)
            }
        }, (error) => {
            console.log(error)
        })
    },
    async sendInvoice () {
        this.sendingApplication()

        for (let i = 0; i < this.userChoice.length; i++) {
           await axios.post('https://travooler-api.herokuapp.com/mail/api/invoice?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY, { name: this.userSearchDetails.name, mail: this.userSearchDetails.mail, schoolDetails: this.searchResults[i], generatedURL: this.userSearchDetails.searchID }).then(response => {
                if ([200, 201].includes(response.status)) {
                    this.$store.dispatch('flashNotif', {
                        message: {
                        title: 'Application Successful!',
                        text: 'Your application details has been sent to your mail. You can proceed from there.'
                        },
                        type: 'success'
                    })
                }
                if ([500].includes(response.status)) {
                console.log(response.status)
                }
            }, (error) => {
                console.log(error)
            })
       }

       window.navigator.vibrate(500)
       this.done()
       this.switchSuccessModal()
    },
    async fetchSearchDetails () {
        let searchKey = this.$route.params.searchID

        if (searchKey) {
            let searchID = searchKey
            let url = 'https://travooler-api.herokuapp.com/api/users/school-search/'+searchID+'/?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY

            await axios.get(url).
                    then( response => {
                        console.log(response.data.data)
                        this.userSearchDetails = response.data.data[0]
                    }).catch( err => {
                        localStorage.setItem('errRoute', this.$router.currentRoute.path )
                        this.$router.push('/error')
                    })
        }

        this.$store.dispatch('setUserDetails', this.userSearchDetails)
        localStorage.setItem('travoolerID', this.userSearchDetails.mail)

    },
    checkRouteParam () {
        let searchID = this.$route.params.searchID

        if (searchID) {
            this.fetchSearchDetails()
        }
    },
    ...mapActions(['fetchSchools', 'switchEditPrefModal', 'switchSuccessModal'])
  },
  created () {
    this.checkRouteParam()
    this.fetchSchools()
  },
  beforeMount() {
  },
  mounted () {
    setTimeout(() => {
        this.sendSchoolSuggestions()
    }, 5000)
  }
}
</script>

<style scoped>


@import url('~@/assets/styles/global-styles.css');

.fixed-bottom{
    position: fixed;
    bottom: 0;
    right: 0;
}
.y-seperator{
    height: 3.5rem;
}
.long-card{
    padding: 1.2rem 2rem;
}
.fade_black_btn{
     border: 0;
    border-radius: 50px;
    padding: .5rem .8rem;
    background: rgb(128, 128, 128);
}
.fade_black_btn:hover{
    background: rgb(146, 146, 146);
}
.apply_btn{
    color: blue;
    border: 1px solid blue;
    border-radius: 50px;
    padding: .4rem .75rem;
    background: transparent;
}
.off-white-2{
    background: rgb(247, 247, 247);
}
.test-frame{
    background: whitesmoke;
}
.outlined-black-btn{
    border: 2px solid black;
    padding: .5rem .8rem;
    background: transparent;
}
select{
    background: transparent;
    border: 1px dashed rgb(138, 138, 138);
    border-radius: 5px;
}
.round_btn{
    padding: .5rem .8rem;
    border-radius: 50px;
    border: 0;
    box-shadow: 0px 2px 4px rgb(211, 211, 211);
}
@media screen and (max-width: 570px) {
    .s-white-bg{
      background: white;
    }
}
</style>
