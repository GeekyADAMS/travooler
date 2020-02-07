<template>
    <div style="padding-top: 10rem;">
      <div class="w100 user-details-comp h75 flex-row">
        <div class="user-details-comp-left flex-col a-c-n h100p">
          <span id="blue" :class="{'flex-col a-c': true, undoneStatus: level1}"><img src="/img/id-card.png" alt="" class="identicon"></span>
          <span id="orange" :class="{'flex-col a-c': true, undoneStatus: level2}"><img src="/img/adventurer.png" alt="" class="identicon"></span>
          <span id="pink" :class="{'flex-col a-c': true, undoneStatus: level3}"><img src="/img/backpack.png" alt="" class="identicon"></span>
          <span id="purple" :class="{'flex-col a-c': true, undoneStatus: level4}"><img src="/img/mortarboard.png" alt="" class="identicon"></span>
          <span id="green" :class="{'flex-col a-c': true, undoneStatus: level5}"><img src="/img/money-bag.png" alt="" class="identicon"></span>
          <span id="maroon" :class="{'flex-col a-c': true, undoneStatus: level6}"><img src="/img/clock.png" alt="" class="identicon"></span>
          <span id="black" :class="{'flex-col a-c': true, undoneStatus: level7}"><img src="/img/confirm.png" alt="" class="identicon"></span>
        </div>

        <div class="user-details-comp-right flex-col h100p">
          <div class="user-details-top-nav w100p flex-row a-c-n space-btw" style="padding: 0 .5rem;">
            <div class="flex-row a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/chat.png" alt="" class="identicon" style="margin-right: .25rem;">
            <span class="poppins darkTxt" style="font-size: .8rem;">Welcome, Let's get started</span></div>
            <p class="poppins" style="font-size: .65rem; margin-right: .6rem;"><span style="color: blue;">15 travel agents </span>online to help you</p>
          </div>

          <div class="w100p quest-container flex-col" ref="dialogBox">
            <div>
              <!-- <form action=""> -->
              <div class="qr qr1 poppins darkTxt animated fadeIn">Hi! Welcome to Travooler, <br>your travel assistant anytime, anywhere.</div>
                <div class="q1 qEl1 poppins darkTxt animated fadeIn">Travooler shows you eligible programs,<br>matches you with verified travel agents, <br>and tracks your travel history, free!</div>
                <div class="q2 qEl2 poppins darkTxt animated fadeIn">Let's go. <br> Whats your full name?</div>

                <div class="answer-box spanClass1 animated fadeIn a1 poppins" id="aa1">
                  <p>
                      My full name is
                  </p>
                  <input type="text" id="" class="poppins" name="name" placeholder="Enter full name as in passport" v-model="detailsValue.name" @blur="renderQuestion2()" @keyup.enter="renderQuestion2()" required>
                </div>

                <div class="q1 poppins darkTxt qEl3 animated fadeIn a2" id="qEl3" v-if="questions.qEl3">Nice to meet you, {{detailsValue.name.split(' ')[0]}}!<br>What email shall we use?</div>

                <div class="answer-box spanClass1 cp mail poppins a3 animated fadeIn" id="aa7" v-if="questions.qEl3">
                  <input type="email" id="a7" class="poppins" name="email" placeholder="Enter mail here... No spams" v-model="detailsValue.mail" @blur="renderQuestion3()" @keyup.enter="renderQuestion3()" required>
                </div>

                <div class="q1 poppins darkTxt qEl4 animated fadeIn a2" v-if="questions.qEl4">You've got this!</div>
                <div class="q2 poppins darkTxt qEl5 animated fadeIn a3" v-if="questions.qEl5">Where do you want to study?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select1" v-if="questions.qEl5">
                  <p>
                      I want to visit
                  </p>
                  <select aria-placeholder="Select Country" id="selectTag1" name="destination" class="poppins" v-model="detailsValue.destination" @blur="renderQuestion4()" @keyup.enter="renderQuestion4()" required>
                      <option disabled>Select Destination..</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia, Plurinational State of</option>
                      <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">British Indian Ocean Territory</option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="CV">Cape Verde</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo</option>
                      <option value="CD">Congo, the Democratic Republic of the</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands (Malvinas)</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard Island and McDonald Islands</option>
                      <option value="VA">Holy See (Vatican City State)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran, Islamic Republic of</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">Korea, Democratic People's Republic of</option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Lao People's Democratic Republic</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia, Federated States of</option>
                      <option value="MD">Moldova, Republic of</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territory, Occupied</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">Saint Vincent and the Grenadines</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">South Georgia and the South Sandwich Islands</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SZ">Swaziland</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan, Province of China</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UM">United States Minor Outlying Islands</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">Venezuela, Bolivarian Republic of</option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands, British</option>
                      <option value="VI">Virgin Islands, U.S.</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                  </select>
                </div>

                <div class="q1 poppins darkTxt qEl6 animated fadeIn a2" v-if="questions.qEl6">Great destination!</div>
                <div class="q2 poppins darkTxt qEl7 animated fadeIn a3" v-if="questions.qEl7">What will you be studying?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select2" v-if="questions.qEl7">
                  <p>
                      I will be studying
                  </p>
                  <select aria-placeholder="Select Degree" name="deg" id="selectTag2" class="poppins" v-model="detailsValue.degree" @blur="renderQuestion5()" @keyup.enter="renderQuestion5()" required>
                      <option disabled>Select preferred degree</option>
                      <option value="UDC">1 - Undergraduate diploma/certificate </option>
                      <option value="BSC">2 - Bachelor's degree </option>
                      <option value="DED">3 - Direct entry or Top-up degree </option>
                      <option value="PDD">4 - Graduate or Post-Degree Diplomas </option>
                      <option value="MSD">5 - Masters degree </option>
                      <option value="DRD">6 - Doctoral degree </option>
                  </select>
                </div>

                <div class="q1 poppins darkTxt qEl8 animated fadeIn a2" v-if="questions.qEl8">Awesome!<br> What program/course are you looking for?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select3" v-if="questions.qEl8">
                  <p>
                      I am looking to study
                  </p>
                  <select aria-placeholder="Select Course" name="course" id="selectTag3" class="poppins" v-model="detailsValue.course" @blur="renderQuestion6()" @keyup.enter="renderQuestion6()" required>
                      <option disabled>Select preferred course</option>
                      <option value="UDC">1 - Engineering and Technology</option>
                      <option value="BSC">2 - Business, Finance, and Economics </option>
                      <option value="DED">3 - Sciences</option>
                      <option value="PDD">4 - Health, Nursing and Medical Sciences</option>
                      <option value="MSD">5 - Law, Political and Social Studies </option>
                      <option value="DRD">6 - Art, Media Studies and Journalism </option>
                  </select>
                </div>

                <div class="q1 poppins darkTxt qEl9 animated fadeIn a2" v-if="questions.qEl9">Nice selection!</div>
                <div class="q2 poppins darkTxt qEl10 animated fadeIn a3" v-if="questions.qEl10">What is your highest educational qualification?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select4" v-if="questions.qEl10">
                    <p>
                        My highest educational level is
                    </p>
                    <select aria-placeholder="Select Edu Level" name="degree" id="selectTag4" class="poppins" v-model="detailsValue.qualification" @blur="renderQuestion7()"  @keyup.enter="renderQuestion7()" required>
                        <option disabled>Select option...</option>
                        <option value="SSC">1 - SSCE </option>
                        <option value="ND">2 - National Diploma </option>
                        <option value="HND">3 - Higher National Diploma </option>
                        <option value="BSC">4 - Bachelor's (Honours) degree </option>
                        <option value="PGD">5 - Post Graduate Diploma </option>
                        <option value="MSC">6 - Master's Degree </option>
                        <option value="DG">7 - Doctoral Degree </option>
                        <option value="NFE">8 - I have no formal education </option>
                    </select>
                </div>

                <div class="q1 poppins darkTxt qEl11 animated fadeIn a2" v-if="questions.qEl11">You're close to your dream course.</div>
                <div class="q2 poppins darkTxt qEl12 animated fadeIn a3" v-if="questions.qEl12">How much tuition fits your budget per year?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select5" v-if="questions.qEl12">
                    <p>
                        My budget for tuition is
                    </p>
                    <select aria-placeholder="Select Edu Level" name="budget" id="selectTag5" class="poppins"  v-model="detailsValue.budget" @blur="renderQuestion8()"  @keyup.enter="renderQuestion8()" required>
                        <option disabled>Select amount that applies</option>
                        <option value="TOL">$10,000 or less (per year)</option>
                        <option value="TTF">$10,000 - $15,000 (per year) </option>
                        <option value="FTT">$15,000 - $20,000 (per year) </option>
                        <option value="TTT">$20,000 - $25,000 (per year) </option>
                        <option value="TOM">$25,000 or more (per year)</option>
                        <option value="SKIP">Skip. I have no preference</option>
                    </select>
                </div>

                <div class="q1 poppins darkTxt qEl13 animated fadeIn a2" v-if="questions.qEl13">No worries, {{detailsValue.name.split(' ')[0]}}!<br>When would you like to start?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select6" v-if="questions.qEl13">
                    <p>
                        I would like to start as
                    </p>
                    <select aria-placeholder="Select Start Date" name="startDate" id="selectTag6" class="poppins" v-model="detailsValue.startDate" @blur="renderQuestion9()" @keyup.enter="renderQuestion9()" required>
                        <option disabled>Select start date</option>
                        <option value="ASAP">ASAP</option>
                        <option value="DecJan">Dec/Jan intake</option>
                        <option value="ApMay">April/May</option>
                        <option value="AugSept">August/September intake</option>
                    </select>
                </div>

                <div class="q1 poppins darkTxt qEl14 animated fadeIn a2" v-if="questions.qEl14">Finally!<br>Do you need help with your visa?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select7" v-if="questions.qEl14">
                    <p>
                      Smart travelers prefer Travooler-verified and experienced travel assistants to simplify their travel visa experience. Make your selection
                    </p>
                    <select aria-placeholder="Select Visa Option" name="visaOption" id="selectTag7" class="poppins" v-model="detailsValue.visaHelp" @blur="renderFinal()" @keyup.enter="renderFinal()" required :disabled="submitted">
                        <option value="MAYBE" disabled>Select prefered option</option>
                        <option value="YEAH">YES - I need a personal travel visa assistant</option>
                        <option value="NAH">No - I don't need peace of mind for my visa</option>
                    </select>
                </div>

                <div class="q2 poppins darkTxt qEl16 animated fadeIn a3" v-if="loading">Submitting....</div>
                <div class="q2 poppins darkTxt qEl16 animated fadeIn a3" v-if="error">{{errormessage}}</div>
                <div class="q1 poppins darkTxt qEl15 animated fadeIn a2" v-if="questions.qEl15">There you go, {{detailsValue.name.split(' ')[0]}}.</div>
                <div class="q2 poppins darkTxt qEl16 animated fadeIn a3" v-if="questions.qEl16">There are 24 matching programs just for you</div>
                <div class="qr poppins darkTxt qEl17 animated fadeIn a3" v-if="questions.qEl17">We have sent a verification link to your mail.<br>Click on the link to continue and finish setting up your account.<!-- <u class="blueTxt point">Continue</u>--></div>
              <!-- </form> -->
              <!-- <div class="flex-row a-c qEl18" style="margin: 1rem;" v-if="questions.qEl18">
                <button class="btn001 poppins anime-btn-001" type="submit">Use Details</button>
                <button class="btn002 poppins anime-btn-002" type="close" @click="closeDialog()">Close</button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { createStudent } from '../api/users.api'
