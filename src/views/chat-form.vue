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

        <section class="flex-col h100p w75p scroll-y chat-screen-container" ref="chatBox">
            <div class="chat-screen mt-auto w90p border-box flex-col">
                <div class="flex-row sys-response mb-1 quest-1 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5"> Hi Student! Welcome to Search, by Travooler. </p>
                </div>
                <div class="flex-row sys-response mb-1 quest-2 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8"> Search shows you the best schools, <wbr> lets you apply to one or more programs at once, <wbr>and helps you obtain admissions, faster. </p>
                </div>
                <div class="flex-row sys-response mb-1 quest-3 animated fadeIn">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8"> Let's get started.<br>
                    What is your first name?</p>
                </div>

                <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2" v-if="renderMetrics[0]">
                    <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white"> Adams Abdulhakeem</p>
                    <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
                </div>

                <div class="flex-row sys-response mb-1" v-if="renderMetrics[1]">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8">Nice to meet you, Adams!<br>
                    What's your email address?</p>
                </div>

                <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2" v-if="renderMetrics[2]">
                    <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white">drkeeminc@gmail.com</p>
                    <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
                </div>

                <div class="flex-row sys-response mb-1" v-if="renderMetrics[3]">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8">In which country would you like to study?</p>
                </div>

                <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2" v-if="renderMetrics[4]">
                    <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white">Canada</p>
                    <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
                </div>

                <div class="flex-row sys-response mb-1" v-if="renderMetrics[5]">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8">Great! <br>Next, what qualification do you want to obtain? </p>
                </div>

                <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2" v-if="renderMetrics[6]">
                    <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white">Masters Degree</p>
                    <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
                </div>

                <div class="flex-row sys-response mb-1" v-if="renderMetrics[7]">
                    <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
                    <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5 text-p8">Now, please enter a program of interest to continue. </p>
                </div>

                <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2" v-if="renderMetrics[8]">
                    <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white">Telecommunication Science</p>
                    <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
                </div>
            </div>
        </section>

        <section class="bottom-panel fixed w100 flex-row a-c space-btw">
            <div class="w20"></div>
            <div class="flex-row w70 h100p a-c space-btw">
                <input type="text" class="border-box poppins round-edge-btn no-border" id="response-box" placeholder="Type your responses and press Enter button to send">
                <!--<img src="@/assets/img/icons/send.png" class="send point" alt="">-->
            </div>
            <div class="flex-col pad-all-p8 text-p7 brand w20">
            <div class="ml-auto">
                <p class="poppins_light"><b>O</b> verseas</p>
                <p class="poppins_light"><b>N</b> ational</p>
                <p class="poppins_light"><b>C</b> ollege</p>
                <p class="poppins_light"><b>E</b> Enrollment</p>
                <p class="poppins mt-p5">&copy; {{new Date().getFullYear()}}</p>
            </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      time: null,
      replies: {
        name: null,
        email: null,
        country: null,
        qualification: null,
        program: null
      },
      renderMetrics: [false, false, false, false, false, false, false, false, false],
      count: 0
    }
  },
  computed: {
  },
  components: {
  },
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
    }
  },
  mounted () {
    this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight
  },
  updated () {
    this.$refs.chatBox.scrollTop = this.$refs.chatBox.scrollHeight
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
</style>
