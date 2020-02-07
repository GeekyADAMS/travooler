<template>
  <div class="search-page-main flex-col a-c">
    <!-- <nav-bar>
      <p slot="extra" class="poppins extraNavItem" style="margin-left: 1.5rem;">Use Travooler invitation code</p>
    </nav-bar> -->

    <div class="flex-col a-c" style="margin-bottom: 1.5rem;">
      <div class="progress-bar flex-row a-c w100">
        <div class="preference-stage stage1 flex-col a-c">
          <span class="progress-circle done"></span>
        </div>
        <div class="progress-line normalBlue"></div>
        <div class="preference-stage stage2 flex-col a-c">
          <span class="progress-circle done"></span>
        </div>
        <div class="progress-line"></div>
        <div class="preference-stage stage3 flex-col a-c">
          <span class="progress-circle"></span>
        </div>
        <div class="progress-line"></div>
        <div class="preference-stage stage4 flex-col a-c">
          <span class="progress-circle"></span>
        </div>
      </div>

      <div class="flex-row a-c a-c-n space-btw" style="width: 90vw;">
        <p class="poppins stageTags t-center darkTxt">
          Start
        </p>
        <p class="poppins stageTags t-center darkTxt">
          Search
        </p>
        <p class="poppins stageTags t-center darkTxt">Select</p>
        <p class="poppins stageTags t-center darkTxt">Submit</p>
      </div>
    </div>

    <div class="flex-row a-c">
      <span class="flex-row a-c poppins" style="background: white;">
        <input class="poppins" placeholder="Search for a school" type="text" style="padding: 10px 32px; border: 0; background: white; border-radius: 3px; width: 70vw; font-size: 1.2rem; border-radius: 5px 0 0 5px; box-shadow: 0 10px 16px rgba(0,0,0,.15);" v-model="searchTerm"
        />
        <img class="btn-icon point" src="@/assets/STASHIP-UNIVERS-IMG/search_icon.png" style="padding: 0 .4rem; width: 2rem; height: 1.65rem;" />
      </span>
      <span
        class="flex-row a-c poppins btn-pressed point"
        style="margin-left: 1rem; background: rgb(3, 167, 153); color: white;padding: .4rem 1rem; border-radius: 5px; font-size: 1.4rem;"
        @click="filterStatus = !filterStatus"
      >
        <img class="btn-icon" src="@/assets/STASHIP-UNIVERS-IMG/filter2.png" /> Filter
      </span>
    </div>

    <p style="color: red; font-size: 5rem; background-color: white;">{{chosenFilterOptions.country}}</p>

    <div :class="{'filterOptionsDiv flex-col a-c-n w90 space-btw': true, noDisplay: filterStatus}">
      <div class="flex-row a-c w90 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p class="filterOps poppins point hoverBlue" v-for="country in availableCountries" :key="country" :ref="country" @click="filterCountry(country)">{{country}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>

      <div class="flex-row a-c w90 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p class="filterOps poppins point hoverOrange" v-for="degrees in availableDegrees" :key="degrees">{{degrees}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>

      <div class="flex-row a-c w90 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p class="filterOps poppins point hoverGreen" v-for="courses in availableCourses" :key="courses">{{courses}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>
    </div>

    <div class="full-divider w100"></div>

    <section class="w100 main-container flex-row">
      <div :class="{'search-body flex-col': true, searchBodyFull: fullSearch, searchBodyHalf: halfSearch, disableSearchBody: disableSearch}">
        <form action>
          <div class="flex-row a-c-n space-btw wrap">
            <h3 class="poppins darkTxt">My School Search <span style="font-size: .8rem;">(155 Results Found)</span></h3>
          </div>
          <div class="full-divider-2"></div>
          <div
            :class="{ h0: filterOptionDisplay, 'flex-row': true, 'a-c': true, 'space-btw': true, filter: true }"
            style="margin-top: .5rem;"
          >
            <div class="flex-row a-c" style="color: rgba(0,0,0, .4);">
              <span class="flex-row a-c poppins">
                <span
                  class="flex-row a-c"
                  style="font-size: .75rem; margin-right: 1.5rem; font-weight: 600;"
                >
                  Location
                  <select
                    name="text"
                    placeholder="All schools"
                    style="margin-left: .5rem; border: 0; padding: .2rem; opacity: .5;"
                    class="poppins"
                  >
                    <option value="loc0">All schools</option>
                    <option value="loc1">Germany</option>
                    <option value="loc2">Canada</option>
                  </select>
                </span>
              </span>

              <span class="flex-row a-c poppins">
                <span
                  class="flex-row a-c"
                  style="font-size: .75rem; margin-right: 1.5rem; font-weight: 600;"
                >
                  Distance
                  <select
                    name="text"
                    placeholder="All schools"
                    style="margin-left: .5rem; border: 0; padding: .2rem; opacity: .5;"
                    class="poppins"
                  >
                    <option value="dis0">Show All</option>
                    <option value="dis1">30 Miles</option>
                    <option value="dis2">42 Miles</option>
                  </select>
                </span>
              </span>

              <span class="flex-row a-c poppins">
                <span
                  class="flex-row a-c"
                  style="font-size: .75rem; margin-right: 1.5rem; font-weight: 600;"
                >
                  Degree Type
                  <select
                    name="text"
                    placeholder="All schools"
                    style="margin-left: .5rem; border: 0; padding: .2rem; opacity: .5;"
                    class="poppins"
                  >
                    <option value="deg0">B.Eng</option>
                    <option value="deg1">BSc</option>
                    <option value="deg2">MSc</option>
                  </select>
                </span>
              </span>
            </div>
            <button
              type="submit"
              class="flex-row a-c poppins btn-pressed point"
              style="margin-right: 1rem; background: green; color: white;padding: .25rem 1rem; border-radius: 5px; font-size: .7rem; border: 0;"
            >Apply Filter</button>
          </div>
        </form>

        <div class="search-results w100p">
          <div class="container flex-col a-c w100p">
            <div
              class="eachSchoolSection w100p"
            >
              <div class="resultScreen">
                <div class="flex-row a-c-n space-btw" style="opacity: .7;">
                  <div class="container-left" style="font-size: .7rem;">
                    <span
                      class="poppins darkTxt"
                      style="margin-right: 1em;"
                    >Showing {{noOfDisplayedResult}} recommendations</span>
                    <!-- <select name id style="border: 0; background: 0;" class="poppins">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select> -->
                  </div>
                  <div class="container-right flex-row a-c" style>
                    <i class="fa fa-bell" style="color: blue; margin-right: .5rem;"></i>
                    <span
                      class="poppins darkTxt point"
                      style="margin-right: 1.5rem; font-size: .7rem;"
                    >Create alert for this search?</span>
                    <!-- <label class="poppins" style="font-size: .7rem;">Sort by:</label>
                    <select name id style="border: 0; background: 0; color: blue;" class="poppins">
                      <option value="sort1" class="poppins" style="font-size: .7rem;">Reference</option>
                      <option value="sort2" class="poppins" style="font-size: .7rem;">Reference</option>
                      <option value="sort3" class="poppins" style="font-size: .7rem;">Reference</option>
                    </select> -->
                  </div>
                </div>

                <div class="result-scroll-contain flex-row wrap a-c-n">
                  <div
                    class="each-result-card flex-col a-c wrap"
                    v-for="sectionCards in filteredSearch.slice(0, this.noOfDisplayedResult)"
                    :key="sectionCards.schoolName"
                  >
                    <div class="top-sect-options flex-row a-c-n space-btw w100p">
                      <img
                        src="@/assets/STASHIP-UNIVERS-IMG/trophy.png"
                        alt
                        :class="{'btn-icon': true, opaque: sectionCards.trophy}"
                      />
                      <i
                        @click="favorited = !favorited"
                        :class="{ favorited: favorited, 'fa fa-heart-o btn-icon point': true}"
                      ></i>
                    </div>
                    <div class="bottom-sect-option w100p">
                      <div class="first-b0ttom flex-row a-c-n space-btw w100p">
                        <div class="school-details poppins">
                          <p class="tag">NEW</p>
                          <p
                            class="school-name"
                          >{{sectionCards.schoolName}}</p>
                          <p
                            class="school-location"
                          >{{sectionCards.schoolLocation}}</p>
                        </div>
                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Credit score</p>
                          <p
                            class="credit-score-score poppins t-center"
                          >{{sectionCards.creditScore}}</p>
                        </div>
                      </div>

                      <div class="second-bottom flex-row a-c-n space-btw w100p">
                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Total cost</p>
                          <p
                            class="t-cost poppins t-center flex-row a-c"
                          ><img src="@/assets/STASHIP-UNIVERS-IMG/cash.png" class="bit-icon">{{sectionCards.totalCost}}</p>
                        </div>

                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">status</p>
                          <p class="match-yes poppins t-center">Match</p>
                        </div>

                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Degree</p>
                          <p
                            class="t-deg poppins t-center"
                          >{{sectionCards.degreeOffered}}</p>
                        </div>
                      </div>

                      <div class="n-full-divider"></div>

                      <div class="third-bottom flex-row a-c-n space-btw w100p">
                        <div class="credit-score flex-col">
                          <p class="poppins cs-text">Pay with FlightNetwork</p>
                          <p
                            class="t-cost poppins darkTxt"
                            style="color: black;"
                          >{{sectionCards.bookAmount}}</p>
                        </div>
                        <button
                          class="poppins continue"
                          type="submit"
                          style="padding: .15rem .25rem; border: .5px solid rgba(0,0,0,.2); box-shadow: 0 0 2px rgba(0,0,0,.2); cursor: pointer;"
                        >Continue</button>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <button class="loadMoreBtn poppins white point" @click="noOfDisplayedResult+=3">
      Load More
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      noOfDisplayedResult: 3,
      test: '',
      level1: false,
      level2: true,
      level3: true,
      level4: true,
      level5: true,
      level6: true,
      level7: true,
      searchTerm: '',
      disableSearch: false,
      filterStatus: true,
      fullSearch: true,
      halfSearch: false,
      schools: '',
      noUserCompDisplay: true,
      filterOptionDisplay: true,
      favorited: false,
      chosenFilterOptions: {
        country: '', degree: '', course: ''
      },
      availableCountries: [ 'USA', 'CANADA', 'UK', 'NEW ZEALAND', 'UAE', 'CHINA', 'INDIA', 'RUSSIA', 'SWITZERLAND', 'DUBAI', 'JAPAN', 'SAUDI ARABIA', 'DENMARK', 'SCOTLAND' ],
      availableDegrees: [ 'Ordinary Diploma', 'Barchelor\'s', 'Post-bac Diploma', 'Graduate Diploma', 'Master\'s Degree', 'Doctorate Degree' ],
      availableCourses: [ 'Arts', 'Physical Sciences', 'Engineering', 'Business', 'Health Sciences', 'Social Sciences', 'Law', 'Medical Sciences', 'Agriculture', 'Finance' ],
      questions: { qEl3: false, qEl4: false, qEl5: false, qEl6: false, qEl7: false, qEl8: false, qEl9: false, qEl10: false, qEl11: false, qEl12: false, qEl13: false, qEl14: false, qEl15: false, qEl16: false, qEl17: false, qEl18: false },
      detailsValue: { name: '', mail: '', destination: '', degree: '', course: '', qualification: '', budget: '', startDate: '', visaHelp: '' },
      eachCardDetails: [
        {
          schoolName: 'Bentley University',
          schoolLocation: 'Watham, MA',
          creditScore: '95',
          totalCost: '$2,478,665',
          degreeOffered: 'Bachelor\'s',
          bookAmount: '$1,255',
          match: 'matchYes',
          trophy: true
        },
        {
          schoolName: 'Bryant University',
          schoolLocation: 'Smithfield, RS',
          creditScore: '90',
          totalCost: '$1,986,688',
          degreeOffered: 'Bachelor\'s',
          bookAmount: '$1,240',
          match: 'matchYes',
          trophy: false
        },
        {
          schoolName: 'Illinus Institute',
          schoolLocation: 'Chicago, N',
          creditScore: '84',
          totalCost: '$1,933,502',
          degreeOffered: 'Masters',
          bookAmount: '$1,200',
          match: 'matchYes',
          trophy: true
        },
        {
          schoolName: 'Centley University',
          schoolLocation: 'Watham, MA',
          creditScore: '95',
          totalCost: '$2,478,665',
          degreeOffered: 'Bachelor\'s',
          bookAmount: '$1,255',
          match: 'matchYes',
          trophy: true
        },
        {
          schoolName: 'Harvard University',
          schoolLocation: 'Watham, MA',
          creditScore: '95',
          totalCost: '$2,478,665',
          degreeOffered: 'Bachelor\'s',
          bookAmount: '$1,255',
          match: 'matchYes',
          trophy: true
        },
        {
          schoolName: 'Oxford University',
          schoolLocation: 'Smithfield, RS',
          creditScore: '90',
          totalCost: '$1,986,688',
          degreeOffered: 'Bachelor\'s',
          bookAmount: '$1,240',
          match: 'matchYes',
          trophy: false
        }
      ]
    }
  },
  computed: {
    filteredSearch: function () {
      return this.eachCardDetails.filter((sectionCards) => {
        let schoolname = sectionCards.schoolName.toLowerCase()
        return schoolname.match(this.searchTerm.toLowerCase())
      })
    }
  },
  methods: {
    filterCountry (ref) {
      this.chosenFilterOptions.country = this.$refs.ref.innerHTML
      console.log(this.chosenFilterOptions.country)
    }
  }
}
</script>