export default {
  data () {
    return {
      level1: false,
      level2: true,
      level3: true,
      level4: true,
      level5: true,
      level6: true,
      level7: true,
      disableSearch: false,
      fullSearch: true,
      halfSearch: false,
      noUserCompDisplay: true,
      filterOptionDisplay: true,
      favorited: false,
      NoOfRecommendations: 15,
      questions: { qEl3: false, qEl4: false, qEl5: false, qEl6: false, qEl7: false, qEl8: false, qEl9: false, qEl10: false, qEl11: false, qEl12: false, qEl13: false, qEl14: false, qEl15: false, qEl16: false, qEl17: false, qEl18: false },
      detailsValue: { name: '', mail: '', destination: '', degree: '', course: '', qualification: '', budget: '', startDate: '', visaHelp: '' },
      submitted: false,
      loading: false,
      error: false,
      errormessage: ''
    }
  },
  methods: {
    displayFilterOptions () {
      this.filterOptionDisplay = !this.filterOptionDisplay
      this.noUserCompDisplay = false
      this.halfSearch = !this.halfSearch
      this.fullSearch = !this.fullSearch
      this.disableSearch = !this.disableSearch
    },
    renderQuestion2 () {
      if (this.detailsValue.name !== '') {
        this.questions.qEl3 = true
      }
    },
    renderQuestion3 () {
      if ((this.detailsValue.mail !== '') && this.detailsValue.mail.match(/\S+@\S+\.\S+/)) {
        this.questions.qEl4 = true
        this.questions.qEl5 = true
        this.level2 = false
        this.error = false
        this.errormessage = ''
      } else {
        this.error = true
        this.loading = false
        this.errormessage = 'Enter a valid email'
      }
    },
    renderQuestion4 () {
      if (this.detailsValue.destination !== '') {
        this.questions.qEl6 = true
        this.questions.qEl7 = true
        this.level3 = false
      }
    },
    renderQuestion5 () {
      if (this.detailsValue.degree !== '') {
        this.questions.qEl8 = true
        this.level4 = false
      }
    },
    renderQuestion6 () {
      if (this.detailsValue.course !== '') {
        this.questions.qEl9 = true
        this.questions.qEl10 = true
        this.level4 = false
      }
    },
    renderQuestion7 () {
      if (this.detailsValue.qualification !== '') {
        this.questions.qEl11 = true
        this.questions.qEl12 = true
        this.level5 = false
      }
    },
    renderQuestion8 () {
      if (this.detailsValue.budget !== '') {
        this.questions.qEl13 = true
        this.level6 = false
      }
    },
    renderQuestion9 () {
      if (this.detailsValue.startDate !== '') {
        this.questions.qEl14 = true
      }
    },
    renderFinal () {
      if (this.detailsValue.visaHelp !== '') {
        this.disableSearch = !this.disableSearch
        if (!this.submitted) {
          this.sendPost()
        }
      }
    },
    closeDialog () {
      this.filterOptionDisplay = !this.filterOptionDisplay
      this.noUserCompDisplay = true
      this.halfSearch = !this.halfSearch
      this.fullSearch = !this.fullSearch
    },
    sendPost () {
      this.loading = true
      this.error = false
      this.submitted = true
      createStudent(this.detailsValue)
        .then(data => {
          this.submitted = false
          console.log(data)
          if (data.success) {
            this.questions.qEl15 = true
            this.questions.qEl16 = true
            this.questions.qEl17 = true
            this.questions.qEl18 = true
            this.level7 = false
            this.level7 = false
            this.submitted = true
            this.loading = false
            this.error = false
          } else {
            this.error = true
            this.loading = false
            this.errormessage = `${data.message}`
          }
        }).catch(() => {
          this.submitted = false
          this.loading = false
          this.error = true
          this.errormessage = 'There was an error. Try submitting again'
        })
    }
  },
  updated () {
    this.$refs.dialogBox.scrollTop = this.$refs.dialogBox.scrollHeight
  }
}
</script>

