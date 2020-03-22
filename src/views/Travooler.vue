chrome<template>
    <div>
      <section class="flex-col a-c hero s-w100">
        <img class="gradIcon" src="@/assets/STASHIP-UNIVERS-IMG/gradCap.png">
        <h1 class="hero-header t-center Poppins darkTxt s-w100">
          Go from applicant to traveler<!--<span class="blueTxt"> <u class="changingText"></u></span>-->
        </h1>
        <p class="heroCaption w55 poppins darkTxt t-center s-w95">
          Travooler is an intelligent travel platform connecting eligible travelers to schools, immigration
programs and rush passport courier in Canada, United States, UK, Europe and more. All through one
single platform.
        </p>

        <button class="black-btn hover-fade poppins point">Continue to Portal</button>
        <!--<div class="flex-row w70 a-c" style="padding: 1rem;">
          <div class="h7 w50 searchDiv flex-row" style="padding: 0rem 0 0rem 4rem;">
            <span class="flex-row a-c" style="padding-right: 6rem;">
              <img src="@/assets/STASHIP-UNIVERS-IMG/location-icon.png" alt="" class="locationIcon bit-fade tiny">
              <select name="location" class="location-search poppins">
                <option value="1">Available Countries</option>
                <option value="2">Copenhagen, Denmark</option>
                <option value="3">Nairobi, Kenya</option>
              </select>
            </span>
            <span class="flex-row a-c"><img src="" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/search_icon.png" alt="" class="locationIcon bit-fade tiny">
              <input type="text" placeholder="Search school" class="poppins darkTxt" style="border: 0; margin-left: 1rem; padding-left: .2rem;">
            </span>
          </div>
          <div class="h7 w20 searchBtn">
          </div>
        </div>-->

        <div class="brand-align flex-row a-n-c space-btw w90 wrap" v-if="mobile">
          <img src="@/assets/cbnc.png" alt="">
          <img src="@/assets/forbes.png" alt="">
          <img src="@/assets/mashable.png" alt="">
          <img src="@/assets/nyt.png" alt="">
          <img src="@/assets/reuters.png" alt="">
          <img src="@/assets/telaria.png" alt="">
          <img src="@/assets/foxbiz.png" alt="">
        </div>
      </section>

      <section class="secondSect flex-col a-c">
        <h1 class="Poppins darkTxt w50 s-w95 t-center">Built for travelers by people who care</h1>
        <div class="flex-row flex-col-m a-n-c space-btw w80" style="padding-top: 2.5rem;">
          <img src="@/assets/STASHIP-UNIVERS-IMG/laptop-ui-render.png" id="laptop-ui">
          <div class="flex-col a-n-c w40 s-w100">
            <span class="signup-steps poppins darkTxt">
              <h4>Introduce yourself</h4>
              <p>Travooler helps you build, track and manage your
profile to make your most important travel history,
extracurricular, academic, work and personal
background standout.</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>Live Chat with travel agents</h4>
              <p>Get in touch with the best agents in seconds. Right
here in the app. Have instant responses and more
meaningful conversations than via email.</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>Automated consultation</h4>
              <p>For any travel request you need to provide pretty
much the same answers for agents to be able to
verify your eligibility and assist you. We want to
make it easier, so we automate it!</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>Agent profiles</h4>
              <p>Instantly confirm your travel agent information using
their AgentPass, before you pay. Check their
ratings, trust score, experience and average service
fees.</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>Loans for travel</h4>
              <p>Access up to N10million proof of funds loans from
our partners without collateral. Money shouldn’t be
the reason you don’t get to travel, not again!</p>
            </span>

            <button type="button" id="signup-orange" class="poppins point">Sign up</button>
          </div>
        </div>
      </section>

      <section class="third-sect flex-col a-c w100">
        <div class="flex-row flex-col-rev-m a-c-n space-btw w60">
          <div class="text-div poppins darkTxt w30 w90-m s-ml-1p2"  style="margin-right: 2rem;">
            <h2 class="m-lh s-w95 s-mt-3 w20">Find your perfect travel</h2>
            <p class="s-lh">Travooler helps you find the perfect school,
apply for visa and explore your eligibility for
permanent residence programs worldwide.</p>
            <span class="flex-row a-c-n space-btw" style="margin-top: 2.5rem; width: 10rem;">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon.svg" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon.png" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon2.png" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon3.png" alt="">
            </span>

            <div class="flex-row a-c-n  mt-3">
            <button type="button" class="poppins point s-btn-text black-btn-default t-green mr-2">Sign up</button> <button class="poppins hover-fill point" style="border-bottom: 2px solid rgb(44, 240, 214); background: transparent; padding: .5rem; color: black; font-weight: 500; border-top: 0; border-left: 0; border-right: 0;">Explore travel</button></div>
          </div>
          <img src="@/assets/STASHIP-UNIVERS-IMG/ladies-code.jpg" alt="" class="thirdsect-illus1 s-lr-1 s-w95">
        </div>

        <div class="flex-row flex-col-m a-n-c space-btw w90">
          <img src="@/assets/STASHIP-UNIVERS-IMG/man-purple.jpg" alt="" class="thirdsect-illus2 ">
          <div class="text-div poppins darkTxt w30 s-mt-3 s-w95">
            <h2 class="h2 m-lh s-w95">Expert agents to process your travels</h2>
            <p class="w90-m">With the largest on-demand travel agent
