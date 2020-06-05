<template>
    <div class="off-white-2 w100 h100 hide-overflow-y hide-overflow-x">
        <section class="top_nav w100 h10 sticky flex-row a-c space-btw border-box">
            <div class="flex-row a-c">
                <img src="@/assets/logo-black.jpg" class="logo" alt="">
            </div>

            <portal-target name="navbar-search" class="h60p w40p"  v-if="!mobile"></portal-target>

            <div class="flex-row a-c point" ref="navChat" v-if="!mobile" @click="popChat"><img src="@/assets/STASHIP-UNIVERS-IMG/chat.png" alt="" class="identicon" style="margin-right: .25rem;">
            <span class="poppins darkTxt" style="font-size: .8rem;">Chat with an advisor</span></div>

            <div class="burger-menu point flex-col a-c-n"  @click="burgerClick = !burgerClick">
              <div :class="{menu: true, 'turn-down': !burgerClick, slowDown: true}" id="bar-1"></div>
              <transition name="custom-classes-transition"
                          enter-active-class="animated slideInRight"
                          leave-active-class="animated slideOutRight">
                  <div class="menu" id="bar-2" v-if="burgerClick"></div>
              </transition>
              <div :class="{menu: true, 'turn-up': !burgerClick, slowDown: true}" id="bar-3"></div>
            </div>
        </section>

        <router-view :burgerClick="burgerClick"></router-view>

    </div>
</template>

<script>
// import schoolsPart from '@/components/admin-schools-section'

export default {
  data () {
    return {
      navItemDisplay: true,
      burgerClick: true
    }
  },
  computed: {
    mobile () {
      return this.$store.state.mobile
    }
  },
  components: {
    // schoolsPart
  },
  created () {
    this.$store.dispatch('checkMobileState')
    if (!this.mobile) {
      this.burgerClick = false
    }
  },
  methods: {
    popChat () {
      window.fcWidget.open()
      window.fcWidget.show()
    }
  }
}
</script>

<style scoped>
@import url('~@/assets/styles/admin-dashboard.css');
.top_nav {
  z-index: 3000;
}
.off-white-2{
    background: rgb(241, 241, 241);
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
#search:focus{
   -moz-outline-style: none;
    outline:none;
    outline: 0;
}

@media screen and (max-width: 570px) {
  .logo{
    margin-left: -1.5rem;
  }
}
</style>
