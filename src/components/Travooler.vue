<template>
    <div>
      <section class="flex-col a-c hero">
        <img class="gradIcon" src="@/assets/STASHIP-UNIVERS-IMG/gradCap.png">
        <h1 class="hero-header t-center darkTxt">
          Where would you like to <span class="blueTxt"> <u class="changingText"></u></span>
        </h1>
        <p class="heroCaption w55 poppins darkTxt t-center">
          We help you find, compare and apply for visa, top immigration programs and international admissions, all on your smartphone.
        </p>

        <div class="flex-row w70 a-c" style="padding: 1rem;">
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
        </div>

        <div class="brand-align flex-row a-n-c space-btw w90 wrap">
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
        <h1 class="poppins darkTxt">Using Travooler is easy</h1>
        <div class="flex-row a-c-n space-btw w80" style="padding-top: 2.5rem;">
          <img src="@/assets/STASHIP-UNIVERS-IMG/laptop-ui-render.png" id="laptop-ui">
          <div class="flex-col a-n-c">
            <span class="signup-steps poppins darkTxt">
              <h4>Introduce yourself</h4>
              <p>Create a profile that gets you noticed</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>See relevant jobs in your inbox</h4>
              <p>You can also filter and search through postings</p>
            </span>
            <span class="signup-steps poppins darkTxt">
              <h4>Apply instantly</h4>
              <p>Save time and apply to as many jobs as you'd like</p>
            </span>

            <button type="button" id="signup-orange" class="poppins">Sign up</button>
          </div>
        </div>
      </section>

      <section class="third-sect flex-col a-c w100">
        <div class="flex-row a-c-n space-btw w60">
          <div class="text-div poppins darkTxt w30"  style="margin-right: 2rem;">
            <h2>Expert agents to process your travels</h2>
            <p>With the largest on-demand travel agent network, explore, message and apply from your device. Gone are the days of endless paperwork.</p>
            <span class="flex-row a-c-n space-btw" style="margin-top: 2.5rem; width: 10rem;">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon.svg" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon.png" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon2.png" alt="">
              <img src="@/assets/STASHIP-UNIVERS-IMG/logo-icon3.png" alt="">
            </span>
          </div>
          <img src="@/assets/STASHIP-UNIVERS-IMG/ladies-code.jpg" alt="" class="thirdsect-illus1">
        </div>

        <div class="flex-row a-c-n space-btw w60">
          <img src="@/assets/STASHIP-UNIVERS-IMG/man-purple.jpg" alt="" class="thirdsect-illus2">
          <div class="text-div poppins darkTxt w30">
            <h2 class="h2">Digital travel passport, totally free</h2>
            <p>Get a digital travel pass that can be shared with any agent. No need to email multiple documents or expect calls requesting your information.</p>
            <div class="spacer" style="height: .5rem"></div>
            <button type="button" id="signup-orange" class="poppins">Who's hiring</button>
            <div class="spacer" style="height: 1rem"></div>
          </div>
        </div>

        <div class="flex-row a-c-n space-btw w60">
          <div class="text-div poppins darkTxt w30"  style="margin-bottom: 6rem;">
            <h2 class="h3">New success<br>stories everyday</h2>
            <div id="container">
              <div class="item-1">
                <p class="p-right">"Travooler helped me secure my Masters degree admission with $10,000 entrance scholarship, which has set me up for a promising future in the business world."</p>
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

        <div class="flex-row a-c-n space-btw w60">
          <img src="@/assets/STASHIP-UNIVERS-IMG/mobile-render.jpg" alt="" class="thirdsect-illus3">
          <div class="text-div poppins darkTxt w30">
            <h2 class="h2">Earn $200 credit for free when you apply using our agents</h2>
            <p style="margin-top: 2rem;">Book your first travel and earn $200 towards your next eligible purchases. Valid for 12 months*.</p>
            <div class="spacer" style="height: .5rem"></div>
            <div class="spacer" style="height: 2rem"></div>
            <div class="flex-row a-c-n get-app-icons">
              <img src="@/assets/App-Store-Grey.png" alt="" style="margin-right:.5rem;" class="noDisplay">
              <img src="@/assets/Google-Play-Grey.png" alt="" class="noDisplay">
            </div>
          </div>
        </div>
      </section>

      <section class="sixth poppins flex-col a-c">
        <h1>Simple pricing, exceptional earnings.</h1>
        <div class="flex-row a-c">
          <div class="flex-col a-c">
            <h2>$0.00</h2>
            <p>to save</p>
          </div>
          <div class="flex-col a-c">
            <h2>0.5%</h2>
            <p>fee for investing</p>
          </div>
          <div class="flex-col a-c">
            <h2>2.0%</h2>
            <p>fee for investing</p>
          </div>
        </div>
      </section>

      <preFooter/>
    </div>
</template>

<script>
export default {
  datat () {
    return {
      costmodel: [
        { quantity: '$0.00', tag: 'to save' },
        { quantity: '0.5%', tag: 'fee for investing' },
        { quantity: '2.0%', tag: 'APY*' }
      ]
    }
  }
}
</script>

