<template>
    <div class="flex-col a-c w100p h100p modal-bg fixed top-100" style="top: 0;" v-if="successState">
        <div class="flex-col a-c-n round-edge-md w50 s-w90 top-100 white_bg mt-5 border-box modal-inner succes-modal hide-overflow"  >
            <img src="@/assets/img/icons/cancel-red.png" alt="" class="cancel ml-auto point" draggable="false" @click="switchSuccessModal()">
            <h2 class="Poppins darkTxt w80p t-center mt-2 text-20 no-select s-w100p">Yipee<span class="t-green">!</span><br>Your application have reached us.</h2>

            <p class="poppins_light fade-8 w80p t-center mt-2 spaced text-2 no-select s-w95p">
                You are just a step away from achieveing your dreams.<br> We've sent you a mail containing your application details. <br><br>Go ahead and finalise your application from the invoice we sent to your mail.
            </p>

            <div class="flex-row flex-col-m w100p a-c mt-5 mb-1">
                <p class="Poppins fade-9 text-1">Open invoice with:</p>

                <div class="flex-row a-c s-mt-1">
                <a href="https://mail.google.com/mail/u/0/#search/travooler+invoice" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/icons/gmail.jpg" alt="" class="ml-2 mail-icon point"></a>

                <a href="https://outlook.live.com/mail/0/inbox" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/icons/outlook.png" alt="" class="ml-2 mail-icon point"></a>

                <a href="https://mail.yahoo.com/m/search/keyword=travooler" target="_blank" rel="noopener noreferrer"><img src="@/assets/img/icons/yahoo.png" alt="" class="ml-2 mail-icon point"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    successState () {
        return this.$store.getters.successModal
    }
  },
  methods: {
    ...mapActions(['switchSuccessModal'])
  }
}
</script>

<style scoped>
@import url('~@/assets/styles/global-styles.css');
.mail-icon{
    width: 4.5rem;
    height: 2.8rem;
}

.succes-modal{
  background: url('~@/assets/img/gifs/confetti.gif') center center no-repeat;
  background-size: cover;
}
</style>
