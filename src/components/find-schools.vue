<template>
    <div class="w100 h90 off-white-2 flex-row a-c hide-overflow">

        <section :class="{'w20 h100p white_bg flex-col a-c hide-overflow-x scroll-y s-fixed-l top-50 s-w70 animated': true, slideInLeft: !burgerClick,  slideOutLeft: burgerClick}">
            <div class="w80p h100p flex-col">
                <p class="poppins text-2 mt-3 w100p mb-1 s-mt-5">Adjust your preference</p>

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
                    <p class="text-p7 poppins fade-7 mt-3">SHOW ME SIMILAR COURSES</p>

                    <div class="flex-row space-btw mt-1">
                        <span class="point">
                            <input type="radio" name="sub" id="">
                            <label for="yes" class="poppins">Yes</label>
                        </span>
                        <span class="point">
                            <input type="radio" name="sub" id="" style="color: blue; background: blue">
                            <label for="yes" class="poppins">No</label>
                        </span>
                    </div>

                    <button class="outlined-black-btn mt-2 poppins point fade-8 hover-fade-5"> Edit your preference</button>
                </div>
            </div>
        </section>

        <!-- MOdal starts here -->
        <transition name="fade">
            <div class="flex-col a-c w100p h100p modal-bg  fixed top-100" style="top: 0;" v-if="modalState">
                <div class="flex-col a-c round-edge-md w70 h80 s-h85 s-w90 top-100 point white_bg mt-5 border-box modal-inner" ref="modal" @focus="popModal()" @focusout="closeModal()" @mouseenter="modalFocus = true" @mouseleave="closeModal()" tabindex="-1">
                    <iframe src="https://cheaplii.now.sh" frameborder="1" name="school-details" scrolling="auto" class="w100p h100p round-edge-sm no-outline"></iframe>
                </div>
            </div>
        </transition>
        <!-- MOdal ends here -->

        <section class="w80 s-w100 scroll-y h100p flex-col a-c">

            <div class="w85p s-w90 h100p flex-col tes-frame">
                <div class="w100p flex-col">
                    <h2 class="poppins mt-3 fade-8">Hey {{userDetails.name}}, Here's your top 3 programs!</h2>
                    <div class="flex-row flex-col-m a-c space-btw w100p mt-1">
                        <p class="poppins_light text-p8 w60p s-w90">
                            <b></b>Tip: Choose the school you like best. If you're not sure, the lowest tuition is a good place to start. All you need to do is send us your choice and we'll show you how to apply.
                        </p>

                        <div class="flex-col s-mt-2 s-mr-auto">
                            <p class="poppins">Not sure where to start?</p>
                            <button class="outlined-black-btn mt-p5 poppins point"> ASK A TRAVOOLER AGENT</button>
                        </div>
                    </div>
                </div>

                <div class="flex-col w100p mt-3p5">

                    <div class="w100p flex-col mb-p5 s-pad-4">

                        <div class="w100p white_bg flex-row a-c wrap space-btw long-card border-box mb-1 mat-shadow-square" v-for="(program, index) in programs" :key="index">
                            <label class="checkbox path point">
                                <input type="checkbox" class="point" :value="index" v-model="userChoice" :name="program">
                                <svg viewBox="0 0 21 21">
                                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                </svg>
                            </label>

                            <div class="flex-col">
                                <p class="text-2p5 Poppins fade-9">BSc {{userDetails.preference.program}}</p>
                                <p class="text-p7 poppins fade-7">University of Calgary, AB, {{userDetails.preference.country}}</p>
                            </div>

                            <div class="y-seperator fade-2"></div>

                            <div class="flex-col a-c">
                                <p class="text-2p5 Poppins fade-9">Sep 2021</p>
                                <p class="text-p7 poppins fade-7">Next start date</p>
                            </div>

                            <div class="y-seperator h100p fade-2"></div>

                            <div class="flex-row a-c s-mt-1">
                                    <p><span class="text-25 Poppins fade-9">$10</span><span class="text-5 Poppins fade-9">k </span><span class="text-p7 poppins fade-8"> / SESSION</span></p>
                            </div>

                            <div class="y-seperator h100p fade-2 s-mt-1"></div>

                            <button class="no-border white text-p7 point red_bg pad-stretch hover-fade Poppins s-mt-1" @click="popModal">SEE PROGRAM DETAILS</button>

                        </div>
                    </div>
                    
                    <div class="flex-row w100p a-c s-fixed-b s-white-bg s-w100">
                        <p class="poppins text-2 blueTxt black mr-1 t-center point mt-1 mb-1" @click="showMore">See more</p>
                        <button class="round-edge-btn white no-border poppins mr-1 point send-btn" v-if="userChoice.length == 1">Send</button>
                        <button class="round-edge-btn white no-border poppins mr-1 point send-btn" v-if="userChoice.length > 1">Send All - {{userChoice.length}}</button>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
  props: ['burgerClick'],
  data () {
    return {
      programs: ['hey', 'hi', 'yo'],
      userChoice: [],
      modalState: false,
      previewLink: '',
      modalFocus: null
    }
  },
  computed: {
    mobile () {
      return this.$store.state.mobile
    },
    userDetails () {
      return this.$store.getters.userDetail
    }
  },
  methods: {
    showMore () {
      this.$router.push({path: '/find-programs/more'})
    },
    popModal (index) {
      this.modalState = true
    },
    closeModal (index) {
        if (this.modalFocus = true){
          this.modalState = false
        }
    }
  }
}
</script>

<style scoped>
.send-btn{
    background: #141414;;
    padding: .6rem 1rem;
}
.send-btn:hover{
    opacity: .8;
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
