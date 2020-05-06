<template>
    <div class="w100 h90 off-white-2 flex-row a-c hide-overflow">
        <section class="w20 h100p white_bg flex-col a-c">
            <div class="w80p h100p flex-col">
                <p class="poppins text-2 mt-3 w100p mb-1">Adjust your preference</p>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">COUNTRY</p>
                        <p class="poppins fade-9">Canada</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">Canada is highly sort for career opportunities, path to citizenship, amazing diversity... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">PROGRAM</p>
                        <p class="poppins fade-9">Immigration</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">This program will let you come to canada to live and wor... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col w100p mt-2">
                    <div class="flex-row space-btw">
                        <p class="text-p7 poppins fade-6">NOC</p>
                        <p class="poppins fade-9">1345</p>
                    </div>
                    <p class="text-p7 fade-7 poppins mt-p5">Professionals in this occupation are Doctors, Surgeons, La... <u class="point">Read More</u></p>
                </div>

                <div class="flex-col">
                    <p class="text-p7 poppins fade-7 mt-3">SHOW ME SIMILAR COURSES</p>

                    <div class="flex-row space-btw mt-1">
                        <span class="point">
                            <input type="radio" name="sub" id="">
                            <label for="yes" class="poppins">Yes</label>
                        </span>
                        <span class="point">
                            <input type="radio" name="sub" id="" style="color: blue; background: blue">
                            <label for="yes" class="poppins">No</label>
                        </span>
                    </div>

                    <button class="outlined-black-btn mt-2 poppins point fade-8 hover-fade-5"> Edit your preference</button>
                </div>
            </div>
        </section>

        <section class="w80 h100p flex-col a-c">
            <div class="w85p h100p flex-col tes-frame space-btw">
                <div class="w100p flex-col">
                    <h2 class="poppins mt-3 fade-8">Great Femi, <br><br>Here are your eligible Canada visa programs!</h2>
                    <div class="flex-row space-btw w100p mt-1">
                        <p class="poppins_light text-p8 w60p">
                            <b>Travooler</b> Tip: Select the immigration program you like best. If you're not sure, the lowest tuition is a good place to start. After you've viewed the details about the programs, text us your selection and we'll show you how to apply.
                        </p>

                        <div class="flex-col">
                            <p class="poppins">Not sure where to start?</p>
                            <button class="outlined-black-btn mt-p5 poppins point"> ASK A TRAVOOLER AGENT</button>
                        </div>
                    </div>
                </div>

                <div class="flex-col w100p h50p mt-2">

                    <div class="w100p h90p scroll-y flex-col mb-p5">
                        <div class="w100p white_bg flex-row a-c space-btw long-card border-box mb-1 mat-shadow-square" v-for="(program, index) in programs" :key="index">
                            <div class="flex-col a-c">
                                <p class="text-p7 poppins_light">QUALIFYING POINTS</p>
                                <p class="text-20 Poppins">498</p>
                            </div>

                            <div class="y-seperator h100p fade-2"></div>

                            <div class="flex-col a-c">
                                <p class="text-3 Poppins fade-8">Express Entry</p>
                                <p class="text-p7 poppins fade-7">Federal Skilled Workers Program</p>
                            </div>

                            <div class="y-seperator h100p fade-2"></div>

                            <div class="flex-row a-c">

                                <div class=" mb-1">
                                    <svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                                   <!-- <circle class="circle-chart__background" stroke="#efefef" stroke-width="3" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />-->
                                    <circle class="circle-chart__circle" stroke="#00acc1" stroke-width="3" :stroke-dasharray="rate" stroke-linecap="round" fill="none" cx="16.91549431" cy="16.91549431" r="15.91549431" />
                                    <!--<g class="circle-chart__info">
                                        <text class="circle-chart__percent" x="16.91549431" y="15.5" alignment-baseline="central" text-anchor="middle" font-size="8">60%</text>
                                    </g>-->
                                    </svg>
                                </div>

                                <div class="flex-col a-c">
                                    <p class="text-3 poppins_light fade-9">Low fees</p>
                                    <p class="text-p7 poppins fade-7 ml-auto fade-5">Affordable</p>
                                </div>
                            </div>

                            <div class="y-seperator h100p fade-2"></div>

                            <button class="no-border white text-p7 point red_bg pad-stretch hover-fade Poppins">LEARN MORE</button>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      programs: ['hey', 'hi', 'yo', 'hi', 'yo', 'hi', 'yo', 'hi', 'yo'],
      rate: 70
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.long-card{
    padding: 1rem 2rem;
}
.fade_black_btn{
     border: 0;
    border-radius: 50px;
    padding: .5rem .8rem;
    background: rgb(128, 128, 128);
}
.fade_black_btn:hover{
    background: rgb(146, 146, 146);
}
.apply_btn{
    color: blue;
    border: 1px solid blue;
    border-radius: 50px;
    padding: .4rem .75rem;
    background: transparent;
}
.off-white-2{
    background: rgb(247, 247, 247);
}
.test-frame{
    background: whitesmoke;
}
.outlined-black-btn{
    border: 2px solid black;
    padding: .5rem .8rem;
    background: transparent;
}
select{
    background: transparent;
    border: 1px dashed rgb(138, 138, 138);
    border-radius: 5px;
}
.round_btn{
    padding: .5rem .8rem;
    border-radius: 50px;
    border: 0;
    box-shadow: 0px 2px 4px rgb(211, 211, 211);
}

</style>