<style scoped>
.changingText{
  animation: change2 30s ease-in-out 1000;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  transition: 1.5s ease-in-out;
}
@keyframes change2{
  0% {
    color: rgb(44, 135, 240);
  }
  33.33% {
    color: rgb(0, 128, 75);
  }
  66.66% {
    color: orange;
  }
  100% {
    color: rgb(44, 135, 240);
  }
}
.changingText:after{
    content: "";
    animation: change1 30s ease-in-out 1000;
    animation-delay: 0s;
    animation-fill-mode: forwards;
    transition: 1.5s ease-in-out;
}
@keyframes change1{
    0% {
      content: "travel";
    }
    33.33% {
      content: "study";
      color: rgb(0, 128, 75);
    }
    66.66% {
      content: "live";
      color: orange;
    }
    100% {
      content: "travel"
    }
}
.get-app-icons{
  width: 100%;
}
.get-app-icons>img{
  width: 11rem;
  height: 4.5rem;
  cursor: pointer;
  float: left;
}
.get-app-icons>img:hover{
  opacity: .5;
}
.container{
  overflow-x: hidden;
  width: 30vw;
}
.item-1, .item-2, .item-3{
  position: absolute;
  display: block;
  width: 60%;
  animation-duration: 20s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.item-1{
  animation-name: anim-1;
}
.item-2{
  animation-name: anim-2;
}
.item-3{
  animation-name: anim-3;
}

@keyframes anim-1{
  0%, 8.3% {left: -100%; opacity: 0;}
  8.3%, 25% {left: 25%; opacity: 1;}
  33.33%, 100% {left: 110%; opacity: 0;}
}
@keyframes anim-2{
  0%, 33.33% {left: -100%; opacity: 0;}
  41.63%, 58.29% {left: 25%; opacity: 1;}
  66.66%, 100% {left: 110%; opacity: 0;}
}
@keyframes anim-3{
  0%, 66.66% {left: -100%; opacity: 0;}
  74.96%, 91.62% {left: 25%; opacity: 1;}
  100% {left: 110%; opacity: 0;}
}

.sixth{
  background: rgb(44, 135, 240);
  height: auto;
  width: 100vw;
  color: white;
  padding: 7rem 0 6rem 0;
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

.thirdsect-illus1{
  width: 26rem;
  height: 21rem;
}
.thirdsect-illus2{
  width: 14rem;
  height: 22rem;
  border-radius: 0 50px 0 0;
}
.thirdsect-illus3{
  width: 24rem;
  height: 24rem;
}
.text-div>span>img{
  width: 1.5rem;
  height: 1.5rem;
}
.third-sect{
  padding: 5rem 0 0 0;
}
.third-sect>div{
  margin-bottom: 8rem;
}
.text-div>h2{
  font-size: 2.2rem;
  font-weight: 900;
  width: 20vw;
  margin-bottom: 1rem;
}
.text-div>.h2{
  width: 30vw;
  font-weight: bolder;
}
.text-div>.h3{
  padding: .6rem;
  background: white;
  text-align: right;
  position: relative;
  left: 4rem;
  width: 30vw;
  margin-bottom: 3rem;
  font-weight: bolder;
}
.text-div>p{
  font-weight: 600;
  font-size: .95rem;
  opacity: .7;
}
.p-right{
  text-align: right;
  width: 25vw;
}
.client-details{
  margin-top: 1.5rem;
}
.c-name{
  font-size: 1.1rem;
  font-weight: 700;
}
#signup-orange{
  padding: .6rem 1.2rem;
  background: rgb(255, 0, 34);
  color: white;
  font-size: .9rem;
  font-weight: 600;
  border-radius: 5px;
  width: fit-content;
  border: 0;
  margin-top: 1rem;
}
#signup-orange:hover{
  cursor: pointer;
  background: rgba(255, 0, 34, .5);
}
.signup-steps{
  margin-right: 6rem;
}
.signup-steps{
  margin-bottom: 1rem;
}
.signup-steps>h4{
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: .2rem;
}
.signup-steps>p{
  opacity: .5;
  font-weight: 500;
  font-size: .5;
}
  #laptop-ui{
    width: 31rem;
    height: 21rem;
  }
  .secondSect{
    background: rgba(175, 178, 182, 0.15);
    padding: 6rem;
  }
  .secondSect>h1{
    font-size: 3rem;
    font-weight: bolder;
    font-family: 'Josefin Sans';
    margin-bottom: 3rem;
  }
  .brand-align{
    margin-top: 5rem;
    margin-bottom: .5rem;
  }
  .brand-align>img{
    width: 5rem;
    height: 2rem;
  }
  .location-search{
    border: 0;
    padding-left: .7rem;
    width: auto;
    background: white;
  }
  .searchDiv{
    border-radius: 50px 0 0 50px;
    background: white;
    border: 2px solid #101820;
    opacity: .7;
  }
  .searchBtn{
    border-radius: 0 50px 50px 0;
    border: 2px solid #101820;
    background: #101820;
  }
  .hero{
    padding: 12rem 1rem 1rem 1rem;
  }
  .gradIcon{
    padding-bottom: 1rem;
    width: 3rem;
    height: 3rem;
  }
  .hero-header{
    font-size: 3.5rem;
    font-weight: 900;
    font-family: 'Josefin Sans';
    max-width: 60vw;
  }
  .heroCaption{
    font-size: 1.1rem;
    font-weight: 700;
    padding: .5rem;
    opacity: .7;
    max-width: 55vw;
    margin: 1.5rem 0 3rem 0;
  }
</style>
