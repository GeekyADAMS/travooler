<template>
    <div class="flex-col a-c w100p h100p modal-bg fixed top-100" style="top: 0;" v-if="editPrefModal">
        <div class="flex-col a-c-n round-edge-md w50 s-w90 top-100 white_bg mt-5 border-box modal-inner hide-overflow"  >
            <img src="@/assets/img/icons/cancel-red.png" alt="" class="cancel ml-auto point" draggable="false" @click="reset()">
            <h3 class="Poppins darkTxt w80p t-center mt-1 text-7 no-select">Edit your preference</h3>

            <p class="poppins_light fade-8 w80p t-center mt-2 spaced text-2 no-select">
                Didn't find your program of choice? Feel free to edit your preferences here and let our system find you perfect program.
                <br><br>Please fill the boxes below.
            </p>

            <p class="poppins red text-p8 t-center mt-3" v-if="incompleteDetails">
              Please fill in all the blanks.
            </p>

            <div class="flex-col w90p a-c edit-form mt-1">
                <div class="flex-row a-c w100p poppins space-btw mt-1">
                    <label for="#country" class="w20p t-center edit-box-label point">Country</label>
                    <input type="country" placeholder="Enter preferred country" id="country" class="w70p edit-box white_bg text-1" required v-model="newPreference.country">
                </div>

                <div class="flex-row a-c w100p poppins space-btw mt-1">
                    <label for="#degree" class="w20p t-center edit-box-label point">Degree</label>
                    <input type="degree" placeholder="Enter preferred degree .e.g Masters, Post-Diploma, e.t.c" id="degree" class="w70p edit-box white_bg text-1" required v-model="newPreference.degree">
                </div>

                <div class="flex-row a-c w100p poppins space-btw mt-1">
                    <label for="#program" class="w20p t-center edit-box-label point">Program</label>
                    <input type="program" placeholder="Enter preferred program e.g. Law, Mathematics, e.t.c" id="program" class="w70p edit-box white_bg text-1" required v-model="newPreference.program">
                </div>
            </div>

            <button class="send-btn white poppins edge-curve no-border mt-3 point" ref="editPrefBtn" @click="sendEdit()"><div class="lds-ripple" v-show="sending"><div></div><div></div></div>{{sendBtnText}}</button>
        </div>
    </div>
</template>

<script>
import generateSearchID from '@/modules/generateSearchID'
import {mapActions, mapGetters} from 'vuex'

export default {
  data () {
    return {
      newPreference: {
        country: '',
        degree: '',
        program: ''
      },
      editID: '',
      sending: false,
      sendBtnText: 'Edit preference',
      incompleteDetails: false
    }
  },
  computed: {
    ...mapGetters(['editPrefModal', 'userDetail', 'uploadSuccessStatus']),
    newUserDetails () {
        let searchDetails = {
            name: this.userDetail.name,
            email: this.userDetail.mail,
            searchID: this.editID,
            preference: this.newPreference,
            searchedFrom: this.userDetail.searchLocation.searchedFrom
        }
        return searchDetails
    }
  },
  methods: {
    flashWarning () {
      this.incompleteDetails = true
      setTimeout(() => {
        this.incompleteDetails = false
      }, 4000)
    },
    editingPreference () {
        this.sending = true
        this.sendBtnText = 'Editing...'
        this.$refs.editPrefBtn.disabled = true
        this.$refs.editPrefBtn.style.opacity = '.6'
    },
    done () {
        this.sending = false
        this.sendBtnText = 'Edited'
        this.$refs.editPrefBtn.disabled = false
        this.$refs.editPrefBtn.style.opacity = '1'
        this.$router.push({ path: '/find-programs/schools/'+this.editID })
        this.switchEditPrefModal()
    },
    reset () {
        this.sending = false
        this.sendBtnText = 'Edit preference'
        this.$refs.editPrefBtn.disabled = false
        this.$refs.editPrefBtn.style.opacity = '1'
        this.switchEditPrefModal()
    },
    failed () {
        this.sending = false
        this.sendBtnText = 'Failed! Retry..'
        this.$refs.editPrefBtn.disabled = false
        this.$refs.editPrefBtn.style.opacity = '1'
    },
    generateID () {
        return generateSearchID()
    },
    async sendEdit () {
      let editOptions = this.newPreference

      if (![editOptions.country, editOptions.degree, editOptions.program].includes('')) {

        this.editingPreference()
        await this.$store.dispatch('uploadUserDetails', this.newUserDetails)

        setTimeout(() => {
          if (this.uploadSuccessStatus) {
            this.$router.push({ path: '/find-programs/schools/'+this.editID })
            this.$forceUpdate()
            this.$router.go()
            this.reset()
          } else {
            this.failed()
            this.$store.dispatch('flashNotif', {
                message: {
                title: 'Editing failed!',
                text: 'There seem to be a problem. Please, check your connection and retry.'
                },
                type: 'error'
              })
          }
        }, 3000)

      } else {
        this.flashWarning()
      }
    },
    ...mapActions(['switchEditPrefModal'])
  },
  mounted () {
    this.editID = this.generateID()
  }
}
</script>

<style scoped>
@import url('~@/assets/styles/global-styles.css');
.edit-box-label{
    padding: .5rem;
    background: rgba(27, 27, 27, .2);
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, .5);
    margin-right: 1rem;
}
.edit-box{
    padding: .5rem 1rem;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, .5);
    box-shadow: 0 0 12px rgba(0,0,0, .15);
}
</style>