<template>
    <div>
        <section class="hero flex-row">
            <div class="blob">
  <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
            <div class="hero-texts flex-col a-n-c poppins" style="z-index: 1;">
              <h2>Go from applicant <br>to traveler.</h2>
              <p>Travooler is the modern, all-in-one platform to find the perfect school and
immigration programs. <br v-if="!mobile">Start your future.</p>
              <button type="button" class="anime-btn-1 btn1 poppins" v-scroll-reveal.reset>Get started</button>
            </div>
            <div class="hero-illus">
              <img src="@/assets/card-hand-removebg-preview.png">
            </div>
        </section>

        <marquee class="sponsors flex-row" behavior="scroll" direction="left"><img src="@/assets/STASHIP-UNIVERS-IMG/logos-partners-1.svg" style="margin-right: 50px;" alt="">
        <img src="@/assets/STASHIP-UNIVERS-IMG/logos-partners-1.svg" style="margin-right: 50px;" alt="">
        <img src="@/assets/STASHIP-UNIVERS-IMG/logos-partners-1.svg" style="margin-right: 50px;" alt="">
        </marquee>

        <section class="third-sect flex-col a-c">
          <div class="third-sect-contain flex-col a-c">
            <div class="blob">
  <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
            <h2 class="primary poppins" v-scroll-reveal>Helping 1M+ students find admission (and more!) every year</h2>
            <p class="primary poppins" v-scroll-reveal>Our portal helps students connect with the best schools in Canada, U.S., Africa and Europe. Travooler makes
finding and applying for the perfect school a seamless part of the process instead of a chore.</p>
          </div>
        </section>

        <section class="forth flex-row">
          <div class="left-forth m-100">
            <img class="w-100 m-100" src="@/assets/STASHIP-UNIVERS-IMG/hand-with-phone-3-0x0-c-default.jpg" alt="">
          </div>
          <div class="right-forth flex-col a-n-c poppins">
            <h2 class="primary poppins">All your school search, now online (in 1 place)</h2>
            <p class="primary poppins">Find your school, apply easily and track application, and get
support from our community for proof of funds loans,
scholarships and everything in between!</p>
          </div>
        </section>

        <section class="fifth flex-col a-c">
          <h2 class="primary poppins" v-scroll-reveal>Experience the travooler difference</h2>
          <p class="poppins sub-title" v-scroll-reveal>We are building the next-generation community for students and professionals, making it effortless to find
the perfect opportunities like schools, scholarships and immigration programs.</p>

          <div class="flex-row flex-col-m w85 s-w100 space-btw pad-1-lr mt-5 a-c">
            <div class="students w40 s-w90r flex-col a-n-c trans-anime-up point" v-scroll-reveal.reset>
              <p class="poppins primary stutag">STUDENTS</p>
              <h1 class="Poppins primary stu-title">Find a program</h1>
              <p class=" w60p s-w90r poppins stu-desc">Travooler is at the forefront of global education, and lets you search and apply to top programs.</p>

              <p class="btn-line-1 poppins point"><span>Find a school</span><span style="margin-left: 1rem;"> &#8594;</span> </p>
            </div>

            <div class=" w40 s-w90r flex-col a-n-c s-mt-1 trav-comm trans-anime-up point" v-scroll-reveal.reset>
              <p class="poppins primary stutag">FOR SCHOOLS AND RECRUITMENT ADVISORS</p>
              <h1 class="Poppins primary stu-title">Boost student requirement</h1>
              <p class="s-w90r poppins stu-desc">Travooler is the largest early talent education recruiting platform to boost student sourcing and
