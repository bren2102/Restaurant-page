!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){const n=document.querySelector("#content"),r=document.createElement("div");r.classList.add("wraptop");const o=document.createElement("header"),d=document.createElement("h2"),c=document.createElement("ul"),l=document.createElement("li"),a=document.createElement("button"),u=document.createElement("li"),i=document.createElement("li"),p=document.createElement("li");n.appendChild(r),r.appendChild(o),o.appendChild(d),o.appendChild(c),c.appendChild(l),c.appendChild(u),c.appendChild(i),c.appendChild(p),l.appendChild(a),d.textContent="Burgie",a.textContent="Booking now",u.textContent="Contact us",i.textContent="About us",p.textContent="Home";const m=document.createElement("main"),s=document.createElement("div");s.classList.add("left");const f=document.createElement("h2"),C=document.createElement("span"),h=document.createElement("button"),b=document.createElement("div");b.classList.add("right");const E=document.createElement("img");r.appendChild(m),m.appendChild(s),s.appendChild(f),s.appendChild(C),s.appendChild(h),m.appendChild(b),b.appendChild(E),f.textContent="Your Favorite Burger <br>\n            Delivered Hot & <br>\n            Fresh",C.textContent="Delicious and fast service",h.textContent="Order now",E.src="../src/burgers.png"}]);