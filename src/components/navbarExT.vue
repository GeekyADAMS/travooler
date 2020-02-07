<template>
    <nav class="flex-row a-c w100">
        <div class="nav-flex flex-row align-center w90 space-btw">
            <img id="logo" src="@/assets/STASHIP-UNIVERS-IMG/logo.png" router to="/">
            <div class="flex-row align-center space-btw w80">
                <div class="left-nav">
                    <ul>
                    <li v-for="leftNavItem in leftNavList" :key="leftNavItem" :class="leftNavItem.bgColor" router to="leftNavItem.link">
                        {{leftNavItem.Title}} <img src="@/assets/STASHIP-UNIVERS-IMG/arrow-down-icon-png-26.jpg"  :class="leftNavItem.ProIconClass">
                    </li>
                    </ul>
                </div>
                <div class="right-nav">
                    <ul>
                    <li v-for="rightNavItem in rightNavList" :key="rightNavItem" :class="rightNavItem.bgColor" router to="rightNavItem.link">
                        {{rightNavItem.Title}} <img src="@/assets/STASHIP-UNIVERS-IMG/arrow-down-icon-png-26.jpg"  :class="rightNavItem.ProIconClass">
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      leftNavList: [
        { Title: 'For Students', ProIconClass: 'visible', bgColor: 'white', link: '/' },
        { Title: 'Search School', ProIconClass: 'NonVisible', bgColor: 'white', link: '/search-school' }
      ],
      rightNavList: [
        { Title: 'For Agents/Universities', ProIconClass: 'visible', bgColor: 'white', link: '/' },
        { Title: 'Sign Up', ProIconClass: 'NonVisible', bgColor: 'blue', link: '/search-school' }
      ]
    }
  }
}
</script>

<style scoped>
#logo{
    width: 9rem;
    height: 2.5rem;
    margin-right: 1rem;
}
.blue{
    background: rgb(44, 135, 240);
    padding: .5rem;
    color: white;
    border-radius: 3px;
}
.blue:hover{
    background: rgba(44, 135, 240,.6);
}
li{
    color: black;
    display: inline-block;
    list-style-type: none;
    margin-left: 1rem;
    margin-right: 1.5rem;
    font-family: 'Poppins', 'Josefin Sans', Raleway, Arial;
    font-weight: 600;
    font-size: .9rem;
    color: rgb(0,0,0,.5);
    cursor: pointer;
}

.white:hover{
    color: rgba(44, 135, 240,.6);
}

li > img {
    width: 1rem;
    height: 1rem;
    position: relative;
    top: .15rem;
    left: .5rem;
}

nav{
    height: 3vh;
    box-shadow: 0 8px 24px rgba(0,0,0,.15);
    background: #fff;
    position: fixed;
    top: 0;
    padding: 1.5rem 0;
    z-index: 50;
}
#logo{
    width: 9rem;
    height: 2.5rem;
}
.NonVisible{
    display: none;
}
.visible{
    opacity: .7;
}
</style>