<style scoped>
  .answer-box> select {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #dbdbdb;
    color: rgba(255, 255, 255, 0.6);
    height: 1.5rem;
    background-color: rgba(255, 255, 255, 0);
    margin-top: 0.5em;
    margin-right: 1em;
    padding-left: 0.5em;
    font-size: 1.1rem;
    font-weight: 200;
    width: 15rem;
  }
  .answer-box> select> option {
    color: #646363;
    font-size: 0.9rem;
    width: fit-content;
  }
  .cp {
    color: white;
  }
  .mail {
    border-radius: 50px;
  }
  input[type=text], input[type=tel], input[type=email] {
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid #dbdbdb;
    color: rgba(255, 255, 255, 0.6);
    height: 1.5rem;
    width: fit-content;
    background-color: rgba(255, 255, 255, 0);
    margin-top: .5rem;
    margin-right: 1rem;
    padding-left: 0.5rem;
    font-size: 1.1rem;
    font-weight: 200;
  }

  input[type=text]::placeholder, input[type=tel]::placeholder, input[type=email]::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  .spanClass1 {
    border-radius: 20px 20px 0 20px;
  }
  .answer-box {
    width: fit-content;
    max-width: 20rem;
    padding: 1rem;
    margin-top: 1.5rem;
    background-color: rgb(33, 187, 174);
    box-shadow: 0 0 16px rgba(0,0,0,.15);
    margin-left: auto;
    margin-bottom: 1.5rem;
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.6rem;
    margin-right: .5rem;
    color: white;
  }

  .q1, .q2, .qr{
    padding: 1rem;
    background: white;
    box-shadow: 0 0 16px rgba(0,0,0,.15);
    font-size: .85rem;
    margin-left: .5rem;
    width: fit-content;
    border: 1px solid rgba(0,0,0,.15);
    margin-bottom: 1rem;
    line-height: 1.4rem;
  }
  .qr{border-radius: 20px 20px 20px 20px;}
  .q1{
    border-radius: 20px 20px 20px 0;
  }
  .q2{
    border-radius: 0 20px 20px 20px;
  }
  .quest-container{
    height: 96%;
    overflow-y: scroll;
    margin-top: 1.5rem;
    padding-top: 1rem;
    scroll-behavior: smooth;
  }
  .quest-container::-webkit-scrollbar{
    display: none;
  }
  .identicon{
    height : 20px;
    width: 20px;
  }
  .user-details-top-nav{
    height: 3rem;
    border-bottom: 1.5px solid rgba(0,0,0,.15);
  }
  .user-details-comp-right{
    width: 94vw;
  }
  .user-details-comp-left{
    width: 6vw;
    border-right: 1.5px solid rgba(0,0,0,.15);
  }
  .user-details-comp-left > span{
    height: 33px;
    width: 33px;
    box-sizing: border-box;
    border-radius: 25px;
    margin: 1rem 0;
  }

  .qr1 {
    animation-delay: 1s;
  }

  .qEl1 {
    animation-delay: 2s;
  }

  .qEl2 {
    animation-delay: 4s;
  }

  .a1 {
    animation-delay: 6s;
  }
  .a2{
    animation-delay: .5s;
  }
  .a3{
    animation-delay: 1s;
  }
  .btn001{
    color: white;
  }
  .anime-btn-001 {
    z-index: 1;
    position: relative;
    font-size: 1.1rem;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: rgb(44, 135, 240);
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    padding: .5rem 1rem;
    width: fit-content;
    margin-right: 1.5rem
  }

  .anime-btn-001::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: #fee715;
    transform-origin: center;
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.7s ease-in-out;
  }

  .anime-btn-001:hover {
    cursor: pointer;
    color: #000;
  }

  .anime-btn-001:hover::before {
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }

  .btn002{
    color: white;
  }
  .anime-btn-002 {
    z-index: 1;
    position: relative;
    font-size: 1.1rem;
    outline: none;
    border: none;
    border-radius: 6px;
    background-color: red;
    overflow: hidden;
    transition: color 0.4s ease-in-out;
    padding: .5rem 1rem;
    width: fit-content;
    margin-right: 1.5rem
  }

  .anime-btn-002::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 100%;
    right: 100%;
    width: 3em;
    height: 3em;
    border-radius: 50%;
    background-color: orange;
    transform-origin: center;
    transform: translate3d(50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.7s ease-in-out;
  }

  .anime-btn-002:hover {
    cursor: pointer;
    color: #fff;
  }

  .anime-btn-002:hover::before {
    transform: translate3d(50%, -50%, 0) scale3d(15, 15, 15);
  }
  .quest-container{
    padding: 0 10rem;
  }

  .undoneStatus{
    opacity: .2;
  }

  .bit-icon{
    width: 12px;
    height: 12px;
    padding: 2px;
  }
  #orange{
    background-color: orange;
  }
  #blue{
    background-color: rgb(3, 115, 167);
  }
  #pink{
    background-color: rgb(245, 114, 135);
  }
  #purple{
    background-color: purple;
  }
  #green{
    background-color: rgb(0, 128, 117);
  }
  #maroon{
    background-color: rgb(172, 14, 2);
  }
  #black{
    background-color: black;
  }
</style>
