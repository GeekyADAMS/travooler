<template>
    <div class="w100 h100 .hide-overflow-y">
        <div class="blob">
            <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
            <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
            </svg>
        </div>

        <div class="w90 flex-row a-c space-btw m-auto nav">
            <img src="@/assets/logo-black.jpg" class="logo" alt="">
            <div></div>
        </div>

        <transition name="slide-fade">
        <div class="w100 mt-3 m-auto flex-col w70 w90-m sign-in b-shadow field-contain">
        <h3 class="poppins mt-2 ml-2 h3">Post Schools</h3>
        <div class="mt-2 m-auto w80p form-field flex-col a-c">
            <form class="form form-2 w90p flex-row a-c space-btw wrap">
                <div class="input-full poppins flex-col a-n-c mt-2" v-for="(field, index) in InputFields" :key="index">
                    <label :for="field.label">{{field.labelText}}</label><br>
                    <input :type="field.type" :name="field.label" class="input" :placeholder="field.placeholder" @focus="resetPostBtn(), displayWarning(index)" @blur="hideWarning(index)" autocomplete="true" v-model="schoolDetails[index]" required>
                    <p class="poppins_light text-p8" style="color: orange; margin-top: .5rem;" v-show="warn[index] == 1">{{field.warning}}</p>
                </div>

                <button type="submit" class="t-center poppins white mt-2 point" @click="submitSchool($event)">
                    {{processState.sendState}}
                </button>
                <p class="poppins mt-2 t-center w100p" style="color: rgb(25, 202, 158);">({{processState.count}}) Done</p>
            </form>
        </div>
        </div>
        </transition>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
const fields = require('../../public/jsonData/schoolInputfields.json')

export default {
  data () {
    return {
      InputFields: fields,
      warn: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    }
  },
  computed: {
    schoolDetails () {
      return this.$store.getters.schoolDetails
    },
    userDetails () {
      return this.$store.getters.user
    },
    processState () {
      return this.$store.getters.processState
    }
  },
  methods: {
    ...mapActions(['addSchool', 'processing', 'resetPostBtn']),
    submitSchool (e) {
      e.preventDefault()
      this.processing()
      this.addSchool(this.schoolDetails)
    },
    displayWarning (index) {
      this.warn[index] = 1
    },
    hideWarning (index) {
      this.warn[index] = 0
    }
  },
  created () {
    if (this.userDetails.status === false) {
      this.$router.push('admin')
    }
  }
}
</script>

<style scoped>
    .logo{
        width: 12rem;
        height: 4rem;
        opacity: .85;
        position: sticky;
        position:-webkit-sticky;
        top: .5rem;
    }
    .nav{
        background: white;
        border-radius: 5px;
    }
    .sign-in{
        background: rgba(255, 255, 255, .95);
    }
    .h3{
        opacity: .5;
    }
    .form-field{
        max-width: 95%;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,.3);
        padding: 3rem 0 3rem 0;
    }
    .input{
        width: 20rem;
        padding: 1rem;
        margin-top: .15rem;
        border: 1px solid rgba(0,0,0,.07);
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 12px rgba(0,0,0,.05);
        max-width: 100%;
        box-sizing: border-box;
    }
    .input-full{
        max-width: 95%;
    }
    button{
        background: black;
        border-radius: 5px;
        border: none;max-width: 90%;max-width: 90%;
        font-size: 1.2rem;
        padding: .5rem 1rem .5rem 1rem;
        width: 20rem;
        max-width: 94%;
        box-sizing: border-box;
    }
    button:hover{
        opacity: .6;
    }
    .field-contain{
        padding: 0 0 3rem 0;
    }

    .slide-fade-enter-active{
        transition: all .8s ease;
    }
    .slide-fade-leave-active{
        transition: all .8s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>
