<template>
    <div class="h90 w98p border-box flex-col a-c-n" style="background: rgba(255, 255, 255, .5); padding: .7rem 1.5rem;">
        <!-- starts modal -->
        <div class="fixed school-details-modal flex-col a-c-n bg-white w50 border-box no-display">
            <div class="w100p flex-row space-btw">
                <span></span>
                <span class="poppins red point">Cancel</span>
            </div>
            <div class="flex-row w100p ">
                <img src="@/assets/img/icons/smallschool_dribble.jpg" alt="" width="100px" height="100px">

                <div class="flex-col ml-2 mt-2">
                    <h3 class="poppins fade-7"> Cambridge University,</h3>
                    <p class="poppins fade-4 mt-p5"> Toronto, Canada.</p>

                    <div class="flex-col mt-2">
                        <div class="flex-row a-c fade-7">
                            <h4 class="poppins">School ID:</h4>
                            <p class="poppins ml-1 fade-7">5e833f671d903d00043d7852</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Course Offered:</h4>
                            <p class="poppins ml-1 fade-7">Accountancy</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Degree Offered:</h4>
                            <p class="poppins ml-1 fade-7">Masters</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Total Cost:</h4>
                            <p class="poppins ml-1 fade-7">$ 35000</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Application Fee:</h4>
                            <p class="poppins ml-1 fade-7">$ 2000</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Status</h4>
                            <p class="poppins ml-1 fade-7">Open</p>
                        </div>
                        <div class="flex-row mt-p5 fade-7">
                            <h4 class="poppins">Admission Score</h4>
                            <p class="poppins ml-1 fade-7">90%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex-row  mt-3 w100p space-btw">
                <div class="row arrows">
                    <img src="@/assets/img/icons/arrow-left.svg" alt="">
                    <img src="@/assets/img/icons/arrow-right.svg" alt="" class="ml-1">
                </div>
                <div class="flex-row a-c">
                <button class="round-edge-btn btn-3 modal-act t-center poppins point">
                    Publish
                </button>
                <button class="round-edge-btn btn-1 modal-act t-center poppins point ml-1">
                    Edit details
                </button>
                <button class="round-edge-btn btn-2 t-center poppins  modal-act ml-1 point">
                    Delete
                </button>
                </div>
            </div>
        </div>
        <!--Ends modal-->

        <div class="flex-row w100p w100p-max a-c space-btw">
            <div class="flex-col">
                <h2 class="poppins blue">Schools Details</h2>
                <p class="poppins fade-4">Perform actions on available schools by Travooler</p>
            </div>

            <div class="flex-row a-c">
                <button class="tooltip tip-bottom poppins darkTxt addNew point text-5 border-box ml-1">+<span class="tooltiptext text-2">Add New</span></button>
                <button class="ml-1 round-edge-btn pub-btn fit-all point" @click="showPublished"><div class="poppins dakTxt text-1 scale-on-hover">Published schools</div></button>
                <button class="draft-btn ml-1 round-edge-btn fit-all point scale-on-hover" @click="showDraft"><div class="poppins dakTxt text-1">Drafts</div></button>
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
                <button class="round-edge-btn btn-2 t-center poppins  modal-act ml-1 point">
                    Delete
                </button>
                </div>
            </div>
        </div>
        </transition>
        <!--Ends modal-->

                <div class="tr w100p h10p-min h10p flex-row a-c-n scroll-y point poppins" :key="index" @click="setClickedIndex(school._id)">

                    <span :class="{'w20p ml-p5 light': true, hide: draftClicked}">{{school._id}}</span>
                    <span :class="{'w20p ml-1 light': true, hide: draftClicked}">{{school.name}}</span>
                    <span :class="{'w20p ml-p5 light': true, hide: draftClicked}">{{school.state}}, {{school.country}}</span>
                    <span :class="{'w20p ml-1 light': true, hide: draftClicked}">{{school.degreeOffered}}</span>
                    <span :class="{'w15p ml-p5 light': true, hide: draftClicked}">{{school.schoolCost}}</span>
                </div>
            </template>
            </div>

            <div :class="{'flex-col w100p-max a-c-n bg-white h100p hide-overflow-y round-edge-sm allSchools': true, 'w92p': !publishedClicked, 'w5p': !draftClicked}">
                <div :class="{'table-head w100p h10p flex-row a-c-n poppins border-box': true, hide: publishedClicked}" style="box-shadow: 0 12px 24px rgba(0,0,0,.05);">
                    <span class="w20p ml-p5" style="">School ID</span>
                    <span class="w20p ml-1" style="">Name</span>
                    <span class="w20p ml-1" style="">Location</span>
                    <span class="w20p ml-p5" style="">Degree Offered</span>
                    <span class="w15p ml-p5" style="">Cost</span>
                </div>
                <div class="w100p h90p scroll-y flex-col a-c-n border-box" style="border: 1px dashed rgba(0,0,0,.3);">
                    <div class="tr w100p h10p-min h10p flex-row a-c-n scroll-y point poppins" v-for="(school, index) in schoolData" :key="index">
                        <span :class="{'w20p ml-p5 light': true, hide: publishedClicked}">School ID</span>
                        <span :class="{'w20p ml-1 light': true, hide: publishedClicked}">Name</span>
                        <span :class="{'w20p ml-p5 light': true, hide: publishedClicked}">Location</span>
                        <span :class="{'w20p ml-1 light': true, hide: publishedClicked}">Degree Offered</span>
                        <span :class="{'w15p ml-p5 light': true, hide: publishedClicked}">Cost</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      schoolData: [ 'hey', 'hai', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe', 'jhe' ],
      draftClicked: false,
      publishedClicked: true,
      clickedIndex: null,
      popPublishedModal: false
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
    }
  },
  methods: {
    showDraft () {
      this.draftClicked = true
      this.publishedClicked = false
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
    },
    donothing (e) {
      e.preventDefault()
    },
    setClickedIndex (schoolID) {
      this.clickedIndex = null
      this.clickedIndex = schoolID
      //   this.$forceUpdate()
      this.popPublishedModal = true
    },
    expandPublishedDetails () {
      this.popPublishedModal = true
    },
    collapsePublishedDetails () {
      this.popPublishedModal = false
    },
    ...mapActions(['fetchSchools'])
  },
  created () {
    this.fetchSchools()
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
    .scale-on-hover:hover{
        transform: scale(1.1);
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
    .tr:hover{
        opacity: .4;
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
</style>
