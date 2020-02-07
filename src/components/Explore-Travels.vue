<template>
    <div>
        <section class="first-caption flex-col a-c w100">
            <span class="poppins t-center">Explore Travel</span>
            <p class="w30 poppins t-center">Top employers are looking for candidates just like you. Explore their company culture and the career they offer.</p>
        </section>
        <!-- <section class="hero-slide">
            <div class="service-slider poppins flex-row a-c">
                <div class="left-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg"></div>
                <div class="slider flex-row w100">
                    <div class="serve-scroll-contain flex-row a-c w100">
                        <div class="textContent w50 h40">
                          <div class="flex-row" style="margin-left: auto;">
                            <div class="textsIntro flex-col poppins a-n-c" style="margin-left: auto; margin-right: 1.5rem; margin-top: 2rem;">
                              <h5 class="white">FEATURED COUNTRY</h5>
                              <h5 class="white"><span style="font-size: 2.2rem; font-weight: 700; margin: 1.4rem 0 .8rem 0;">Canada,</span> North America</h5>
                              <p class="poppins white" style="font-size: .8rem; width: 18.5vw; margin-bottom: .6rem">Looking for top schools, post-study work visa and permanent residence and amazing tourist attraction, then come to Canada.</p>
                              <p class="flex-row a-c space-btw">
                                <span class="white" style="margin-right: 4rem; width: 18.5vw; font-size: .8rem;">Use the button over there &#9758; to get started on the path to a great travel to beautiful Canada</span>
                                <button class="poppins point" style="border: 0; background: white; padding: .5rem .8rem;">Book Trip</button>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="imgContent w50 h40">
                        </div>
                    </div>
                </div>
                <div class="right-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg"></div>
            </div>
        </section> -->
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                </div>
                <div class="carousel-item">
                </div>
                <div class="carousel-item">
                </div>
            </div>

            <!-- <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>

            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a> -->
        </div>

        <section class="servCat flex-col a-c w100">
            <div class="serviceCategories flex-col a-c w100" v-for="cat in ProgCats" :key="cat">
                <h class="t-center poppins">{{cat.Title}}</h>
                <div class="line"></div>
                <div class="service-card-container flex-row align-center space-btw wrap">
                    <div class="eachCard w20 flex-col a-c" v-for="card in cat.cardData" :key="card">
                        <div class="header-image">
                            <img :src="'/img/'+card.headImg" alt="">
                        </div>
                        <div class="card-content flex-col a-c">
                            <img :src="'/img/'+card.compLogo" alt="" class="carrier-logo">
                            <p class="company-name poppins t-center">{{card.compName}}</p>
                            <p class="learn-more poppins t-center">Learn more &#8640;</p>
                        </div>
                        <hr>
                        <span class="service-rendered poppins t-center">{{card.compService}}</span>
                    </div>
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
      ProgCats: [
        { Title: 'Countries for Permanent Residence program',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Countries Allowing Work and Study for Students',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Programs That Offer Quick Admissions',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Countries for Permanent Residence program',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Universities That Offer Scholarships to Top Students',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Countries That Offer Work Prmit After Graduation',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        },
        { Title: 'Great Universities You\'ve Never Heard Of',
          cardData: [
            { compName: 'Nielsen', headImg: 'rand3.jpg', compLogo: 'IT-Systems-logo.png', compService: 'AERO SERVICES', aboutComp: 'link' },
            { compName: 'CNN', headImg: 'office-group-pic2.jpg', compLogo: 'CNN.png', compService: 'INFORMATION SERVICES', aboutComp: 'link' },
            { compName: 'T-Hallow', headImg: 'wellness-960x640-c-default.jpg', compLogo: 'drib.png', compService: 'CREATIVE SERVICES', aboutComp: 'link' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.service-rendered{
    color:rgba(61, 61, 61, .5);
    font-weight: 600;
    font-size: .85rem;
    padding: .5rem;
}
hr{
    height: 1.8px;
    border: 0;
    background: rgba(61, 61, 61, .2);
    width: 100%;
}
.learn-more{
    font-size: .7rem;
    color: blue;
    cursor: pointer;
}
.company-name{
    font-size: 1.05rem;
    color: #101820;
    opacity: .8;
    padding: 0 0 .5rem 0;
    font-weight: 600;
    margin-top: .5rem;
}
.card-content{
    position: relative;
    top: -2rem;
    width: 100%;
}
.carrier-logo{
    width: 4rem;
    height: 4rem;
    background: white;
    border: 3px solid white;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0,0,0,.15);
}
.header-image{
    height: 10rem;
    width: 100%;
    border-radius: 3px 3px 0 0;
}
.header-image>img{
    width: 100%;
    height: 100%;
    border-radius: 3px 3px 0 0;
}
.eachCard{
    border-radius: 5px;
    box-shadow: 0 0 32px rgba(0,0,0,.15);
}
.serviceCategories{
    margin: 4rem 0 3rem 0;
}
.serviceCategories>h{
    color: #101820;
    font-size: 1.6rem;
    opacity: .75;
}
.service-card-container{
    width: 65vw;
}
.servCat{
  border-bottom: 1px solid black;
  padding-bottom: 3rem;
}
.line{
    background: #101820;
    opacity: .7;
    border-radius: 100px;
    margin: 1rem 0 2rem 0;
    height: 1px;
    width: 5vw;
}
.textContent{
    background: rgb(0, 0, 126);
}
.imgContent{
    background-image: url('~@/assets/STASHIP-UNIVERS-IMG/office-group-pic2.jpg');
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
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
}
.service-slider{
    width: 110vw;
}

.first-caption>p{
    font-size: 1.08rem;
    opacity: .85;
}
.first-caption>span{
    font-weight: 900;
    margin-bottom: 1rem;
    color: #101820;
    font-size: 3rem;
}
.first-caption{
    padding: 15rem 0 4rem 0;
    background: url('~@/assets/travel-illus.png');
    background-repeat: no-repeat;
    background-color: rgba(176, 176, 255, .2);
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
.right-arrow{
  position: relative;
  left: -1.8rem;
}
.left-arrow{
  position: relative;
  left: 2.6rem;
}
</style>
