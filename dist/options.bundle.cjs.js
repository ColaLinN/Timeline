'use strict';

var n,l$1,u$1,i$1,o$1,r$1,f$1,e$1,c$1,s$1,h$1={},v$1=[],p$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function _$1(n){var l=n.parentNode;l&&l.removeChild(n);}function g(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return b(l,f,i,o,null)}function b(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function w$1(n){return n.children}function k$1(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function P(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!S.__r++||o$1!==l$1.debounceRendering)&&((o$1=l$1.debounceRendering)||r$1)(S);}function S(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O(t.__P,o,r,t.__n,void 0!==t.__P.ownerSVGElement,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));S.__r=0;}function $(n,l,u,t,i,o,r,f,e,c,s){var a,p,y,d,_,g=t&&t.__k||v$1,b=l.length;for(u.__d=e,I(u,l,g),e=u.__d,a=0;a<b;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(p=-1===y.__i?h$1:g[y.__i]||h$1,y.__i=a,O(n,y,p,i,o,r,f,e,c,s),d=y.__e,y.ref&&p.ref!=y.ref&&(p.ref&&N(p.ref,null,y),s.push(y.ref,y.__c||d,y)),null==_&&null!=d&&(_=d),65536&y.__u||p.__k===y.__k?(e&&!e.isConnected&&(e=x(p)),e=H(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=_;}function I(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?b(null,i,null,null,null):y$1(i)?b(w$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?b(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=A(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),q(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),q(o,o));}function H(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=H(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function A(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function F(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||p$1.test(l)?u:u+"px";}function L(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||F(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||F(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if(i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function M(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,v,p,_,g,b,m,x,C,P,S,I,H,T,A=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof A)try{if(m=u.props,x=(a=A.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?b=(h=u.__c=t.__c).__=h.__E:("prototype"in A&&A.prototype.render?u.__c=h=new A(m,C):(u.__c=h=new k$1(m,C),h.constructor=A,h.render=B$1),x&&x.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,v=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=A.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,A.getDerivedStateFromProps(m,h.__s))),p=h.props,_=h.state,h.__v=u,v)null==A.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==A.getDerivedStateFromProps&&m!==p&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,_,g);});}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,S=l$1.__r,I=0,"prototype"in A&&A.prototype.render){for(h.state=h.__s,h.__d=!1,S&&S(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,S&&S(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(g=h.getSnapshotBeforeUpdate(p,_)),$(n,y$1(T=null!=a&&a.type===w$1&&null==a.key?a.props.children:a)?T:[T],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),b&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,v,p,d,g,b,m=t.props,w=u.props,k=u.type;if("svg"===k&&(o=!0),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!k&&(k?d.localName===k:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===k)return document.createTextNode(w);l=o?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,w.is&&w),r=null,e=!1;}if(null===k)m===w||e&&l.data===w||(l.data=w);else {if(r=r&&n.call(l.childNodes),m=t.props||h$1,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)d=m[s],"children"==s||("dangerouslySetInnerHTML"==s?v=d:"key"===s||s in w||L(l,s,null,d,o));for(s in w)d=w[s],"children"==s?p=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?g=d:"checked"==s?b=d:"key"===s||e&&"function"!=typeof d||m[s]===d||L(l,s,d,m[s],o);if(a)e||v&&(a.__html===v.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(v&&(l.innerHTML=""),$(l,y$1(p)?p:[p],u,t,i,o&&"foreignObject"!==k,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&_$1(r[s]);e||(s="value",void 0!==g&&(g!==l[s]||"progress"===k&&!g||"option"===k&&g!==m[s])&&L(l,s,g,m[s],!1),s="checked",void 0!==b&&b!==l[s]&&L(l,s,b,m[s],!1));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$1.__e(n,t);}}function q(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&q(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||_$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function B$1(n,l,u){return this.constructor(n,u)}function D$1(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=g(w$1,null,[u]),r||h$1,h$1,void 0!==t.ownerSVGElement,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n=v$1.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,k$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),P(this));},k$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),P(this));},k$1.prototype.render=w$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},S.__r=0,e$1=0,c$1=M(!1),s$1=M(!0);

var t,r,u,i,o=0,f=[],c=[],e=l$1,a=e.__b,v=e.__r,l=e.diffed,m=e.__c,s=e.unmount,d=e.__;function h(n,t){e.__h&&e.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c}),u.__[n]}function p(n){return o=1,y(D,n)}function y(n,u,i){var o=h(t++,2);if(o.t=n,!o.__c&&(o.__=[i?i(u):D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.u)){var f=function(n,t,r){if(!o.__c.__H)return !0;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=!1;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=!0);}}),!(!i&&o.__c.props===n)&&(!c||c.call(this,n,t,r))};r.u=!0;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function _(n,u){var i=h(t++,3);!e.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r.__H.__h.push(i));}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],e.__e(t,n.__v);}}e.__b=function(n){r=null,a&&a(n);},e.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d&&d(n,t);},e.__r=function(n){v&&v(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c,n.__N=n.i=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},e.diffed=function(n){l&&l(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===e.requestAnimationFrame||((i=e.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c&&(n.__=n.__V),n.i=void 0,n.__V=c;})),u=r=null;},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e.__e(r,n.__v);}}),m&&m(n,t);},e.unmount=function(n){s&&s(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&e.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

function Tweet({
  tweet
}) {
  return g("div", {
    class: `${tweet.engaged ? "border-blue-400 border-2 group is-engaged" : ""} my-4 rounded-xl shadow relative group/item flex overflow-hidden ${tweet.bookmarked ? "is-bookmarked" : ""}`
  }, g("span", {
    className: "bg-blue-400 hidden group-[.is-engaged]:block h-5 text-white px-2 absolute rounded-sm rounded-b-none right-0 bottom-0"
  }, "Engaged"), g("a", {
    target: "_blank",
    class: "w-full",
    href: tweet.tweetUrl
  }, g("div", {
    class: "bg-white hover:bg-gray-100 cursor-pointer p-4 transition-all group-hover/item:translate-x-[-80px]"
  }, g("div", {
    class: "flex justify-between"
  }, g("span", {
    class: "name"
  }, tweet.userName), g("span", {
    class: "text-gray-500"
  }, formatDate(tweet.tweetTime))), g("p", {
    class: "text-gray-700 mt-1 w-full text-base"
  }, tweet.tweetBody), g("div", {
    class: "flex overflow-x-auto mt-2 gap-1"
  }, tweet.tweetImages.length > 0 && tweet.tweetImages.map(img => g("img", {
    class: "rounded-lg object-cover h-32 w-32",
    src: img
  }))))), g("div", {
    class: "cursor-pointer transition-all w-[80px] flex justify-center items-center absolute top-0 bottom-0 right-[-80px] group-hover/item:right-0"
  }, g("button", {
    onclick: () => toggleBookmark(tweet.tweetUrl),
    class: "h-full flex-1 flex flex-col justify-center bg-yellow-400 hover:bg-yellow-500"
  }, g("div", {
    className: "flex justify-center w-full"
  }, g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    class: `${tweet.bookmarked ? "hidden" : "block"}`
  }, g("path", {
    d: "M480-240 200-120v-725h350v60H260v574l220-93 220 93v-334h60v425L480-240ZM260-785h290-290Zm440 180v-90h-90v-60h90v-90h60v90h90v60h-90v90h-60Z"
  })), g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: `${tweet.bookmarked ? "block" : "hidden"}`,
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24"
  }, g("path", {
    fill: "#ffffff",
    d: "M850-695H610v-60h240v60ZM480-240 200-120v-725h350v60H260v574l220-93 220 93v-334h60v425L480-240ZM260-785h290-290Z"
  })))), g("button", {
    onclick: () => deleteTweet(tweet.tweetUrl),
    class: "h-full flex-1 flex flex-col justify-center bg-red-400 hover:bg-red-500"
  }, g("div", {
    className: "flex justify-center w-full"
  }, g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    class: "group-hover:ml-3"
  }, g("path", {
    fill: "#ffffff",
    d: "M261-120q-24.75 0-42.375-17.625T201-180v-570h-11q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T190-810h158q0-13 8.625-21.5T378-840h204q12.75 0 21.375 8.625T612-810h158q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T770-750h-11v570q0 24.75-17.625 42.375T699-120H261Zm438-630H261v570h438v-570Zm-438 0v570-570Zm219 330 96 97q10 10 24 10.5t24-10q10-10.5 10-24T624-370l-96-98 96-98q10-10 10-23.5T624-613q-10-10-24-10t-24 10l-96 97-95-97q-10-10-24-10t-24 10q-10 10-10 24t10 24l96 97-96 97q-10 10-10 24t10 24q10 10 24 10t24-10l95-97Z"
  }))))));
}
function toggleBookmark(tweetUrl) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("tweets", function (data) {
      let tweets = data.tweets || [];
      let updated = false;
      for (let tweet of tweets) {
        if (tweet.tweetUrl === tweetUrl) {
          tweet.bookmarked = !tweet.bookmarked; // Toggle the bookmark status
          updated = true;
          break;
        }
      }
      if (updated) {
        chrome.storage.local.set({
          tweets: tweets
        }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  });
}
function deleteTweet(tweetUrl) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("tweets", function (data) {
      let tweets = data.tweets || [];
      let updated = false;
      for (let tweetIndex in tweets) {
        if (tweetUrl === tweets[tweetIndex].tweetUrl) {
          tweets.splice(tweetIndex, 1);
          updated = true;
          break;
        }
      }
      if (updated) {
        chrome.storage.local.set({
          tweets: tweets
        }, () => {
          if (chrome.runtime.lastError) {
            reject(chrome.runtime.lastError);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    });
  });
}
function searchTweets(searchTerm) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get("tweets", function (data) {
      let tweets = data.tweets || [];
      let results = tweets.filter(tweet => tweet.tweetBody.toLowerCase().includes(searchTerm.toLowerCase()));
      resolve(results);
    });
  });
}
function clearTweets() {
  chrome.storage.local.remove("tweets", function () {
    var error = chrome.runtime.lastError;
    if (error) {
      console.error(error);
    } else {
      console.log("Tweets cleared successfully");
    }
  });
}
function formatDate(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // months are zero-indexed in JS
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const minute = ("0" + date.getMinutes()).slice(-2);
  return `${month}/${day}/${year} ${hour}:${minute}`;
}
function exportTweets(tweets) {
  const json = JSON.stringify(tweets);
  const blob = new Blob([json], {
    type: "application/json"
  });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = "tweets.json";
  link.click();
  URL.revokeObjectURL(href); // free up storage--no longer needed.
}

