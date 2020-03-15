!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=function(){function t(t,e,o,n){this.id=t,this.name=e,this.race=o,this.height=n}return t.prototype.walk=function(t,e){switch(t){case n.Forward:console.log("walking forward at speed: ",e);break;case n.Back:console.log("walking backward at speed: ",e);break;case n.Left:console.log("walking left at speed: ",e);break;case n.Right:console.log("walking right at speed: ",e)}},t}();e.Human=r,function(t){t.Forward="FORWARD",t.Back="BACK",t.Left="LEFT",t.Right="RIGHT"}(n||(n={}))},function(t,e,o){t.exports=o(2)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(3).startApp()},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(4);function r(){n.warrior.swingSword()}function i(){n.mage.castSpell()}function a(){n.archer.fireArrow()}e.onWarriorAttack=r,e.onMageAttack=i,e.onArcherAttack=a,e.startApp=function(){document.addEventListener("DOMContentLoaded",(function(t){document.getElementById("warrior-attack").onclick=r,document.getElementById("mage-attack").onclick=i,document.getElementById("archer-attack").onclick=a}))}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5),r=o(6),i=o(7);e.warrior=new r.default(1,"Heman","Human",40,100),e.mage=new i.default(1,"Edward","Kajit",40,100),e.archer=new n.default(1,"Archy","Elven",40,100,100)},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,o,n,r,i,a){var c=t.call(this,e,o,n,r)||this;return c.arrowsTotal=a,c}return r(e,t),e.prototype.getArrowsCount=function(){return this.arrowsTotal},e.prototype.fireArrow=function(){return this.arrowsTotal<=0?console.log("You have no more bows left to fire arrows"):(this.arrowsTotal--,console.log("arrow fired, arrow count is now: ",this.arrowsTotal)),this.arrowsTotal},e}(o(0).Human);e.default=i},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i,a=o(0);!function(t){t.Increase="increase",t.Decrease="decrease"}(i||(i={}));var c=function(t){function e(e,o,n,r,i){var a=t.call(this,e,o,n,r)||this;return a.stamina=100,a.swordCondition=100,a.stamina=i,a}return r(e,t),e.prototype.weaponConditionChange=function(t,e){t===i.Decrease?(this.swordCondition=this.swordCondition-e,console.log("sword condition decreased by 20, condition is now: ",this.swordCondition)):(this.swordCondition=this.swordCondition+e,console.log("sword condition increased by 20, condition is now: ",this.swordCondition))},e.prototype.swingSword=function(){this.stamina<=0?console.log("You have no more stamina left to swing the sword"):(this.weaponConditionChange(i.Decrease,20),this.stamina-=20,console.log("sword swung, stamina is now: ",this.stamina))},e}(a.Human);e.default=c},function(t,e,o){"use strict";var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,o,n,r,i){var a=t.call(this,e,o,n,r)||this;return a.magicka=i,a}return r(e,t),e.prototype.castSpell=function(){this.magicka<=0?console.log("You have no more magicka left to cast spells"):(this.magicka-=20,console.log("magic spell cast, spell is now: ",this.magicka))},e}(o(0).Human);e.default=i}]);