<template>
    <div class="flex-row user-response mb-2 mt-2 ml-auto mr-2">
        <p class="message-box box-2 poppins green_bg round-edge-btn mr-p5 white"><slot/></p>
        <img src="@/assets/img/icons/chat-avatar.png" alt="" class="mt-auto chat-thumbnail">
    </div>
</template>

<script>
export default {
  name: 'response',
  props: [ 'type' ]
}
</script>

<style scoped>
  .message-box{
    padding: 1rem 1.5rem;
    max-width: 20rem;
    box-shadow: 0 2px 4px rgba(0,0,0,.10);
  }
  .user-response{
      float: right;
      margin-left: auto;
  }
  .box-2{
      border-radius: 25px 25px 0 25px;
  }
  .chat-thumbnail{
      width: 2rem;
      height: 2rem;
      padding: .2rem;
      border-radius: 100%;
      background:  white;
  }
  @media screen and (max-width: 570px) {
    .message-box{
      max-width: 15rem;
    }
  }
</style>
