<template>
    <div :class="{warnTheme: notifTypes[0].active, neutralTheme: notifTypes[1].active, successTheme: notifTypes[2].active, errTheme: notifTypes[3].active, 'animated slideInRight pop-up fixed': true, 'slideOutRight': !notifStatus}">
        <div class="flex-row w100p space-btw">
            <div class="flex-col">
                <h4 class="poppins">{{notifMessage.title}}</h4>
                <p class="poppins_light pad-top-p5 text-p8" >{{notifMessage.text}}</p>
            </div>
            <img src="@/assets/img/icons/cancel-white.png" class="cancel-icon ml-1 point" alt="" @click="closeNotif">
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['notifMessage', 'notifTypes', 'notifStatus'])
  },
  methods: {
    ...mapActions(['closeNotif'])
  }
}
</script>

<style scoped>
    .cancel-icon{
        width: 1.2rem;
        height: 1.2rem;
    }
    .pop-up{
        padding: 1.5rem;
        top: 15vh;
        right: 1.5rem;
        z-index: 5000;
        width: 15rem;
        border-radius: 5px;
        box-shadow: 0 12px 24px rgba(0,0,0,.1);
        animation-duration: .7s;
    }
    .warnTheme{
        background: orange;
        color: white
    }
    .neutralTheme{
        background: #1b1b1b;
        color: white;
    }
    .successTheme{
        background: rgb(5, 161, 76);
        color: white;
    }
    .errTheme{
        background: rgb(248, 30, 30);
        color: white;
    }
</style>