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

        <div class="w100 mt-3 m-auto flex-col w70 w90-m sign-in b-shadow field-contain" v-if="!userDetails.status">
        <h3 class="poppins mt-2 ml-2 h3">Welcome Admin</h3>
        <div class="mt-2 m-auto w80p form-field flex-col a-c">
            <form class="form w100p flex-col a-c">
                <div class="input-full poppins flex-col a-n-c">
                    <label for="username">Username</label><br>
                    <input type="user" name="username" class="input username" placeholder="Enter username" autocomplete="true" v-model="user.username">
                </div>
                <div class="input-full poppins mt-2 flex-col a-n-c">
                    <label for="password">Password</label><br>
                    <input type="password" name="password" class="input password" placeholder="Enter password" autocomplete="true" v-model="user.password">
                </div>
                <button type="submit" class="t-center poppins white mt-2 point" @click="authUser($event)">
                    Login
                </button>
                <p class="poppins mt-2 t-center" style="color: red" v-if="user.warning">Wrong user details. Retry!</p>
            </form>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        warning: false
      }
    }
  },
  computed: {
    userDetails () {
      return this.$store.getters.user
    }
  },
  methods: {
    authUser (e) {
      e.preventDefault()
      if ((this.user.username === this.userDetails.username) && (this.user.password === this.userDetails.password)) {
        this.$store.dispatch('loginUser')
        this.user.warning = false
        this.userDetails.status = true
        this.$router.push({path: '/admin/dashboard'})
      } else {
        this.$store.dispatch('wrongUser')
        this.user.warning = true
        this.userDetails.status = false
      }
    },
    created () {
      this.$store.dispatch('disableNavbarState')
    }
  },
  created () {
    this.$store.dispatch('disableNavbarState')
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
