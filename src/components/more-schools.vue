<template>
    <div class="w100 h90 off-white-2 flex-row a-c hide-overflow">
        <portal to="navbar-search">
            <div class="flex-row pad-all-p3 white_bg space-btw round-edge-btn h100p material-border border-box">
              <input class="poppins w60p h100p" id="search" placeholder="Search school, program, country,  e.t.c..." type="search"
              v-model="searchInput" style="padding: 0px 32px; border: 0; background: white; font-size: 1.2rem; color: rgba(0,0,0,.7);width: 80%; margin-left: .5rem,; padding-bottom: .3rem; box-sizing: border-box;"
        />
              <button class="round-edge-btn white poppins h100p border-box t-center h100p no-border text-2 point" style="padding: .25rem .5rem .5rem .5rem; background: #141414">Search</button>
            </div>
        </portal>

        <section :class="{'w20 h100p white_bg flex-col a-c hide-overflow-x scroll-y s-fixed-l top-50 s-w70 animated': true, slideInLeft: !burgerClick,  slideOutLeft: burgerClick, blur: sendState || editPrefModal}">
            <div class="w80p h100p flex-col">
                <p class="poppins text-2 mt-3 w100p mb-1 s-mt-5">Adjust your preference</p>
                <span class="blueTxt poppins text-p8" v-if="mobile">search</span>
                <input class="poppins" id="search" placeholder="Search for a school" type="search" style="padding: .5rem 32px; box-sizing: border-box; border: 0; background: white; font-size: 1.2rem; color: rgba(0,0,0,.7);width: 100%;border: 1px solid #141414; border-radius: 25px; height: 2.5rem;" v-model="searchInput" v-if="mobile"
        />

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">COUNTRY</p>
                        <p class="poppins fade-9">{{userDetails.preference.country}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userDetails.preference.country}} is popular for its top ranked schools, post-graduation and path to permanent reside... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">LEVEL</p>
                        <p class="poppins fade-9">{{userDetails.preference.degree}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userDetails.preference.degree}} program requires a bachelors programme... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">PROGRAM</p>
                        <p class="poppins fade-9">{{userDetails.preference.program}}</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">{{userDetails.preference.program}} graduates are highly sort after in Canada for the reasons that... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col">
                    <p class="text-p7 poppins fade-7 mt-3">SHOW ME ALL PROGRAMS</p>

                    <div class="flex-row space-btw mt-1">
                        <span class="point">
                            <input type="radio" name="sub" id="no" value="no" 
                            class="point hide"
                            @change="$router.go(-1)">
                            <label for="no" class="poppins point">No</label>
                        </span>

                        <div class="mr-2"><label class="pure-material-switch">
                            <input type="checkbox" id="no" @change="$router.go(-1)" checked>
                            <span></span>
                        </label></div>

                        <span class="point">
                            <input type="radio" name="sub" id="" style="color: blue; background: blue" value="yes" 
                            class="point hide">
                            <label for="yes" class="poppins point">Yes</label>
                        </span>
                    </div>

                    <button class="outlined-black-btn mt-2 mb-1 poppins point fade-8 hover-fade-5" @click="switchEditPrefModal()"> Edit your preference</button>
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

        <ApplicationSuccesssModal />

        <!-- Edit Preference modal starts here -->
        <EditPreference/>
        <!-- MOdal ends here -->

        <section :class="{'w80 s-w100 scroll-y h100p flex-col a-c': true, blur: sendState || editPrefModal}">
            <div class="w85p h90p flex-col tes-frame space-btw s-w90 h100p">
                <div class="w100p flex-col">
                    <h2 class="poppins mt-3 s-mt-1 fade-8">Hi {{userDetails.name}}, you've got {{searchResults.length}} programs!</h2>
                    <div class="flex-row flex-col-m a-c space-btw w100p mt-1">
                        <p class="poppins_light text-p8 w60p s-w90">
                            <b>Travooler</b> Tip: <b>ONCE</b> is your admissions 1-click requisition system. Select all programs you like. Just click Submit and your application will be transmitted at ONCE. Check your email for proof of admissions submission from the schools selected. Eazy Peazy!
                        </p>

                        <div class="flex-col s-mt-2 s-mr-auto">
                            <p class="poppins">Not sure where to start?</p>
                            <button class="outlined-black-btn mt-p5 poppins point" @click="popChat()"> ASK A TRAVOOLER AGENT</button>
                        </div>
                    </div>
                </div>
                <div class="flex-col w100p h60p s-h-auto space-btw s-mt-3">
                    <div class="flex-row a-c w100p">
                        <div class="flex-row a-c ml-auto">
                            <p class="poppins_light text-p8 mr-p5">Sort by: </p>
                            <select name="filters" id="filters" v-model="selectedSortOption" class="blueTxt point">
                                <option class="poppins blueTxt" v-for="(option, index) in sortOptions" :key="index" :value="option">{{option}}</option>
                            </select>
                        </div>
                    </div>

                    <div class="flex-col a-c no-result w100p" v-if="(searchResults.length === 0)">
                        <img src="@/assets/img/illustrations/no_results.png" alt="" class="no-drag" draggable="false">
                    </div>

                    <div class="w100p h90p scroll-y-custom s-h-auto flex-row wrap mb-p5 a-c-n s-a-c s-mb-2">
                            <div class="flex-col mr-1 mt-1 cards hide-overflow s-w90p" style="" v-for="(school, index) in searchResults" :key="index" @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null">
                                <div class="flex-col a-c space-btw w100p h60p">
                                    <label class="checkbox path point">
                                        <input type="checkbox" class="point" :value="index" v-model="selectedCards" :name="school.name" :ref="school._id">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                    <div class="w90p h70p card-bg mb-1 flex-col a-c">
                                        <button class="round_btn poppins white_bg point scale-on-hover" v-if="hoverIndex === index" @click="popModal(school.previewLink)">Open details</button>
                                    </div>
                                </div>
                                <div class="flex-col w100p h40p white_bg pad-all-p8 border-box space-btw">
                                    <div><p class="Poppins text-p8 fade-8">{{school.degreeOffered}} {{school.courseOffered}} {{school.admissionYear}} Fall</p>
                                    <p class="poppins fade-6 text-p7">{{school.previewLink.toString().slice(0, 30)}}...</p></div>

                                    <div class="flex-row space-btw a-c">
                                        <p class="poppins fade-7">${{school.schoolCost.toString()}}<span class="text-p7">/per Year</span></p>

                                        <button class="poppins apply_btn point" @click="applyOne(school._id, index)">Apply</button>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="w100p h10p h10p-min flex-col a-c white_bg animated fadeInUp s-fixed-b" style="z-index: 50;" v-if="selectedCards.length != 0">
                <button class="white fade_black_btn text-2 point no-select" @click="sendInvoice()" ref="applyBtn"><div class="lds-ripple" v-show="sending"><div></div><div></div></div> {{sendBtnText}} ({{selectedCards.length}})</button>
            </div>
        </section>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import EditPreference from '@/components/edit-preference-modal'
