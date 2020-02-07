<template>
    <section class="prefooter-links poppins flex-row a-c space-btw">
        <div class="flex-row space-btw link-cols-wrap">
        <div v-for="linkTextItem in PrefooterLinks" :key="linkTextItem.linkText" class="flex-col link-col poppins">
            <h4>{{linkTextItem.LinkHead}}</h4>
            <ul>
            <li v-for="link in linkTextItem.linkList" :key="link">{{link}}</li>
            </ul>
        </div>
        </div>
        <div class="flex-col a-c get-app-icons">
        <img src="@/assets/App-Store-Grey.png" alt="">
        <img src="@/assets/Google-Play-Grey.png" alt="">
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      PrefooterLinks: [
        { LinkHead: 'Learn more', linkList: ['How it works', 'Who we are', 'Blog', 'Eligible Expenses', 'For Business', 'Careers'] },
        { LinkHead: 'Support', linkList: ['FAQs', 'Chat with us'] },
        { LinkHead: 'Social', linkList: ['Facebook', 'Instagram', 'Twitter', 'Pinterest', 'LinkedIn'] }
      ]
    }
  }
}
</script>

<style scoped>
.prefooter-links{
  padding: 5rem 6rem 5rem 6rem;
  width: 85vw;
  flex-wrap: wrap;
}
.get-app-icons{
  width: 15vw;
}
.get-app-icons>img{
  width: 11rem;
  margin: .5rem;
  height: 4.5rem;
  cursor: pointer;
}
.get-app-icons>img:hover{
  opacity: .5;
}
.link-cols-wrap{
  width: 46.5vw;
  flex-wrap: wrap;
}
.link-col>h4{
  font-weight: 700;
  color: #101820;
  margin-bottom: 1.2rem;
  font-size: .94rem;
}
.link-col>ul>li{
  color: #1b2438;
  opacity: .5;
  list-style-type: none;
  cursor: pointer;
  font-weight: 600;
  font-size: .95rem;
  line-height: 1.85rem;
}
.link-col>ul>li:hover{
  opacity: .9;
}
</style>
