<template>
    <div class="off-white-2 w100 h100 hide-overflow-y hide-overflow-x">
        <section class="top_nav w100 h10 sticky flex-row a-c space-btw border-box">
            <div class="flex-row a-c">
                <img src="@/assets/logo-black.jpg" class="logo" alt="">
            </div>

            <portal-target name="navbar-search" class="h60p w40p"></portal-target>

            <div class="flex-row a-c point"><img src="@/assets/STASHIP-UNIVERS-IMG/chat.png" alt="" class="identicon" style="margin-right: .25rem;">
            <span class="poppins darkTxt" style="font-size: .8rem;">Chat with an advisor</span></div>
        </section>

        <router-view></router-view>

    </div>
</template>

<script>
// import schoolsPart from '@/components/admin-schools-section'

export default {
  data () {
    return {
    }
  },
  components: {
    // schoolsPart
  },
  created () {
    this.$store.dispatch('disableNavbarState')
  },
  methods: {
  }
}
</script>

<style scoped>
@import url('~@/assets/styles/admin-dashboard.css');

.top_nav{
    box-shadow: 0 2px 2px rgba(0,0,0,.09);
    padding: 0 2rem 0 2rem;
    background: white;
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
</style>