import ApplicationSuccesssModal from '@/components/applySuccessModal'
import axios from 'axios'

export default {
  props: ['burgerClick'],
  data () {
    return {
      sortOptions: ['Alphabetically', 'Cheapest', 'Quality'],
      selectedSortOption: '',
      selectedCards: [],
      hoverIndex: null,
      searchInput: '',
      searching: false,
      previewLink: '',
      modalFocus: null,
      modal: {
        state: false,
        link: ''
      },
      sending: false,
      sendBtnText: 'Send once'
    }
  },
  components: {
    EditPreference,
    ApplicationSuccesssModal
  },
  computed: {
    ...mapGetters(['allSchools', 'editPrefModal']),
    mobile () {
      return this.$store.state.mobile
    },
    sendState () {
        return this.$store.getters.successModal
    },
    userDetails () {
      return this.$store.getters.userDetail
    },
    searchResults () {
      let results = []
      let searchTerm = this.searchInput

      if (searchTerm === ''){
        results = this.allSchools
      } else {
        results = this.allSchools.filter(obj => {
          return (obj.country.toLowerCase().match(searchTerm.toLowerCase()) || obj.degreeOffered.toLowerCase().match(searchTerm.toLowerCase()) || obj.courseOffered.toLowerCase().match(searchTerm.toLowerCase()) )
        })
      }
      return results
    }
  },
  methods: {
    search () {
      this.searching = true
    },
    stopSearch () {
      this.searching = false
    },
    sendingApplication () {
        this.sending = true
        this.sendBtnText = 'Sending...'
        this.$refs.applyBtn.disabled = true
    },
    done () {
        this.sending = false
        this.sendBtnText = 'Send once'
        this.selectedCards.length = 0
        this.$refs.applyBtn.disabled = true
    },
    popChat () {
      window.fcWidget.open()
      window.fcWidget.show()
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
    async sendInvoice () {
        this.sendingApplication()

        for (let i = 0; i < this.selectedCards.length; i++) {
            console.log(this.selectedCards[i])
           await axios.post('https://travooler-api.herokuapp.com/mail/api/invoice?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY, { name: this.userDetails.name, mail: this.userDetails.mail, schoolDetails: this.searchResults[this.selectedCards[i]], generatedURL: this.userDetails.searchID }).then(response => {
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
    async applyOne (ref, index) {
        let re = ref
        this.$refs[re].checked = true
        await this.selectedCards.push(index)
        this.sendInvoice()
    },
    ...mapActions(['fetchSchools', 'switchEditPrefModal', 'switchSuccessModal'])
  },
  created () {
    this.fetchSchools()
  }
}
</script>

<style scoped>
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
.apply_btn:hover{
    background: rgb(217, 255, 240);
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
.cards{
    background:rgb(228, 228, 228);
    border-radius: 7px;
    width: 17rem; 
    height: 18rem;
}
@media screen and (max-width: 570px) {
    .cards{
        width: 80vw;
        height: 18rem;
    }
}
.checkbox{
    margin: .3rem .3rem .5rem auto;
}
.card-bg{
    background: url('~@/assets/Frame 1.png');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
}
.round_btn{
    padding: .5rem .8rem;
    border-radius: 50px;
    border: 0;
    box-shadow: 0px 2px 4px rgb(211, 211, 211);
}
#search::placeholder{
    font-size: 1rem;
}
select:focus,
select:active,
button:focus,
button:active {
    -moz-outline-style: none;
    outline:none;
    outline: 0;
}
#search:focus{
   -moz-outline-style: none;
    outline:none;
    outline: 0;
}
</style>
