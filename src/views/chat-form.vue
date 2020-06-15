<template>
    <div class="off-white-2 w100 h100 hide-overflow-y hide-overflow-x flex-col a-c">
        <section class="top_nav w100 fixed flex-row a-c space-btw border-box">
            <div class="flex-col">
                <select class="poppins point fade-8">
                    <option value="student">student</option>
                    <option value="traveler">traveler</option>
                </select>
                <img src="@/assets/logo-black.jpg" class="logo" alt="">
            </div>

            <div class="flex-col point">
            <span class="poppins darkTxt ml-auto text-p8" style="font-size: .8rem;">Last updated on:</span>
            <span class="poppins darkTxt" style="font-size: .8rem;">{{time}}</span></div>
        </section>

        <section class="flex-col h100p w75p s-w100 scroll-y chat-screen-container" ref="chatBox">
            <div class="chat-screen mt-auto w90p s-w100p border-box flex-col" ref="chatScreen">
                <div class="flex-row sys-response mb-1 quest-1 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5"> Hi Student! <br>Welcome to Search, by Travooler. </p>
                </div>
                <div class="flex-row sys-response mb-1 quest-2 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5"> Search shows you the best schools, <wbr> lets you apply to one or more programs at once, <wbr>and helps you obtain admissions, faster. </p>
                </div>
                <div class="flex-row sys-response mb-1 quest-3 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5"> Let's get started.<br>
                    What is your first name?</p>
                </div>

            </div>
        </section>

        <section class="bottom-panel fixed w100 flex-row a-c space-btw">
            <div class="w20"></div>
            <div class="flex-row w70 h100p a-c space-btw">
                <input type="text" class="border-box poppins round-edge-btn no-border" id="response-box" placeholder="Type your responses and press Enter button to send" v-model="currentReply" @keyup.enter="validateAndRender()" ref="replyBox">
                <!--<img src="@/assets/img/icons/send.png" class="send point" alt="">-->
            </div>
            <div class="flex-col pad-all-p8 text-p7 brand w20">
            <div class="ml-auto">
                <p class="poppins_light"><b>O</b> verseas</p>
                <p class="poppins_light"><b>N</b> ational</p>
                <p class="poppins_light"><b>C</b> ollege</p>
                <p class="poppins_light"><b>E</b> Enrollment</p>
                <p class="poppins mt-p5 point">&copy; {{new Date().getFullYear()}}</p>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import response from '@/components/user-reply'
import question from '@/components/question'
import axios from 'axios'
import generateID from '@/modules/generateSearchID'

