(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],_=0,p=[];_<o.length;_++)n=o[_],i[n]&&p.push(i[n][0]),i[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},i={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0157":function(t,e,a){"use strict";var s=a("a866"),i=a.n(s);i.a},"19a1":function(t,e,a){},4193:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),i=a("bb71");a("da64");s["a"].use(i["a"],{iconfont:"md"});var r=a("8c4f"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"blue darken-1",attrs:{fluid:"","grid-list-lg":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",{staticClass:"text-xs-center white--text hq-unselectable"},[t._v(t._s(t.APP_NAME))])]),t._l(t.quizzes,function(e){return a("v-flex",{attrs:{xs12:""}},[a("v-card",{staticClass:"centered card",attrs:{"max-width":"600"}},[a("v-card-title",{staticClass:"pt-3 pb-2",attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(e.name))]),a("div",[t._v(t._s(e.description))])])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green lighten-1",dark:""},on:{click:function(a){t.play(e.id)}}},[t._v("Play")])],1)],1)],1)})],2)],1)],1)},o=[],l={data(){return{quizzes:[]}},created(){this.get_quiz_list()},methods:{play(t){this.$router.push({name:"loading_room",params:{game_id:t}})},get_quiz_list(){this.$http.get(`${this.PATH_API}/game/list`).then(t=>{this.quizzes=t.data.result}).catch(t=>{console.log("Sever has some problems")})}}},c=l,u=(a("9265"),a("6a65"),a("2877")),_=a("6544"),p=a.n(_),d=a("7496"),h=a("8336"),v=a("b0af"),m=a("99d9"),f=a("12b2"),g=a("a523"),x=a("0e8f"),y=a("a722"),b=a("9910"),q=Object(u["a"])(c,n,o,!1,null,"7bc8e87a",null);q.options.__file="Main.vue";var w=q.exports;p()(q,{VApp:d["a"],VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardTitle:f["a"],VContainer:g["a"],VFlex:x["a"],VLayout:y["a"],VSpacer:b["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("toolbar"),a("v-container",{staticClass:"blue darken-1",attrs:{fluid:""}},[a("v-layout",{staticClass:"mt-5",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[t.play_disabled?a("div",[a("div",{staticClass:"text-xs-center mt-3"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"white"}})],1)]):a("div",[a("h2",{staticClass:"mt-3 text-xs-center text-capitalize white--text",staticStyle:{"font-size":"30px"}},[t._v("\n            "+t._s(t.quiz.name)+"\n          ")]),a("div",{staticClass:"text-xs-center font-weight-light white--text",staticStyle:{"font-size":"17px"}},[t._v("Created by "+t._s(t.quiz.creator))])])]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center ma-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.player_name,expression:"player_name"}],staticClass:"text-field",staticStyle:{width:"100%","max-width":"300px"},attrs:{placeholder:"Your name"},domProps:{value:t.player_name},on:{input:function(e){e.target.composing||(t.player_name=e.target.value)}}})])]),a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{color:"green lighten-1",dark:"",disabled:t.play_disabled},on:{click:function(e){t.get_started()}}},[t._v("Get Started")])],1)])],1)],1)],1)},C=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-toolbar",{attrs:{app:"",dense:"",dark:"",color:"blue darken-3"}},[a("v-toolbar-title",{staticClass:"headline"},[a("v-btn",{staticClass:"title text-capitalize",attrs:{flat:""},on:{click:function(e){t.back_to_list()}}},[t._v(t._s(t.APP_NAME))])],1),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog_back_to_main,callback:function(e){t.dialog_back_to_main=e},expression:"dialog_back_to_main"}},[a("v-btn",{attrs:{slot:"activator",flat:"",icon:""},slot:"activator"},[a("v-icon",[t._v("view_list")])],1),a("v-card",[a("v-card-text",[a("div",{staticClass:"title"},[t._v("Do you want to go back to the quiz list page?")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",flat:"flat"},on:{click:function(e){t.return_quiz()}}},[t._v("\n          No Thanks\n        ")]),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.back_to_list()}}},[t._v("\n          Yes\n        ")])],1)],1)],1),t.is_quiz_player?a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog_play_again,callback:function(e){t.dialog_play_again=e},expression:"dialog_play_again"}},[a("v-btn",{attrs:{slot:"activator",flat:"",icon:""},slot:"activator"},[a("v-icon",[t._v("replay")])],1),a("v-card",[a("v-card-text",[a("div",{staticClass:"title"},[t._v("Do you want to play again?")])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey darken-1",flat:"flat"},on:{click:function(e){t.return_quiz()}}},[t._v("\n          No Thanks\n        ")]),a("v-btn",{attrs:{color:"blue darken-1",flat:"flat"},on:{click:function(e){t.play_again()}}},[t._v("\n          Yes\n        ")])],1)],1)],1):t._e()],1)},V=[],P={props:["page","reset_game"],data(){return{dialog_back_to_main:!1,dialog_play_again:!1}},computed:{is_quiz_player(){return"quiz_player"===this.page}},methods:{back_to_list(){this.$router.push({name:"main"})},return_quiz(){this.dialog_back_to_main=!1,this.dialog_play_again=!1},play_again(){this.dialog_play_again=!1,this.reset_game()}}},S=P,A=a("169a"),$=a("132d"),O=a("71d9"),T=a("2a7f"),E=Object(u["a"])(S,k,V,!1,null,null,null);E.options.__file="Toolbar.vue";var j=E.exports;p()(E,{VBtn:h["a"],VCard:v["a"],VCardActions:m["a"],VCardText:m["b"],VDialog:A["a"],VIcon:$["a"],VSpacer:b["a"],VToolbar:O["a"],VToolbarTitle:T["a"]});var I={components:{Toolbar:j},data(){return{player_name:"",play_disabled:!0,quiz:{},questions:[{}]}},created(){this.$http.get(`${this.PATH_API}/game/${this.$route.params.game_id}`).then(t=>{this.quiz=t.data.result.game,this.questions=t.data.result.questions,this.play_disabled=!1}),"undefined"!==typeof Storage&&(sessionStorage.player_name?this.player_name=sessionStorage.player_name:this.player_name="")},methods:{get_started(){"undefined"!==typeof Storage&&sessionStorage.setItem("player_name",this.player_name),this.$router.push({name:"quiz_player",params:{game_id:this.$route.params.game_id,quiz:this.quiz,questions:this.questions}})}}},M=I,R=(a("0157"),a("490a")),L=Object(u["a"])(M,z,C,!1,null,"58582e82",null);L.options.__file="LoadingRoom.vue";var N=L.exports;p()(L,{VApp:d["a"],VBtn:h["a"],VContainer:g["a"],VFlex:x["a"],VLayout:y["a"],VProgressCircular:R["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("toolbar",{attrs:{page:"quiz_player",reset_game:t.reset_game}}),a("v-content",{staticClass:"blue darken-1"},[a("playing-room",{ref:"playing_room",attrs:{questions:t.questions,quiz:t.quiz}})],1)],1)},F=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"text-xs-center":"",fluid:""}},[t.is_result_active?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("result-page",{attrs:{corrections:t.corrections,questions:t.questions}})],1)],1):a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text",staticStyle:{"font-size":"17px"}},[t._v("\n        Hi "+t._s(t.PLAYER_NAME)+". You are playing "+t._s(t.quiz.name)+"\n      ")])]),a("v-flex",{staticClass:"mt-3 mb-3",attrs:{xs12:""}},[a("div",[a("v-card",{staticClass:"pa-2",attrs:{color:"white"}},[a("v-card-text",{staticClass:"px-0"},[a("div",{staticClass:"ma-0 pa-0 font-weight-medium hq-unselectable",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.current_question.question))]),a("p",{staticClass:"hq-unselectable"},[t._v("("+t._s(this.q_index+1)+"/"+t._s(this.questions.length)+")")])])],1),a("v-progress-linear",{staticClass:"ma-0",attrs:{color:"orange lighten-1",height:"6",value:t.count}})],1)]),a("v-flex",{attrs:{xs12:""}},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:""}},t._l(t.current_question.choices,function(e,s){return a("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[a("div",{class:["btn-"+s,"btn"],staticStyle:{cursor:"pointer"},attrs:{flat:"",block:""},on:{click:function(a){t.choose(e.order)}}},[a("div",{staticClass:"ma-0 pa-2 text-capitalize hq-unselectable",staticStyle:{"word-break":"break-all","font-size":"14px"}},[t._v("\n                "+t._s(e.content)+"\n              ")])])])}))],1)],1)],1)],1)},B=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fulid:""}},[a("v-layout",[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text",staticStyle:{"font-size":"30px"}},[t._v("Congraturation!!!")]),a("div",{staticClass:"ma-0 pa-0 white--text",staticStyle:{"font-size":"40px"}},[t._v("Your score is "+t._s((t.corrections/t.questions.length*100).toFixed(0)))]),a("div",{staticClass:"white--text",staticStyle:{"font-size":"20px"}},[t._v(t._s(t.corrections)+" / "+t._s(t.questions.length))])])],1)],1)},J=[],Q={props:["corrections","questions"]},G=Q,K=Object(u["a"])(G,D,J,!1,null,null,null);K.options.__file="ResultPage.vue";var U=K.exports;p()(K,{VContainer:g["a"],VFlex:x["a"],VLayout:y["a"]});let W=(t,e)=>{let a=new Array(e),s=t.length,i=new Array(s);if(e>s)throw new RangeError("getRandom: more elements taken than available");while(e--){let r=Math.floor(Math.random()*s);a[e]=t[r in i?i[r]:r],i[r]=--s in i?i[s]:s}return a};var X={props:["quiz","questions"],components:{ResultPage:U},data(){return{counter:null,count:0,q_index:0,corrections:0,is_result_active:!1}},created(){this.start_counter(parseInt(this.current_question.time_limit))},destroyed(){this.stop_counter()},computed:{current_question(){let t=this.questions[this.q_index];return t.choices=W(t.choices,t.choices.length),t}},methods:{reset(){this.stop_counter(),this.counter=null,this.count=0,this.q_index=0,this.corrections=0,this.is_result_active=!1,this.current_question.choices=W(this.current_question.choices,this.current_question.choices.length),this.start_counter(parseInt(this.current_question.time_limit))},pause_quiz(){this.stop_counter()},continue_quiz(){this.is_result_active||this.start_counter(parseInt(this.current_question.time_limit),this.count)},stop_counter(){clearInterval(this.counter)},start_counter(t=20,e=0){this.count=e,clearInterval(this.counter),this.counter=setInterval(()=>{this.count+=1,this.count>100&&(this.stop_counter(),this.next_question())},10*t)},get_answer_sheet(t){let e=t,a=e.split(",");return a},check_answer(t,e){return e.indexOf(t.toString())>-1},next_question(){this.is_last_question()?this.show_result_page():(this.q_index+=1,this.start_counter(parseInt(this.current_question.time_limit)))},add_correction(){this.corrections+=1},is_last_question(){return!(this.q_index<this.questions.length-1)},choose(t){let e=this.check_answer(t,this.get_answer_sheet(this.current_question.correct_answer));e&&this.add_correction(),this.next_question()},show_result_page(){this.stop_counter(),this.is_result_active=!0}}},Z=X,tt=(a("e0d8"),a("8e36")),et=Object(u["a"])(Z,H,B,!1,null,"7d1d22f2",null);et.options.__file="PlayingRoom.vue";var at=et.exports;p()(et,{VCard:v["a"],VCardText:m["b"],VContainer:g["a"],VFlex:x["a"],VLayout:y["a"],VProgressLinear:tt["a"]});var st={props:["questions","quiz"],components:{Toolbar:j,PlayingRoom:at},data(){return{dialog:!1}},methods:{reset_game(){this.$refs.playing_room.reset()}}},it=st,rt=a("549c"),nt=Object(u["a"])(it,Y,F,!1,null,null,null);nt.options.__file="QuizPlayer.vue";var ot=nt.exports;p()(nt,{VApp:d["a"],VContent:rt["a"]}),s["a"].use(r["a"]);const lt=new r["a"]({mode:"history",routes:[{path:"/",component:w,name:"main",alias:"quiz_list"},{path:"/quiz/:game_id",component:N,name:"loading_room"},{path:"/quiz/:game_id/play",component:ot,name:"quiz_player",props:!0,beforeEnter(t,e,a){t.params.questions?a():a({name:"loading_room",params:{game_id:t.params.game_id}})}}]});var ct=lt,ut=a("bc3a"),_t=a.n(ut),pt=a("2ef0"),dt=a.n(pt),ht=a("a7fe"),vt=a.n(ht),mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view",{key:t.$route.fullPath})],1)},ft=[],gt={name:"App"},xt=gt,yt=Object(u["a"])(xt,mt,ft,!1,null,null,null);yt.options.__file="App.vue";var bt=yt.exports;s["a"].use(vt.a,_t.a),s["a"].prototype._=dt.a,s["a"].config.productionTip=!1,s["a"].prototype.APP_NAME="Hellooo Quizzes",s["a"].prototype.PATH_API="https://helloooquizzes-admin.herokuapp.com/api",s["a"].prototype.PLAYER_NAME=sessionStorage.player_name?sessionStorage.player_name:"Alex",new s["a"]({render:t=>t(bt),router:ct}).$mount("#app")},"632b":function(t,e,a){},"6a65":function(t,e,a){"use strict";var s=a("632b"),i=a.n(s);i.a},9265:function(t,e,a){"use strict";var s=a("19a1"),i=a.n(s);i.a},a866:function(t,e,a){},e0d8:function(t,e,a){"use strict";var s=a("4193"),i=a.n(s);i.a}});
//# sourceMappingURL=app.a76831ae.js.map