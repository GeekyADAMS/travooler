<template>
    <nav class="sticky" sticky>
        <div class="nav-flex">
            <span class="flex-row a-c">
            <img id="logo" src="@/assets/STASHIP-UNIVERS-IMG/logo.png" router to="/">
            <slot name="extra"></slot></span>
            <div>
                <ul><li v-for="navItems in navList" v-bind:key="navItems"><span id="navItemContainer" :class="navItems.class" router :to="navItems.link">{{navItems.content}}</span></li></ul>
            </div>
        </div>
    </nav>

</template>

<script>
export default {
  data () {
    return {
      navList: [{ content: 'How it works', class: 'def', link: '/travooler' }, { content: 'Who we are', class: 'def', link: '/travooler' }, { content: 'Blog', class: 'def', link: '/explore' }, { content: 'Get started', class: 'blue-btn', link: '/' }, { content: ' |  Log in', class: 'def', link: '/search-school' }]
    }
  }
}
</script>

<style scoped>

    nav{
        width: 100vw;
        height: auto;
        box-shadow: 0 8px 24px rgba(0,0,0,.1);
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        padding: .5rem 0;
        z-index: 50;
        border-bottom: 1px solid blue;
    }
    #logo{
        width: 9rem;
        height: 2.5rem;
    }
    li{
        color: black;
        display: inline-block;
        list-style-type: none;
        margin-left: .5rem;
        margin-right: .5rem;
        font-family: 'Poppins', 'Josefin Sans', Raleway, Arial;
        font-weight: 600;
        font-size: .9rem;
        color: rgb(0,0,0,.5);
        cursor: pointer;
    }
    .extraNavItem{
        cursor: pointer;
    }
    .extraNavItem:hover{
        color: blue;
    }
    .nav-flex{
        width: 87vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 3rem .5rem 3rem;
    }
    .def:hover{
        color:rgb(44, 135, 240);
    }
    .blue-btn{
        background-color: rgb(44, 135, 240);
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border-radius: 5px;
    }

    .blue-btn::before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 5px;
        border: 4px solid rgb(44, 135, 240);
        transform-origin: center;
        transform: scale(1);
    }
    .blue-btn:hover {
        cursor: pointer;
        border-radius: 5px;
    }
    .blue-btn:hover::before {
        transition: all 0.75s ease-in-out;
        transform-origin: center;
        transform: scale(1.75);
        opacity: 0;
        border-radius: 5px;
    }

    #navItemContainer{
        padding: .5rem;
        border-radius: 5px;
    }
</style>
