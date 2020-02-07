<template>
    <div>
        <section class="hero flex-row">
            <div class="hero-texts flex-col a-n-c poppins">
              <h2>Health savings,<br> redefined.</h2>
              <p>Starship is the modern, mobile health savings account.</p>
              <button type="button" class="anime-btn-1 btn1 poppins">Get started</button>
            </div>
            <div class="hero-illus">
              <img src="@/assets/card-hand-removebg-preview.png">
            </div>
        </section>
        <section class="sponsors flex-col a-c">
          <img src="@/assets/STASHIP-UNIVERS-IMG/logos-partners-1.svg" alt="">
        </section>

        <section class="third-sect flex-col a-c">
          <div class="third-sect-contain flex-col a-c">
            <h2 class="primary poppins">More money in your pocket,<br>not in Uncle Sam's.</h2>
            <p class="primary poppins">Your personal health and financial health are inextricably linked. We’ve made it our mission to help Americans plan for the future by making it effortless to manage your health savings account.</p>
          </div>
        </section>

        <section class="forth flex-row">
          <div class="left-forth">
            <img src="@/assets/STASHIP-UNIVERS-IMG/hand-with-phone-3-0x0-c-default.jpg" alt="">
          </div>
          <div class="right-forth flex-col a-n-c poppins">
            <h2 class="primary poppins">Built for you, by <br>people who care.</h2>
            <p class="primary poppins">Easily track your spending, save for today, and invest for tomorrow.</p>
          </div>
        </section>

        <section class="fifth flex-col a-c">
          <h2 class="primary poppins">Pay for the big things, and the <br>little ones, too.</h2>
          <div class="service-slider poppins flex-row a-c">
            <div class="left-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg"></div>
            <div class="slider flex-row">
              <div class="serve-scroll-contain flex-row a-n-c">
                <div class="eachServiceCards" v-for="cardItems in sliderCardData" :class="cardItems.cardBackground" :key="cardItems.cardBackground">
                  <h3>{{cardItems.cardHeader}}</h3>
                  <p>{{cardItems.cardBodyText}}</p>
                </div>
              </div>
            </div>
            <div class="right-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg"></div>
          </div>
          <h4 class="seeMore poppins">See all eligible expenses</h4>
        </section>

        <section class="sixth poppins flex-col a-c">
          <h1>Simple pricing, exceptional earnings.</h1>
          <div class="flex-row a-c">
            <div v-for="vals in costmodel" :key="vals.tag" class="flex-col a-c">
              <h2>{{vals.quantity}}</h2>
              <p>{{vals.tag}}</p>
            </div>
          </div>
        </section>

        <section class="third-sect flex-col a-c" style="background: rgb(236, 255, 254);">
          <div class="third-sect-contain flex-col a-c">
            <h2 class="primary poppins">Unlock the power of investing.</h2>
            <p class="primary poppins">Discover how much you could accumulate for tomorrow if you invest in your health today.</p>
          </div>
        </section>

        <section class="forth flex-row">
          <div class="left-forth">
            <img src="@/assets/STASHIP-UNIVERS-IMG/hand-with-phone-4-0x0-c-default.jpg" class="lf2" alt="">
          </div>
          <div class="right-forth flex-col a-n-c poppins">
            <h2 class="primary poppins">Sign up for free in <br>5 minutes or less.</h2>
            <button type="button" class="anime-btn-1 btn2 poppins" style="background: rgb(44, 135, 240);">Get started</button>
          </div>
        </section>

        <section class="sponsors flex-col a-c">
          <img src="@/assets/STASHIP-UNIVERS-IMG/logos-publications.svg" alt="">
        </section>

        <section class="approval flex-row a-c">
          <div class="flex-col a-c">
            <img src="@/assets/STASHIP-UNIVERS-IMG/fdic-0x0-c-default.png" alt="">
            <p class="poppins">Checking accounts FDIC insured up to $250.000.</p>
          </div>
          <div class="flex-col a-c">
            <img src="@/assets/STASHIP-UNIVERS-IMG/sipc-0x0-c-default.png" alt="">
            <p class="poppins">Invested accounts protected by the SIPC up to $500,000.</p>
          </div>
        </section>

        <preFooter/>
    </div>
</template>

<script>
export default {
  data () {
    return {
      costmodel: [
        { quantity: '$0.00', tag: 'to save' },
        { quantity: '0.5%', tag: 'fee for investing' },
        { quantity: '2.0%', tag: 'APY*' }
      ],
      sliderCardData: [
        { cardHeader: 'Pharmacy', cardBodyText: 'Starship works at the pharmacy on all prescriptions, and a lot of over-the-counter drugs, too.', cardBackground: 'pharm' },
        { cardHeader: 'Doctor\'s Visit', cardBodyText: 'Use Starship for all doctors\'s appointments, including spcialists and surgeries.', cardBackground: 'docvis' },
        { cardHeader: 'Dental', cardBodyText: 'Coverage for anything, from routine dental work to gnarly stuff, like crowns or root canals', cardBackground: 'dental' },
        { cardHeader: 'Vision', cardBodyText: 'Hey good lookin\', keep those eyes healthy. Glasses, contacts, and all eye care are eligible', cardBackground: 'vision' },
        { cardHeader: 'Family Care', cardBodyText: 'Use Starship for birth control, pregnancy tests, and other family planning expenses.', cardBackground: 'famcare' },
        { cardHeader: 'Wellness', cardBodyText: 'Like going to the gym, but for your mind. Use Starship to pay for mental health services.', cardBackground: 'wellness' }
      ]
    }
  }
}
</script>