function Header({
  tweets
}) {
  return g("header", {
    class: "z-10 backdrop-blur pr-[75px] py-1 sticky left-0 right-0 top-0"
  }, g("div", {
    class: "container mx-auto flex justify-between items-center"
  }, g("h1", {
    class: "font-bold text-xl flex items-center gap-2"
  }, g("img", {
    height: "16",
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAQAAAD/5HvMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfnCAEEAgfkAvLDAAAF6klEQVRo3u2Za2wUVRTHf7vtstutCN0CLUJTeaiASKUQCDSUkogaBDQl+IVEwSqh+NZqkPBBQHkEDcRPBqQEEhoSEx5CyiMKaFQKCGik4VGQh33QBy3Qx7Zsd68fvF1mZmd2Z3YX+LL/+2Vm7p0z/3vm3HPuPQcSSCCBBB4ubHGS4iAZO4JufAQeFiEbfRjCSAaRRQa9cRCgg5tUU0sVF6mn+8ER6ksu+RQwgnSSQ3oFrVyjgsNUcD02jZnBQOZziFsEEBFaF2dZSY4O5bhpqA+zWcxYnMEnflppxks7Puy4SeFR0hT9AWooYzOXEPEmZCeXpbxIirz3cpXjHKOSOjrpwo+NXjhJ4wnGk8co0qT8AOf4iu9pj+ePSuEt/gn+jCZ2MIdsHIYT9ZDHKs7TLd9oYyPZ8aPjYR2tUvQdtpGP25ROh7OES9LaAhxhfHzoZFLKXSm0gjmmyNwjlUMp7XIyf1EQO53+bMGPQOBlE8OikJDKIq5JSpVMiY3OI3wj7eAWy+gdpRQbz/OnpHSKMdHTSeIjvAgELbxPr5imNpE/JKVyBkYrZDo1co18ariizGMylQgE3ayJbnKZHJECNgS9T2yYxQ0EgmZmWX/ZxlJpPQfJjAsdSOITuhAIjliXOYILCAS1TDMxOoPXyMUecVw6exEI7vK2NTp2vpQmuIakCGMdvMCPdHGZEtIjSi6gHoHgBIOsEBrKOQSC84yMMHIIX9MQjO/7eS5CdHeyUeqoyAqhIumbV4Qd5WYeJ6Xb7Gk3WMPjYd+aJE17N6lm6aSyRwqfaDjGxrNsCUY4ZfNTwathAoybXQgE9UwwS2g0/yIQ7DQUm867VIXZnN1hE88Ybm/ekPovMUtoLp0I/CzW7XVQwD65fI1bgAsU49GV8JTcymw3625Xy3ChFwizWCltIHLr5AfydIw8lQMIBGfMeSMXu2VkHhzSU0hFcNNlrtWyXCd2rUcgaGCcGUIDOCWDoNaChvG3wWe9NNOqWW/39LQg5BuLCCDo5BX1Y32P0Zs0AGro1PRcZTd26pim8sld7GEHN3AzhTc17u4CNSRxOOQb1XThwkGGGQ3lSBtZpdPXn+EsVh2BfKylj+y18xLXVdrZTzZP6qy2ybQgECwx1pCbAdgBP0PkMcZFtgwbzdySoxppZLpKxnE2cFteByjnOz5XELDRSIfOxDrxAWh3EUpCT/MtHgKAk0cBeJ2XARs+llNmqM+D1CnuBOW8Q38zP0IPSkJn+YkPVH7BgwcQlHHIUIKgXvOkmTYThFzySxorVZqml9WU6Zwv97GEJkPBtpDTVmbQosLBgwsI0GxMCFpYxgHNiz9TQnVY0TMYqrhLptDAO6sxGCfgC9FvCEZzUrFGTjNWZ0yxapUFKA06PicLaFKtsgMG0dCCYyzgkhR2kXzdEcWazIePX/mQGcxjm1zMkQhZDB1zaUBQzUyD/mKdVIyfDhnBzRAyDK76nnoX6RSxnnIz7CXsls4leTJKnpHeKAKhbjazk5uGua9YM5NuZuEAGvhF22W0+/XREEagldyhX8eR5DAJgGNUarsiH1v0UEWL6bGVIQHayXwyAB9745XCSmEdHSZ2QgF+0zmzTA0egwaHiraQjlTAywpOMiHC+VxwjT1c1jz18DEDAB9bIzjcBwI7JXIvfjRux/OYMJO66JMNSmQxDVfMdHrSMX7WKhLHltGPhRyngfdiTlj1RMkYElYARbTxf0pvaQwpvenBlN5pcmKaGBlsDSY9N6q2GmaRykKu0pP0zI9CggaZbFGkhQstpoXHsDm+aWFQJ85vs5UppkKpnWH3J3EOkMJCrgR9cCM7KCQrTGkhjUms4pyitLDJTGnBWvFlHJ+pii9XOMExKqmlHT9+bCTTi36y+DISj/Xii9WNRF9mU0yuwgH4aaWJNu7iw44TFx5VeUpQw3ZKqcJUeSoaPMYCDnHbZAHvC8bezwLePU2NI5+pEUqcR/ndaokz9iLwKLLJVBWBa6nj/IMuAmulxK1MnkACCSTwsPEfF/n4ctIyymwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDgtMDFUMDQ6MDI6MDQrMDA6MDCiLtkeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA4LTAxVDA0OjAyOjA0KzAwOjAw03NhogAAABJ0RVh0ZXhpZjpFeGlmT2Zmc2V0ADI2UxuiZQAAABl0RVh0ZXhpZjpQaXhlbFhEaW1lbnNpb24AMTAyNPLFVh8AAAAZdEVYdGV4aWY6UGl4ZWxZRGltZW5zaW9uADEwMjRLPo33AAAAIHRFWHRzb2Z0d2FyZQBodHRwczovL2ltYWdlbWFnaWNrLm9yZ7zPHZ0AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADE5MkBdcVUAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTky06whCAAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNjkwODYyNTI058q/fgAAAA90RVh0VGh1bWI6OlNpemUAMEJClKI+7AAAAFZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vL21udGxvZy9mYXZpY29ucy8yMDIzLTA4LTAxLzQ1NzYyZDZkY2Q2YmM2ZmE2MWMzNTYwOTNkZDNkNjA1Lmljby5wbmdCGETuAAAAAElFTkSuQmCC"
  }), "Timeline - X(Twitter) History"), g("div", null, g("a", {
    onClick: () => exportTweets(tweets),
    class: "text-gray-500 cursor-pointer hover:text-black"
  }, "Export"), g("a", {
    href: "https://github.com/RiverTwilight/Timeline",
    class: "text-gray-500 ml-4 cursor-pointer hover:text-black"
  }, "Github"))));
}
function App() {
  const [tweet, setTweet] = p([]);
  const [searchTerm, setSearchTerm] = p("");
  const [searchResults, setSearchResults] = p([]);
  const [activeTab, setActiveTab] = p("History");
  const fetchTweets = () => {
    chrome.storage.local.get("tweets", data => {
      let fetchedTweets = data.tweets || [];
      fetchedTweets.sort((a, b) => new Date(b.captureDate) - new Date(a.captureDate));
      setTweet(fetchedTweets);
    });
  };

  // Handle search term changes
  const handleSearchChange = e => {
    setSearchTerm(e.target.value);
  };

  // Search for tweets when search term changes
  _(() => {
    if (searchTerm) {
      searchTweets(searchTerm).then(results => {
        setSearchResults(results);
      });
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  _(() => {
    fetchTweets();
    const handleStorageChange = changes => {
      for (let key in changes) {
        if (key === "tweets") {
          fetchTweets(); // refetch the tweets
        }
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);
    return () => chrome.storage.onChanged.removeListener(handleStorageChange);
  }, []);
  return g("div", {
    class: "relative min-w-[500px] max-w-[800px]"
  }, g(Header, {
    tweets: tweet
  }), g("div", {
    class: "relative container mx-auto flex"
  }, g("aside", {
    class: "w-48 sticky pt-5 h-[90vh] px-4 left-0 bottom-0 top-[74px] overflow-hidden"
  }, g("nav", null, g("a", {
    onClick: () => setActiveTab("History"),
    class: `${activeTab == "History" ? "active" : ""} text-lg text-gray-600 cursor-pointer font-semibold block mb-2 py-2 px-4 rounded-md hover:bg-gray-200`
  }, "History"), g("a", {
    onClick: () => setActiveTab("Favorite"),
    class: `${activeTab == "Favorite" ? "active" : ""} text-lg text-gray-600 cursor-pointer font-semibold block mb-2 py-2 px-4 rounded-md hover:bg-gray-200`
  }, "Favorite"))), g("main", {
    class: "flex-1 px-4 rounded min-w-[550px] overflow-hidden w-full"
  }, searchTerm.length == 0 && g("section", null, tweet.filter(t => {
    return t.bookmarked && activeTab == "Favorite" || activeTab != "Favorite";
  }).map(t => {
    return g(Tweet, {
      tweet: t
    });
  }), g("p", {
    className: "text-gray-500 py-2"
  }, "Total: ", tweet.length, "/100"), g("p", {
    className: "text-gray-500 py-2"
  }, "Chrome has a limit of local storage used by extension. The oldest tweet will automatically replaced by newly added if the limit is reached.")), searchTerm.length > 0 && g("section", null, searchResults.filter(t => {
    return t.bookmarked && activeTab == "Favorite" || activeTab != "Favorite";
  }).map(t => {
    return g(Tweet, {
      tweet: t
    });
  })), g("section", {
    style: "display: none"
  })), g("div", {
    class: "w-48 sticky h-[90vh] flex flex-col right-0 bottom-0 top-[74px] mt-3 overflow-visible"
  }, g("div", {
    class: "group w-full flex items-center relative"
  }, g("button", {
    class: "bg-white transition-all h-12 w-12 mt-2 bg-red shadow rounded-full flex justify-center items-center overflow-hidden group-hover:w-full group-hover:justify-start",
    "aria-label": "Search",
    title: "Search"
  }, g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    class: "group-hover:ml-3",
    width: "24"
  }, g("path", {
    d: "M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"
  }))), g("input", {
    id: "searchInput",
    type: "text",
    value: searchTerm,
    onInput: handleSearchChange,
    placeholder: "Search",
    class: "translate-y-[4px] translate-x-[-4px] p-0 rounded-md h-8 w-14 absolute left-12 opacity-0 group-hover:opacity-100"
  })), g("div", {
    class: "group w-full flex items-center relative"
  }, g("button", {
    class: "bg-white transition-all h-12 w-12 mt-2 bg-red shadow rounded-full flex justify-center items-center overflow-hidden group-hover:w-full group-hover:justify-start",
    id: "refreshBtn",
    "aria-label": "Refresh",
    title: "Refresh",
    onClick: fetchTweets
  }, g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    class: "group-hover:ml-3",
    width: "24"
  }, g("path", {
    d: "M480-160q-133 0-226.5-93.5T160-480q0-133 93.5-226.5T480-800q85 0 149 34.5T740-671v-99q0-13 8.5-21.5T770-800q13 0 21.5 8.5T800-770v194q0 13-8.5 21.5T770-546H576q-13 0-21.5-8.5T546-576q0-13 8.5-21.5T576-606h138q-38-60-97-97t-137-37q-109 0-184.5 75.5T220-480q0 109 75.5 184.5T480-220q75 0 140-39.5T717-366q5-11 16.5-16.5t22.5-.5q12 5 16 16.5t-1 23.5q-39 84-117.5 133.5T480-160Z"
  }))), g("span", {
    class: "cursor-pointer translate-y-[4px] absolute left-12 opacity-0 group-hover:opacity-100"
  }, "Refresh")), g("div", {
    class: "group w-full flex items-center relative"
  }, g("button", {
    onClick: clearTweets,
    class: "bg-white transition-all h-12 w-12 mt-2 bg-red shadow rounded-full flex justify-center items-center overflow-hidden group-hover:w-full group-hover:justify-start",
    id: "clearBtn",
    title: "Clear"
  }, g("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    class: "group-hover:ml-3"
  }, g("path", {
    fill: "rgb(239, 68, 68)",
    d: "M600-230v-60h145v60H600Zm0-368v-60h280v60H600Zm0 184v-60h235v60H600ZM125-675H80v-60h170v-45h135v45h170v60h-45v415q0 24-18 42t-42 18H185q-24 0-42-18t-18-42v-415Zm60 0v415h265v-415H185Zm0 0v415-415Z"
  }))), g("span", {
    class: "text-red-500 cursor-pointer translate-y-[4px] absolute left-12 opacity-0 group-hover:opacity-100"
  }, "Clear")))));
}

// Render the App into the DOM
D$1(g(App, null), document.body);
