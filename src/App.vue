<template>
  <div class="body">
    <content-loader v-if="!myData" :height="1000" :width="400" :speed="1.5" primaryColor="#f7f7f7" secondaryColor="#e9e9e9">
      <rect x="10" y="99" rx="3" ry="3" width="380" height="6.4" />
      <rect x="11" y="117.22" rx="3" ry="3" width="249.24" height="7.94" />
      <rect x="9.5" y="12.27" rx="0" ry="0" width="379.2" height="77" />
      <rect x="216.5" y="209.21" rx="0" ry="0" width="170.66" height="30" />
      <rect x="10.5" y="156.27" rx="0" ry="0" width="197" height="86" />
      <rect x="218.5" y="157.27" rx="0" ry="0" width="161" height="7" />
      <rect x="218.5" y="172.69" rx="0" ry="0" width="128.8" height="5.6" />
      <rect x="219.5" y="188.25" rx="0" ry="0" width="138.46" height="6.02" />
      <circle cx="57.016648189186455" cy="180.78664818918645" r="7.516648189186454" />
      <rect x="209.5" y="268.27" rx="0" ry="0" width="181.24" height="86" />
      <rect x="11.5" y="273.27" rx="0" ry="0" width="161" height="7" />
      <rect x="11.5" y="290.69" rx="0" ry="0" width="128.8" height="5.6" />
      <rect x="10.5" y="309.25" rx="0" ry="0" width="138.46" height="6.02" />
      <rect x="9.5" y="324.27" rx="0" ry="0" width="170.66" height="30" />
      <rect x="9.5" y="373.27" rx="0" ry="0" width="379.2" height="77" />
      <rect x="9.5" y="461.27" rx="0" ry="0" width="379.2" height="77" />
      <rect x="9.5" y="552.27" rx="0" ry="0" width="182.016" height="77" />
      <rect x="204.5" y="551.27" rx="0" ry="0" width="182.016" height="77" />
      <rect x="7" y="641" rx="3" ry="3" width="380" height="6.4" />
    </content-loader>
    <main  v-if="myData">
      <Flashnotify v-if="notifStatus"/>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Flashnotify from './components/flash-notification.vue'
import { ContentLoader } from 'vue-content-loader'
import {mapGetters} from 'vuex'

export default {
  components: {
    ContentLoader,
    Flashnotify
  },
  data () {
    return {
      myData: false
    }
  },
  computed: {
    ...mapGetters(['notifStatus', 'navbarState'])
  },
  created () {
    setTimeout(() => {
      this.myData = true
    }, 3000)
  }
}
</script>

<style src="@/plugins/chillax/chillax.css">
.test-test{
  height: 10vh;
  width: 20vw;
  margin-top: 10rem;
  z-index: 10000;
  background: black;
}
.body{
  margin: 0;
  padding: 0;
  overflow-x: scroll;
  width: 100vw;
  max-width: 100vw;
}
.body::-webkit-scrollbar{
  display: none;
}
.body::-webkit-scrollbar-track{
  display: block;
}
body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100vw;
  max-width: none;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
