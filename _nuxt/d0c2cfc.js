(window.webpackJsonp=window.webpackJsonp||[]).push([[18,5,6],{406:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return v}));var n=r(408),o=r(1),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),v=Object(o.h)("v-card__title");n.a},407:function(t,e,r){"use strict";r.r(e);r(56),r(72),r(10),r(5);var n=r(194),o={name:"HeadlineText",props:{headlineText:{type:String,default:""},enableFavorite:{type:Boolean,default:!1},toolKey:{type:String,default:null}},data:function(){return{includedFavorites:this.favorites().includes(this.toolKey)}},methods:{favorites:function(){var t;return null!==(t=JSON.parse(localStorage.getItem("favorites")))&&void 0!==t?t:[]},addToFavorites:function(){var t=this.favorites();t.includes(this.toolKey)||(t.push(this.toolKey),localStorage.setItem("favorites",JSON.stringify(t))),this.includedFavorites=!0,n.a.emit("updateFavorites")},removeFromFavorites:function(){var t=this,e=this.favorites().filter((function(e){return e!==t.toolKey}));localStorage.setItem("favorites",JSON.stringify(e)),this.includedFavorites=!1,n.a.emit("updateFavorites")}}},c=r(55),l=r(57),d=r.n(l),v=r(272),h=r(187),f=r(424),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex"},[r("h2",{staticClass:"mt-10"},[t._v("\n    "+t._s(t.headlineText)+"\n  ")]),t._v(" "),r("v-spacer"),t._v(" "),t.enableFavorite?r("div",{staticClass:"d-flex align-end mr-10"},[r("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.includedFavorites,expression:"!includedFavorites"}],on:{click:t.addToFavorites}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-star")]),t._v("\n      Add to Favorites\n    ")],1),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.includedFavorites,expression:"includedFavorites"}],on:{click:t.removeFromFavorites}},[r("v-icon",{staticClass:"mr-2"},[t._v("mdi-star")]),t._v("\n      Remove from Favorites\n    ")],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VIcon:h.a,VSpacer:f.a})},408:function(t,e,r){"use strict";r(13),r(11),r(10),r(5),r(15),r(12),r(16);var n=r(2),o=(r(29),r(195),r(196),r(409),r(197)),c=r(416),l=r(84),d=r(14);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},409:function(t,e,r){var content=r(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("e23b7040",content,!0,{sourceMap:!1})},410:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},417:function(t,e,r){"use strict";r.r(e);var n={name:"CardList",props:{items:{type:Array,default:function(){return[]}}}},o=r(55),c=r(57),l=r.n(c),d=r(408),v=r(406),h=r(522),f=r(405),_=r(187),x=r(523),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",t._l(t.items,(function(e){return r("v-col",{key:e.key,staticClass:"col-6 col-md-4 col-lg-3 col-xl-2"},[r("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:e.to}},[r("v-card",{attrs:{outlined:"",height:"100%"}},[r("div",{staticClass:"d-flex justify-center"},[r("v-icon",{staticClass:"mdi-48px pa-6 ma-3 rounded-lg",style:{"background-color":"#363636"}},[t._v("\n              "+t._s(e.icon)+"\n            ")])],1),t._v(" "),r("v-card-title",[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),r("v-card-text",[t._v("\n            "+t._s(e.text)+"\n          ")])],1)],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:v.a,VCardTitle:v.b,VCol:h.a,VContainer:f.a,VIcon:_.a,VRow:x.a})},424:function(t,e,r){"use strict";r(274);var n=r(1);e.a=Object(n.h)("spacer","div","v-spacer")},529:function(t,e,r){"use strict";r.r(e);var n=r(125),o={name:"TextPage",data:function(){return{headlineText:"Text",items:n.text.tools}}},c=r(55),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("HeadlineText",{attrs:{"headline-text":t.headlineText}}),t._v(" "),r("div",{staticClass:"mt-4"},[r("CardList",{attrs:{items:t.items}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeadlineText:r(407).default,CardList:r(417).default})}}]);