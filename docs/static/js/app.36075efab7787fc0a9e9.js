webpackJsonp([0],[,,,,function(a,t,s){"use strict";document.addEventListener("DOMContentLoaded",function(){var a=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);a.length>0&&a.forEach(function(a){a.addEventListener("click",function(){var t=a.dataset.target,s=document.getElementById(t);a.classList.toggle("is-active"),s.classList.toggle("is-active")})})}),t.a={name:"app"}},function(a,t,s){"use strict";t.a={name:"hello",data:function(){return{}}}},function(a,t,s){"use strict";var i=s(25),e=s.n(i);t.a={name:"SksStandart",data:function(){return{}},computed:{datagetir:function(){return"Evde Saglik"==this.$route.params.sksId?e.a.EvdeSaglik:"Diyaliz"==this.$route.params.sksId?e.a.Diyaliz:e.a.ERR}}}},function(a,t,s){"use strict";var i=[{id:"KKU01.01",aciklama:"Organizasyon yapısı, kuruluşun amaç ve hedeflerine ulaşmasını sağlayacak şekilde tasarlanmalı ve kuruluş faaliyetlerinin tamamını kapsamalıdır."},{id:"KKU01.02",aciklama:"Organizasyon yapısında en üst yönetim kademesinden en alt birime kadar dikey ve yatay tüm ilişkiler tanımlanmalıdır.\nOrganizasyon yapısı ile ilgili asgari aşağıdaki konular tanımlanmalıdır: o Sorumluluk ve ilişkiler o Dikey ve yatay koordinasyon ve entegrasyon noktaları o Gerektiğinde yetki devrinin nasıl yapılacağı\n"},{id:"KKU01.03",aciklama:"Kuruluş, organizasyon yapısını ve sorumluluk alanlarını gösteren bir organizasyon şeması oluşturmalıdır.\n"}];t.a={data:function(){return{data:i,defaultOpenedDetails:[1],showDetailIcon:!0}},methods:{toggle:function(a){this.$refs.table.toggleDetails(a)},success:function(){this.$toast.open({message:"Karşılıyor Seçildi",position:"is-bottom",type:"is-success"})},info:function(){this.$toast.open({message:"Kısmen Karşılıyor Seçildi",position:"is-bottom",type:"is-info"})},danger:function(){this.$toast.open({message:"Karşılamıyor Seçildi",position:"is-bottom",type:"is-danger"})},warning:function(){this.$toast.open({message:"Değerlendirme Dışı",position:"is-bottom",type:"is-warning"})}}}},,function(a,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(2),e=s(12),n=s(16);s(32);i.default.config.productionTip=!1,new i.default({el:"#app",router:n.a,template:"<App/>",components:{App:e.a}})},,,function(a,t,s){"use strict";function i(a){s(13)}var e=s(4),n=s(15),r=s(1),l=i,o=r(e.a,n.a,!1,l,null,null);t.a=o.exports},function(a,t){},,function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Hello"}}},[s("img",{attrs:{src:"/static/img/skslogo.jpeg",width:"112",height:"28"}})]),a._v(" "),a._m(0)],1),a._v(" "),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[s("div",{staticClass:"navbar-start"},[s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"Hello"}}},[a._v("Anasayfa")]),a._v(" "),s("a",{staticClass:"navbar-item"},[a._v("\n          Dokuman\n        ")]),a._v(" "),s("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[s("a",{staticClass:"navbar-link"},[a._v("\n            Setler\n          ")]),a._v(" "),s("div",{staticClass:"navbar-dropdown"},[s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"SksStandart",params:{sksId:"ADSH"}}}},[a._v("ADSH")]),a._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"SksStandart",params:{sksId:"Diyaliz"}}}},[a._v("Diyaliz")]),a._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"SksStandart",params:{sksId:"Evde Saglik"}}}},[a._v("Evde Saglik")]),a._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"SksStandart",params:{sksId:"Hastane"}}}},[a._v("Hastane")]),a._v(" "),s("hr",{staticClass:"navbar-divider"}),a._v(" "),s("router-link",{staticClass:"navbar-item",attrs:{to:{name:"degerlendir"}}},[a._v("Değerlendir")])],1)])],1),a._v(" "),a._m(1)])]),a._v(" "),s("main",[s("router-view")],1)])},e=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("a",{staticClass:"navbar-burger burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"}},[s("span",{attrs:{"aria-hidden":"true"}}),a._v(" "),s("span",{attrs:{"aria-hidden":"true"}}),a._v(" "),s("span",{attrs:{"aria-hidden":"true"}})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"buttons"},[s("a",{staticClass:"button is-primary"},[s("strong",[a._v("Kayit ol")])]),a._v(" "),s("a",{staticClass:"button is-light"},[a._v("\n              Giris\n            ")])])])])}],n={render:i,staticRenderFns:e};t.a=n},function(a,t,s){"use strict";var i=s(2),e=s(17),n=s(18),r=s(21),l=s.n(r),o=s(22),c=(s.n(o),s(23)),d=s(27),u=s(8),v=s(30),m=s(31);u.c.add(v.g,v.h,v.m,v.j,v.i,v.d,v.c,v.b,v.a,v.k,v.l,v.e,v.f,v.n),i.default.component("vue-fontawesome",m.a),i.default.use(l.a,{defaultIconComponent:"vue-fontawesome",defaultIconPack:"fas"}),i.default.use(e.a),t.a=new e.a({mode:"history",routes:[{path:"/",name:"Hello",component:n.a},{path:"/SKS/:sksId",name:"SksStandart",component:c.a},{path:"/Degerlendir",name:"degerlendir",component:d.a}]})},,function(a,t,s){"use strict";function i(a){s(19)}var e=s(5),n=s(20),r=s(1),l=i,o=r(e.a,n.a,!1,l,null,null);t.a=o.exports},function(a,t){},function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-2"},[s("div",{staticClass:"card"},[a._m(0),a._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("router-link",{staticClass:"title is-4",attrs:{to:{name:"SksStandart",params:{sksId:"Hastane"}}}},[a._v("Hastane")])],1)])])])]),a._v(" "),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"card"},[a._m(1),a._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("router-link",{staticClass:"title is-4",attrs:{to:{name:"SksStandart",params:{sksId:"Diyaliz"}}}},[a._v("Diyaliz")])],1)])])])]),a._v(" "),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"card"},[a._m(2),a._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("router-link",{staticClass:"title is-4",attrs:{to:{name:"SksStandart",params:{sksId:"Evde Saglik"}}}},[a._v("Evde Saglik")])],1)])])])]),a._v(" "),s("div",{staticClass:"column is-2"},[s("div",{staticClass:"card"},[a._m(3),a._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("router-link",{staticClass:"title is-4",attrs:{to:{name:"SksStandart",params:{sksId:"ADSH"}}}},[a._v("ADSH")])],1)])])])])])},e=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"/static/img/hastane.jpeg",alt:"Placeholder image"}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"/static/img/diyaliz.jpeg",alt:"Placeholder image"}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"/static/img/evdesag.jpeg",alt:"Placeholder image"}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"card-image"},[s("figure",{staticClass:"image is-4by3"},[s("img",{attrs:{src:"/static/img/adsh.jpeg",alt:"Placeholder image"}})])])}],n={render:i,staticRenderFns:e};t.a=n},,function(a,t){},function(a,t,s){"use strict";function i(a){s(24)}var e=s(6),n=s(26),r=s(1),l=i,o=r(e.a,n.a,!1,l,"data-v-569c24a5",null);t.a=o.exports},function(a,t){},function(a,t){a.exports={Diyaliz:[{ust:"KURUMSAL HİZMETLER",alt:["Kurumsal Yapı","Kalite Yönetimi","Doküman Yönetimi","Risk Yönetimi","İstenmeyen Olay Bildirim Sistemi","Acil Durum ve Afet Yönetimi","Eğitim Yönetimi","Sosyal Sorumluluk"]},{ust:"HASTA VE ÇALIŞAN ODAKLI HİZMETLER",alt:["Hasta Deneyimi","Sağlıklı Çalışma Yaşamı"]}],EvdeSaglik:[{ust:"KURUMSAL HİZMETLER",alt:["Kurumsal Yapı","Kalite Yönetimi","Doküman Yönetimi","Risk Yönetimi","İstenmeyen Olay Bildirim Sistemi","Eğitim Yönetimi","Malzeme ve Cihaz Yönetimi","Tıbbi Kayıtlar","Sağlıklı Çalışma Yaşamı"]},{ust:"SAĞLIK HİZMETLERİ",alt:["Hasta Deneyimi","Hasta Bakımı","Enfeksiyonların Önlenmesi"]},{ust:"GÖSTERGE YÖNETİMİ",alt:["Göstergelerin İzlenmesi","Kalite Göstergeleri"]}],ERR:[{ust:"Veriler Tamamlanacak!"}]}},function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"column"},[s("h1",[a._v("User "+a._s(a.$route.params.sksId))]),a._v(" "),a._l(a.datagetir,function(t){return s("div",[s("b-collapse",{staticClass:"card",attrs:{open:!1},scopedSlots:a._u([{key:"trigger",fn:function(i){return s("div",{staticClass:"card-header",attrs:{role:"button"}},[s("p",{staticClass:"card-header-title"},[a._v("\n          "+a._s(t.ust)+"\n        ")])])}}],null,!0)},[a._v(" "),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("ul",a._l(t.alt,function(t){return s("li",[a._v("\n              "+a._s(t)+"\n            ")])}),0)])])])],1)})],2)},e=[],n={render:i,staticRenderFns:e};t.a=n},function(a,t,s){"use strict";function i(a){s(28)}var e=s(7),n=s(29),r=s(1),l=i,o=r(e.a,n.a,!1,l,"data-v-6ec3f984",null);t.a=o.exports},function(a,t){},function(a,t,s){"use strict";var i=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"column"},[s("div",{staticClass:"container"},[s("h1",{staticClass:"title is-3"},[a._v("KURUMSAL HİZMETLER")]),a._v(" "),s("h2",{staticClass:"subtitle"},[a._v("Kurumsal Yapı")]),a._v(" "),s("div",{staticClass:"notification"},[s("a",{staticClass:"button is-outlined"},[a._v("KKU01")]),a._v(" "),s("a",{staticClass:"button is-danger is-outlined"},[a._v("Çekirdek")]),s("br"),s("br"),a._v(" "),s("p",[a._v("Kuruluş faaliyetlerinin tamamını kapsayacak şekilde bir organizasyon yapısı oluşturulmalıdır.")]),a._v(" "),s("br"),a._v(" "),s("a",{staticClass:"button is-success",on:{click:a.success}},[a._v("K")]),a._v(" "),s("a",{staticClass:"button is-info",on:{click:a.info}},[a._v("KK")]),a._v(" "),s("a",{staticClass:"button is-danger",on:{click:a.danger}},[a._v("KM")]),a._v(" "),s("a",{staticClass:"button is-warning",on:{click:a.warning}},[a._v("DD")]),a._v(" "),s("b-collapse",{attrs:{open:!1,"aria-id":"contentIdForA11y1"}},[s("button",{staticClass:"button is-outlined is-pulled-right",attrs:{slot:"trigger","aria-controls":"contentIdForA11y1"},slot:"trigger"},[a._v("Alt Kriterler")]),a._v(" "),s("b-table",{ref:"table",attrs:{data:a.data,"opened-detailed":a.defaultOpenedDetails,detailed:"","detail-key":"id","show-detail-icon":a.showDetailIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},scopedSlots:a._u([{key:"default",fn:function(t){return[s("b-table-column",{attrs:{field:"id",label:"KOD",width:"40",numeric:""}},[a._v("\n            "+a._s(t.row.id)+"\n          ")]),a._v(" "),s("b-table-column",{attrs:{field:"user.first_name",label:"Açıklama",sortable:""}},[a.showDetailIcon?[a._v("\n              "+a._s(t.row.aciklama)+"\n            ")]:a._e()],2)]}},{key:"detail",fn:function(t){return[s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("a",{staticClass:"button is-success",on:{click:a.success}},[a._v("K")]),a._v(" "),s("a",{staticClass:"button is-info",on:{click:a.info}},[a._v("KK")]),a._v(" "),s("a",{staticClass:"button is-danger",on:{click:a.danger}},[a._v("KM")]),a._v(" "),s("a",{staticClass:"button is-warning",on:{click:a.warning}},[a._v("DD")])])])])])]}}])})],1)],1),a._v(" "),s("div",{staticClass:"notification"},[s("a",{staticClass:"button is-outlined"},[a._v("KKU01")]),a._v(" "),s("a",{staticClass:"button is-danger is-outlined"},[a._v("Çekirdek")]),s("br"),s("br"),a._v(" "),s("p",[a._v("Kuruluş faaliyetlerinin tamamını kapsayacak şekilde bir organizasyon yapısı oluşturulmalıdır.")]),a._v(" "),s("br"),a._v(" "),s("a",{staticClass:"button is-success",on:{click:a.success}},[a._v("K")]),a._v(" "),s("a",{staticClass:"button is-info",on:{click:a.info}},[a._v("KK")]),a._v(" "),s("a",{staticClass:"button is-danger",on:{click:a.danger}},[a._v("KM")]),a._v(" "),s("a",{staticClass:"button is-warning",on:{click:a.warning}},[a._v("DD")]),a._v(" "),s("b-collapse",{attrs:{open:!1,"aria-id":"contentIdForA11y1"}},[s("button",{staticClass:"button is-outlined is-pulled-right",attrs:{slot:"trigger","aria-controls":"contentIdForA11y1"},slot:"trigger"},[a._v("Alt Kriterler")]),a._v(" "),s("b-table",{ref:"table",attrs:{data:a.data,"opened-detailed":a.defaultOpenedDetails,detailed:"","detail-key":"id","show-detail-icon":a.showDetailIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},scopedSlots:a._u([{key:"default",fn:function(t){return[s("b-table-column",{attrs:{field:"id",label:"KOD",width:"40",numeric:""}},[a._v("\n              "+a._s(t.row.id)+"\n            ")]),a._v(" "),s("b-table-column",{attrs:{field:"user.first_name",label:"Açıklama",sortable:""}},[a.showDetailIcon?[a._v("\n                "+a._s(t.row.aciklama)+"\n              ")]:a._e()],2)]}},{key:"detail",fn:function(t){return[s("article",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("a",{staticClass:"button is-success",on:{click:a.success}},[a._v("K")]),a._v(" "),s("a",{staticClass:"button is-info",on:{click:a.info}},[a._v("KK")]),a._v(" "),s("a",{staticClass:"button is-danger",on:{click:a.danger}},[a._v("KM")]),a._v(" "),s("a",{staticClass:"button is-warning",on:{click:a.warning}},[a._v("DD")])])])])])]}}])})],1)],1)])])},e=[],n={render:i,staticRenderFns:e};t.a=n},,,function(a,t,s){"use strict";var i=s(33);Object(i.a)(Object({NODE_ENV:"production"}).BASE_URL+"service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(a){console.error("Error during service worker registration:",a)}})}],[9]);
//# sourceMappingURL=app.36075efab7787fc0a9e9.js.map