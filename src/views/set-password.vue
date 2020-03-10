<template>
  <div class="body flex-col a-c w100 h100">
    <div class="contain w90 h90 flex-row a-c">
      <div :class="{'contain-left flex-col a-c': true, blackBg: neutral, successBg: success, failedBg: failed, warningBg: warn}">
        <img src="@/assets/secure.svg" alt="" class="passwordIllus">
      </div>
      <div class="contain-right">
        <h1 class="Poppins" style="color: #101820">Set Password</h1>

        <div class="flex-row containField passAndHint">

          <div class="inputFields flex-col">
            <div class="flex-row pad-butt">
              <input :type="showToggle" name="" id="" class="passwordField point" placeholder="Enter password" v-model="userPass" @keyup="validatePasswordOnKeyUp()">
              <img src="@/assets/hide.png" alt="Show" class="poppins showToggle point" v-if="showToggle=='password'" @click="showPass()">
              <img src="@/assets/show.png" alt="Hide" class="poppins showToggle point" v-if="showToggle=='text'" @click="hidePass()">
            </div>
            <input :type="showToggle" name="" id="" class="passwordField point pad-butt" placeholder="Confirm password" v-model="confirmPass" @keyup="confirmPassword()">

            <button class="submitPass poppins point" type="button" @click="validatePasswordSubmit()" :disabled="submitting">
              Set Password
            </button>
          </div>

          <div class="flex-col hintBox">
            <h3 class="Poppins">Hints</h3>
            <ul class="poppins bit-fade" style="margin-top: 1rem; padding-left: 1rem;">
              <li>Password must contain Alphanumeric characters</li>
              <li>Password must contain atleast one symbol</li>
              <li>Password must be atleast 8 characters long</li>
              <li>GREEN means 'Good Password'</li>
              <li>ORANGE means 'Almost there'</li>
              <li>RED means 'Bad Password' or 'Passwords don't match'</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setPassword } from '../api/users.api'
export default {
  data () {
    return {
      showToggle: 'password',
      userPass: '',
      confirmPass: '',
      confirmedPass: '',
      warn: false,
      success: false,
      failed: false,
      neutral: true,
      submitting: false
    }
  },
  methods: {
    showPass () {
      this.showToggle = 'text'
    },
    hidePass () {
      this.showToggle = 'password'
    },
    validatePasswordOnKeyUp () {
      var re
      re = /[0-9]/
      if (!re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = /[a-z]/
      if (!re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = /^\w+$/
      if (re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = [/^\w+$/, /[0-9]/, /[a-z]/]

      if (re[0].test(this.userPass) && !re[1].test(this.userPass) && !re[2].test(this.userPass)) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (!re[0].test(this.userPass) && re[1].test(this.userPass) && re[2].test(this.userPass)) {
        this.failed = false
        this.success = true
        this.warn = false
        this.neutral = false
      }
      if (this.userPass === '') {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (this.userPass.length < 8) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
    },
    validatePasswordSubmit () {
      if (this.confirmPass !== this.userPass) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (this.confirmPass === this.userPass) {
        this.failed = false
        this.success = true
        this.warn = false
        this.neutral = false
        this.submitting = true
        setPassword(this.$route.query.res, this.userPass)
          .then(data => {
            this.submitting = false
            if (data.success) {
              this.failed = false
              this.success = true
              this.warn = false
              this.neutral = false
              this.$router.push('signIn')
            } else {
              this.failed = true
              this.success = false
              this.warn = false
              this.neutral = false
            }
          }).catch((e) => {
            console.log(e)
            alert('There was an error')
            this.failed = true
            this.success = false
            this.warn = false
            this.neutral = false
            this.submitting = false
          })
      }

      var re
      re = /[0-9]/
      if (!re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = /[a-z]/
      if (!re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = /^\w+$/
      if (re.test(this.userPass)) {
        this.failed = false
        this.success = false
        this.warn = true
        this.neutral = false
      }

      re = [/^\w+$/, /[0-9]/, /[a-z]/]

      if (re[0].test(this.userPass) && !re[1].test(this.userPass) && !re[2].test(this.userPass)) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (!re[0].test(this.userPass) && re[1].test(this.userPass) && re[2].test(this.userPass)) {
        this.failed = false
        this.success = true
        this.warn = false
        this.neutral = false
      }
      if (this.userPass === '') {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (this.userPass.length < 8) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
    },
    confirmPassword () {
      if (this.confirmPass !== this.userPass) {
        this.failed = true
        this.success = false
        this.warn = false
        this.neutral = false
      }
      if (this.confirmPass === this.userPass) {
        this.failed = false
        this.success = true
        this.warn = false
        this.neutral = false
      }
    }
  }
}
</script>

<style scoped>
@media only screen and (min-width: 320px) and (max-width: 500px) and (orientation: portrait) {
  .contain{
    flex-direction: column;
    height: auto;
    width: 95vw;
    padding-left: .5rem;;
  }
  .body{
    height: auto;
    padding: .5rem 0;
  }
  .contain-left{
    width: 100%;
    height: 30%;
    padding: .5rem;
    box-sizing: border-box;
  }
  .contain-right{
    width: 100%;
    height: 70%;
  }
  .passAndHint{
    flex-direction: column;
  }
  .hintBox{
    margin-left: 0;
    width: 95%;
    margin-top: 1rem;
  }
  .passwordField{
    width: 90%;
  }
  .passwordIllus{
    width: 12rem;
    height: 8rem;
  }
}

.hintBox{
  background: rgba(175, 252, 255, .5);
  padding: 1rem;
  margin-left: 4rem;
}
.submitPass{
  width: fit-content;
  padding: .7rem 1rem;
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  border: 0;
  background: black;
  margin-top: 2rem;
  border-radius: 0 15px 15px 15px;
  box-shadow: 0 8px 24px rgba(0,0,0,.2)
}
.submitPass:hover{
  background: rgb(41, 41, 41);
}
.pad-butt{
  margin-bottom: 1.5rem;
}
.passwordField::placeholder{
  color: rgb(63, 63, 63);
  font-family: 'Gilroy-norm';
  font-size: 1rem;
}
.passwordField{
  width: 20rem;
  padding: .5rem 1rem;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 2px solid rgb(22, 202, 172);
  border-radius: 5px;
  font-size: 1.1rem;
  color: black;
}
.passwordField:hover, .passwordField:focus{
  border-bottom: 2px solid orange;
}
.showToggle{
  width: 2rem;
  height: 2rem;
  margin-left: .5rem;
}
.containField{
  margin-top: 8rem;
}
.passwordIllus{
  width: 18rem;
  height: 14rem;
}
.body{
  background: linear-gradient(to top right, rgb(49, 49, 49), rgb(70, 70, 70));
}
.contain{
  border-radius: 5px;
  overflow: hidden;
}
.contain-left{
  width: 30%;
  height: 100%;
}
.blackBg{
  background: black;
}
.successBg{
  background: rgb(22, 202, 172);
}
.failedBg{
  background: red;
}
.warningBg{
  background: orange;
}
.contain-right{
  width: 70%;
  height: 100%;
  background: white;
  padding: 3rem;
  box-sizing: border-box;
}
</style>
