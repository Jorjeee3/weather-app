(()=>{"use strict";var n={424:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),s=t.n(c),d=new URL(t(946),t.b),l=a()(o()),m=s()(d);l.push([n.id,"* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.spotlight-section {\r\n    background-image: url("+m+");\r\n    background-position: 0 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    padding: 1.875em 0 3.125em;\r\n    box-shadow: -1px 4px 18px 2px rgba(34, 60, 80, 0.2);\r\n}\r\n\r\n.container {\r\n    width: 100%;\r\n    max-width: 75em;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n}\r\n\r\n.spotlight-content {\r\n    width: 100%;\r\n    max-width: 37.5em;\r\n    margin: 0 auto 0;\r\n}\r\n\r\n.spotlight-label {\r\n    color: black;\r\n    position: relative;\r\n}\r\n\r\n.spotlight-input {\r\n    width: 100%;\r\n    max-width: 37.5em;\r\n    border-radius: 1.875em;\r\n    padding: 1.125em;\r\n    border: 0;\r\n    margin-bottom: 3.125em;\r\n}\r\n\r\n.spotlight-cities-list {\r\n    background-color: rgb(255, 255, 255);\r\n    max-height: 12.25em;\r\n    width: 37.5em;\r\n    display: none;\r\n    overflow-y: hidden;\r\n    border-radius: 1.875em;\r\n    padding: 0.625em 0.625em;\r\n    position: absolute;\r\n    box-shadow: 0px 0px 12px 1px rgba(34, 60, 80, 0.2);\r\n    left: 0;\r\n    top: 30px;\r\n    z-index: 10;\r\n}\r\n\r\n.spotlight-button {\r\n    position: relative;\r\n}\r\n\r\n.submit-icon {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.button-cities-item {\r\n    padding: 0.625em;\r\n    background-color: #fff;\r\n    border-radius: 1.875em;\r\n    width: 100%;\r\n    text-align: left;\r\n    border: 0;\r\n}\r\n\r\n.button-cities-item:focus {\r\n    background-color: #90CAF9;\r\n    color: #fff;\r\n    outline: 0;\r\n}\r\n\r\n.button-cities-item:hover {\r\n    background-color: #a4cff3;\r\n    color: #FAFAFA;\r\n}\r\n\r\n.spotlight-cities-item:nth-child(4) ~ li {\r\n    display: none;\r\n}\r\n\r\n.spotlight-cities-item:first-child {\r\n    padding-top: 0.625em;\r\n}\r\n\r\n.spotlight-cities-item:last-child {\r\n    padding-bottom: 0.625em;\r\n}\r\n\r\n.city-not-found {\r\n    padding: 0.625em;\r\n    color: #9E9E9E;\r\n    text-align: center;\r\n}\r\n\r\n.spotlight-button {\r\n    width: 2.5em;\r\n    height: 2.5em;\r\n    background-color: #90CAF9;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: -1%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.weather-card {\r\n    width: 100%;\r\n    max-width: 37.5em;\r\n    background-color: rgb(255, 255, 255, 0.85);\r\n    border-radius: 1.875em;\r\n    padding: 1.25em;\r\n    z-index: 5;\r\n}\r\n\r\n.data-block {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 1.25em;\r\n    position: relative;\r\n}\r\n\r\n.weather-data {\r\n    display: flex;\r\n}\r\n\r\n.weather-icon-wrapper {\r\n    width: 6.25em;\r\n    height: 6.25em;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 1.875em;\r\n    margin-right: 1.25em;\r\n}\r\n\r\n.weather-block {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.weater-temperature {\r\n    font-size: 1.125em;\r\n}\r\n\r\n.weather-name {\r\n    display: block;\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n}\r\n\r\n.weather-description {\r\n    font-size: 1em;\r\n    color: #9E9E9E;\r\n    font-weight: 300;\r\n}\r\n\r\n.horisontal-line {\r\n    background-color: #BFDCE8;\r\n    margin-bottom: 1.25em;\r\n    height: 0.0625em;\r\n    border: 0;\r\n}\r\n\r\n.city-data {\r\n    text-align: right;\r\n}\r\n\r\n.city-name-title {\r\n    font-size: 1.125em;\r\n    margin-bottom: 1.375em;\r\n}\r\n\r\n.current-date {\r\n    font-size: 1em;\r\n    color: #9E9E9E;\r\n    font-weight: 300;\r\n}\r\n\r\n.min-max-block {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.temperature {\r\n    width: 50%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.temperature:nth-child(2) {\r\n    border-left: 0.0625em solid #BFDCE8;\r\n}\r\n\r\n.min, .max {\r\n    margin-bottom: 0.875em;\r\n    font-size: 1em;\r\n    color: #9E9E9E;\r\n    font-weight: 300;\r\n}\r\n\r\n.min-degree, .max-degree {\r\n    font-size: 18px;\r\n}\r\n\r\n/* -------------------------------popular-cities-section */\r\n\r\n.popular-cities-section {\r\n    padding-top: 4.375em;\r\n    margin-bottom: 6.25em;\r\n}\r\n\r\n.popular-cities-title {\r\n    text-align: center;\r\n    margin-bottom: 2.1875em;\r\n    font-size: 2em;\r\n}\r\n\r\n.popular-cities-list {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    max-width: 62.5em;\r\n    height: auto;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.popular-cities-item {\r\n    width: 100%;\r\n    max-width: 13.75em;\r\n    height: auto;\r\n    position: relative;\r\n}\r\n\r\n.popular-cities-image {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.popular-cities-button {\r\n    position: absolute;\r\n    bottom: 5%;\r\n    left: 50%;\r\n    transform: translate(-50%, -10%);\r\n    width: 12.5em;\r\n    height: 2.25em;\r\n    border-radius: 1.875em;\r\n    border: 0;\r\n}\r\n\r\n.popular-cities-button:active {\r\n    opacity: 0.6;\r\n}\r\n\r\n/* -------------------------------question-section */\r\n\r\n.question-section {\r\n    margin-bottom: 6.25em;\r\n}\r\n\r\n.question-title {\r\n    text-align: center;\r\n    margin-bottom: 2.1875em;\r\n    font-size: 2em;\r\n}\r\n\r\n.question-tab {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border: 0;\r\n    background-color:#FAFAFA;\r\n    border-radius: 1.875em;\r\n    width: 100%;\r\n    max-width: 62.5em;\r\n    padding: 1.25em;\r\n    margin-bottom: 0.3125em;\r\n}\r\n\r\n.question-subtitle {\r\n    font-size: 1em;\r\n    font-weight: 400;\r\n}\r\n\r\n.question-list {\r\n    width: 100%;\r\n    max-width: 62.5em;\r\n    margin: 0 auto;\r\n    padding: 0;\r\n}\r\n\r\n.question-item-content {\r\n    display: none;\r\n    background-color:#FAFAFA;\r\n    border-radius: 1.875em;\r\n    width: 100%;\r\n    max-width: 62.5em;\r\n    line-height: 1.5em;\r\n    margin-bottom: 1.5em;\r\n    padding: 1.25em 0.9375em;\r\n}\r\n\r\n.question-icon {\r\n    transition: all .2s ease-out;\r\n}\r\n\r\n\r\n.display-block {\r\n    display: block;\r\n}\r\n\r\n.display-none {\r\n    display: none;\r\n}\r\n\r\n/* -------------------------------footer-section */\r\n\r\n.footer {\r\n    background-color: #FAFAFA;\r\n    padding: 2.5em 0;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 62.5em) and (min-width: 29.99em) { \r\n\r\n.popular-cities-list {\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 32.5em;\r\n    height: auto;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n}\r\n\r\n.popular-cities-item {\r\n    /* width: 50%; */\r\n    display: inline-block;\r\n    max-width: 13.75em;\r\n    height: auto;\r\n    position: relative;\r\n    margin-bottom: 4.2em;\r\n}\r\n\r\n.popular-cities-item:nth-child(2n) {\r\n    margin-left: 2.5em;\r\n    float: right;\r\n}\r\n\r\n}\r\n\r\n@media screen and (max-width: 30em) { \r\n\r\n.popular-cities-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 32.5em;\r\n    height: auto;\r\n    padding: 0;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n\r\n.popular-cities-item {\r\n    width: 100%;\r\n    max-width: 13.75em;\r\n    height: auto;\r\n    position: relative;\r\n    margin-bottom: 2.5em;\r\n    text-align: center;\r\n}\r\n\r\n}\r\n\r\n\r\n",""]);const u=l},24:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n    line-height: 1.15; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n  }\n  \n  /* Sections\n     ========================================================================== */\n  \n  /**\n   * Remove the margin in all browsers.\n   */\n  \n  body {\n    margin: 0;\n  }\n  \nul, li {\n  list-style: none;\n}\n\n  /**\n   * Render the `main` element consistently in IE.\n   */\n  \n  main {\n    display: block;\n  }\n  \n  /**\n   * Correct the font size and margin on `h1` elements within `section` and\n   * `article` contexts in Chrome, Firefox, and Safari.\n   */\n  \n  h1,h2,h3,h4,h5,h6 {\n    margin: 0;\n  }\n  \n  /* Grouping content\n     ========================================================================== */\n  \n  /**\n   * 1. Add the correct box sizing in Firefox.\n   * 2. Show the overflow in Edge and IE.\n   */\n  \n  hr {\n    box-sizing: content-box; /* 1 */\n    height: 0; /* 1 */\n    overflow: visible; /* 2 */\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  pre {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /* Text-level semantics\n     ========================================================================== */\n  \n  /**\n   * Remove the gray background on active links in IE 10.\n   */\n  \n  a {\n    background-color: transparent;\n  }\n  \n  /**\n   * 1. Remove the bottom border in Chrome 57-\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n   */\n  \n  abbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n  }\n  \n  /**\n   * Add the correct font weight in Chrome, Edge, and Safari.\n   */\n  \n  b,\n  strong {\n    font-weight: bolder;\n  }\n  \n  /**\n   * 1. Correct the inheritance and scaling of font size in all browsers.\n   * 2. Correct the odd `em` font sizing in all browsers.\n   */\n  \n  code,\n  kbd,\n  samp {\n    font-family: monospace, monospace; /* 1 */\n    font-size: 1em; /* 2 */\n  }\n  \n  /**\n   * Add the correct font size in all browsers.\n   */\n  \n  small {\n    font-size: 80%;\n  }\n  \n  /**\n   * Prevent `sub` and `sup` elements from affecting the line height in\n   * all browsers.\n   */\n  \n  sub,\n  sup {\n    font-size: 75%;\n    line-height: 0;\n    position: relative;\n    vertical-align: baseline;\n  }\n  \n  sub {\n    bottom: -0.25em;\n  }\n  \n  sup {\n    top: -0.5em;\n  }\n  \n  /* Embedded content\n     ========================================================================== */\n  \n  /**\n   * Remove the border on images inside links in IE 10.\n   */\n  \n  img {\n    border-style: none;\n  }\n  \n  /* Forms\n     ========================================================================== */\n  \n  /**\n   * 1. Change the font styles in all browsers.\n   * 2. Remove the margin in Firefox and Safari.\n   */\n  \n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n  }\n  \n  /**\n   * Show the overflow in IE.\n   * 1. Show the overflow in Edge.\n   */\n  \n  button,\n  input { /* 1 */\n    overflow: visible;\n  }\n  \n  /**\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\n   * 1. Remove the inheritance of text transform in Firefox.\n   */\n  \n  button,\n  select { /* 1 */\n    text-transform: none;\n  }\n  \n  /**\n   * Correct the inability to style clickable types in iOS and Safari.\n   */\n  \n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n  \n  /**\n   * Remove the inner border and padding in Firefox.\n   */\n  \n  button::-moz-focus-inner,\n  [type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n  }\n  \n  /**\n   * Restore the focus styles unset by the previous rule.\n   */\n  \n  button:-moz-focusring,\n  [type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n  }\n  \n  /**\n   * Correct the padding in Firefox.\n   */\n  \n  fieldset {\n    padding: 0.35em 0.75em 0.625em;\n  }\n  \n  /**\n   * 1. Correct the text wrapping in Edge and IE.\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\n   * 3. Remove the padding so developers are not caught out when they zero out\n   *    `fieldset` elements in all browsers.\n   */\n  \n  legend {\n    box-sizing: border-box; /* 1 */\n    color: inherit; /* 2 */\n    display: table; /* 1 */\n    max-width: 100%; /* 1 */\n    padding: 0; /* 3 */\n    white-space: normal; /* 1 */\n  }\n  \n  /**\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n   */\n  \n  progress {\n    vertical-align: baseline;\n  }\n  \n  /**\n   * Remove the default vertical scrollbar in IE 10+.\n   */\n  \n  textarea {\n    overflow: auto;\n  }\n  \n  /**\n   * 1. Add the correct box sizing in IE 10.\n   * 2. Remove the padding in IE 10.\n   */\n  \n  [type="checkbox"],\n  [type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n  }\n  \n  /**\n   * Correct the cursor style of increment and decrement buttons in Chrome.\n   */\n  \n  [type="number"]::-webkit-inner-spin-button,\n  [type="number"]::-webkit-outer-spin-button {\n    height: auto;\n  }\n  \n  /**\n   * 1. Correct the odd appearance in Chrome and Safari.\n   * 2. Correct the outline style in Safari.\n   */\n  \n  [type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    outline-offset: -2px; /* 2 */\n  }\n  \n  /**\n   * Remove the inner padding in Chrome and Safari on macOS.\n   */\n  \n  [type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n  \n  /**\n   * 1. Correct the inability to style clickable types in iOS and Safari.\n   * 2. Change font properties to `inherit` in Safari.\n   */\n  \n  ::-webkit-file-upload-button {\n    -webkit-appearance: button; /* 1 */\n    font: inherit; /* 2 */\n  }\n  \n  /* Interactive\n     ========================================================================== */\n  \n  /*\n   * Add the correct display in Edge, IE 10+, and Firefox.\n   */\n  \n  details {\n    display: block;\n  }\n  \n  /*\n   * Add the correct display in all browsers.\n   */\n  \n  summary {\n    display: list-item;\n  }\n  \n  /* Misc\n     ========================================================================== */\n  \n  /**\n   * Add the correct display in IE 10+.\n   */\n  \n  template {\n    display: none;\n  }\n  \n  /**\n   * Add the correct display in IE 10.\n   */\n  \n  [hidden] {\n    display: none;\n  }',""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},548:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),d=t(565),l=t.n(d),m=t(216),u=t.n(m),p=t(589),h=t.n(p),g=t(424),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),o()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},74:(n,e,t)=>{var r=t(379),o=t.n(r),i=t(795),a=t.n(i),c=t(569),s=t.n(c),d=t(565),l=t.n(d),m=t(216),u=t.n(m),p=t(589),h=t.n(p),g=t(24),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),o()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,m="".concat(d," ").concat(l);i[d]=l+1;var u=t(m),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var h=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:m,updater:h,references:1})}a.push(m)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var s=r(n,o),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},138:(n,e,t)=>{var r=t(670),o=t(626);const i=document.querySelector(".spotlight-input"),a=document.querySelector(".spotlight-cities-list"),c=document.querySelector(".spotlight-button"),s=document.querySelector(".button-dubai"),d=document.querySelector(".button-london"),l=document.querySelector(".button-new-york"),m=document.querySelector(".button-paris"),u=(document.querySelectorAll(".question-item-content"),document.querySelectorAll(".question-tab"));let p;function h(){const n=document.querySelectorAll(".button-cities-item");console.log(n),n.forEach((function(n){n.addEventListener("click",(()=>{console.log(n.value),i.value=n.value,a.classList.remove("display-block")}))}))}function g(n){return n.charAt(0).toUpperCase()+n.slice(1)}function f(){const n=new Date,e=n.getFullYear(),t=n.getMonth();return`${n.getDate()} ${r.Z[t]} ${e}`}function b(){window.scroll({left:0,top:0,behavior:"smooth"})}document.querySelectorAll(".item-city"),i.addEventListener("input",(()=>{clearTimeout(p),p=setTimeout((()=>y(i.value)),800)})),i.addEventListener("input",(()=>{""===i.value?a.classList.remove("display-block"):""!==i.value&&a.classList.add("display-block")})),document.addEventListener("DOMContentLoaded",(()=>{window.addEventListener("click",(n=>{const e=n.target;e.closest(".spotlight-cities-list")||e.closest(".spotlight-cities-item")||a.classList.remove("display-block")}))})),c.addEventListener("click",(n=>{n.preventDefault(),async function(){let n=i.value;(0,o.Cd)(n).then((function(n){document.querySelector(".weather-icon");const e=document.querySelector(".weather-icon-wrapper"),t=document.querySelector(".city-name-title"),r=document.querySelector(".weater-temperature"),o=document.querySelector(".weather-name"),i=document.querySelector(".weather-description"),a=document.querySelector(".current-date"),c=document.querySelector(".min-degree"),s=document.querySelector(".max-degree");e.innerHTML=`<img src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,r.innerHTML=Math.round((n.main.temp-32)/1.8)+"°C",console.log(n.main.temp),t.textContent=`${n.name}, ${n.sys.country}`,o.textContent=n.weather[0].main,i.textContent=n.weather[0].description,a.textContent=f(),c.textContent=Math.round((n.main.temp_min-32)/1.8)+"°C",s.textContent=Math.round((n.main.temp_max-32)/1.8)+"°C",i.textContent=g(i.textContent)}));const e=(0,o.Cd)(cityName)[0],t=(document.querySelector(".weather-icon"),document.querySelector(".weather-icon-wrapper")),r=document.querySelector(".city-name-title"),a=document.querySelector(".weater-temperature"),c=document.querySelector(".weather-name"),s=document.querySelector(".weather-description"),d=document.querySelector(".current-date"),l=document.querySelector(".min-degree"),m=document.querySelector(".max-degree");t.innerHTML=`<img src="http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png">`,a.innerHTML=Math.round(e.main.temp-273)+"°C",r.textContent=`${e.name}, ${e.sys.country}`,c.textContent=e.weather[0].main,s.textContent=e.weather[0].description,d.textContent=f(),l.textContent=Math.round(e.main.temp_min-273)+"°C",m.textContent=Math.round(e.main.temp_max-273)+"°C",s.textContent=g(s.textContent)}(),i.value="",a.classList.remove("display-block")})),s.addEventListener("click",(()=>{let n;(0,o.Cd)("dubai").then((function(e){n=e,document.querySelector(".weather-icon");const t=document.querySelector(".weather-icon-wrapper"),r=document.querySelector(".city-name-title"),o=document.querySelector(".weater-temperature"),i=document.querySelector(".weather-name"),a=document.querySelector(".weather-description"),c=document.querySelector(".current-date"),s=document.querySelector(".min-degree"),d=document.querySelector(".max-degree");t.innerHTML=`<img src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,o.innerHTML=Math.round((n.main.temp-32)/1.8)+"°C",console.log(n.main.temp),r.textContent=`${n.name}, ${n.sys.country}`,i.textContent=n.weather[0].main,a.textContent=n.weather[0].description,c.textContent=f(),s.textContent=Math.round((n.main.temp_min-32)/1.8)+"°C",d.textContent=Math.round((n.main.temp_max-32)/1.8)+"°C",a.textContent=g(a.textContent)})),b()})),d.addEventListener("click",(()=>{let n;(0,o.Cd)("london").then((function(e){n=e,document.querySelector(".weather-icon");const t=document.querySelector(".weather-icon-wrapper"),r=document.querySelector(".city-name-title"),o=document.querySelector(".weater-temperature"),i=document.querySelector(".weather-name"),a=document.querySelector(".weather-description"),c=document.querySelector(".current-date"),s=document.querySelector(".min-degree"),d=document.querySelector(".max-degree");t.innerHTML=`<img src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,o.innerHTML=Math.round((n.main.temp-32)/1.8)+"°C",console.log(n.main.temp),r.textContent=`${n.name}, ${n.sys.country}`,i.textContent=n.weather[0].main,a.textContent=n.weather[0].description,c.textContent=f(),s.textContent=Math.round((n.main.temp_min-32)/1.8)+"°C",d.textContent=Math.round((n.main.temp_max-32)/1.8)+"°C",a.textContent=g(a.textContent)})),b()})),l.addEventListener("click",(()=>{let n;(0,o.Cd)("New York").then((function(e){n=e,document.querySelector(".weather-icon");const t=document.querySelector(".weather-icon-wrapper"),r=document.querySelector(".city-name-title"),o=document.querySelector(".weater-temperature"),i=document.querySelector(".weather-name"),a=document.querySelector(".weather-description"),c=document.querySelector(".current-date"),s=document.querySelector(".min-degree"),d=document.querySelector(".max-degree");t.innerHTML=`<img src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,o.innerHTML=Math.round((n.main.temp-32)/1.8)+"°C",console.log(n.main.temp),r.textContent=`${n.name}, ${n.sys.country}`,i.textContent=n.weather[0].main,a.textContent=n.weather[0].description,c.textContent=f(),s.textContent=Math.round((n.main.temp_min-32)/1.8)+"°C",d.textContent=Math.round((n.main.temp_max-32)/1.8)+"°C",a.textContent=g(a.textContent)})),b()})),m.addEventListener("click",(()=>{let n;(0,o.Cd)("paris").then((function(e){n=e,document.querySelector(".weather-icon");const t=document.querySelector(".weather-icon-wrapper"),r=document.querySelector(".city-name-title"),o=document.querySelector(".weater-temperature"),i=document.querySelector(".weather-name"),a=document.querySelector(".weather-description"),c=document.querySelector(".current-date"),s=document.querySelector(".min-degree"),d=document.querySelector(".max-degree");t.innerHTML=`<img src="http://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png">`,o.innerHTML=Math.round((n.main.temp-32)/1.8)+"°C",console.log(n.main.temp),r.textContent=`${n.name}, ${n.sys.country}`,i.textContent=n.weather[0].main,a.textContent=n.weather[0].description,c.textContent=f(),s.textContent=Math.round((n.main.temp_min-32)/1.8)+"°C",d.textContent=Math.round((n.main.temp_max-32)/1.8)+"°C",a.textContent=g(a.textContent)})),b()}));const y=async n=>{(0,o.MC)(n).then((n=>{(n=>{if(n.data.length>0){const e=n.data.map((n=>`\n        <li class="spotlight-cities-item">\n          <button class="button-cities-item" value="${n.city}, ${n.countryCode}" type="button">\n            ${n.city}, ${n.countryCode}\n          </button> \n        </li>\n        `)).join("");a.innerHTML=e,h()}else a.innerHTML='\n    <div class="city-not-found">City not found, please try to change your search query</div>\n    '})(n)})),h()};!function(){let n=document.querySelectorAll(".question-icon");u.forEach((e=>{e.addEventListener("click",(t=>{for(let t=0;t<=n.length;t++)e.nextElementSibling.classList.contains("display-block")?(e.nextElementSibling.classList.remove("display-block"),e.children[1].style.transform="rotate(0deg)"):(e.nextElementSibling.classList.add("display-block"),e.children[1].style.transform="rotate(-180deg)")}))}))}()},626:(n,e,t)=>{async function r(n){if(!n.length)return[];console.log(n);const e=await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${n}&limit=10`,{method:"GET",headers:{"X-RapidAPI-Key":"5ccc2923a5mshd8c96e49b12a18dp17b0f7jsn9deedd97ccf7","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}});return await e.json()}async function o(n){let e,t=n;try{e=(await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${t}&appid=b39ee5e4e806355fcce52d45a1d0f946&units=imperial`)).data}catch(n){console.log(n)}return e}t.d(e,{Cd:()=>o,MC:()=>r})},670:(n,e,t)=>{t.d(e,{Z:()=>r});const r=["January","February","March","April","May","June","July","August","September","October","November","December"]},946:(n,e,t)=>{n.exports=t.p+"1ffbbf8557c533cf4be9.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,t(138),t(74),t(548),t(670),t(626)})();