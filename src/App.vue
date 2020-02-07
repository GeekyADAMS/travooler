<template>
  <div>
    <navTrav style="color: white; background: white;"/>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import Homepage from './components/Homepage'
// import ExploreTravels from './components/Explore-Travels'
// import Travooler from './components/Travooler'
// import searchPage from './components/search-page'

export default {
  components: {
  }
}
</script>

<style src="@/assets/styles/custom-css-library.css">

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