<style scoped>

.approval{
  background: rgb(44, 135, 240);
  padding: 4rem;
}
.approval>div{
  margin: 1rem 4rem 1rem 4rem;
}
.approval>div>img{
  width: 15rem;
  height: 7rem;
  margin-bottom: 1.5rem;
}
.approval>div>p{
  color: white;
  font-size: 1rem;
  text-align: center;
}

.left-forth>.lf2{
  height: 100vh;
  width: 48vw;
}
.btn2{
  color: white;
}
.sixth{
  background: rgb(44, 135, 240);
  height: auto;
  width: 100vw;
  margin-top: 8rem;
  color: white;
  padding: 9rem 0 6rem 0;
}

.sixth>h1{
  font-size: 3.35rem;
  font-weight: 500;
}
.sixth>div{
  margin-top: 2.5rem;
}
.sixth>div>div{
  width: 20vw;
  background: white;
  color: #101820;
  padding: 2.5rem 2.5rem;
  border-radius: 5px;
  margin: .8rem;
}
.sixth>div>div>h2{
  font-size: 1.5rem;
  font-family: 600;
}
.sixth>div>div>h2{
  font-size: 2.4rem;
  font-family: 700;
}
.sixth>div>div>p{
  font-size: 1.4rem;
  font-family: 700;
}
.seeMore{
  color: rgb(96, 96, 250);
  font-size: 1.3rem;
  font-weight: 500;
}
.seeMore:hover{
  color: rgb(71, 71, 71);
}
.right-arrow{
  position: relative;
  left: -1.8rem;
}
.left-arrow{
  position: relative;
  left: 2.6rem;
}
.pharm{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/pharmacy-960x640-c-default.jpg');
}
.docvis{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/doctor-960x640-c-default.jpg');
}
.dental{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/dental-960x640-c-default.jpg');
}
.vision{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/vision-960x640-c-default.jpg');
}
.famcare{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/family-960x640-c-default.png');
}
.wellness{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/wellness-960x640-c-default.jpg');
}
.eachServiceCards{
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 72vh;
  width: 18.4vw;
  margin: 3rem 1rem;
  padding: 3.5rem 5rem 0 2.5rem;
  color: white;
  box-shadow: 0 12px 64px rgba(0,0,0,.05);
}
.eachServiceCards>h3{
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}
.serve-scroll-contain{
  width: auto;
}
.service-slider>.slider::-webkit-scrollbar{
    display: none;
}
.service-slider>.slider::-webkit-scrollbar-track{
    display: block;
}
.service-slider>.slider{
  width: 95vw;
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
}
.service-slider{
  max-width: 95vw;
}

.left-arrow, .right-arrow{
  background: white;
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  box-shadow: 0 8px 24px rgba(0,0,0,.30);
  cursor: pointer;
}
.left-arrow:hover, .right-arrow:hover{
  box-shadow: 0 8px 12px rgba(0,0,0,.15);
}

.hero{
  background: rgb(44, 135, 240);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.hero-illus{
  width: 50vw;
  height: 100vh;
  display: flex;
  justify-content: baseline;
  align-self: center;
}
.hero-illus>img{
  position: relative;
  bottom: -12rem;
  left: 12rem;
  width: 22rem;
  animation-name: cardswipe;
  animation-duration: 12s;
  animation-delay: 3s;
  animation-iteration-count: infinite;
}

@keyframes cardswipe {
  0%{transform: rotate(0deg);}
  30%{transform: rotate(15deg);}
  60%{transform: rotate(0deg);}
  90%{transform: rotate(-20deg);}
  100%{transform: rotate(0deg);}
}

.hero-texts{
  height: 100vh;
  padding-left: 6rem;
  width: 50vw;
}
.hero-texts>h2{
  color: white;
  font-weight: 500;
  font-size: 3.5rem;
  margin-top: 8rem;
  margin-bottom: 1.5rem;
  line-height: 3.7rem;
}
.hero-texts>p{
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  width: 30rem;
  margin-bottom: 2.5rem;
}
.btn1{
  color: rgb(44, 135, 240);
}
.anime-btn-1 {
  z-index: 1;
  position: relative;
  font-size: 1.3rem;
  outline: none;
  border: none;
  border-radius: 6px;
  background-color: white;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  padding: 1.2rem 2rem;
  width: fit-content;
}

.anime-btn-1::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 100%;
  right: 100%;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background-color: #fee715;
  transform-origin: center;
  transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
  transition: transform 0.7s ease-in-out;
}

.anime-btn-1:hover {
  cursor: pointer;
  color: #000;
}

.anime-btn-1:hover::before {
  transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
}

.sponsors{
  width: 100vw;
  padding: 2rem;
  background: rgb(238, 255, 248);
}

.third-sect{
  width: 100vw;
  color: #15202c;
  padding: 10rem 0;
}

.third-sect-contain{
  width: 65vw;
  text-align: center;
}
.third-sect-contain>h2{
  font-size: 3.5rem;
  margin-bottom: 3rem;
  text-align: center;
}
.third-sect-contain>p{
  font-size: 1.4rem;
  text-align: center;
  opacity: .6;
}

.left-forth>img{
  width: 55vw;
  height: 90vh;
}
.right-forth>h2{
  font-size: 2.8rem;
  margin-bottom: 3rem;
}
.right-forth>p{
  font-size: 1.4rem;
  opacity: .6;
}
.right-forth{
  padding: 4rem;
}
.primary{
  color: #101820;
}
.fifth>h2{
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  margin-top: 8rem;
}
</style>