<style scoped>
.marg-butt-8{
  margin-bottom: .8rem;
}
.leftArrow{
  position: relative;
  left: 1.5rem;
}
.rightArrow{
  position: relative;
  right: 1.5rem;
}
.arrowFloat{
  padding: .8rem;
  box-shadow: 0 0 56px rgba(255,255,255,1);
  background: white;
}
.options{
  width: 90vw;
  height: auto;
}
.filterOps{
  padding: .8rem 1.4rem;
  background: rgb(32, 32, 32);
  color: white;
  width: max-content;
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 .5rem;
  text-align: center;
  border-radius: 5px;
}
.hoverBlue:hover{
  background: blue;
}
.hoverOrange:hover{
  background: orange;
}
.hoverOrange:target{
  background: orange;
}
.hoverGreen:hover{
  background: rgb(40, 224, 200);
}
.filterOptionsDiv{
  margin: 1.5rem 0;
}
.loadMoreBtn{
  margin: .5rem 0;
  background: black;
  padding: .5rem .8rem;
  font-size: .9rem;
  font-weight: 500;
  width: fit-content;
  border: 0;
  border-radius: 5px;
}
.loadMoreBtn:hover{
  opacity: .7;
}
.result-scroll-contain{
  width: 100%;
  height: auto;
  padding: .5rem 0 0 1.3rem;
  margin-top: 1rem;
}
.opaque {
  opacity: 0;
}
.favorited {
  color: red;
}
.continue {
  color: rgb(27, 192, 233);
  background: white;
}
.continue:hover {
  background: rgb(27, 192, 233);
  color: white;
}
.third-bottom {
  box-sizing: border-box;
  padding: 0 0.4rem 1rem 0.4rem;
  margin-bottom: 0.5rem;
}
.n-full-divider {
  background: rgba(0, 0, 0, 0.2);
  margin: 0.4rem 0.5rem;
  height: 1.5px;
  box-sizing: border-box;
  width: 93%;
}
.second-bottom {
  margin-top: 0.5rem;
  padding: 0 0.6rem;
  box-sizing: border-box;
}
.t-deg,
.t-cost {
  color: rgba(0, 0, 0, 0.8);
  font-size: 0.8rem;
  font-weight: 600;
}

