<template>
    <div class="h90 w98p border-box flex-col a-c-n" style="background: rgba(255, 255, 255, .5); padding: .7rem 1.5rem;">

        <div class="flex-row w100p w100p-max a-c space-btw">
            <div class="flex-col">
                <h2 class="poppins blue">Schools Details</h2>
                <p class="poppins fade-4">Perform actions on available schools by Travooler</p>
            </div>

            <portal to="navbar-status">
              <div class="poppins darkTxt text-2"><p>Status</p></div>
            </portal>

            <div class="flex-row a-c">
                <button class="tooltip poppins darkTxt addNew point text-5 border-box ml-1" @click="goToAddNew()">+<span class="tooltiptext text-2">Add New</span></button>
                <button class="ml-1 round-edge-btn pub-btn fit-all point" @click="showPublished"><div class="poppins dakTxt text-1 scale-on-hover" disabled>Published schools</div></button>
                <button class="draft-btn ml-1 round-edge-btn fit-all point scale-on-hover" @click="showDraft"><div class="poppins dakTxt text-1">Drafts</div></button>
                <button class="draft-btn ml-1 round-edge-btn fit-all point scale-on-hover" @click="handleCheck"><div class="poppins dakTxt text-1">{{bulkCheck}}</div></button>
                <button class="tooltip2 poppins darkTxt delete no-border point text-5 border-box ml-1" @click="deleteBatch"><img src="@/assets/img/icons/bin.png" alt="" width="37px" height="37px"><span class="tooltiptext2 text-2">Delete ({{selectedDrafts.length}})</span></button>
                <button class="tooltip2 poppins darkTxt point delete text-5 border-box ml-1" @click="publishBatchSchools(selectedDrafts)"><img src="@/assets/img/icons/publish-icon.png" alt="" width="37px" height="37px"><span class="tooltiptext2 text-2">Publish ({{selectedDrafts.length}})</span></button>
            </div>
        </div>

        <div class="flex-row a-c space-btw w100p h75p mt-2">
            <div :class="{'flex-col w100p-max a-c-n bg-white h100p hide-overflow-y round-edge-sm allSchools': true, 'w92p': publishedClicked, 'w5p': draftClicked}">

            <div :class="{'table-head w100p h10p flex-row a-c-n poppins border-box': true, hide: draftClicked}" style="box-shadow: 0 12px 24px rgba(0,0,0,.05);">
                <span class="w20p ml-p5" style="">School ID</span>
                <span class="w20p ml-1" style="">Name</span>
                <span class="w20p ml-p5" style="">Location</span>
                <span class="w20p ml-1" style="">Degree Offered</span>
                <span class="w15p ml-p5" style="">Cost</span>
            </div>

            <template class="w100p h90p scroll-y flex-col a-c-n border-box" style="border: 1px dashed rgba(0,0,0,.3);" v-for="(school, index) in schools.allSchoolsData">

        <!-- starts modal -->
        <transition name="fade" :key="school.__v">
        <div class="fixed school-details-modal flex-col a-c-n bg-white w50 border-box" :key="school._id" v-if="clickedIndex == school._id">

            <div class="w100p flex-row space-btw">
                <span></span>
                <span class="poppins red point" @click="clickedIndex = null">Cancel</span>
            </div>
            <div class="flex-row w100p ">
                <img src="@/assets/img/icons/smallschool_dribble.jpg" alt="" width="100px" height="100px">

                <div class="flex-col ml-2 mt-2">
                    <h3 class="poppins fade-7"> {{schoolDetails.name}},</h3>
                    <p class="poppins fade-4 mt-p5"> {{schoolDetails.state}}, {{schoolDetails.country}}.</p>

                    <div class="flex-col mt-2">
                        <div class="flex-row a-c fade-7">
                            <h4 class="poppins">School ID:</h4>
                            <p class="poppins ml-1 fade-7">{{schoolDetails._id}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Course Offered:</h4>
                            <p class="poppins ml-1 fade-7">{{schoolDetails.courseOffered}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Degree Offered:</h4>
                            <p class="poppins ml-1 fade-7">{{schoolDetails.degreeOffered}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Total Cost:</h4>
                            <p class="poppins ml-1 fade-7">$ {{schoolDetails.schoolCost}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Application Fee:</h4>
                            <p class="poppins ml-1 fade-7">$ {{schoolDetails.applicationFee}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Status</h4>
                            <p class="poppins ml-1 fade-7">{{schoolDetails.status}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Admission Score</h4>
                            <p class="poppins ml-1 fade-7">{{schoolDetails.admissionScore}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-row  mt-3 w100p space-btw">
                <div class="row arrows">
                    <img src="@/assets/img/icons/arrow-left.svg" alt="" @click="prevClicked(index)">
                    <img src="@/assets/img/icons/arrow-right.svg" alt="" class="ml-1" @click="nextClicked(index)">
                </div>
                <div class="flex-row a-c">
                <button class="round-edge-btn btn-1 modal-act t-center poppins point ml-1">
                    Edit details
                </button>
                <button class="round-edge-btn btn-2 t-center poppins  modal-act ml-1 point" @click="deletePublishedSchool">
                    {{deleteStatus}}
                </button>
                </div>
            </div>
        </div>
        </transition>
        <!--Ends modal-->

                <div class="tr tr-fade w100p h10p-min h10p flex-row a-c-n scroll-y point poppins" :key="index" @click="setClickedIndex(school._id)">

                    <span :class="{'w20p ml-p5 light': true, hide: draftClicked}">{{school._id}}</span>
                    <span :class="{'w20p ml-1 light': true, hide: draftClicked}">{{school.name}}</span>
                    <span :class="{'w20p ml-p5 light': true, hide: draftClicked}">{{school.state}}, {{school.country}}</span>
                    <span :class="{'w20p ml-1 light': true, hide: draftClicked}">{{school.degreeOffered}}</span>
                    <span :class="{'w15p ml-p5 light': true, hide: draftClicked}">{{school.schoolCost}}</span>
                </div>
            </template>
            </div>

            <!-- draft section starts -->
            <div :class="{'flex-col w100p-max a-c-n bg-white h100p hide-overflow-y round-edge-sm allSchools': true, 'w92p': !publishedClicked, 'w5p': !draftClicked}">

                <div :class="{'table-head w100p h10p flex-row a-c-n poppins border-box': true, hide: publishedClicked}" style="box-shadow: 0 12px 24px rgba(0,0,0,.05);">
                    <span class="w20p ml-p5" style="">School ID</span>
                    <span class="w20p ml-2" style="">Name</span>
                    <span class="w15p ml-p5" style="">Location</span>
                    <span class="w15p ml-p5" style="">Degree Offered</span>
                    <span class="w10p ml-1" style="">Cost</span>
                    <span class="w5p ml-p5" style=""></span>
                    <span class=" ml-p5" style=""></span>
                </div>

                <template class="w100p h90p scroll-y flex-col a-c-n border-box" style="border: 1px dashed rgba(0,0,0,.3);" v-for="(school, index) in schools.draftedSchools">

        <!-- starts modal -->
        <transition name="fade" :key="school.__v">
        <div class="fixed school-details-modal flex-col a-c-n bg-white w50 border-box" :key="school._id" v-if="clickedDraftIndex == school._id">

            <div class="w100p flex-row space-btw">
                <span></span>
                <span class="poppins red point" @click="clickedDraftIndex = null">Cancel</span>
            </div>
            <div class="flex-row w100p ">
                <img src="@/assets/img/icons/smallschool_dribble.jpg" alt="" width="100px" height="100px">

                <div class="flex-col ml-2 mt-2">
                    <h3 class="poppins fade-7"> {{expandedDraftDetails.name}},</h3>
                    <p class="poppins fade-4 mt-p5"> {{expandedDraftDetails.state}}, {{expandedDraftDetails.country}}.</p>

                    <div class="flex-col mt-2">
                        <div class="flex-row a-c fade-7">
                            <h4 class="poppins">School ID:</h4>
                            <p class="poppins ml-1 fade-7">{{expandedDraftDetails._id}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Course Offered:</h4>
                            <p class="poppins ml-1 fade-7">{{expandedDraftDetails.courseOffered}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Degree Offered:</h4>
                            <p class="poppins ml-1 fade-7">{{expandedDraftDetails.degreeOffered}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Total Cost:</h4>
                            <p class="poppins ml-1 fade-7">$ {{expandedDraftDetails.schoolCost}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Application Fee:</h4>
                            <p class="poppins ml-1 fade-7">$ {{expandedDraftDetails.applicationFee}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Status</h4>
                            <p class="poppins ml-1 fade-7">{{expandedDraftDetails.status}}</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Admission Score</h4>
                            <p class="poppins ml-1 fade-7">{{expandedDraftDetails.admissionScore}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-row  mt-3 w100p space-btw">
                <div class="row arrows">
                    <img src="@/assets/img/icons/arrow-left.svg" alt="" @click="prevClicked(index)">
                    <img src="@/assets/img/icons/arrow-right.svg" alt="" class="ml-1" @click="nextClicked(index)">
                </div>
                <div class="flex-row a-c">
                <button class="round-edge-btn btn-1 modal-act t-center poppins point ml-1">
                    Edit details
                </button>
                <button class="round-edge-btn btn-2 t-center poppins  modal-act ml-1 point" @click="deletePublishedSchool">
                    {{deleteStatus}}
                </button>
                </div>
            </div>
        </div>
        </transition>
        <!--Ends modal-->

                    <div class="tr tr2-fade w100p h10p-min h10p flex-row a-c-n scroll-y poppins" :key="index">
                        <span :class="{'w20p ml-p5 light': true, hide: publishedClicked}">{{school._id}}</span>
                        <span :class="{'w20p ml-2 light': true, hide: publishedClicked}">{{school.name}}</span>
                        <span :class="{'w15p ml-p5 light': true, hide: publishedClicked}">{{school.state}}, {{school.country}}</span>
                        <span :class="{'w15p ml-p5 light': true, hide: publishedClicked}">{{school.degreeOffered}}</span>
                        <span :class="{'w10p ml-1 light': true, hide: publishedClicked}">{{school.schoolCost}}</span>
                        <span :class="{'w5p ml-p5 light': true, hide: publishedClicked}"><img src="@/assets/img/icons/eye.png" alt="" width="20px" height="20px" class="point"  @click="setDraftIndex(school._id)"></span>
                        <span :class="{' ml-p5 light': true, hide: publishedClicked}">
                        <label class="checkbox path point">
                            <input type="checkbox" class="point" :value="school" v-model="selectedDrafts" :name="school" ref="marker">
                            <svg viewBox="0 0 21 21">
                                <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                            </svg>
                        </label>
                        </span>
                    </div>

                </template>
            </div>

        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      draftClicked: false,
      publishedClicked: true,
      clickedIndex: null,
      clickedDraftIndex: null,
      popPublishedModal: false,
      popDraftModal: false,
      deleteStatus: 'Delete',
      selectedDrafts: [],
      postCount: 0,
      bulkCheck: 'Mark All'
    }
  },
  computed: {
    ...mapState(['schools']),
    schoolDetails () {
      if (this.clickedIndex === null) {
        return {}
      } else {
        return this.schools.allSchoolsData.find(v => v._id === this.clickedIndex)
      }
    },
    expandedDraftDetails () {
      if (this.clickedDraftIndex === null) {
        return {}
      } else {
        return this.schools.draftedSchools.find(v => v._id === this.clickedDraftIndex)
      }
    }
  },
  methods: {
    handleCheck () {
      if (this.bulkCheck === 'Mark All') {
        let boxes = this.$refs.marker
        let len = this.schools.draftedSchools.length

        for (let i = 0; i < len; i++){
          this.selectedDrafts.push(this.schools.draftedSchools[i])
        }
        boxes.map(box => {
          box.checked = true
        })
        console.log(this.selectedDrafts)
        this.bulkCheck = 'Unmark All'
      } else {
        this.selectedDrafts.length = 0

        let boxes = this.$refs.marker
        boxes.map(box => {
          box.checked = false
        })
        console.log(this.selectedDrafts)
        this.bulkCheck = 'Mark All'
      }
    },
    goToAddNew () {
      this.$router.push({path: '/post-schools'})
    },
    showDraft () {
      this.draftClicked = true
      this.publishedClicked = false
      this.clickedIndex = null
    },
    nextClicked (index) {
      let arraySize = this.schools.allSchoolsData.length
      let nextIndex = index + 1
      if (nextIndex < arraySize) {
        this.clickedIndex = this.schools.allSchoolsData[nextIndex]._id
      } else {
        alert('You reached the last school on the list. \n Can\'t move further')
      }
    },
    prevClicked (index) {
      let prevIndex = index - 1
      if (prevIndex >= 0) {
        this.clickedIndex = this.schools.allSchoolsData[prevIndex]._id
      } else {
        alert('You are on the first school on the list. \n Can\'t go backwards')
      }
    },
    showPublished () {
      this.draftClicked = false
      this.publishedClicked = true
      this.clickedDraftIndex = null
    },
    donothing (e) {
      e.preventDefault()
    },
    setClickedIndex (schoolID) {
      this.clickedIndex = null
      this.clickedIndex = schoolID
      this.popPublishedModal = true
    },
    setDraftIndex (schoolID) {
      this.clickedDraftIndex = null
      this.clickedDraftIndex = schoolID
      this.popDraftModal = true
    },
    async deletePublishedSchool () {
      if (this.clickedIndex !== null) {
        this.deleteStatus = 'Deleting'
        let url = 'https://travooler-api.herokuapp.com/schools/published/' + this.clickedIndex
        await axios.delete(url)
        console.log('deleted')
        this.fetchSchools()
        this.deleteStatus = 'Delete'
      }
    },
    async deleteAllSchools () {
      await axios.delete('https://travooler-api.herokuapp.com/schools/published/')
    },
    expandPublishedDetails () {
      this.popPublishedModal = true
    },
    collapsePublishedDetails () {
      this.popPublishedModal = false
    },
    async publishBatchSchools (selectedDrafts) {
      let i = 0
      let length = selectedDrafts.length
      for (; i <= length; i++) {
        let selectedSchool = selectedDrafts[i]

        await axios.post('https://travooler-api.herokuapp.com/schools/published', {
          name: selectedSchool.name,
          state: selectedSchool.state,
          score: selectedSchool.admissionScore,
          status: selectedSchool.status,
          degree: selectedSchool.degreeOffered,
          appFee: selectedSchool.applicationFee,
          country: selectedSchool.country,
          course: selectedSchool.courseOffered,
          cost: selectedSchool.schoolCost,
          url: selectedSchool.schoolURL,
          prevlink: selectedSchool.previewLink,
          sessMonth: selectedSchool.admissionMonth,
          sessYear: selectedSchool.admissionYear,
          schoolID: selectedSchool.schoolID
        })
        await axios.delete('https://travooler-api.herokuapp.com/schools/drafts/' + selectedSchool.schoolID)
        let index = this.schools.draftedSchools.indexOf(selectedDrafts[i])
        if (index !== -1) this.schools.draftedSchools.splice(index, 1)
      }
    },
    async deleteBatch () {
      let i = 0
      let selectedDrafts = this.selectedDrafts
      let length = selectedDrafts.length
      for (; i <= length; i++) {
        let selectedSchoolId = selectedDrafts[i].schoolID

        await axios.delete('https://travooler-api.herokuapp.com/schools/drafts/' + selectedSchoolId)

        let index = this.schools.draftedSchools.indexOf(selectedDrafts[i])
        if (index !== -1) this.schools.draftedSchools.splice(index, 1)
      }
    },
    ...mapActions(['fetchSchools', 'fetchDraftedSchools', 'addSchool'])
  },
  created () {
    this.fetchSchools()
    this.fetchDraftedSchools()
  }
}
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .8s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }
    h4{
        width: 10rem;
        opacity: .75;
    }
    .modal-act{
        border: none;
        padding: .5rem 1rem;
    }
    .modal-act:hover{
        opacity: .8;
    }
    .modal-act:focus,
    .modal-act:active,
    .a:active,
    .a:focus,
    button:focus,
    button:active {
        -moz-outline-style: none;
        outline:none;
        outline: 0;
    }
    .btn-1{
        background: rgba(20, 196, 93, .4)
    }
    .btn-2{
        background: rgba(216, 187, 21, .4)
    }
    .btn-2{
        background: rgba(21, 128, 216, 0.4)
    }
    .arrows>img{
        padding: .7rem;
        border-radius: 25px;
        box-shadow: 0 0 12px rgba(0,0,0,.12);
        cursor: pointer;
    }
    .arrows>img:hover{
        background: rgb(216, 187, 21, .15);
    }
    .school-details-modal{
        top: 10rem;
        z-index: 50;
        border-radius: 15px;
        box-shadow: 0 0 32px rgba(0,0,0,.1);
        padding: 1.5rem 3rem;
    }
    .school-details-modal>div>img{
        border-radius: 50%;
        border: 1px solid rgb(23, 196, 130);
    }
    .allSchools{
        box-shadow: 0 0 24px rgba(0,0,0,.05);
        transition: width .5s ease-in;
    }
    .tr:nth-child(even) {
        background: rgba(216, 187, 21, .05);
    }
    .tr:nth-child(odd) {
        background: rgba(20, 196, 93, .1);
    }
    .tr-fade:hover{
        opacity: .4;
    }
    .tr2-fade:hover{
        opacity: .85;
    }
    .tr>span, .table-head {
        transition: opacity .5s ease-in;
        overflow-x: hidden;
    }
    .blue{
        color: rgb(74, 123, 228);
    }
    .addNew{
        background: white;
        border: 1px dashed rgb(53, 53, 53);
        border-radius: 50px;
        width: 2rem;
        height: 2rem;
    }
    .delete{
        border-radius: 50px;
        width: 2.5rem;
        height: 2.5rem;
        background: white;
    }
    .pub-btn{
        border: 1px dashed rgba(20, 196, 93);
        background: white;
    }
    .pub-btn>div{
        background: rgba(20, 196, 93, .4);
        border-radius: 25px;
        padding: .5rem 1rem;
    }
    .draft-btn{
        border: 1px dashed rgb(216, 187, 21);
        background: white;
    }
    .draft-btn>div{
        background: rgba(216, 187, 21, .4);
        border-radius: 25px;
        padding: .5rem 1rem;
    }

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
}

/* Tooltip text */
.tooltip2 .tooltiptext2 {
  visibility: hidden;
  width: 120px;
  background-color: rgb(61, 199, 141);
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip2:hover .tooltiptext2 {
  visibility: visible;
}

.tooltip-top2 .tooltiptext2 {
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px; /* Use half of the width (120/2 = 60), to center the tooltip */
}
</style>
