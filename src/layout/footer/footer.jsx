import React from "react";
import './footer.css';
import './footer1.css';

const Footer = () => {
  return (
      <div class="footer color-background-2 gradient section-sections--14346363404382__footer-padding">
        <div class="footer__content-top page-width">
          <div
            class="footer__blocks-wrapper grid grid--1-col grid--2-col grid--4-col-tablet"
          >
            <div class="footer-block grid__item footer-block--menu">
              <h2 class="footer-block__heading">Quick links</h2>

              <ul className="ul-5">
                <li>
                  <a
                    href="auth"
                    class="link link--text list-menu__item list-menu__item--link"
                  >
                    <span className="s-5">My Account</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://shoppuppyculture.com/pages/support?url=https://support.shoppuppyculture.com/support/solutions"
                    class="link link--text list-menu__item list-menu__item--link"
                  >
                    <span className="s-5">Support Portal / FAQs</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/keep-informed"
                    class="link link--text list-menu__item list-menu__item--link"
                  >
                    <span className="s-5">Keep Informed</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.shoppuppyculture.com/support/home"
                    class="link link--text list-menu__item list-menu__item--link"
                  >
                    <span className="s-5">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/pages/legal-stuff"
                    class="link link--text list-menu__item list-menu__item--link"
                  >
                    <span className="s-5">Policies / Data Requests</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-block--newsletter"></div>
        </div>
        <div class="footer__content-bottom">
          <div class="footer__content-bottom-wrapper page-width">
            <div class="footer__column footer__localization isolate"></div>
            <div class="footer__column footer__column--info"></div>
          </div>

          <div
            class="footer__content-bottom-wrapper page-width footer__content-bottom-wrapper--center"
          >
            <div class="footer__copyright caption">
            <ul class="policies list-unstyled">
              <li>
              <small class="copyright__content"
              >© 2023, <a href="/" title="">PUPPY CULTURE</a></small
              >
              <small class="copyright__content"
              ><a
                target="_blank"
                rel="nofollow"
                href="https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore"
              >
                </a
                ></small>
                </li>
                <li>
                  <small class="copyright__content"
                  ><a href="https://shoppuppyculture.com/policies/refund-policy"
                  ><span className="s-5">Return/Refund policy</span></a
                    ></small
                  >
                </li>
                <li>
                  <small class="copyright__content"
                  ><a href="https://shoppuppyculture.com/policies/privacy-policy"><span className="s-5">Privacy policy</span></a></small
                  >
                </li>
                <li>
                  <small class="copyright__content"
                  ><a href="https://shoppuppyculture.com/policies/terms-of-service"
                  ><span className="s-5">Terms of service</span></a
                    ></small
                  >
                </li>
                <li>
                  <small class="copyright__content"
                  ><a href="https://shoppuppyculture.com/policies/shipping-policy"><span className="s-5">Shipping policy</span></a></small
                  >
                </li>
            </ul>
            <hr />
              <div class="grid grid--no-gutters">
                <div class="ftrcntr">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1554/7897/files/PC-PROOF-IS-IN-THE-PUPPIES-reg-trademark.png?14941266797717180377"
                  />
                  <img
                    src="https://cdn.shopify.com/s/files/1/1554/7897/files/Madcap-UP-zer0-bg-75x150.png?v=1576798821"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        <div
          class="locale-selectors__container"
        >
          <div
            class="locale-selectors__content"
          >
            <form action="/localization" method="POST">
              <input name="_method" type="hidden" value="PUT" /><input
                name="source"
                type="hidden"
                value="geolocation_selector"
              /><input name="return_to" type="hidden" value="/" /><label
                class="locale-selectors__label"
                id="country_code_label"
                for="country_code"
                ><select
                  id="country_code"
                  class="locale-selectors__selector"
                  name="country_code"
                >
                  <option value="IN">India (INR ₹)</option>
                  <option value="AF">Afghanistan (AFN ؋)</option>
                  <option value="AX">Åland Islands (EUR €)</option>
                  <option value="AL">Albania (ALL)</option>
                  <option value="DZ">Algeria (DZD)</option>
                  <option value="AD">Andorra (EUR €)</option>
                  <option value="AO">Angola (USD $)</option>
                  <option value="AI">Anguilla (XCD $)</option>
                  <option value="AG">Antigua &amp; Barbuda (XCD $)</option>
                  <option value="AR">Argentina (USD $)</option>
                  <option value="AM">Armenia (AMD ֏)</option>
                  <option value="AW">Aruba (AWG)</option>
                  <option value="AC">Ascension Island (SHP £)</option>
                  <option value="AU">Australia (AUD $)</option>
                  <option value="AT">Austria (EUR €)</option>
                  <option value="AZ">Azerbaijan (AZN ₼)</option>
                  <option value="BS">Bahamas (BSD $)</option>
                  <option value="BH">Bahrain (USD $)</option>
                  <option value="BD">Bangladesh (BDT ৳)</option>
                  <option value="BB">Barbados (BBD $)</option>
                  <option value="BY">Belarus (USD $)</option>
                  <option value="BE">Belgium (EUR €)</option>
                  <option value="BZ">Belize (BZD $)</option>
                  <option value="BJ">Benin (XOF F CFA)</option>
                  <option value="BM">Bermuda (USD $)</option>
                  <option value="BT">Bhutan (USD $)</option>
                  <option value="BO">Bolivia (BOB Bs)</option>
                  <option value="BA">Bosnia &amp; Herzegovina (BAM KM)</option>
                  <option value="BW">Botswana (BWP P)</option>
                  <option value="BR">Brazil (USD $)</option>
                  <option value="IO">British Indian Ocean Territory (USD $)</option>
                  <option value="VG">British Virgin Islands (USD $)</option>
                  <option value="BN">Brunei (BND $)</option>
                  <option value="BG">Bulgaria (BGN)</option>
                  <option value="BF">Burkina Faso (XOF F CFA)</option>
                  <option value="BI">Burundi (BIF)</option>
                  <option value="KH">Cambodia (KHR ៛)</option>
                  <option value="CM">Cameroon (XAF FCFA)</option>
                  <option value="CA">Canada (CAD $)</option>
                  <option value="CV">Cape Verde (CVE)</option>
                  <option value="BQ">Caribbean Netherlands (USD $)</option>
                  <option value="KY">Cayman Islands (KYD $)</option>
                  <option value="CF">Central African Republic (XAF FCFA)</option>
                  <option value="TD">Chad (XAF FCFA)</option>
                  <option value="CL">Chile (USD $)</option>
                  <option value="CN">China (CNY ¥)</option>
                  <option value="CX">Christmas Island (AUD $)</option>
                  <option value="CC">Cocos (Keeling) Islands (AUD $)</option>
                  <option value="CO">Colombia (USD $)</option>
                  <option value="KM">Comoros (KMF CF)</option>
                  <option value="CG">Congo - Brazzaville (XAF FCFA)</option>
                  <option value="CD">Congo - Kinshasa (CDF)</option>
                  <option value="CK">Cook Islands (NZD $)</option>
                  <option value="CR">Costa Rica (CRC ₡)</option>
                  <option value="CI">Côte d’Ivoire (XOF F CFA)</option>
                  <option value="HR">Croatia (EUR €)</option>
                  <option value="CW">Curaçao (ANG)</option>
                  <option value="CY">Cyprus (EUR €)</option>
                  <option value="CZ">Czechia (CZK Kč)</option>
                  <option value="DK">Denmark (DKK kr)</option>
                  <option value="DJ">Djibouti (DJF)</option>
                  <option value="DM">Dominica (XCD $)</option>
                  <option value="DO">Dominican Republic (DOP $)</option>
                  <option value="EC">Ecuador (USD $)</option>
                  <option value="EG">Egypt (EGP E£)</option>
                  <option value="SV">El Salvador (USD $)</option>
                  <option value="GQ">Equatorial Guinea (XAF FCFA)</option>
                  <option value="ER">Eritrea (USD $)</option>
                  <option value="EE">Estonia (EUR €)</option>
                  <option value="SZ">Eswatini (USD $)</option>
                  <option value="ET">Ethiopia (ETB)</option>
                  <option value="FK">Falkland Islands (FKP £)</option>
                  <option value="FO">Faroe Islands (DKK kr)</option>
                  <option value="FJ">Fiji (FJD $)</option>
                  <option value="FI">Finland (EUR €)</option>
                  <option value="FR">France (EUR €)</option>
                  <option value="GF">French Guiana (EUR €)</option>
                  <option value="PF">French Polynesia (XPF CFPF)</option>
                  <option value="TF">French Southern Territories (EUR €)</option>
                  <option value="GA">Gabon (XOF F CFA)</option>
                  <option value="GM">Gambia (GMD)</option>
                  <option value="GE">Georgia (USD $)</option>
                  <option value="DE">Germany (EUR €)</option>
                  <option value="GH">Ghana (USD $)</option>
                  <option value="GI">Gibraltar (GBP £)</option>
                  <option value="GR">Greece (EUR €)</option>
                  <option value="GL">Greenland (DKK kr)</option>
                  <option value="GD">Grenada (XCD $)</option>
                  <option value="GP">Guadeloupe (EUR €)</option>
                  <option value="GT">Guatemala (GTQ Q)</option>
                  <option value="GG">Guernsey (GBP £)</option>
                  <option value="GN">Guinea (GNF FG)</option>
                  <option value="GW">Guinea-Bissau (XOF F CFA)</option>
                  <option value="GY">Guyana (GYD $)</option>
                  <option value="HT">Haiti (USD $)</option>
                  <option value="HN">Honduras (HNL L)</option>
                  <option value="HK">Hong Kong SAR (HKD HK$)</option>
                  <option value="HU">Hungary (HUF Ft)</option>
                  <option value="IS">Iceland (ISK kr)</option>
                  <option value="ID">Indonesia (IDR Rp)</option>
                  <option value="IQ">Iraq (USD $)</option>
                  <option value="IE">Ireland (EUR €)</option>
                  <option value="IM">Isle of Man (GBP £)</option>
                  <option value="IL">Israel (ILS ₪)</option>
                  <option value="IT">Italy (EUR €)</option>
                  <option value="JM">Jamaica (JMD $)</option>
                  <option value="JP">Japan (JPY ¥)</option>
                  <option value="JE">Jersey (USD $)</option>
                  <option value="JO">Jordan (USD $)</option>
                  <option value="KZ">Kazakhstan (KZT ₸)</option>
                  <option value="KE">Kenya (KES)</option>
                  <option value="KI">Kiribati (USD $)</option>
                  <option value="XK">Kosovo (EUR €)</option>
                  <option value="KW">Kuwait (USD $)</option>
                  <option value="KG">Kyrgyzstan (KGS)</option>
                  <option value="LA">Laos (LAK ₭)</option>
                  <option value="LV">Latvia (EUR €)</option>
                  <option value="LB">Lebanon (LBP L£)</option>
                  <option value="LS">Lesotho (USD $)</option>
                  <option value="LR">Liberia (USD $)</option>
                  <option value="LY">Libya (USD $)</option>
                  <option value="LI">Liechtenstein (CHF)</option>
                  <option value="LT">Lithuania (EUR €)</option>
                  <option value="LU">Luxembourg (EUR €)</option>
                  <option value="MO">Macao SAR (MOP)</option>
                  <option value="MG">Madagascar (USD $)</option>
                  <option value="MW">Malawi (MWK)</option>
                  <option value="MY">Malaysia (MYR RM)</option>
                  <option value="MV">Maldives (MVR)</option>
                  <option value="ML">Mali (XOF F CFA)</option>
                  <option value="MT">Malta (EUR €)</option>
                  <option value="MQ">Martinique (EUR €)</option>
                  <option value="MR">Mauritania (USD $)</option>
                  <option value="MU">Mauritius (MUR Rs)</option>
                  <option value="YT">Mayotte (EUR €)</option>
                  <option value="MX">Mexico (USD $)</option>
                  <option value="MD">Moldova (MDL)</option>
                  <option value="MC">Monaco (EUR €)</option>
                  <option value="MN">Mongolia (MNT ₮)</option>
                  <option value="ME">Montenegro (EUR €)</option>
                  <option value="MS">Montserrat (XCD $)</option>
                  <option value="MA">Morocco (MAD)</option>
                  <option value="MZ">Mozambique (USD $)</option>
                  <option value="MM">Myanmar (Burma) (MMK K)</option>
                  <option value="NA">Namibia (USD $)</option>
                  <option value="NR">Nauru (AUD $)</option>
                  <option value="NP">Nepal (NPR Rs)</option>
                  <option value="NL">Netherlands (EUR €)</option>
                  <option value="NC">New Caledonia (XPF CFPF)</option>
                  <option value="NZ">New Zealand (NZD $)</option>
                  <option value="NI">Nicaragua (NIO C$)</option>
                  <option value="NE">Niger (XOF F CFA)</option>
                  <option value="NG">Nigeria (NGN ₦)</option>
                  <option value="NU">Niue (NZD $)</option>
                  <option value="NF">Norfolk Island (AUD $)</option>
                  <option value="MK">North Macedonia (MKD)</option>
                  <option value="NO">Norway (USD $)</option>
                  <option value="OM">Oman (USD $)</option>
                  <option value="PK">Pakistan (PKR Rs)</option>
                  <option value="PS">Palestinian Territories (ILS ₪)</option>
                  <option value="PA">Panama (USD $)</option>
                  <option value="PG">Papua New Guinea (PGK)</option>
                  <option value="PY">Paraguay (PYG ₲)</option>
                  <option value="PE">Peru (PEN)</option>
                  <option value="PH">Philippines (PHP ₱)</option>
                  <option value="PN">Pitcairn Islands (NZD $)</option>
                  <option value="PL">Poland (PLN zł)</option>
                  <option value="PT">Portugal (EUR €)</option>
                  <option value="QA">Qatar (QAR)</option>
                  <option value="RE">Réunion (EUR €)</option>
                  <option value="RO">Romania (RON lei)</option>
                  <option value="RU">Russia (USD $)</option>
                  <option value="RW">Rwanda (RWF RF)</option>
                  <option value="WS">Samoa (WST)</option>
                  <option value="SM">San Marino (EUR €)</option>
                  <option value="ST">São Tomé &amp; Príncipe (STD)</option>
                  <option value="SA">Saudi Arabia (SAR)</option>
                  <option value="SN">Senegal (XOF F CFA)</option>
                  <option value="RS">Serbia (RSD)</option>
                  <option value="SC">Seychelles (USD $)</option>
                  <option value="SL">Sierra Leone (SLL)</option>
                  <option value="SG">Singapore (SGD $)</option>
                  <option value="SX">Sint Maarten (ANG)</option>
                  <option value="SK">Slovakia (EUR €)</option>
                  <option value="SI">Slovenia (EUR €)</option>
                  <option value="SB">Solomon Islands (SBD $)</option>
                  <option value="SO">Somalia (USD $)</option>
                  <option value="ZA">South Africa (USD $)</option>
                  <option value="GS">
                    South Georgia &amp; South Sandwich Islands (GBP £)
                  </option>
                  <option value="KR">South Korea (KRW ₩)</option>
                  <option value="SS">South Sudan (USD $)</option>
                  <option value="ES">Spain (EUR €)</option>
                  <option value="LK">Sri Lanka (LKR Rs)</option>
                  <option value="BL">St. Barthélemy (EUR €)</option>
                  <option value="SH">St. Helena (SHP £)</option>
                  <option value="KN">St. Kitts &amp; Nevis (XCD $)</option>
                  <option value="LC">St. Lucia (XCD $)</option>
                  <option value="MF">St. Martin (EUR €)</option>
                  <option value="PM">St. Pierre &amp; Miquelon (EUR €)</option>
                  <option value="VC">St. Vincent &amp; Grenadines (XCD $)</option>
                  <option value="SD">Sudan (USD $)</option>
                  <option value="SR">Suriname (USD $)</option>
                  <option value="SJ">Svalbard &amp; Jan Mayen (USD $)</option>
                  <option value="SE">Sweden (SEK kr)</option>
                  <option value="CH">Switzerland (CHF)</option>
                  <option value="TW">Taiwan (TWD $)</option>
                  <option value="TJ">Tajikistan (TJS)</option>
                  <option value="TZ">Tanzania (TZS)</option>
                  <option value="TH">Thailand (THB ฿)</option>
                  <option value="TL">Timor-Leste (USD $)</option>
                  <option value="TG">Togo (XOF F CFA)</option>
                  <option value="TK">Tokelau (NZD $)</option>
                  <option value="TO">Tonga (TOP T$)</option>
                  <option value="TT">Trinidad &amp; Tobago (TTD $)</option>
                  <option value="TA">Tristan da Cunha (GBP £)</option>
                  <option value="TN">Tunisia (USD $)</option>
                  <option value="TR">Turkey (USD $)</option>
                  <option value="TM">Turkmenistan (USD $)</option>
                  <option value="TC">Turks &amp; Caicos Islands (USD $)</option>
                  <option value="TV">Tuvalu (AUD $)</option>
                  <option value="UM">U.S. Outlying Islands (USD $)</option>
                  <option value="UG">Uganda (UGX)</option>
                  <option value="UA">Ukraine (UAH ₴)</option>
                  <option value="AE">United Arab Emirates (AED)</option>
                  <option value="GB">United Kingdom (GBP £)</option>
                  <option value="US">United States (USD $)</option>
                  <option value="UY">Uruguay (UYU $)</option>
                  <option value="UZ">Uzbekistan (UZS)</option>
                  <option value="VU">Vanuatu (VUV)</option>
                  <option value="VA">Vatican City (EUR €)</option>
                  <option value="VE">Venezuela (USD $)</option>
                  <option value="VN">Vietnam (VND ₫)</option>
                  <option value="WF">Wallis &amp; Futuna (XPF CFPF)</option>
                  <option value="EH">Western Sahara (MAD)</option>
                  <option value="YE">Yemen (YER)</option>
                  <option value="ZM">Zambia (USD $)</option>
                  <option value="ZW">Zimbabwe (USD $)</option>
                </select></label
              >
            </form>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;

