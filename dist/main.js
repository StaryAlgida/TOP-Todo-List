(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>a});var r=t(81),o=t.n(r),i=t(645),c=t.n(i)()(o());c.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: 130px 1fr 30px;\n    height: 100vh;\n}\n\nheader{\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    background-color: grey;\n    padding: 15px;\n}\n\n#header-img{\n    width: 100px;\n}\n\n#content-container{\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 1fr;\n}\n\naside{\n    padding-top: 40px;\n    padding-left: 10px;\n    background-color: aquamarine;\n}\n\n.menu-img{\n    width: 30px;\n}\n\naside ul{\n    list-style: none;\n}\n\naside ul li{\n    margin-bottom: 10px;\n}\n\n.menu-button{\n    padding: 5px 20px 5px 20px;\n\n    display: flex;\n    align-items: center;\n    width: 175px;\n}\n\nsection{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 40px;\n}\n\n",""]);const a=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&c[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},c=[],a=0;a<n.length;a++){var s=n[a],u=r.base?s[0]+r.base:s[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=a,e.splice(a,0,{identifier:l,updater:m,references:1})}c.push(l)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<i.length;c++){var a=t(i[c]);e[a].references--}for(var s=r(n,o),u=0;u<i.length;u++){var d=t(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),c=t.n(i),a=t(565),s=t.n(a),u=t(216),d=t.n(u),l=t(589),p=t.n(l),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"8bc44318e2afab2d0d1b.png",v=t.p+"353bf849d5435cbd257a.svg",h=t.p+"892f5fb3a09664a5e60a.svg",y=t.p+"53c41b800788219c47df.svg",b=t.p+"9597f8bd83a923f13c82.svg",x=document.querySelector("#content"),T=function(){x&&(x.appendChild(function(){const n=document.createElement("header");return n.innerHTML=`\n    <img src=${g} id="header-img">\n    <h1>ToDo List</h1>`,n}()),x.appendChild(function(){const n=document.createElement("div");return n.id="content-container",n.appendChild(function(){const n=document.createElement("aside");return n.innerHTML=`\n    <ul>\n        <li><button class="menu-button" id="to-do"><img class="menu-img" src="${v}"><span>To Do</span></button></li>\n        <li><button class="menu-button" id="today"><img class="menu-img" src="${h}"><span>Today</span></button></li>\n        <li><button class="menu-button" id="week"><img class="menu-img" src="${y}"><span>This week</span></button></li>\n    </ul>\n    <h2>Project</h2>\n    <ul id="projects-list">\n        <li><button class="menu-button" id="add-menu"><img class="menu-img" src="${b}"><span>Add Project</span></button></li>\n    </ul>`,n}()),n.appendChild(function(){const n=document.createElement("section");return n.innerHTML='<h2 id="section-title"></h2>\n    <div id="section-content"></div>',n}()),n}()),x.appendChild(function(){const n=document.createElement("footer");return n.innerHTML="<p>Created by StaryAlgida</p>",n}()))},w=function(){const n=document.querySelector("#section-title"),e=document.querySelector("#section-content");n&&e&&(n.innerHTML=" ",e.innerHTML=" ")};window.onload=()=>{T(),function(){const n=document.querySelector("#to-do");n&&n.addEventListener("click",(()=>{w();const n=document.querySelector("#section-title"),e=document.querySelector("#section-content");n&&e&&(n.innerHTML="To Do",e.innerHTML=`<div class="todo-button"><button><img src="${b}" class="menu-img"> Add task</button></div>`)}))}(),function(){const n=document.querySelector("#today");n&&n.addEventListener("click",(()=>{w();const n=document.querySelector("#section-title");n&&(n.innerHTML="Today")}))}()}})()})();