network, Travooler will help you at every
step of your travel application.</p>
            <div class="spacer" style="height: .5rem"></div>
            <button type="button" class="poppins point s-btn-text black-btn-default t-green mt-3">Chat with an agent</button>
            <div class="spacer" style="height: 1rem"></div>
          </div>
          <div class="text-div poppins darkTxt w30 s-w95">
            <h2 class="h2 m-lh s-w95 s-mt-3">Digital 360&deg; traveler profile, totally free</h2>
            <p class="w90-m">Easily access, track and share your traveler profile
and credentials with any agent via your TravelerPass,
anytime. No need to email multiple documents or
expect calls requesting your information.</p>
            <div class="spacer" style="height: .5rem"></div>
            <button type="button" class="poppins point s-btn-text black-btn-default t-green mt-3">Get your profile</button>
            <div class="spacer" style="height: 1rem"></div>

            <div class="black-line mt-1"></div>
            <p class="poppins mt-1 w90-m" style="font-size: .7rem; color: black" >
              A TravelerPass can replace traditional profile and document paperwork and speed up your
travel process. It's safer, quicker, and completely free for everyone.
            </p>
            <p class="poppins mt-p5 w90-m" style="font-size: .85rem; color: black;">Note: Only persons you share your TravelerPass with can view your profile,
online. Please see our Privacy Policy for more information and details of how
to opt out.</p>
          </div>
        </div>

        <div class="flex-row a-c-n space-btw w60" v-if="mobile">
          <div class="text-div poppins darkTxt w30"  style="margin-bottom: 6rem;">
            <h2 class="h3">New success<br>stories everyday</h2>
            <div id="container">
              <div class="item-1">
                <p class="p-right s-w95">"Travooler helped me secure my Masters degree admission with $10,000 entrance scholarship, which has set me up for a promising future in the business world."</p>
                <div class="client-details">
                  <p class="p-right c-name">D'Arius</p>
                  <p class="p-right c-location">Alabama A&M</p>
                </div>
              </div>
              <div class="item-2">
                <p class="p-right">"Travooler helped me secure my Masters degree admission with $10,000 entrance scholarship, which has set me up for a promising future in the business world."</p>
                <div class="client-details">
                  <p class="p-right c-name">Adams</p>
                  <p class="p-right c-location">Semicolon Africa</p>
                </div>
              </div>
              <div class="item-3">
                <p class="p-right">"Travooler helped me secure my Masters degree admission with $10,000 entrance scholarship, which has set me up for a promising future in the business world."</p>
                <div class="client-details">
                  <p class="p-right c-name">Bolaji</p>
                  <p class="p-right c-location">Alabama A&M</p>
                </div>
              </div>
            </div>
          </div>
          <img src="@/assets/STASHIP-UNIVERS-IMG/dev-girl.jpg" alt="" class="thirdsect-illus3">
        </div>

        <div class="flex-row flex-col-m a-c-n space-btw w60">
          <img src="@/assets/STASHIP-UNIVERS-IMG/mobile-render.jpg" alt="" class="thirdsect-illus3">
          <div class="text-div poppins darkTxt w30 s-mt-3 s-w95 s-ml-2">
            <h2 class="h2">Earn $200 credit when you tell your friends</h2>
            <p style="margin-top: 2rem;">When they book their first travel through Travooler,
you earn up to $200 paid to your bank or as voucher
(amazon, iTunes).</p>

            <button type="button" class="poppins point s-btn-text black-btn-default t-green mt-3">Refer Now</button>

            <div class="Poppins mt-2 w-80 s-w95" style="font-weight: bold; font-size: 1.8rem;">New success stories everyday</div>
            <div class="spacer" style="height: .5rem" v-if="mobile"></div>
            <div class="spacer" style="height: 2rem" v-if="mobile"></div>
            <div class="flex-row a-c-n get-app-icons" v-if="mobile">
              <img src="@/assets/App-Store-Grey.png" alt="" style="margin-right:.5rem;" class="noDisplay">
              <img src="@/assets/Google-Play-Grey.png" alt="" class="noDisplay">
            </div>
          </div>
        </div>
      </section>

      <section class="sixth poppins flex-col a-c w90 s-w95 m-auto">
        <h1 style="color: black;">A better, easier travel experience</h1>
        <div class="flex-row a-c flex-col-m">
          <div v-for="(opt, index) in businessOpts" :key="index" class="flex-col a-c point trans-anime-up">
            <h2 style="opacity: .85;">{{opt.content}}</h2>
            <p style="opacity: .85;">{{opt.tag}}</p>
          </div>
        </div>
      </section>

      <preFooter/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      businessOpts: [
        { content: 'For Traveles', tag: 'Get Started' },
        { content: 'For Agents', tag: 'Book a demo' },
        { content: 'Contact us', tag: 'support@travooler.com' }
      ]
    }
  },
  computed: {
    mobile () {
      return this.$store.state.mobile
    }
  }
}
</script>

<style scoped>
  @import url(~@/assets/styles/travooler.css);
</style>
