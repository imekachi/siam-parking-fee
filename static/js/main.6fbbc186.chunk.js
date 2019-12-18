(this["webpackJsonpsiam-parking-fee"]=this["webpackJsonpsiam-parking-fee"]||[]).push([[0],{146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),c=(a(50),a(5)),s=a(16),l=a(43);function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return Math.abs(t-e)/1e3/60/60}function m(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!(t=e)||"object"!==typeof t||"Array"!==t.constructor.name)throw new TypeError('Error! "feeRates" argument for "calculateFee()" should be an array, instead it receives, '.concat(JSON.stringify(e)));var n=0,r=a;return e.some((function(t,a){if(r<=0)return!0;if(a===e.length-1){var o=Math.ceil(r/t.hrs)*t.cost;return n+=o,r=0,!0}return n+=t.cost,r=Math.max(r-t.hrs,0),!1})),n}var f={key:"PARKING_TIME_START",store:function(e){var t=this.getData();localStorage.setItem(this.key,JSON.stringify(Object(c.a)({},t,{},e)))},getData:function(){var e=localStorage.getItem(this.key);if(!e)return{};var t=JSON.parse(e);return t.start&&(t.start=new Date(t.start)),t},reset:function(){localStorage.removeItem(this.key)}},d={RED:"#ff4a48",ORANGE:"#ff9f40",YELLOW:"#ffcd56",GREEN:"#7ad461",TEAL:"#4bc0c0",BLUE:"#36a2eb",PURPLE:"#9966ff",GRAY:"#c9cbcf",GRID:"rgba(255, 255, 255, 0.1)"},v={MBK:{name:"MBK",color:d.RED,feeRates:[{hrs:2,cost:10},{hrs:1,cost:10}]},CTW:{name:"CTW",color:d.BLUE,feeRates:[{hrs:4,cost:10},{hrs:1,cost:20}]},SIAM_CEN:{name:"Siam Center",color:d.GREEN,feeRates:[{hrs:4,cost:10},{hrs:1,cost:20}]}},g=Object.entries(v),p=Array.from({length:8},(function(e,t){return t+1})),h=Object.values(v).map((function(e){return{label:e.name,data:p.map((function(t){return m(e.feeRates,t)})),borderColor:e.color,backgroundColor:e.color,fill:!1}})),k={labels:p.map((function(e){return"".concat(e," hr").concat(e>1?"s":"")})),datasets:h},E={maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,itemSort:function(e,t){return e.yLabel-t.yLabel}},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom",labels:{boxWidth:5,padding:20,usePointStyle:!0}},scales:{yAxes:[{gridLines:{color:d.GRID,zeroLineColor:d.GRID},ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{color:d.GRID}}]}};a(146),a(147);var b=function(e){var t=e.name,a=e.color,n=e.start,o=e.durationHrs,i=e.fee,c=e.isLive,s=e.onClickLiveButton;return r.a.createElement("div",{className:"parking-info-container"},r.a.createElement("button",{className:"live-button".concat(c?" -live":""),onClick:s},"LIVE"),r.a.createElement("h2",{className:"parking-at",style:{color:a}},t),r.a.createElement("div",{className:"park-info -start"},r.a.createElement("span",{className:"label"},"Check-in:")," ",r.a.createElement("strong",null,n.toLocaleString())),r.a.createElement("div",{className:"park-info -duration"},r.a.createElement("span",{className:"label"},"Duration:")," ",r.a.createElement("strong",null,o.toLocaleString()," hrs")),r.a.createElement("div",{className:"park-info -fee"},r.a.createElement("span",{className:"label"},"Total: "),r.a.createElement("span",{className:"fee",style:{color:d.GREEN}},i.toLocaleString("en-TH",{style:"currency",currency:"THB"}))))};a(148);var L=function(e){var t=e.onChoosePark,a=e.onClickBackdrop;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"backdrop",onClick:a}),r.a.createElement("section",{className:"popup"},r.a.createElement("div",{className:"popup-header"},"Where are you parking at?"),r.a.createElement("ul",{className:"park-list"},g.map((function(e){var a=Object(s.a)(e,2),n=a[0],o=a[1];return r.a.createElement("li",{key:n,"data-park-id":n,className:"park-list-item _prevent-selection",onClick:t},o.name)})))))},N={isChoosingPark:!1,isRendered:!1};var y=function(){var e=Object(n.useState)(N),t=Object(s.a)(e,2),a=t[0],o=t[1],i=function(){var e=f.getData().isLive;f.reset(),f.store({isLive:e}),o(N)};return Object(n.useEffect)((function(){var e=f.getData(),t=e.start,n=e.parkId,r=e.isLive;if(t){var i,s=v[n],l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.isLive,r=void 0===n?a.isLive:n,i=u(t);o(Object(c.a)({},a,{isLive:r,isRendered:!0,park:{start:t,name:s.name,color:s.color,durationHrs:i,fee:m(s.feeRates,i)}}))};return a.isLive?i=setTimeout(l,1e3):a.isRendered||l({isLive:r}),function(){clearTimeout(i)}}}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header"},"Bike parking fee"),r.a.createElement("div",{className:"chart-container"},r.a.createElement(l.a,{data:k,options:E,height:280})),a.park?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,Object.assign({},a.park,{isLive:a.isLive,onClickLiveButton:function(){var e=!a.isLive;f.store({isLive:e}),o(Object(c.a)({},a,{isLive:e}))}})),r.a.createElement("button",{className:"floating-button",style:{backgroundColor:d.YELLOW},onClick:i},r.a.createElement("i",{className:"material-icons"},"delete"),"Reset")):r.a.createElement("button",{className:"floating-button _prevent-selection",style:{backgroundColor:d.PURPLE},onClick:function(){o(Object(c.a)({},a,{startTime:new Date,isChoosingPark:!0}))}},r.a.createElement("i",{className:"material-icons"},"directions_car"),"Park"),a.isChoosingPark&&r.a.createElement(L,{onChoosePark:function(e){var t=e.target.dataset.parkId,n=v[t];f.store({start:a.startTime,parkId:t});var r=m(n.feeRates,.001);o(Object(c.a)({},a,{park:{start:a.startTime,name:n.name,color:n.color,durationHrs:.001,fee:r},isChoosingPark:!1}))},onClickBackdrop:i}))},R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/siam-parking-fee",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/siam-parking-fee","/service-worker.js");R?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()},45:function(e,t,a){e.exports=a(149)},50:function(e,t,a){}},[[45,1,2]]]);
//# sourceMappingURL=main.6fbbc186.chunk.js.map