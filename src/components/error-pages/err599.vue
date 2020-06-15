<template>
    <div class="w100 flex-col a-c">
        <h1 class="oops Poppins mt-2 text-25">Ooops<i class="red">!</i></h1>
        <p class="mt-2 t-center poppins fade-6 matte green w90p ">We couldn't connect to the server.<br>This is probably an error from your end but we will take the blame.</p>

        <img src="@/assets/img/illustrations/netErr.png" class="f04-illus mt-3" alt="599 image">

        <p class="mt-2 t-center poppins matte t-green-dark w90p ">Network connection error.<br>Please check your internet and click the button below.</p>

        <button class="mt-3 mb-2 pad-stretch no-border no-outline poppins edge-curve white matte_bg point text-1" @click="retry()">Reconnect</button>
    </div>
</template>

<script>
export default {
  methods: {
    retry () {
      let previousRoute = localStorage.getItem('errRoute')
      this.$router.push(previousRoute)
    }
  }
}
</script>

<style scoped>
    .f04-illus{
        width: 20rem;
    }
</style>