recruiting.</p>

            <p class="btn-line-3 poppins point"><span>Find your agency or school advisor</span><span style="margin-left: 1rem;"> &#8594;</span> </p>
            </div>

          </div>

          <div class="flex-row flex-col-m w85 s-w100 space-btw pad-1-lr mt-2 a-c">

            <div class=" w40 s-w90r flex-col a-n-c trav-comm trans-anime-up point" v-scroll-reveal.reset>
              <p class="poppins primary stutag trans-anime-up">TRAVOOLER COMMUNITY</p>
              <h1 class="Poppins primary stu-title">Get Introduced</h1>
              <p class="s-w90r poppins stu-desc">Ask anything from career counselling, to visa guidance, working abroad and freelancing. A chat is only as
  inspiring and helpful as who you have it with.</p>

              <p class="poppins primary stutag" style="font-size: 1.16rem; font-weight: 700;">I am interested in:</p>

              <select name="interests" id="" class="poppins interests">
                <option value="0" disabled>Select interest</option>
                <option value="TechAndFreelance">Tech and Freelancing</option>
                <option value="TravAgent">Travel Agents</option>
                <option value="PermRes">Permanent residence abroad</option>
                <option value="CanImmig">Canada immigration</option>
                <option value="UsImmig">US immigration</option>
                <option value="UkImmig">UK immigration</option>
                <option value="ShengenImmig">Shengen immigration</option>
                <option value="VisaAssist">Visa assistance</option>
                <option value="VisaApply">Visa application guidance</option>
                <option value="WorkAndStudy">Work and study abroad</option>
                <option value="TravFund">Funds for travel</option>
                <option value="Scholarships">SCholarships</option>
                <option value="SChSelect">School selection</option>
                <option value="EDuCounsel">Educational counselling</option>
                <option value="CareerAdvice">Career advice</option>
                <option value="Net">Networking</option>
                <option value="All">Everything</option>
              </select>
            </div>

            <div class="travelers w40 s-w90r s-mt-1 flex-col a-n-c trans-anime-up point" v-scroll-reveal.reset>
              <p class="poppins primary stutag">ALL TRAVELLERS</p>
              <h1 class="Poppins primary stu-title">Explore visa options</h1>
              <p class=" w60p s-w90r poppins stu-desc">Use Travooler to find immigration programs, and get help from personal travel assistants</p>

              <p class="btn-line-2 poppins point"><span>Explore visas now</span><span style="margin-left: 1rem;"> &#8594;</span> </p>
            </div>

          </div>
        </section>

        <section class="third-sect flex-col a-c">
        <div class="blob">
  <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
</div>
          <div class="third-sect-contain flex-col a-c">
            <h2 class="primary poppins" v-scroll-reveal>Built for people who don't want to be limited in potential.</h2>
            <p class="primary poppins" v-scroll-reveal>Discover how much good you can do yourself by trusting Travooler.</p>
          </div>

        </section>

        <section class="forth flex-row">
          <div class="left-forth">
            <img src="@/assets/STASHIP-UNIVERS-IMG/hand-with-phone-4-0x0-c-default.jpg" class="lf2 m-100" alt="">
          </div>
          <div class="right-forth flex-col a-n-c poppins">
            <p class="primary poppins">See where smarter travelers like you are
currently applying on Travooler.</p>
            <button type="button" class="anime-btn-1 btn2 poppins mt-3" style="background: black">Get started</button>
          </div>
        </section>

        <section class="sixth poppins flex-col a-c w90 s-w95 m-auto">
          <h1>A better, easier application experience</h1>
          <div class="flex-row a-c flex-col-m">
            <div v-for="vals in businessOptions" :key="vals.tag" class="flex-col a-c point trans-anime-up">
              <h2 style="opacity: .6;">{{vals.purpose}}</h2>
              <p style="opacity: .6;">{{vals.tag}}</p>
            </div>
          </div>
        </section>

        <!--<marquee class="sponsor flex-col a-c" behavior="scroll" direction="left">
          <img src="@/assets/STASHIP-UNIVERS-IMG/logos-publications.svg" alt="" style="margin-right: 50px;">
          <img src="@/assets/STASHIP-UNIVERS-IMG/logos-publications.svg" alt="" style="margin-right: 50px;">
          <img src="@/assets/STASHIP-UNIVERS-IMG/logos-publications.svg" alt="" style="margin-right: 50px;">
        </marquee>

        <section class="approval flex-row flex-col-m a-c">
          <div class="flex-col a-c">
            <img src="@/assets/STASHIP-UNIVERS-IMG/fdic-0x0-c-default.png" alt="">
            <p class="poppins">Checking accounts FDIC insured up to $250.000.</p>
          </div>
          <div class="flex-col a-c">
            <img src="@/assets/STASHIP-UNIVERS-IMG/sipc-0x0-c-default.png" alt="">
            <p class="poppins">Invested accounts protected by the SIPC up to $500,000.</p>
          </div>
        </section>-->

        <preFooter/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      businessOptions: [
        { purpose: 'For Students', tag: 'Get Started' },
        { purpose: 'For Travelers', tag: 'Travel Now' },
        { purpose: 'For Recruiters', tag: 'Get onboard' }
      ]
    }
  },
  computed: {
    mobile () {
      return this.$store.state.mobile
    }
  },
  methods: {
  },
  mounted () {
    this.$store.dispatch('checkMobileState')
  }
}
</script>

<style scoped>
@import url(~@/assets/styles/Homepage.css);
</style>