export default {
  data () {
    return {
      time: null,
      replyList: [],
      replies: {
        name: null,
        email: null,
        preference: {
          country: null,
          degree: null,
          program: null
        },
        searchID: null,
        searchedFrom: {
          city: null,
          country: null,
          ipAddress: null
        }
      },
      renderMetrics: [false, false, false, false, false, false, false, false, false],
      count: 0,
      questions: ['Nice to meet you '+ this.test +'. \nWhat\'s your email address?',
      'In which country would you like to study?',
      'Great! <br>Next, what qualification do you want to obtain?',
      'Now, please enter a program of interest to continue.'],
      currentReply: '',
      questionCount: 0,
      test: 'lalalalala'
    }
  },
  computed: {
  },
  components: { response, question },
  created () {
    this.$store.dispatch('disableNavbarState')
    this.setTime()
  },
  methods: {
    setTime () {
      setInterval(() => {
        let fullDate = new Date()
        let hour = (parseInt(fullDate.getHours) >= 12) ? 'PM' : 'AM'
        let date = `${fullDate.getDate()}/${fullDate.getMonth()}/${fullDate.getFullYear()} \xa0\xa0 ${fullDate.getHours()}:${fullDate.getMinutes()} ${hour}`
        this.time = date
      }, 1000)
    },
    async validateAndRender () {
      let chatData = this.replies

      if ((this.currentReply !== '') && this.questionCount == 0) {
        if (this.currentReply.match(/^[A-Za-z\s]+$/)) {
          chatData.name = this.currentReply
          this.renderReply()
          setTimeout(() => {
            this.renderQuestion('Nice to meet you '+ chatData.name)
          }, 1000)
          setTimeout(() => {
            this.renderQuestion('What\'s your email address?')
          }, 1500)
        } else {
          this.renderReply()
          this.questionCount--
          setTimeout(() => {
            this.renderQuestion('Name contains invalid characters. Please resend name.')
          }, 1000)
        }

      }
      if ((this.currentReply !== '') && this.questionCount == 1) {
        if (this.currentReply.match(/\S+@\S+\.\S+/)) {
          chatData.email = this.currentReply
          this.renderReply()
          setTimeout(() => {
            this.renderQuestion('processing...')
          }, 1000)
          await axios.post('https://travooler-api.herokuapp.com/mail/api/welcome?key='+process.env.VUE_APP_TRAVOOLER_MAIL_API_KEY, {name: chatData.name, mail: chatData.email}).then((response) => {
              if ([200, 201].includes(response.status)) {
                this.renderQuestion('In which country would you like to study?')
              }
              console.log(response.status)
            }, (error) => {
              console.log(error)
              this.questionCount--
              this.renderQuestion('Connection error..')
              this.renderQuestion('Check your connection and try again')
              this.renderQuestion('Re-enter mail')
            })
        } else {
          this.renderReply()
          this.questionCount--
          setTimeout(() => {
            this.renderQuestion('Enter a valid mail')
          }, 1000)
        }
      }
      if ((this.currentReply !== '') && this.questionCount == 2) {
        chatData.preference.country = this.currentReply
        this.renderReply()
        setTimeout(() => {
          this.renderQuestion('Great!')
        }, 1000)
        setTimeout(() => {
          this.renderQuestion('Next, what qualification do you want to obtain?')
        }, 1500)
        setTimeout(() => {
          this.renderQuestion('e.g. Masters, Bachelors, PhD, Diploma e.t.c')
        }, 2000)
      }
      if ((this.currentReply !== '') && this.questionCount == 3) {
        chatData.preference.degree = this.currentReply
        this.renderReply()
        setTimeout(() => {
          this.renderQuestion('Now, please enter a program of interest to continue.')
        }, 1000)
        setTimeout(() => {
          this.renderQuestion('E.g Medicine, Engineering, Law e.t.c')
        }, 1500)
      }
      if ((this.currentReply !== '') && this.questionCount == 4) {
        chatData.preference.program = this.currentReply
        let searchID = this.generateSearchID()
        chatData.searchID = searchID
        this.renderReply()

        let userLocation = await axios.get('http://api.ipstack.com/check?access_key=c4be1dd155df8dc123b103f10e546f6f')
        if ([200, 201].includes(userLocation.status)) {
          let location =  userLocation.data
          chatData.searchedFrom.city = location.region_name
          chatData.searchedFrom.country = location.country_name
          chatData.searchedFrom.ipAddress= location.ip
        }

        this.$store.dispatch('uploadUserDetails', chatData)

        setTimeout(() => {
          this.$router.push({path: '/find-programs/schools/'+searchID})
        }, 1000)
      }
    },
    renderReply () {
      var ComponentClass = Vue.extend(response)
      var instance = new ComponentClass({
        propsData: { type: 'primary' }
      })
      instance.$slots.default = [this.currentReply]
      instance.$mount()
      // console.log(this.$refs)
      this.$refs.chatScreen.insertAdjacentElement('beforeend', instance.$el)
      this.scrollTop()
      this.currentReply = ''
  
      this.questionCount++
    },
    renderQuestion (quest) {
      var ComponentClass = Vue.extend(question)
      var instance = new ComponentClass({
        propsData: { type: 'primary' }
      })
      instance.$slots.default = [quest]
      instance.$mount() // pass nothing
      // console.log(this.$refs)
      this.$refs.chatScreen.insertAdjacentElement('beforeend', instance.$el)
      this.scrollTop()
    },
    generateSearchID () {
      return generateID()
    },
    scrollTop () {
      this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight
    }
  },
  mounted () {
    this.scrollTop()
  },
  updated () {
    this.scrollTop()
  }
}
</script>

<style scoped>
.quest-1 {
    animation-delay: 1s;
  }

.quest-2 {
    animation-delay: 2s;
}

.quest-3 {
    animation-delay: 4s;
}

.message-box{
    padding: 1rem 1.5rem;
    max-width: 20rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.10);
}
.user-response{
    float: right;
    margin-left: auto;
}
.box-1{
    border-radius: 25px 25px 25px 0;
}
.box-2{
    border-radius: 25px 25px 0 25px;
}
.chat-thumbnail{
    width: 2rem;
    height: 2rem;
    padding: .2rem;
    border-radius: 100%;
    background:  white;
}
.chat-screen{
    padding: 2rem .5rem;
}
.chat-screen-container{
    padding: 5rem 0;
}
.border-green{
    border: 1px solid green;
}
.brand>div>p{
    line-height: .8rem;
}
.send{
    width: 3.5rem;
    height: 3.5rem;
}
input[id="response-box"]{
    color: black;
    background: white;
    width: 100%;
    height: 7vh;
    padding: .5rem 1rem;
    font-size: 1.1rem;
    margin-bottom: .3rem;
}
input[id="response-box"]::placeholder{
    color: rgb(110, 110, 110);
    font-size: .9rem;
}
.top_nav{
    box-shadow: 0 2px 2px rgba(0,0,0,.09);
    padding: 0 2rem 0 2rem;
    background: white;
    top: 0;
    z-index:100;
}
.bottom-panel{
    bottom: 0;
    background: rgb(230, 230, 230);
    box-shadow: 0 -2px 2px rgba(255,255,255,.09);
    border-top: 1px solid rgb(209, 209, 209);
}
.off-white-2{
    background: rgb(247, 247, 247);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: black;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: black;
}
#search:focus, input:focus, select:focus{
   -moz-outline-style: none;
    outline:none;
    outline: 0;
}
select{
    background: transparent;
    border: none;
    width: fit-content;
    position: relative;
    bottom: -.7rem;
    left: .3rem;
}
.logo{
    width: 7.5rem;
    height: 3rem;
}
@media screen and (max-width: 570px) {
  .chat-screen{
      padding: 2rem 0 2rem .5rem;
  }
  .message-box{
    max-width: 15rem;
  }
}
</style>
