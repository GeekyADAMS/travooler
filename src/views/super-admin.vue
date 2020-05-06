<template>
    <div class="off-white w100 h100 hide-overflow-y hide-overflow-x">
        <section class="topNav w100 h10 sticky flex-row a-c space-btw">
            <div class="flex-row a-c">
                <img src="@/assets/logo-black.jpg" class="logo" alt="">
                <h3 class="admin Poppins ml-1 bit-fade mt-p3"> Admin</h3>
            </div>
            <portal-target name="navbar-status" class="mr-8"></portal-target>
        </section>

        <section class="flex-row w100 a-c h100 body-container">
            <div class="left-drawer w20 h100p flex-col a-c">
              <div class="mt-n10">
                <div :class="{'flex-row mb-p5 nav-tab point': true, checked: option.checked, uncheck: !option.checked }" v-for="(option, index) in navOptions" :key="index" @click="activate(index)">
                  <img :src="'/img/icons/icons/'+option.icon" class="icons" alt="">
                  <p class="poppins mt-pz5 ml-1 text-2">{{option.name}}</p>
                </div>
              </div>
            </div>
            <div class="main-body h100 w80 flex-col a-c">
              <router-view></router-view>
              <!--<schoolsPart v-if="navOptions[1].checked"/>-->
              <!--<div class="flex-col a-c bg-white mt-n5 round-15" style="padding: 4rem; border: 1px dashed rgba(0,0,0,.4);" v-if="nothingFound">
                <img src="@/assets/img/icons/nothing.png" alt="" class="" width="450px" height="400px">
                <p class="Poppins fade-5" style="font-size: 1.5rem;">Nothing found here..</p>
              </div>-->
            </div>
        </section>

    </div>
</template>

<script>
// import schoolsPart from '@/components/admin-schools-section'

export default {
  data () {
    return {
      navOptions: [
        { name: 'Dashboard', icon: 'dashboard.png', checked: true, route: '/admin/dashboard/' },
        { name: 'Schools', icon: 'academic.png', checked: false, route: '/admin/dashboard/schools' },
        { name: 'Travels', icon: 'plane.png', checked: false, route: '/admin/dashboard/' },
        { name: 'Settings', icon: 'settings.png', checked: false, route: '/admin/dashboard/' }
      ],
      nothingFound: true
    }
  },
  components: {
    // schoolsPart
  },
  created () {
    this.$store.dispatch('disableNavbarState')
  },
  methods: {
    activate (index) {
      this.navOptions.map(option => {
        option.checked = false
      })
      this.navOptions[index].checked = true
      this.$router.push(this.navOptions[index].route)
      if (index === 0 || index === 2 || index === 3) {
        this.nothingFound = true
      } else {
        this.nothingFound = false
      }
    }
  }
}
</script>

<style scoped>
@import url('~@/assets/styles/admin-dashboard.css');
</style>
