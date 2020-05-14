<template>
    <div class="flex-row sys-response mb-1 animated fadeIn">
        <img src="@/assets/logo.png" alt="" class="mt-auto chat-thumbnail">
        <p class="message-box box-1 poppins_light white_bg round-edge-btn ml-p5"><slot/></p>
    </div>
</template>

<script>
export default {
  name: 'question',
  props: [ 'type' ]
}
</script>

<style scoped>
  .message-box{
    padding: 1rem 1.5rem;
    max-width: 20rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.10);
  }
  .chat-thumbnail{
      width: 2rem;
      height: 2rem;
      padding: .2rem;
      border-radius: 100%;
      background:  white;
  }
  .box-1{
        border-radius: 25px 25px 25px 0;
    }
  @media screen and (max-width: 570px) {
  .message-box{
    max-width: 15rem;
  }
}
</style>