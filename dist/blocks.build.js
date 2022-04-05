!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(1)},function(e,t,r){"use strict";function n(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(o,i){try{var a=t[o](i),l=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}return n("next")})}}var o=r(2),i=r.n(o),a=r(5),l=(r.n(a),r(6)),u=(r.n(l),r(7)),s=(r.n(u),this),__=wp.i18n.__,c=wp.blocks.registerBlockType,h=wp.blockEditor.InspectorControls,f=wp.components,p=f.PanelBody,m=f.TextControl,y=f.SelectControl,g=f.ToggleControl,d=f.RangeControl,w=wp.element.Fragment;c("cgb/block-heropress-widget",{title:__("Heropress Widget"),icon:"feedback",category:"common",keywords:[__("heropress-widget"),__("heropress"),__("press")],attributes:{essayMainTitle:{type:"string"},essayPerPage:{type:"number",default:1},essayColumns:{type:"number",default:1},showImage:{type:"boolean",default:!1},showTitle:{type:"boolean",default:!1},showAuthor:{type:"boolean",default:!1},showPublishDate:{type:"boolean",default:!1},heropressData:{type:"object"}},edit:function(e){if(void 0==e.attributes.heropressData){n(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://heropress.com/essays/feed/").then(function(e){return e.text()}).then(function(e){var t=new DOMParser,r=t.parseFromString(e,"text/xml"),n=r.getElementsByTagName("item"),o=Array.from(n),i=o.map(function(e){var t={};return t.title=e.getElementsByTagName("title")[0].innerHTML,t.link=e.getElementsByTagName("link")[0].innerHTML,t.enclosure=e.getElementsByTagName("enclosure")[0].getAttribute("url"),t.pubDate=e.getElementsByTagName("pubDate")[0].innerHTML,t.author=e.getElementsByTagName("dc:creator")[0].innerHTML,t.description=e.getElementsByTagName("description")[0].innerHTML,t.content=e.getElementsByTagName("content:encoded")[0].innerHTML,t});return console.log(i),i});case 2:return t=e.sent,console.log(t),e.abrupt("return",t);case 5:case"end":return e.stop()}},e,s)}))().then(function(t){e.setAttributes({heropressData:t})})}return wp.element.createElement(w,null,wp.element.createElement(h,null,wp.element.createElement(p,{title:"Heropress Widget Settings"},wp.element.createElement(m,{label:"Title:",value:e.attributes.essayMainTitle,onChange:function(t){return e.setAttributes({essayMainTitle:t})}}),wp.element.createElement(y,{label:"Show how many",value:e.attributes.essayPerPage,options:[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4",value:4},{label:"5",value:5}],onChange:function(t){return e.setAttributes({essayPerPage:Number(t)})}}),wp.element.createElement(d,{label:"Columns",value:e.attributes.essayColumns,onChange:function(t){return e.setAttributes({essayColumns:Number(t)})},min:1,max:e.attributes.essayPerPage}),wp.element.createElement(g,{label:"Image",checked:e.attributes.showImage,onChange:function(t){return e.setAttributes({showImage:t})}}),wp.element.createElement(g,{label:"Title",checked:e.attributes.showTitle,onChange:function(t){return e.setAttributes({showTitle:t})}}),wp.element.createElement(g,{label:"Author",checked:e.attributes.showAuthor,onChange:function(t){return e.setAttributes({showAuthor:t})}}),wp.element.createElement(g,{label:"Publish Date",checked:e.attributes.showPublishDate,onChange:function(t){return e.setAttributes({showPublishDate:t})}}))),wp.element.createElement("h5",null,"Please use the controls from settings menu on the right."))},save:function(e){var t=e.attributes,r=t.essayMainTitle,n=t.essayPerPage,o=t.essayColumns,i=t.showImage,a=t.showTitle,l=t.showAuthor,s=t.showPublishDate,c=t.heropressData,h=u.useBlockProps.save();return wp.element.createElement("div",h,wp.element.createElement("h2",null,"Inspector Control Fields"),wp.element.createElement("ul",null,wp.element.createElement("li",null,"Main Title Field: ",r),wp.element.createElement("li",null,"Essay Field: ",n),wp.element.createElement("li",null,"Columns Field: ",o),wp.element.createElement("li",null,"Image Field: ",i),wp.element.createElement("li",null,"Title Field: ",a),wp.element.createElement("li",null,"Author Field: ",l),wp.element.createElement("li",null,"Publish Field: ",s),wp.element.createElement("li",null,"Data Field: ",c)))}})},function(e,t,r){e.exports=r(3)},function(e,t,r){var n=function(){return this}()||Function("return this")(),o=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=o&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,e.exports=r(4),o)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(e){n.regeneratorRuntime=void 0}},function(e,t){!function(t){"use strict";function r(e,t,r,n){var i=t&&t.prototype instanceof o?t:o,a=Object.create(i.prototype),l=new p(n||[]);return a._invoke=s(e,r,l),a}function n(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}function o(){}function i(){}function a(){}function l(e){["next","throw","return"].forEach(function(t){e[t]=function(e){return this._invoke(t,e)}})}function u(e){function t(r,o,i,a){var l=n(e[r],e,o);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"===typeof s&&w.call(s,"__await")?Promise.resolve(s.__await).then(function(e){t("next",e,i,a)},function(e){t("throw",e,i,a)}):Promise.resolve(s).then(function(e){u.value=e,i(u)},a)}a(l.arg)}function r(e,r){function n(){return new Promise(function(n,o){t(e,r,n,o)})}return o=o?o.then(n,n):n()}var o;this._invoke=r}function s(e,t,r){var o=P;return function(i,a){if(o===_)throw new Error("Generator is already running");if(o===C){if("throw"===i)throw a;return y()}for(r.method=i,r.arg=a;;){var l=r.delegate;if(l){var u=c(l,r);if(u){if(u===N)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===P)throw o=C,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=_;var s=n(e,t,r);if("normal"===s.type){if(o=r.done?C:k,s.arg===N)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(o=C,r.method="throw",r.arg=s.arg)}}}function c(e,t){var r=e.iterator[t.method];if(r===g){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=g,c(e,t),"throw"===t.method))return N;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var o=n(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,N;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=g),t.delegate=null,N):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,N)}function h(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function f(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function p(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(h,this),this.reset(!0)}function m(e){if(e){var t=e[b];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(w.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=g,t.done=!0,t};return n.next=n}}return{next:y}}function y(){return{value:g,done:!0}}var g,d=Object.prototype,w=d.hasOwnProperty,v="function"===typeof Symbol?Symbol:{},b=v.iterator||"@@iterator",E=v.asyncIterator||"@@asyncIterator",x=v.toStringTag||"@@toStringTag",L="object"===typeof e,T=t.regeneratorRuntime;if(T)return void(L&&(e.exports=T));T=t.regeneratorRuntime=L?e.exports:{},T.wrap=r;var P="suspendedStart",k="suspendedYield",_="executing",C="completed",N={},O={};O[b]=function(){return this};var A=Object.getPrototypeOf,F=A&&A(A(m([])));F&&F!==d&&w.call(F,b)&&(O=F);var j=a.prototype=o.prototype=Object.create(O);i.prototype=j.constructor=a,a.constructor=i,a[x]=i.displayName="GeneratorFunction",T.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===i||"GeneratorFunction"===(t.displayName||t.name))},T.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,a):(e.__proto__=a,x in e||(e[x]="GeneratorFunction")),e.prototype=Object.create(j),e},T.awrap=function(e){return{__await:e}},l(u.prototype),u.prototype[E]=function(){return this},T.AsyncIterator=u,T.async=function(e,t,n,o){var i=new u(r(e,t,n,o));return T.isGeneratorFunction(t)?i:i.next().then(function(e){return e.done?e.value:i.next()})},l(j),j[x]="Generator",j[b]=function(){return this},j.toString=function(){return"[object Generator]"},T.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},T.values=m,p.prototype={constructor:p,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=g,this.done=!1,this.delegate=null,this.method="next",this.arg=g,this.tryEntries.forEach(f),!e)for(var t in this)"t"===t.charAt(0)&&w.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=g)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){function t(t,n){return i.type="throw",i.arg=e,r.next=t,n&&(r.method="next",r.arg=g),!!n}if(this.done)throw e;for(var r=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=w.call(o,"catchLoc"),l=w.call(o,"finallyLoc");if(a&&l){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&w.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),N},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),f(r),N}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;f(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:m(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=g),N}}}(function(){return this}()||Function("return this")())},function(e,t){},function(e,t){},function(e,t){e.exports=wp.blockEditor}]);