<template>
    <div class="flex-col w100 a-c navTrav" v-if="navStat">
        <div class="preNav flex-row a-n-c w100">
            <ul class="preNav-ul">
                <li class="poppins white preNav-li" router to="/travooler" style="font-weight: 300;">Travelers</li>
                <li class="poppins white preNav-li" style="font-weight: 300;">Travel Agencies</li>
                <li class="poppins white preNav-li" router to="/search-school" style="font-weight: 300;">Universities & Recruiters</li>
            </ul>
        </div>
        <nav>
            <div class="nav-flex">
                <img id="logo" src="@/assets/STASHIP-UNIVERS-IMG/logo.png" router t0="/">
                <div>
                    <ul v-if="navListStatus" class="poppins">
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[0].class">{{navList[0].content}}</span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[1].class" v-html="navList[1].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[2].class"  v-html="navList[2].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[3].class" v-on:click="splitNavStatus = !splitNavStatus" v-html="navList[3].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[4].class">{{navList[4].content}}</span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[5].class">{{navList[5].content}}</span></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div :class="{'flex-row a-c w90 h90 poppins splitNav wrap': true, noDisplay: splitNavStatus}" style="">
            <div class="flex-col a-c h100p w50p schoolNav poppins">
                <div class="flex-col a-n-c">
                    <p class="">Takes 2 minutes</p>
                    <h2>I'm looking to school<br>abroad</h2>
                    <button class="point poppins" @click="hideSplitAndGetStarted()"><router-link to="/Get-Started" style="color: black; text-decoration: none;">Browse Schools</router-link></button>
                </div>
            </div>
            <div class="flex-col a-c h100p w50p travNav poppins">
                <div class="flex-col a-n-c">
                    <p class=""><i class="fa fa-clock"></i>Takes 3 minutes</p>
                    <h2>Apply for travels <br> & visas</h2>
                    <button class="point poppins" @click="hideSplitAndGetStarted()"><router-link to="/explore-travels/Get-Started" style="color: black; text-decoration: none;">Travel Now</router-link></button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  data () {
    return {
      navList: [{ content: 'Browse Schools', class: 'def', link: '/search-school' }, { content: 'Explore visas for <select><option>Canada</option><option>Nigeria</option></select>', class: 'def', link: '/explore' }, { content: 'How it works', class: 'def', link: '/' }, { content: '<span v-on:click="splitNavStatus = !splitNavStatus">Get started</span>', class: 'blue-btn', link: '/travooler' }, { content: '|', class: 'def', link: '' }, { content: 'Log in', class: 'def', link: '/search-school' }],
      splitNavStatus: true,
      navListStatus: true,
      navStat: true,
      noNavListRoutes: [ 'onboarding', 'travoolerOnboarding', 'setPassword', 'signIn' ],
      noNav: [ 'setPassword', 'signIn', 'payment' ]
    }
  },
  methods: {
    hideSplitAndGetStarted () {
      this.splitNavStatus = true
    }
  },
  updated () {
    var route = this.$router.currentRoute.name

    if (this.noNavListRoutes.includes(route)) {
      this.navListStatus = false
    }
    if (this.noNav.includes(route)) {
      this.navStat = false
    }
  },
  created () {
    var route = this.$router.currentRoute.name

    if (this.noNavListRoutes.includes(route)) {
      this.navListStatus = false
    }
    if (this.noNav.includes(route)) {
      this.navStat = false
    }
  }
}
</script>

<style scoped>
.splitNav>div>div>p{
    color: rgb(221, 221, 221);
}
.splitNav>div>div>h2{
    font-weight: bolder;
    font-weight: 900;
    color: white;
    font-size: 2.2rem;
    padding: 1rem 0 2.5rem 0;
}
.splitNav>div>div>button{
    border: 0;
    background: rgb(31, 196, 127);
    padding: .5rem .8rem;
    color: black;
    font-size: 1.2rem;
    font-weight: 500;
    border-radius: 5px;
    width: fit-content;
}
.schoolNav{
    background-color: #232323;
    /* background-image: url('~@/assets/STASHIP-UNIVERS-IMG/traveler.svg');
    background-size: unset; */
}
.travNav{
    background: rgb(99,99,99);
    /* background-image: url('~@/assets/STASHIP-UNIVERS-IMG/travel-booking.svg');
    background-size: initial; */
}
.preNav{
    background: #101820;
    box-sizing: border-box;
    height: fit-content;
}
.preNav-ul {
    width: 87vw;
    color: white;
    font-weight: 300;
}
.preNav-ul > li{
    color: white;
    padding: .8rem 0;
    font-weight: lighter;
    border-radius: 0;
    display: inline-block;
    list-style-type: none;
    margin-left: .5rem;
    margin-right: 1rem;
    font-family: Raleway, Arial;
    font-size: .9rem;
    height: auto;
}
.preNav-ul> li:hover, .preNav-ul> li:active{
    border-bottom: 2px solid white;
}

.navTrav{
    position: fixed;
    top: 0;
    z-index: 50;
}
nav{
    width: 100vw;
    height: auto;
    box-shadow: 0 8px 24px rgba(0,0,0,.15);
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: .6rem 0;
}
#logo{
    width: 9rem;
    height: 2.5rem;
}
.secondLiSet{
    color: black;
    display: inline-block;
    list-style-type: none;
    margin-left: .5rem;
    margin-right: .5rem;
    font-family: 'Poppins', 'Josefin Sans', Raleway, Arial;
    font-weight: 600;
    font-size: .9rem;
    color: rgb(0,0,0,.5);
    cursor: pointer;
}
.secondLiSet:active{
    color: blue;
}
.nav-flex{
    width: 87vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem .5rem 3rem;
}
.def:hover{
    color:rgb(44, 135, 240);
}
.blue-btn{
    background-color: rgb(44, 135, 240);
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border-radius: 5px;
}

.blue-btn::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    border: 4px solid rgb(44, 135, 240);
    transform-origin: center;
    transform: scale(1);
}
.blue-btn:hover {
    cursor: pointer;
    border-radius: 5px;
}
.blue-btn:hover::before {
    transition: all 0.75s ease-in-out;
    transform-origin: center;
    transform: scale(1.75);
    opacity: 0;
    border-radius: 5px;
}

#navItemContainer{
    padding: .5rem;
    border-radius: 5px;
}
</style>
