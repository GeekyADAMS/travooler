<template>
    <div>
        <div class="service-slider poppins flex-row a-c">
            <div class="left-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-left.svg"></div>
            <div class="slider flex-row">
                <div class="serve-scroll-contain flex-row a-n-c">
                <div class="eachServiceCards" v-for="cardItems in sliderCardData" :class="cardItems.cardBackground" :key="cardItems.cardBackground">
                    <h3>{{cardItems.cardHeader}}</h3>
                    <p>{{cardItems.cardBodyText}}</p>
                </div>
                </div>
            </div>
            <div class="right-arrow flex-col a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/arrow-right.svg"></div>
        </div>
        <h4 class="seeMore poppins">See all eligible expenses</h4>
    </div>
</template>

<script>
export default {
  data () {
    return {
      sliderCardData: [
        { cardHeader: 'Pharmacy', cardBodyText: 'Starship works at the pharmacy on all prescriptions, and a lot of over-the-counter drugs, too.', cardBackground: 'pharm' },
        { cardHeader: 'Doctor\'s Visit', cardBodyText: 'Use Starship for all doctors\'s appointments, including spcialists and surgeries.', cardBackground: 'docvis' },
        { cardHeader: 'Dental', cardBodyText: 'Coverage for anything, from routine dental work to gnarly stuff, like crowns or root canals', cardBackground: 'dental' },
        { cardHeader: 'Vision', cardBodyText: 'Hey good lookin\', keep those eyes healthy. Glasses, contacts, and all eye care are eligible', cardBackground: 'vision' },
        { cardHeader: 'Family Care', cardBodyText: 'Use Starship for birth control, pregnancy tests, and other family planning expenses.', cardBackground: 'famcare' },
        { cardHeader: 'Wellness', cardBodyText: 'Like going to the gym, but for your mind. Use Starship to pay for mental health services.', cardBackground: 'wellness' }
      ]
    }
  }
}
</script>

<style scoped>
.seeMore{
  color: rgb(96, 96, 250);
  font-size: 1.3rem;
  font-weight: 500;
}
.seeMore:hover{
  color: rgb(71, 71, 71);
}
.right-arrow{
  position: relative;
  left: -1.8rem;
}
.left-arrow{
  position: relative;
  left: 2.6rem;
}
.pharm{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/pharmacy-960x640-c-default.jpg');
}
.docvis{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/doctor-960x640-c-default.jpg');
}
.dental{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/dental-960x640-c-default.jpg');
}
.vision{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/vision-960x640-c-default.jpg');
}
.famcare{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/family-960x640-c-default.png');
}
.wellness{
  background-image: url('~@/assets/STASHIP-UNIVERS-IMG/wellness-960x640-c-default.jpg');
}
.eachServiceCards{
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 72vh;
  margin: 3rem 1rem;
  padding: 3.5rem 5rem 0 2.5rem;
  color: white;
  box-shadow: 0 12px 64px rgba(0,0,0,.05);
}
.eachServiceCards>h3{
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.service-slider>.slider::-webkit-scrollbar{
    display: none;
}
.service-slider>.slider::-webkit-scrollbar-track{
    display: block;
}
.service-slider>.slider{
  overflow-x: scroll;
  display: flex;
  flex-wrap: nowrap;
}

.left-arrow, .right-arrow{
  background: white;
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
  box-shadow: 0 8px 24px rgba(0,0,0,.30);
  cursor: pointer;
}
.left-arrow:hover, .right-arrow:hover{
  box-shadow: 0 8px 12px rgba(0,0,0,.15);
}

@media screen  and (min-width: 480px) {
    .service-slider{
      max-width: 95vw;
    }
    .service-slider>.slider{
      width: 95vw;
    }
    .eachServiceCards{
      width: 18.4vw;
    }
    .service-slider{
      max-width: 95vw;
    }
}
@media screen  and (max-width: 480px) {
    .service-slider{
      max-width: 100vw;
    }
    .service-slider>.slider{
      width: 100vw;
    }
    .eachServiceCards{
      width: 35vw;
    }
    .service-slider{
      max-width: 100vw;
    }
}
</style>