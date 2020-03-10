<template>
    <div class="flex-col a-c">

    <div class="flex-col w100 a-c navTrav" v-if="navStat">
        <div class="preNav flex-row a-n-c w100">
            <ul class="preNav-ul">
                <li class="poppins white preNav-li inline" router to="/" style="font-weight: 300;"><router-link to="/" style="text-decoration: none; color: white;">Travelers</router-link></li>
                <li class="poppins white non-mobile inline" style="font-weight: 300;" v-if="travAgent">Travel Agencies</li>
                <li class="poppins white preNav-li inline point" style="font-weight: 300;">Universities & Recruiters</li>
            </ul>
        </div>
        <nav>
            <div class="nav-flex">
                <router-link to="/" style="color: black; text-decoration: none;"><img id="logo" src="@/assets/logo-black.jpg" class="point" router to="/"></router-link>

                <div class="desktop-nav">
                    <ul v-if="navListStatus" class="poppins">
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[0].class"><router-link to="/search-school" style="text-decoration: none; color: rgba(0,0,0,.5)">{{navList[0].content}}</router-link></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[1].class" v-html="navList[1].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[2].class"  v-html="navList[2].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[3].class" v-on:click="splitNavStatus = !splitNavStatus" v-html="navList[3].content"></span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[4].class">{{navList[4].content}}</span></li>
                        <li class="secondLiSet t-center poppins"><span id="navItemContainer" :class="navList[5].class">{{navList[5].content}}</span></li>
                    </ul>
                </div>

                <div class="burger-menu point flex-col a-c-n"  @click="burgerClick = !burgerClick">
                <div :class="{menu: true, 'turn-down': !burgerClick, slowDown: true}" id="bar-1"></div>
                <transition name="custom-classes-transition"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight">
                    <div class="menu" id="bar-2" v-if="burgerClick"></div>
                </transition>
                <div :class="{menu: true, 'turn-up': !burgerClick, slowDown: true}" id="bar-3"></div>
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

    <div :class="{'menu-drop poppins': true, drop: !burgerClick, undrop: burgerClick}">

        <div class="drop-menu-contain">
            <ul v-for="item in dropMenuItems" :key="item.id">
                <li>
                    <router-link :to="item.link" style="text-decoration: none; color: rgba(0,0,0,.5)" v-html="item.content" class="poppins">{{item.content}}</router-link>
                </li>
            </ul>

            <div class="actOnDrop flex-col a-c poppins" style="margin-top: 3rem;">
                <span class="loginBtn drop-act darkTxt" v-if="!loggedIn">
                Login
                </span>
                <span class="startBtn black-act drop-act" v-if="!loggedIn">
                Get Started
                </span>
                <span class="loginBtn black-act drop-act" v-if="loggedIn">
                Logout
                </span>
            </div>
        </div>

    </div>

    </div>

</template>

<script>
export default {
  data () {
    return {
      burgerClick: true,
      navList: [{ content: 'Browse Schools', class: 'def', link: '/' }, { content: 'Explore visas for <select><option>Canada</option><option>USA</option></select>', class: 'def', link: '/' }, { content: 'How it works', class: 'def', link: '/' }, { content: '<span v-on:click="splitNavStatus = !splitNavStatus">Get started</span>', class: 'blue-btn', link: '/' }, { content: '|', class: 'def', link: '' }, { content: 'Log in', class: 'def', link: '/' }],
      splitNavStatus: true,
      navListStatus: true,
      navStat: true,
      noNavListRoutes: [ 'onboarding', 'travoolerOnboarding', 'setPassword', 'signIn' ],
      noNav: [ 'setPassword', 'signIn', 'payment' ],
      travAgent: true,
      dropMenuItems: [
        { content: 'Browse Schools', class: 'def', link: '/ ', id: 1 }, { content: 'Explore visas for <select style="background: white;border: 1px dotted black; border-radius: 3px; padding: 2px;"><option>Canada</option><option>USA</option></select>', class: 'def', link: '/', id: 2 }, { content: 'How it works', class: 'def', link: '/', id: 3 }, { content: 'Travel Agencies', class: 'def', link: '/', id: 4 }
      ],
      loggedIn: false
    }
  },
  methods: {
    hideSplitAndGetStarted () {
      this.splitNavStatus = true
    }
  },
  updated () {
    var route = this.$router.currentRoute.name

    if (window.innerWidth < 480) {
      this.travAgent = false
    }

    if (this.noNavListRoutes.includes(route)) {
      this.navListStatus = false
    }
    if (this.noNav.includes(route)) {
      this.navStat = false
    }
  },
  created () {
    var route = this.$router.currentRoute.name

    if (window.innerWidth < 480) {
      this.travAgent = false
    }

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
@import url(~@/assets/styles/navbar.css);
</style>