.match-yes {
  background: rgb(27, 192, 233);
  color: white;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  font-size: 0.8rem;
}

.credit-score-score {
  background: green;
  color: white;
  padding: 0.25rem 0.35rem;
  border-radius: 3px;
}
.credit-score {
  margin-right: 0.3rem;
}
.school-details {
  margin-left: 0.6rem;
}
.school-details > .tag,
.cs-text {
  color: rgba(0, 0, 0, 0.4);
  font-size: 0.55rem;
}
.school-details > .school-name {
  color: rgba(0, 0, 0, 0.9);
  font-weight: 700;
  margin: 0.2rem 0;
}
.school-details > .school-location,
.cs-text {
  color: rgba(0, 0, 0, 0.6);
  font-weight: 700;
  font-size: 0.65rem;
}
.bottom-sect-option {
  height: 9.5rem;
  padding: 1rem 0.3rem 0.2rem 0.3rem;
}
.top-sect-options {
  height: 2rem;
  background: rgb(30, 235, 235, 0.18);
  padding: 0 0.5rem;
  min-width: 105%;
  box-sizing: border-box;
}

.each-result-card {
  width: 20rem;
  min-width: 20rem;
  background: white;
  border-radius: 10px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;
  padding-bottom: 0.5rem;
  padding-right: .8rem;
  margin-right: 1.5rem;
  cursor: pointer;
  margin-top: 2rem;
}
.each-result-card:hover {
  border: 2px solid rgba(9, 87, 204, 0.6);
}
.resultScreen {
  background: rgb(235, 235, 235);
  margin-top: 0.7rem;
  padding: 0.4rem .4rem 1rem .4rem;
  width: 94%;
  height: auto;
  margin-bottom: 1.5rem;
}
.search-body::-webkit-scrollbar {
  display: none;
}
.search-body::-webkit-scrollbar-track {
  display: block;
}
.schoolSectTitle {
  font-size: 0.85rem;
  opacity: 0.5;
}
.search-results {
  background: rgba(2555, 255, 255, 0.65);
  margin-top: 1rem;
  border-top: 1px solid rgb(83, 83, 83);
  padding: 1rem 1rem 1.5rem 2rem;
  width: 90%;
  /*pointer-events: none;*/
}
.btn-icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
}
.full-divider-2 {
  height: 1.5px;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  margin-top: 5px;
}
.btn-pressed:hover {
  opacity: 0.7;
}
.w100p {
  width: 100%;
}
.filter {
  transition: height 5s linear 0.5s;
}
.search-page-main {
  background: rgb(243, 243, 243);
  width: 100vw;
  padding-top: 2vh;
}
.progress-bar {
  font-size: 0.7rem;
  font-weight: 600;
}
.progress-circle {
  background: rgba(0, 0, 0, 0.2);
  height: 1.1rem;
  width: 1.1rem;
  border-radius: 25px;
}
.progress-line {
  height: 0.3rem;
  width: 23.5rem;
  background: rgba(0, 0, 0, 0.2);
}
.normalBlue{
  background: blue;
}
.stageTags {
  margin: 0.5rem 1.1rem;
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.65;
}
.done {
  background: blue;
}

.full-divider {
  height: 3px;
  background: rgba(0, 0, 0, 0.05);
  margin-top: 0.7rem;
  margin-bottom: 0.4rem;
}

.search-body {
  padding-top: 1rem;
  overflow-x: hidden;
}
.search-page-main {
  padding-top: 10rem;
}
.searchBodyFull{
  width: 100vw;
  margin: 0 5rem;
}
.searchBodyHalf{
  margin-left: 37vw;
  width: 60vw;
}

.disableSearchBody{
  pointer-events: none;
  opacity: .5;
}
</style>
