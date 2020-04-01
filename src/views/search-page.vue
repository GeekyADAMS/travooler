<template>
  <div class="search-page-main flex-col a-c">
    <!-- <nav-bar>
      <p slot="extra" class="poppins extraNavItem" style="margin-left: 1.5rem;">Use Travooler invitation code</p>
    </nav-bar> -->
    <section style="position: fixed; top: 5rem; background: rgb(243, 243, 243);; z-index: 40; padding-top: 5rem; padding-bottom: .7rem;">
    <div class="flex-col a-c" style="margin-bottom: 1.5rem;">
      <div class="progress-bar flex-row a-c w100 s-w95">
        <div class="preference-stage stage1 flex-col a-c">
          <span class="progress-circle done"></span>
        </div>
        <div class="progress-line done"></div>
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

      <div class="flex-row a-c a-c-n space-btw s-w100 w90">
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

    <div class="flex-row a-c w90 s-w95 m-auto">
      <span class="flex-row w100p a-c poppins" style="background: white;">
        <input class="search-box poppins" placeholder="Search for a school" type="text" style="padding: 10px 32px; border: 0; background: white; border-radius: 3px; font-size: 1.2rem; border-radius: 5px 0 0 5px; box-shadow: 0 10px 16px rgba(0,0,0,.15); color: rgba(0,0,0,.7);width: 100%" v-model="searchTerm" @focus="searchBoxFocus = true" @blur="searchBoxFocus = false"
        />
        <img class="btn-icon point" src="@/assets/STASHIP-UNIVERS-IMG/search_icon.png" style="padding: 0 .4rem; width: 2rem; height: 1.65rem;" />
      </span>
      <span
        class="flex-row a-c poppins btn-pressed point"
        style="margin-left: 1rem; background: black; color: white;padding: .4rem 1rem; border-radius: 5px; font-size: 1.4rem;"
        @click="filterStatus = !filterStatus"
      >
        <img class="btn-icon" src="@/assets/STASHIP-UNIVERS-IMG/filter2.png" /> Filter
      </span>
    </div>

    </section>
    <div id="filter"></div>
    <div :class="{'filterOptionsDiv flex-col a-c-n w90 s-w100 space-btw': true, noDisplay: filterStatus}" id="" style="margin-top: 8.5rem;">
      <div class="flex-row a-c w90 s-w100 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p :class="{ 'filterOps poppins point hoverBlue': true, 'clickBlue': country.selected }" v-for="(country, index) in availableCountries" :key="index" :ref="country" @click="countryOptionClicked(index)">{{country.tag}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>

      <div class="flex-row a-c w90 s-w100 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p :class="{ 'filterOps poppins point hoverOrange': true, 'clickOrange': degree.selected }" v-for="(degree, index) in availableDegrees" :key="index" @click="degreeOptionClicked(index)">{{degree.tag}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>

      <div class="flex-row a-c w90 s-w100 marg-butt-8">
        <div class="leftArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg" alt=""></div>
        <div class="options flex-row a-c-n scroll-x">
          <div class="flex-row a-n-c">
            <p :class="{ 'filterOps poppins point hoverGreen': true, 'clickGreen': course.selected }" v-for="(course, index) in availableCourses" :key="index" @click="courseOptionClicked(index)">{{course.tag}}</p>
          </div>
        </div>
        <div class="rightArrow roundDiv-sm arrowFloat point"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg" alt=""></div>
      </div>
    </div>

    <div class="full-divider w100"></div>

    <section :class="{'w100 w90-max hide-overflow-x main-container flex-row a-c': true, 'mt-8p5': filterStatus}">
      <div :class="{'search-body flex-col': true}">

      <div class="flex-row a-c-n space-btw wrap w100p">
        <h3 class="poppins darkTxt">My School Search <span style="font-size: .8rem;">(155 Results Found)</span></h3>
      </div>

        <div class="search-results w100p w90-min">
          <div class="container flex-col a-c w100p">
            <div
              class="eachSchoolSection w100p"
            >
              <div class="resultScreen s-w95">
                <div class="flex-row a-c-n space-btw s-w85" style="opacity: .7;">
                  <div class="container-left" style="font-size: .7rem;">
                    <span
                      class="poppins darkTxt"
                      style="margin-right: 1em;"
                    >Showing <b style="color: blue">{{noOfDisplayedResult}}</b> recommendations</span>
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
                  <transition-group name="list-complete" tag="div">

                  <div
                    class="each-result-card flex-col a-c wrap list-complete-item"
                    v-for="(sectionCards, index) in filteredSearch.slice(0, this.noOfDisplayedResult)"
                    :key="index"
                  >
                    <div class="top-sect-options flex-row a-c-n space-btw w100p">
                      <img
                        src="@/assets/STASHIP-UNIVERS-IMG/trophy.png"
                        alt
                        :class="{'btn-icon': true, opaque: sectionCards.trophy}"
                      />
                      <i
                        :class="{ favorited: false, 'fa fa-heart-o btn-icon point': true}"
                      ></i>
                    </div>
                    <div class="bottom-sect-option w100p">
                      <div class="first-b0ttom flex-row a-c-n space-btw w100p">
                        <div class="school-details poppins">
                          <p class="tag">NEW</p>
                          <p
                            class="school-name"
                          >{{sectionCards.name}}</p>
                          <p
                            class="school-location"
                          >{{sectionCards.state}}, {{sectionCards.country}}</p>
                        </div>
                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Credit score</p>
                          <p
                            class="credit-score-score poppins t-center"
                          >{{sectionCards.admissionScore}}</p>
                        </div>
                      </div>

                      <div class="second-bottom flex-row a-c-n space-btw w100p">
                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Total cost</p>
                          <p
                            class="t-cost poppins t-center flex-row a-c"
                          ><img src="@/assets/STASHIP-UNIVERS-IMG/cash.png" class="bit-icon">{{sectionCards.schoolCost}}</p>
                        </div>

                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">status</p>
                          <p class="match-yes poppins t-center">{{sectionCards.status}}</p>
                        </div>
                        <div class="credit-score flex-col a-c">
                          <p class="poppins t-center cs-text">Degree</p>
                          <p
                            class="t-deg poppins t-center"
                          >{{sectionCards.degreeOffered}}</p>
                        </div>
                      </div>

                      <div class="n-full-divider" style="margin-bottom: 20px; margin-top: 10px"></div>

                      <div class="third-bottom flex-row a-c-n space-btw w100p">
                        <div class="credit-score flex-col">
                          <p class="poppins cs-text">Pay with FlightNetwork</p>
                          <p
                            class="t-cost poppins darkTxt"
                            style="color: black;"
                          >{{sectionCards.applicationFee}}</p>
                        </div>
                        <button
                          class="poppins continue"
                          type="submit"
                          style="padding: .15rem .25rem; border: .5px solid rgba(0,0,0,.2); box-shadow: 0 0 2px rgba(0,0,0,.2); cursor: pointer;"
                        >Continue</button>
                      </div>
                    </div>
                  </div>
                  </transition-group>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="flex-row a-c w100">
      <button class="loadMoreBtn poppins white point" @click="noOfDisplayedResult+=3">
      Load More
      </button>
      <div style="background: white; padding: .5rem; border-radius: 25px; box-shadow: 0 0 8px rgba(0,0,0,.15);" class="ml-1 flex-col a-c point"><a href="#filter" style="text-decoration: none; color: black;" @click="searchTerm = ''"><span class="point">&#8635;</span></a></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      noOfDisplayedResult: 3,
      searchTerm: '',
      multiSearchTerm: {
        selectedCountry: '',
        selectedDegree: '',
        selectedCourse: ''
      },
      disableSearch: false,
      filterStatus: true,
      fullSearch: true,
      halfSearch: false,
      searchBoxFocus: false,
      schools: ''
    }
  },
  computed: {
    ...mapGetters(['availableCountries', 'availableDegrees', 'availableCourses']),
    eachCardDetails () {
      return this.$store.getters.eachCardDetails
    },
    filteredSearch () {
      let results = []
      if (this.filterStatus === true || this.searchBoxFocus === true) {
        results = this.eachCardDetails.filter(sectionCards => {
          let schoolname = sectionCards.name.toLowerCase()
          return schoolname.match(this.searchTerm.toLowerCase())
        })
      } else {
        results = this.eachCardDetails.filter(obj => {
          return obj.country.toLowerCase() === this.multiSearchTerm.selectedCountry.toLowerCase() || obj.courseOffered.toLowerCase() === this.multiSearchTerm.selectedCourse.toLowerCase() || obj.degreeOffered.toLowerCase() === this.multiSearchTerm.selectedDegree.toLowerCase()
        })
      }
      return results
    }
  },
  methods: {
    countryOptionClicked (index) {
      this.availableCountries.map(country => { country.selected = false })
      this.availableCountries[index].selected = true
      this.multiSearchTerm.selectedCountry = this.availableCountries[index].tag
    },
    degreeOptionClicked (index) {
      this.availableDegrees.map(degree => { degree.selected = false })
      this.availableDegrees[index].selected = true
      this.multiSearchTerm.selectedDegree = this.availableDegrees[index].tag
    },
    courseOptionClicked (index) {
      this.availableCourses.map(course => { course.selected = false })
      this.availableCourses[index].selected = true
      this.multiSearchTerm.selectedCourse = this.availableCourses[index].tag
    },
    ...mapActions(['fetchSchools'])
  },
  created () {
    this.fetchSchools()
  }
}
</script>

<style scoped>
@import url(~@/assets/styles/search-page.css);
</style>
