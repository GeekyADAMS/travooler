<template>
    <div style="padding-top: 10rem;">
      <div class="w100 user-details-comp h75 flex-row">
        <div class="user-details-comp-left flex-col a-c-n h100p">
          <span id="blue" :class="{'flex-col a-c white poppins': true, undoneStatus: level1}" style="font-size: 1.1rem; font-weight: 600;">1</span>
          <span id="orange" :class="{'flex-col a-c white poppins': true, undoneStatus: level2}" style="font-size: 1.1rem; font-weight: 600;">2</span>
          <span id="pink" :class="{'flex-col a-c white poppins': true, undoneStatus: level3}" style="font-size: 1.1rem; font-weight: 600;">3</span>
          <span id="purple" :class="{'flex-col a-c white poppins': true, undoneStatus: level4}" style="font-size: 1.1rem; font-weight: 600;">4</span>
          <span id="green" :class="{'flex-col a-c white poppins': true, undoneStatus: level5}" style="font-size: 1.1rem; font-weight: 600;">5</span>
          <span id="maroon" :class="{'flex-col a-c white poppins': true, undoneStatus: level6}" style="font-size: 1.1rem; font-weight: 600;">6</span>
          <span id="black" :class="{'flex-col a-c white poppins': true, undoneStatus: level7}" style="font-size: 1.1rem; font-weight: 600;"><img src="/img/confirm.png" alt="" class="identicon"></span>
        </div>

        <div class="user-details-comp-right flex-col h100p">
          <div class="user-details-top-nav w100p flex-row a-c-n space-btw" style="padding: 0 .5rem;">
            <div class="flex-row a-c"><img src="@/assets/STASHIP-UNIVERS-IMG/chat.png" alt="" class="identicon" style="margin-right: .25rem;">
            <span class="poppins darkTxt" style="font-size: .8rem;">Welcome, Let's get started in just 6 steps</span></div>
            <p class="poppins" style="font-size: .65rem; margin-right: .6rem;"><span style="color: blue;">15 travel agents </span>online to help you</p>
          </div>

          <div class="w100p quest-container flex-col" ref="dialogBox">
            <div>
              <!-- <form action=""> -->
                <div class="qr qr1 poppins darkTxt animated fadeIn">Hi! Welcome to Travooler <br>...your simple-to-use intelligent assistant that brings superior support to all travelers.</div>
                <div class="q1 qEl1 poppins darkTxt animated fadeIn">Travooler lets you find immigration and visa to Canada, Australia, UK, US, etc. and assigns the best agents to help you throughout the application process!</div>
                <div class="q2 qEl2 poppins darkTxt animated fadeIn">Let's get started. <br> Which country do you want to travel to?</div>

                <div class="answer-box spanClass1 animated fadeIn a1 poppins poppins" id="select1" v-if="questions.qEl1">
                  <p>
                      I want to travel to
                  </p>
                  <select aria-placeholder="Select Country" id="selectTag1" name="destination" class="poppins" v-model="detailsValue.destination" @blur="renderQuestion2()" @keyup.enter="renderQuestion2()" required>
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

                <div class="q1 poppins darkTxt qEl2 animated fadeIn poppins a2" v-if="questions.qEl2">Awesome!<br> What type of visa will you be applying for?</div>

                <div class="answer-box spanClass1  animated fadeIn poppins a3" id="select3" v-if="questions.qEl2">
                  <p>
                      Choose visa type
                  </p>
                  <select aria-placeholder="Select Course" name="visaType" id="selectTag3" class="poppins" v-model="detailsValue.visaType" @blur="renderQuestion3()" @keyup.enter="renderQuestion3()" required>
                      <option disabled>Please select the best option</option>
                      <option value="VisVis">1 - Visit visa (I want to visit only)</option>
                      <option value="StudVis">2 - Study visa (I am going to study)</option>
                      <option value="WorkPerm">3 - Work permit (I already have a job offer)</option>
                      <option value="TransVis">4 - Transit visa (I will be in transit only)</option>
                      <option value="PermResVis">5 - Permanent residence visa (I want to relocate) </option>
                      <option value="FamVis">6 - Spouse and Family visa (I want to join my wife/husband/family) </option>
                  </select>
                </div>

                <div class="q2 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl3">What is your full name?</div>

                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl3" id="aa1">
                  <p>
                      My full name is
                  </p>
                  <input type="text" id="" class="poppins" name="username" placeholder="Enter full name as in passport" v-model="detailsValue.name" @blur="renderQuestion4()" @keyup.enter="renderQuestion4()" required>
                </div>

                <div class="q1 poppins darkTxt qEl3 animated fadeIn a2" id="qEl3" v-if="questions.qEl4">{{detailsValue.name.split(' ')[0]}}, it's so nice to meet you!<br>What is your email address?</div>

                <div class="answer-box spanClass1 cp mail poppins animated fadeIn a3" id="aa7" v-if="questions.qEl4">
                  <input type="email" id="a7" class="poppins" name="usermail" placeholder="Enter mail here... No spams" v-model="detailsValue.mail" @blur="renderQuestion5()" @keyup.enter="renderQuestion5()" required>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl5">How soon do you want to travel, {{detailsValue.name.split(' ')[0]}}?</div>

                <div class="answer-box spanClass1  animated fadeIn poppins a3" id="select3" v-if="questions.qEl5">
                  <p>
                      I want to travel..
                  </p>
                  <select aria-placeholder="Select Course" name="travelTime" id="selectTag3" class="poppins" v-model="detailsValue.travelTime" @blur="renderQuestion6()" @keyup.enter="renderQuestion6()" required>
                      <option disabled>Choose date that applies</option>
                      <option value="ASAP">1 - ASAP</option>
                      <option value="Next3M">2 - Next 3 months</option>
                      <option value="Next6M">3 - Next 6 months</option>
                      <option value="Next9M">4 - Next 9 months</option>
                      <option value="NextYear">5 - Next year</option>
                      <option value="NotSure">6 - Skip. I'm not sure</option>
                  </select>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl6">No doubt! <br>What is the best phone number to reach you on?</div>

                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl6" id="aa1">
                  <p>
                    My phone number is
                  </p>
                  <input type="tel" id="" class="poppins" name="userphone" placeholder="Enter phone number" v-model="detailsValue.phone" @blur="renderQuestion7()" @keyup.enter="renderQuestion7()" required>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl7">{{detailsValue.name}}, Let's check your eligibility for {{detailsValue.destination}}</div>
                <div class="q2 qEl3 poppins darkTxt animated fadeIn a3" v-if="questions.qEl7">How many years of permanent full-time work experience have you had?</div>

                <div class="answer-box spanClass1  animated fadeIn poppins a3" id="select3" v-if="questions.qEl7">
                  <p>
                      I have experience of..
                  </p>
                  <select aria-placeholder="Select Course" name="permWorkExperience" id="selectTag3" class="poppins" v-model="detailsValue.permWorkExperience" @blur="renderQuestion8()" @keyup.enter="renderQuestion8()" required>
                      <option disabled>Select the right option</option>
                      <option value="aYear">A. 1 year</option>
                      <option value="tYear">B. 2 years</option>
                      <option value="thYear">C. 3 years</option>
                      <option value="fYearOrMore">D. 4 years or more</option>
                      <option value="noExp">E. I have no experience</option>
                  </select>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl8">Great! <br> Tell us your specialisation or area of work expertise?</div>

                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl8" id="aa1">
                  <p>
                    I specialise in
                  </p>
                  <input type="text" id="" class="poppins" name="expertise" placeholder="Enter your work expertise below" v-model="detailsValue.expertise" @blur="renderQuestion9()" @keyup.enter="renderQuestion9()" required>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl9">Wow! <br> What is your highest academic qualification?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select2" v-if="questions.qEl9">
                  <p>
                      My highest qualification is
                  </p>
                  <select aria-placeholder="Select Degree" name="deg" id="selectTag2" class="poppins" v-model="detailsValue.qualification" @blur="renderQuestion10()" @keyup.enter="renderQuestion10()" required>
                      <option disabled>Select the right option</option>
                      <option value="SSCE">1 - SSCE </option>
                      <option value="ND">2 - College or National Diploma </option>
                      <option value="HND">3 - Higher National Diploma (HND) </option>
                      <option value="BsD">4 - 4-years Bachelor's (Honours) Degree</option>
                      <option value="PgD">5 - Post-Degree Certificate/Graduate Diploma </option>
                      <option value="MsD">6 - Masters Degree</option>
                      <option value="PhD">7 - PhD</option>
                      <option value="None">8 - I have no formal education</option>
                  </select>
                </div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl10">Fantastic!</div>
                <div class="qr qEl3 poppins darkTxt animated fadeIn a3" v-if="questions.qEl10">Have you ever visited any of the following countries?<br>
                USA, UK, Canada, Australia and/or New Zealand</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select2" v-if="questions.qEl10">
                  <p>
                    Have you?
                  </p>
                  <select aria-placeholder="Select Degree" name="prevVisit" id="selectTag2" class="poppins" v-model="detailsValue.prevVisitStatus" @blur="renderQuestion11()" @keyup.enter="renderQuestion11()" required>
                    <option disabled>Select the right option</option>
                    <option value="yeah">Yes, I have</option>
                    <option value="Nah">No, I haven't</option>
                  </select>
                </div>

                <div class="q1 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl11">Got ya! <br>Have you taken IELTS or TEF or CELPIP (Geneneral Training) within the last 2 years?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select2" v-if="questions.qEl11">
                  <p>
                    Have you?
                  </p>
                  <select aria-placeholder="Select Degree" name="pastExp" id="selectTag2" class="poppins" v-model="detailsValue.prevTrainingStatus" @blur="renderQuestion12()" @keyup.enter="renderQuestion12()" required>
                    <option disabled>Select the right option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div class="q2 qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl12">You got this, {{detailsValue.name.split(' ')[0]}}! <br>Now, please tell us about your test results</div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a3" v-if="questions.qEl12">Reading</div>
                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl12" id="aa1">
                  <p>
                    My score for Reading is
                  </p>
                  <input type="text" id="" class="poppins" name="user-name" placeholder="Enter full name as in passport" v-model="detailsValue.testResults.reading" @blur="renderQuestion13()" @keyup.enter="renderQuestion13()" required>
                </div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl13">Writing</div>
                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl13" id="aa1">
                  <p>
                    My score for Writing is
                  </p>
                  <input type="text" id="" class="poppins" name="user-name" placeholder="Enter full name as in passport" v-model="detailsValue.testResults.writing" @blur="renderQuestion14()" @keyup.enter="renderQuestion14()" required>
                </div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl14">Speaking</div>
                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl14" id="aa1">
                  <p>
                    My score for Speaking is
                  </p>
                  <input type="text" id="" class="poppins" name="user-name" placeholder="Enter full name as in passport" v-model="detailsValue.testResults.speaking" @blur="renderQuestion15()" @keyup.enter="renderQuestion15()" required>
                </div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl15">Listening</div>
                <div class="answer-box spanClass1 animated fadeIn a3 poppins" v-if="questions.qEl15" id="aa1">
                  <p>
                    My score for Listening is
                  </p>
                  <input type="text" id="" class="poppins" name="user-name" placeholder="Enter full name as in passport" v-model="detailsValue.testResults.listening" @blur="renderQuestion16()" @keyup.enter="renderQuestion16()" required>
                </div>

                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl16">Finally, {{detailsValue.name.split(' ')[0]}}!</div>
                <div class="q1 qEl3 poppins darkTxt animated fadeIn a3" v-if="questions.qEl16">How are you sponsoring your visa fees and proof of funds?</div>

                <div class="answer-box spanClass1 poppins animated fadeIn a3" id="select2" v-if="questions.qEl16">
                  <p>
                    My travel is sponsored by
                  </p>
                  <select aria-placeholder="Select Sponsor" name="deg" id="selectTag2" class="poppins" v-model="detailsValue.sponsor" @blur="renderFinal()" @keyup.enter="renderFinal()" required>
                    <option disabled>Select the option that applies</option>
                    <option value="Myself">1 - Myself</option>
                    <option value="Parent">2 - Parent or Family </option>
                    <option value="Friend">3 - Friend </option>
                    <option value="Travel">4 - I may need a travel loan</option>
                  </select>
                </div>

              <div class="flex-row a-c qEl18" style="margin: 1rem;" v-if="questions.qEl17">
                <button :class="{'btn001 poppins anime-btn-001': true, loading: false}" type="submit" @click="sendPost()" :disabled="submitted">Use Details</button>
              </div>
               <div class="q2 poppins darkTxt qEl16 animated fadeIn a3" v-if="loading">Submitting....</div>
                <div class="q2 poppins darkTxt qEl16 animated fadeIn a3" v-if="error">{{errormessage}}</div>
                <div class="qr qEl3 poppins darkTxt animated fadeIn a2" v-if="questions.qEl18">{{detailsValue.name.split(' ')[0]}}, welcome to Travooler.</div>
                <div class="qr qEl3 poppins darkTxt animated fadeIn a3" v-if="questions.qEl18">Please check your email for information on next steps.</div>
              <!-- </form> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { createTraveller } from '../api/users.api'
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
      questions: { qEl1: true, qEl2: false, qEl3: false, qEl4: false, qEl5: false, qEl6: false, qEl7: false, qEl8: false, qEl9: false, qEl10: false, qEl11: false, qEl12: false, qEl13: false, qEl14: false, qEl15: false, qEl16: false, qEl17: false, qEl18: false },
      detailsValue: { destination: '', visaType: '', name: '', mail: '', travelTime: '', phone: '', permWorkExperience: '', expertise: '', qualification: '', prevVisitStatus: '', prevTrainingStatus: '', testResults: { reading: '', writing: '', speaking: '', listening: '' }, sponsor: '' },
      submitted: false,
      loading: false,
      error: false,
      errormessage: 'There was an error submitting your details'
    }
  },
  methods: {
    renderQuestion2 () {
      if (this.detailsValue.destination !== '') {
        this.questions.qEl2 = true
      }
    },
    renderQuestion3 () {
      if (this.detailsValue.visaType !== '') {
        this.questions.qEl3 = true
        this.level2 = false
      }
    },
    renderQuestion4 () {
      if (this.detailsValue.name !== '' && this.detailsValue.name !== ' ') {
        this.questions.qEl4 = true
      }
    },
    renderQuestion5 () {
      if (this.detailsValue.mail !== '') {
        this.questions.qEl5 = true
        this.level3 = false
      }
    },
    renderQuestion6 () {
      if (this.detailsValue.travelTime !== '') {
        this.questions.qEl6 = true
      }
    },
    renderQuestion7 () {
      if (this.detailsValue.phone !== '') {
        this.questions.qEl7 = true
        this.level4 = false
      }
    },
    renderQuestion8 () {
      if (this.detailsValue.permWorkExperience !== '') {
        this.questions.qEl8 = true
      }
    },
    renderQuestion9 () {
      if (this.detailsValue.expertise !== '') {
        this.questions.qEl9 = true
      }
    },
    renderQuestion10 () {
      if (this.detailsValue.qualification !== '') {
        this.questions.qEl10 = true
        this.level5 = false
      }
    },
    renderQuestion11 () {
      if (this.detailsValue.prevVisitStatus !== '') {
        this.questions.qEl11 = true
      }
    },
    renderQuestion12 () {
      if (this.detailsValue.prevTrainingStatus !== '') {
        this.questions.qEl12 = true
        this.level6 = false
      }
    },
    renderQuestion13 () {
      if (this.detailsValue.testResults.reading !== '') {
        this.questions.qEl13 = true
      }
    },
    renderQuestion14 () {
      if (this.detailsValue.testResults.writing !== '') {
        this.questions.qEl14 = true
      }
    },
    renderQuestion15 () {
      if (this.detailsValue.testResults.speaking !== '') {
        this.questions.qEl15 = true
      }
    },
    renderQuestion16 () {
      if (this.detailsValue.testResults.listening !== '') {
        this.questions.qEl16 = true
      }
    },
    renderFinal () {
      if (this.detailsValue.sponsor !== '') {
        this.questions.qEl17 = true
        // this.questions.qEl18 = true
        // this.level7 = false
      }
    },
    sendPost () {
      this.loading = true
      this.error = false
      this.submitted = true
      createTraveller(this.detailsValue)
        .then(data => {
          this.submitted = false
          console.log(data)
          if (data.success) {
            this.questions.qEl18 = true
            this.level7 = false
            this.submitted = true
            this.loading = false
            this.error = false
          } else {
            this.error = true
            this.loading = false
            this.errormessage = data.message.message
          }
        }).catch(() => {
          this.submitted = false
          this.loading = false
          this.error = true
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
    max-width: 45vw;
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
