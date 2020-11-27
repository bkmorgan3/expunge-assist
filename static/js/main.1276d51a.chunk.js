(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{34:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t.n(r),i=t(22),o=t.n(i),s=(t(34),t(5)),l=t(27),u=t(3),j=t(4),d={sm:"(min-width: 320px)",md:"(min-width: 960px)",lg:"(min-width: 1200px)"};function b(){var e=Object(u.a)(["\n  background:black;\n  color:white;\n  border:none;\n  width:143px;\n  height:40px;\n  border-radius: 24px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  font-size:.875em;\n  box-shadow: 4px 4px 16px 0px #3D0066 25%;\n  & :nth-child(1) {\n    margin-right:10px;\n  }\n"]);return b=function(){return e},e}function h(){var e=Object(u.a)(["\n  display:flex;\n  justify-content:flex-end;\n  @media only screen and "," {\n    justify-content:flex-start;\n  }\n"]);return h=function(){return e},e}function m(){var e=Object(u.a)(["\n* {\n  margin:0;\n  pardding:0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: #9903ff;\n  font-family: Roboto;\n  font-weight: 400;\n}\n\nh1 {\n  font-weight: 400;\n  font-size: 2.125rem;\n  margin: 1rem 0;\n  @media only screen and "," {\n    font-size:3rem;\n    font-weight:700;\n  }\n}\n\nh2 {\n  font-weight:500;\n  font-size:1.25rem;\n  margin: 1rem 0;\n\n}\n\nli {\n  list-style-type:none;\n}\n\n"]);return m=function(){return e},e}var g=Object(j.a)(m(),d.md),p=j.b.div(h(),d.md),O=j.b.button(b()),x=t(13),f=t.p+"static/media/iconBlack.bc853aaf.svg",y=t.p+"static/media/iconWhite.efc331e7.svg";function v(){var e=Object(u.a)(["\n  background:#F7EBFF;\n  color:black;\n  height:200px;\n  h2 {\n    margin: 0;\n  }\n  p {\n    color:3D0066;\n    opacity:30%;\n  }\n"]);return v=function(){return e},e}function w(){var e=Object(u.a)(["\n  background: ",";\n  color: ",";\n  display:flex;\n  padding: 1.5em 0 0 1.5em;\n  @media only screen and "," {\n    margin: 0 0 0 2.5em;\n  }\n  div {\n    display:none;\n    margin-left: 1.8em;\n    text-transform:uppercase;\n    font-size:.75rem;\n    @media only screen and "," {\n      display:flex;\n      flex-direction:column;\n    }\n  }\n"]);return w=function(){return e},e}var k=j.b.div(w(),(function(e){return e.background}),(function(e){return e.color}),d.md,d.md),P=j.b.div(v()),C=function(e){var n,t,a,i,o,s=e.pageNumber,l=Object(r.useState)(!0),u=Object(x.a)(l,2),j=u[0],d=u[1];Object(r.useEffect)((function(){b(window.innerWidth)})),n=0===s?y:f,0===s?(t="#9903ff",o="white"):(t="white",o="black"),3===s?(a=1,i=!0):5===s?(a=2,i=!0):7===s?(a=3,i=!0):9===s?(a=4,i=!0):11===s?(a=5,i=!0):13===s?(a=6,i=!0):(a=0,i=!1);var b=function(e){s>2&&d(e>960)};return window.addEventListener("resize",(function(){return b(window.innerWidth)})),Object(c.jsxs)(c.Fragment,{children:[j&&Object(c.jsxs)(k,{background:t,color:o,className:"Header",children:[Object(c.jsx)("img",{src:n,alt:""}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"The Record"}),Object(c.jsx)("p",{children:"Clearance Project"})]})]}),i&&Object(c.jsxs)(P,{children:[1===a&&Object(c.jsx)("h2",{children:"Introduce Yourself!"}),2===a&&Object(c.jsx)("h2",{children:"Life Changes"}),3===a&&Object(c.jsx)("h2",{children:"Involvement"}),4===a&&Object(c.jsx)("h2",{children:"Goals"}),5===a&&Object(c.jsx)("h2",{children:"Why"}),6===a&&Object(c.jsx)("h2",{children:"My Personal Statement"}),a<6&&Object(c.jsxs)("p",{children:["Step ",a," of 5"]}),6===a&&Object(c.jsx)("p",{children:"Completed"})]})]})};function T(){var e=Object(u.a)(["\nmargin-top:40px;\n"]);return T=function(){return e},e}var I=j.b.div(T()),N=function(e){var n=e.goToPage;return Object(c.jsxs)(I,{children:[Object(c.jsx)("h2",{children:"Before you begin"}),Object(c.jsx)("p",{children:"Please make sure you are eligible for getting your record cleared. If you need help with this please email placeholder@website.com."}),Object(c.jsx)("p",{children:"Be aware your statement is stored locally on your device, and never transmitted to our servers or any third-party"}),Object(c.jsx)("p",{children:"This software is developed by a non-governmental third party, Code for America"}),Object(c.jsx)("p",{children:"Please also review our Privacy Policy and Terms of Use before beginning."}),Object(c.jsx)("p",{children:"Please allocate at least 30 minutes of time to complete this."}),Object(c.jsx)("p",{children:"If at anytime you are confused please click the question mark button for guidance."}),Object(c.jsx)("button",{onClick:function(){return n(2)},children:"I UNDERSTAND"})]})},S=t(2),A=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage,a=function(e){var c=e.currentTarget.name,r=e.currentTarget.value;"name"===c?t(Object(S.a)(Object(S.a)({},n),{},{name:r})):"age"===c?t(Object(S.a)(Object(S.a)({},n),{},{age:r})):"introduction"===c&&t(Object(S.a)(Object(S.a)({},n),{},{introduction:r}))};return Object(c.jsx)("div",{className:"Step1",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("p",{children:"What is your name?"}),Object(c.jsx)("input",{type:"text",placeholder:"Firstname Lastname",name:"name",onChange:a}),Object(c.jsx)("p",{children:"How old are you?"}),Object(c.jsx)("input",{type:"number",name:"age",onChange:a}),Object(c.jsx)("span",{children:"years old"}),Object(c.jsx)("p",{children:"Please describe what has been going on in your life recently. (2 sentences maximum)"}),Object(c.jsx)("input",{type:"textarea",name:"introduction",onChange:a}),Object(c.jsx)("button",{onClick:function(){return r(1)},children:"BACK"}),Object(c.jsx)("button",{onClick:function(){return r(4)},children:"LOOKS GOOD"})]})})},F=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage;return Object(c.jsxs)("div",{className:"Step2",children:[Object(c.jsx)("p",{children:"Finish the sentence: Since my last conviction my life has changed for the..."}),Object(c.jsx)("input",{type:"text",placeholder:"I have experienced...",name:"lifeChanges",onChange:function(e){var c=e.currentTarget.name,r=e.currentTarget.value;"lifeChanges"===c&&t(Object(S.a)(Object(S.a)({},n),{},{lifeChanges:r}))}}),Object(c.jsx)("button",{onClick:function(){return r(3)},children:"BACK"}),Object(c.jsx)("button",{onClick:function(){return r(6)},children:"LOOKS GOOD"})]})},D=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage,a=function(e){var c=e.target.name,r=e.target.value;"communityServiceOrgName"===c?t(Object(S.a)(Object(S.a)({},n),{},{communityServiceOrgName:r})):"communityServiceDescription"===c?t(Object(S.a)(Object(S.a)({},n),{},{communityServiceDescription:r})):"jobName"===c?t(Object(S.a)(Object(S.a)({},n),{},{jobName:r})):"jobTitle"===c?t(Object(S.a)(Object(S.a)({},n),{},{jobTitle:r})):"jobDescription"===c?t(Object(S.a)(Object(S.a)({},n),{},{jobDescription:r})):"difficultyFindingWorkDescription"===c&&t(Object(S.a)(Object(S.a)({},n),{},{difficultyFindingWorkDescription:r}))};return Object(c.jsxs)("div",{className:"Step3",children:[Object(c.jsx)("p",{children:"Please check all that apply: I am involved with..."}),Object(c.jsx)("p",{children:"What is the name of the community service organization that you are involved with?"}),Object(c.jsx)("input",{type:"text",name:"communityServiceOrgName",onChange:a}),Object(c.jsx)("p",{children:"Please describe what you do at this community service organization (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"communityServiceDescription",onChange:a}),Object(c.jsx)("p",{children:"What is the name of the company you work for?"}),Object(c.jsx)("input",{type:"text",name:"jobName",onChange:a}),Object(c.jsx)("p",{children:"What is your current job title?"}),Object(c.jsx)("input",{type:"text",name:"jobTitle",onChange:a}),Object(c.jsx)("p",{children:"Please describe what you do at your current job. (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"jobDescription",onChange:a}),Object(c.jsx)("p",{children:"Please describe why you are having trouble finding work. (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"difficultyFindingWorkDescription",onChange:a}),Object(c.jsx)("p",{children:"Do you believe that having your record cleared would help you find a job and be more involved in your community?"}),Object(c.jsx)("button",{onClick:function(){return r(5)},children:"BACK"}),Object(c.jsx)("button",{onClick:function(){return r(8)},children:"LOOKS GOOD"})]})},W=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage,a=function(e){var c=e.currentTarget.name,r=e.currentTarget.value;"goals"===c?t(Object(S.a)(Object(S.a)({},n),{},{goals:r})):"goalsHow"===c&&t(Object(S.a)(Object(S.a)({},n),{},{goalsHow:r}))};return Object(c.jsxs)("div",{className:"Step4",children:[Object(c.jsx)("p",{children:"Please describe what goals you are working towards acheiving right now. (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"goals",placeholder:"I am working towards...",onChange:a}),Object(c.jsx)("p",{children:"How are you working towards acheiving these goals? (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"goalsHow",placeholder:"I have been...",onChange:a}),Object(c.jsx)("button",{onClick:function(){return r(7)},children:"BACK"}),Object(c.jsx)("button",{onClick:function(){return r(10)},children:"LOOKS GOOD"})]})},L=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage,a=function(e){var c=e.currentTarget.name,r=e.currentTarget.value;"clearRecordWhy"===c?t(Object(S.a)(Object(S.a)({},n),{},{clearRecordWhy:r})):"clearRecordHow"===c&&t(Object(S.a)(Object(S.a)({},n),{},{clearRecordHow:r}))};return Object(c.jsxs)("div",{className:"Step5",children:[Object(c.jsx)("p",{children:"Please finish this sentence: I want to clear my record because..."}),Object(c.jsx)("input",{type:"text",name:"clearRecordWhy",placeholder:"I am...",onChange:a}),Object(c.jsx)("p",{children:"How will clearing your record change your life or help you? (2 sentences maximum)"}),Object(c.jsx)("input",{type:"text",name:"clearRecordHow",placeholder:"Clearing my record will...",onChange:a}),Object(c.jsx)("button",{onClick:function(){return r(9)},children:"BACK"}),Object(c.jsx)("button",{onClick:function(){return r(12)},children:"LOOKS GOOD"})]})},R=t(16),H=t.n(R),U=t(26);function B(){var e=Object(u.a)(["\n  font-size:10px;\n  color:black;\n  max-width:350px;\n"]);return B=function(){return e},e}var E=j.b.div(B()),z=function(e){var n=e.inputs,t=e.setInputs,r=e.goToPage;return Object(c.jsxs)("div",{className:"Download",children:[Object(c.jsx)("p",{children:"Previewing Final Statement"}),Object(c.jsx)(E,{id:"personalStatementElement",children:Object(c.jsxs)("p",{children:["October 26th, 2020",Object(c.jsx)("br",{}),"To Whom It May Concern, Thank you so much for taking the time to read my personal statement. My name is Jenna Smith, and I am 27 years old. Recently, I have been working as a security guard for United Federal Credit Union. I have also been attending my local AA meetings regularly. Since my last conviction, my life has changed for the better. I am focussing on my sobriety, and being a better parent and partner. I want to make my daughter proud. I have been really involved in community service. In particular, I\u2019ve been working with Pauly\u2019s Project. I lead the outreach team, and distribute food to unhoused neighbors throughout the LA area. Also I have been participating in LA Youth Soccer. I mentor young soccer players and provide valuable coaching. I am working towards going back to school, so that I can become a social worker. I have been taking night classes at Rosedale Community Center, and I have been shadowing a social worker on Fridays. I want to clear my record because I am a different person from who I was when I was convicted. I want to make the world a better place. Clearing my record will help me gain access to better opportunities and set an example for my daughter. Sincerely, Jenna Smith"]})}),Object(c.jsx)("button",{onClick:function(){H()(document.getElementById("personalStatementElement")).then((function(e){var c=e.toDataURL("image/png"),r=new U.a;r.addImage(c,"PNG",10,10),t(Object(S.a)(Object(S.a)({},n),{},{pdf:r}))}))},children:"Save PDF"}),Object(c.jsx)("button",{onClick:function(){n.pdf&&n.pdf.save("PS.pdf")},children:"Download PDF"}),Object(c.jsx)("button",{onClick:function(){return r(14)},children:"BACK"})]})},K=function(e){var n=e.message,t=e.goToPage,r=e.pageNumber;return Object(c.jsxs)("div",{className:"Affirmation",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsx)("button",{onClick:function(){t(r+1)},children:"NEXT"})]})};function G(){var e=Object(u.a)(["\n  color:black;\n  height:100vh;\n  padding: 1.5em;\n"]);return G=function(){return e},e}var J=j.b.div(G()),Q=function(e){var n=e.pageNumber,t=e.goToPage,a=Object(r.useState)({name:"",age:null,introduction:"",lifeChanges:"",communityServiceOrgName:"",communityServiceDescription:"",jobName:"",jobTitle:"",jobDescription:"",difficultyFindingWorkDescription:"",goals:"",goalsHow:"",clearRecordWhy:"",clearRecordHow:"",pdf:void 0}),i=Object(x.a)(a,2),o=i[0],s=i[1];return Object(c.jsxs)(J,{children:[1===n&&Object(c.jsx)(N,{goToPage:t}),2===n&&Object(c.jsx)(K,{pageNumber:n,message:"Welcome!",goToPage:t}),3===n&&Object(c.jsx)(A,{inputs:o,setInputs:s,goToPage:t}),4===n&&Object(c.jsx)(K,{pageNumber:n,message:"Congrats!",goToPage:t}),5===n&&Object(c.jsx)(F,{inputs:o,setInputs:s,goToPage:t}),6===n&&Object(c.jsx)(K,{pageNumber:n,message:"Way to Go!",goToPage:t}),7===n&&Object(c.jsx)(D,{inputs:o,setInputs:s,goToPage:t}),8===n&&Object(c.jsx)(K,{pageNumber:n,message:"Hooray!",goToPage:t}),9===n&&Object(c.jsx)(W,{inputs:o,setInputs:s,goToPage:t}),10===n&&Object(c.jsx)(K,{pageNumber:n,message:"Great Job!",goToPage:t}),11===n&&Object(c.jsx)(L,{inputs:o,setInputs:s,goToPage:t}),12===n&&Object(c.jsx)(K,{pageNumber:n,message:"Fabulous!",goToPage:t}),13===n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Previewing Final Statement"}),Object(c.jsx)("button",{onClick:function(){return t(14)},children:"EDIT"}),Object(c.jsx)("button",{onClick:function(){return t(14)},children:"NEXT"})]}),14===n&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:"Editing"}),Object(c.jsx)("button",{onClick:function(){return t(15)},children:"SAVE"})]}),15===n&&Object(c.jsx)(z,{inputs:o,setInputs:s,goToPage:t})]})},M=t.p+"static/media/arrowRight.e592bd13.svg";function Y(){var e=Object(u.a)(["\n  margin: 2.2em 1.5em\n"]);return Y=function(){return e},e}var X=j.b.div(Y()),q=function(e){var n=e.goToPage;return Object(c.jsxs)(X,{children:[Object(c.jsx)("h1",{children:"Start fresh with a record expungement"}),Object(c.jsx)("h2",{children:"Generate a personal statement in just 20 minutes"}),Object(c.jsx)(p,{children:Object(c.jsxs)(O,{onClick:function(){return n(1)},children:[Object(c.jsx)("span",{children:"START NOW 02"}),Object(c.jsx)("img",{src:M,alt:"arrow right"})]})})]})};function V(){var e=Object(u.a)(["\n  @media only screen and "," {\n    padding: 130px 0 0 130px;\n  }\n"]);return V=function(){return e},e}function Z(){var e=Object(u.a)(["\n  display:flex;\n  justify-content:flex-end;\n  @media only screen and "," {\n    justify-content:flex-start;\n    margin-top:40px;\n  }\n"]);return Z=function(){return e},e}function $(){var e=Object(u.a)(["\n  background: ",";\n  color:white;\n  @media only screen and "," {\n    height:850px;\n    > img {\n      margin-left:40px;\n    }\n  }\n  height:570px;\n"]);return $=function(){return e},e}var _=j.b.div($(),(function(e){return e.background}),d.md),ee=(j.b.div(Z(),d.md),j.b.div(V(),d.md)),ne=function(e){var n,t=e.history,r=e.match,a=Number(r.params.page);isNaN(a)&&(a=0);var i=function(e){t.push("/form/".concat(e))};return n=0===a?"#9903ff":"white",Object(c.jsxs)(_,{background:n,className:"PersonalStatementContainer",children:[Object(c.jsx)(C,{pageNumber:a}),Object(c.jsx)(ee,{children:0===a?Object(c.jsx)(q,{goToPage:i}):Object(c.jsx)(Q,{pageNumber:a,goToPage:i})})]})},te=function(){return Object(c.jsx)("div",{className:"PrivacyPolicy",children:"Privacy Policy page"})},ce=function(){return Object(c.jsx)("div",{className:"TermsOfUse",children:"TermsOfUse page"})},re=function(){return Object(c.jsx)("div",{className:"FAQ",children:"FAQ page"})},ae=function(){return Object(c.jsx)("div",{className:"AboutUs",children:"About Us page"})},ie=t.p+"static/media/hackForLALogo.1329edab.svg";function oe(){var e=Object(u.a)(["\n  display:flex;\n  margin:0 auto;\n  justify-content:space-between;\n  width: 300px;\n  text-transform:uppercase;\n\n  a {\n    color:white;\n    font-size:.625rem;\n  }\n\n  @media only screen and "," {\n    & :nth-child(n+3) {\n      display:none;\n    }\n    width: 260px;\n    a {\n      font-weight:700;\n      font-size:1rem;\n    }\n  }\n\n"]);return oe=function(){return e},e}function se(){var e=Object(u.a)(["\n  @media only screen and "," {\n    width: 230px;\n  }\n"]);return se=function(){return e},e}function le(){var e=Object(u.a)(["\n  background:none;\n  color:white;\n  display:flex;\n  justify-content:space-between;\n  align-items:center;\n  img, span {\n    display:none;\n    margin: 0 20px;\n  }\n  @media only screen and "," {\n    background:black;\n    height:50px;\n    img, span {\n      display:block;\n    }\n  }\n  @media only screen and "," {\n    img, span {\n      margin: 0 45px;\n    }\n  }\n"]);return le=function(){return e},e}var ue=j.b.div(le(),d.md,d.lg),je=j.b.div(se(),d.md),de=j.b.div(oe(),d.md),be=function(){return Object(c.jsxs)(ue,{className:"Navbar",children:[Object(c.jsx)(je,{children:Object(c.jsx)("img",{src:ie,alt:"Hack for LA Logo"})}),Object(c.jsxs)(de,{children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/record-clearance/PrivacyPolicy",children:"Privacy Policy"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/record-clearance/TermsOfUse",children:"Terms Of Use"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/record-clearance/FAQ",children:"FAQ"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"/record-clearance/AboutUs",children:"About Us"})})]}),Object(c.jsx)("span",{children:"COPYRIGHT 2020 HACK FOR LA"})]})},he=function(){var e=Object(s.f)();return Object(c.jsxs)(l.a,{basename:"/record-clearance",children:[Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:ne,history:e}),Object(c.jsx)(s.a,{path:"/form/:page?",component:ne,history:e}),Object(c.jsx)(s.a,{path:"/PrivacyPolicy",component:te}),Object(c.jsx)(s.a,{path:"/TermsOfUse",component:ce}),Object(c.jsx)(s.a,{path:"/FAQ",component:re}),Object(c.jsx)(s.a,{path:"/AboutUs",component:ae})]}),Object(c.jsx)(be,{}),Object(c.jsx)(g,{})]})},me=function(e){e&&e instanceof Function&&t.e(5).then(t.bind(null,418)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(he,{})}),document.getElementById("root")),me()}},[[43,1,3]]]);
//# sourceMappingURL=main.1276d51a.chunk.js.map