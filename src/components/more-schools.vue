<template>
    <div class="w100 h90 off-white-2 flex-row a-c hide-overflow">
        <portal to="navbar-search">
            <div class="flex-row pad-all-p3 white_bg space-btw round-edge-btn h100p material-border border-box">
              <input class="poppins w60p h100p" id="search" placeholder="Search for a school" type="text" style="padding: 0px 32px; border: 0; background: white; font-size: 1.2rem; color: rgba(0,0,0,.7);width: 60%; margin-left: .5rem,; padding-bottom: .3rem; box-sizing: border-box;"
        />
              <button class="round-edge-btn white poppins h100p border-box t-center h100p no-border text-2 point" style="padding: .25rem .5rem .5rem .5rem; background: #141414">Search</button>
            </div>
        </portal>

        <section :class="{'w20 h100p white_bg flex-col a-c hide-overflow-x scroll-y s-fixed-l top-50 s-w70 animated': true, slideInLeft: !burgerClick,  slideOutLeft: burgerClick}">
            <div class="w80p h100p flex-col">
                <p class="poppins text-2 mt-3 w100p mb-1 s-mt-5">Adjust your preference</p>
                <span class="blueTxt poppins text-p8" v-if="mobile">search</span>
                <input class="poppins" id="search" placeholder="Search for a school" type="text" style="padding: .5rem 32px; box-sizing: border-box; border: 0; background: white; font-size: 1.2rem; color: rgba(0,0,0,.7);width: 100%;border: 1px solid #141414; border-radius: 25px; height: 2.5rem;" v-model="searchInput" v-if="mobile"
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

                    <button class="outlined-black-btn mt-2 mb-1 poppins point fade-8 hover-fade-5"> Edit your preference</button>
                </div>
            </div>
        </section>
        <section class="w80 s-w100 scroll-y h100p flex-col a-c">
            <div class="w85p h90p flex-col tes-frame space-btw s-w90 h100p">
                <div class="w100p flex-col">
                    <h2 class="poppins mt-3 s-mt-1 fade-8">Hi {{userDetails.name}}, you've got 71 programs!</h2>
                    <div class="flex-row flex-col-m a-c space-btw w100p mt-1">
                        <p class="poppins_light text-p8 w60p s-w90">
                            <b>Travooler</b> Tip: <b>ONCE</b> is your admissions 1-click requisition system. Select all programs you like. Just click Submit and your application will be transmitted at ONCE. Check your email for proof of admissions submission from the schools selected. Eazy Peazy!
                        </p>

                        <div class="flex-col s-mt-2 s-mr-auto">
                            <p class="poppins">Not sure where to start?</p>
                            <button class="outlined-black-btn mt-p5 poppins point"> ASK A TRAVOOLER AGENT</button>
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

                    <div class="w100p h90p scroll-y s-h-auto flex-row wrap mb-p5 a-c">
                            <div class="flex-col mr-1 mt-1 cards hide-overflow" style="width: 17rem; height: 16rem;" v-for="(school, index) in schoolDetails" :key="index" @mouseenter="hoverIndex = index" @mouseleave="hoverIndex = null">
                                <div class="flex-col a-c space-btw w100p h60p">
                                    <label class="checkbox path point">
                                        <input type="checkbox" class="point" :value="index" v-model="selectedCards" :name="school">
                                        <svg viewBox="0 0 21 21">
                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                        </svg>
                                    </label>
                                    <div class="w90p h70p card-bg mb-1 flex-col a-c">
                                        <button class="round_btn poppins white_bg point scale-on-hover" v-if="hoverIndex === index">Open details</button>
                                    </div>
                                </div>
                                <div class="flex-col w100p h40p white_bg pad-all-p8 border-box space-btw">
                                    <div><p class="Poppins text-p8 fade-8">BSc {{userDetails.preference.program}} 2021 Fall</p>
                                    <p class="poppins fade-6 text-p7">ucalgary.com</p></div>

                                    <div class="flex-row space-btw a-c">
                                        <p class="poppins fade-7">$120<span class="text-p7">/per month</span></p>

                                        <button class="poppins apply_btn point">Apply</button>
                                    </div>

                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="w100p h10p h10p-min flex-col a-c white_bg animated fadeInUp s-fixed-b" style="z-index: 50;" v-if="selectedCards.length != 0">
                <button class="white fade_black_btn text-2 point no-select">Send Once ({{selectedCards.length}})</button>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  props: ['burgerClick'],
  data () {
    return {
      sortOptions: ['Alphabetically', 'Cheapest', 'Quality'],
      selectedSortOption: '',
      selectedCards: [],
      schoolDetails: [3, 4, 4, 5, 6, 7, 8, 99, 9, 7],
      hoverIndex: null,
      searchInput: '',
      searching: false
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
    search () {
      this.searching = true
    },
    stopSearch () {
      this.searching = false
    }
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
