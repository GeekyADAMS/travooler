<template>
    <div class="flex-col w100 h100">
        <section class="top_nav w100 h10 sticky flex-row a-c space-btw border-box">
            <div class="flex-row a-c ml-7 s-ml-0">
                <img src="@/assets/logo-black.jpg" class="logo" alt="">
            </div>
            <p class="warning poppins t-green">{{warning}}</p>
        </section>

        <div class="flex-col w100 h90 a-c-n  pad-lr border-box s-h-fit scroll-y">
          <h1 class="h1 poppins mt-3 t-center">Get smarter about your travel?</h1>

          <div class="flex-col a-c option-track mt-3">
            <div class="flex-row mt-p5 s-w95 scroll-x" v-for="(option, index) in options" :key="index">
                <div class="flex-row a-c each-option point border-box" v-for="(option, index) in option" :key="index" style="margin: 0 .2rem;" @click="navigate(option.link)">
                  <div class="black-circle mr-1"></div>
                  <p class="poppins_light  t-center s-min-w-7">{{option.title}}</p>
                </div>
            </div>
          </div>

          <button class="blac-btn t-center poppins white text-p8 mt-3 point hover-fade">Submit your questions...</button>

          <div class="flex-row a-c space-btw mt-3">
            <p class="poppins fade-5 t-center">Undiscovered answers</p> <div class="dot"></div>
            <p class="poppins fade-5 t-center">World-class professionals</p> <div class="dot"></div>
            <p class="poppins fade-5 t-center">Community so helpful</p>
          </div>

          <h2 class="h2 poppins_light mt-2 t-center s-mt-3 s-mb-1">All on <u class="point" @click="navigate('/about')">Travooler</u>.<br>All for you.</h2>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        [{ title: 'Admissions', link: '/Chat' }, { title: 'Canada', link: '' }, { title: 'USA', link: '' }, { title: 'Express Entry', link: '' }, { title: 'Q & A', link: '' }, { title: 'Community', link: '' }],
        [{ title: 'AgentsCanada', link: '' }, { title: 'AgentsUSA', link: '' }, { title: 'AgentsSchengen', link: '' }, { title: 'AgentsUK', link: '' }, { title: 'UK', link: '' }],
        [{ title: 'Australia', link: '' }, { title: 'TrendingAnswers', link: '' }, { title: 'AgentsAustralia', link: '' }, { title: 'IELTSTutors', link: '' }, { title: 'TicketFinder', link: '' }]
      ],
      warning: ''
    }
  },
  created () {
    this.$store.dispatch('disableNavbarState')
  },
  methods: {
    navigate (route) {
      if (route == '') {
        this.warning = 'Coming soon!!!'
        setTimeout(() => {
          this.warning = ''
        }, 1500)
      } else {
        this.$router.push({ path: route })
      }
    }
  }
}
</script>

<style scoped>
.pad-lr{
  overflow-x: hidden;
}
.logo{
  width: 9rem;
  height: 3.5rem;
}
.h1{
  font-size: 2.5rem;
}
.h2{
  font-size: 1.5rem;
  line-height: 2rem;
}
.black-circle{
  width: 1.3rem;
  height: 1.3rem;
  background: black;
  border-radius: 25px;
}
.each-option{
  border: 1px solid rgba(0,0,0, 0);
  border-radius: 25px;
  background: rgba(0,0,0,.05);
  padding: .5rem;
}
.each-option:hover{
  border: 1px solid rgba(0,0,0, .2);
  background: transparent;
}
.blac-btn{
  padding: 1rem 3rem;
  border-radius: 10px;
  border: none;
  background: black;
}
.dot{
  width: 5px;
  height: 5px;
  background: black;
  margin: 0 .5rem;
  border-radius: 25px;
}

@media screen and (max-width: 570px) {
  .pad-lr{
    padding: 0 1rem;
    overflow-x: hidden;
  }
  .s-min-w-7{
    min-width: 7rem;
  }
}

</style>
