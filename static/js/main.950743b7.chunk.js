(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,n,o){},145:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),a=o(41),i=o.n(a),c=(o(49),o(42));var s={RED:"#ff6384",ORANGE:"#ff9f40",YELLOW:"#ffcd56",GREEN:"#4bc0c0",BLUE:"#36a2eb",PURPLE:"#9966ff",GRAY:"#c9cbcf",GRID:"rgba(255, 255, 255, 0.05)"},l={MBK:{name:"MBK",color:s.RED,feeRates:[{hrs:2,cost:10},{hrs:1,cost:10}]},CTW:{name:"CTW",color:s.BLUE,feeRates:[{hrs:4,cost:10},{hrs:1,cost:20}]},SIAM_CEN:{name:"Siam Center",color:s.GREEN,feeRates:[{hrs:4,cost:10},{hrs:1,cost:20}]}},f=Array.from({length:10},function(e,n){return n+1}),u=Object.values(l).map(function(e){return{label:e.name,data:f.map(function(n){return function(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!(n=e)||"object"!==typeof n||"Array"!==n.constructor.name)throw new TypeError('Error! "feeRates" argument for "calculateFee()" should be an array, instead it receives, '.concat(JSON.stringify(e)));var t=0,r=o;return e.some(function(n,o){if(r<=0)return!0;if(o===e.length-1){var a=Math.ceil(r/n.hrs)*n.cost;return t+=a,r=0,!0}return t+=n.cost,r=Math.max(r-n.hrs,0),!1}),t}(e.feeRates,n)}),borderColor:e.color,backgroundColor:e.color,fill:!1}}),d={labels:f.map(function(e){return"".concat(e," hr").concat(e>1?"s":"")}),datasets:u},h={maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,itemSort:function(e,n){return e.yLabel-n.yLabel}},hover:{mode:"nearest",intersect:!0},legend:{position:"bottom",labels:{boxWidth:10,padding:20,usePointStyle:!0}},scales:{yAxes:[{gridLines:{color:s.GRID,zeroLineColor:s.GRID},ticks:{beginAtZero:!0}}],xAxes:[{gridLines:{color:s.GRID}}]}};o(144);var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header"},"Bike parking fee by hours"),r.a.createElement("div",null,r.a.createElement(c.a,{data:d,options:h,height:400})))},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/siam-parking-fee",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/siam-parking-fee","/service-worker.js");m?(function(e,n){fetch(e).then(function(o){var t=o.headers.get("content-type");404===o.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):p(n,e)})}}()},44:function(e,n,o){e.exports=o(145)},49:function(e,n,o){}},[[44,1,2]]]);
//# sourceMappingURL=main.950743b7.chunk.js.map