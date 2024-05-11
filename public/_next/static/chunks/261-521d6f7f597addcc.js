(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{5830:function(e,t,n){"use strict";n.d(t,{Vq:function(){return ek}});var r,a,o,i=n(7294),l=n(3967),c=n.n(l),u=n(7462),s=n(6206),d=n(8771),f=n(5360),p=n(1276),v=n(7342),m=n(8083),g=n(5320),h=n(9698);let b="focusScope.autoFocusOnMount",y="focusScope.autoFocusOnUnmount",$={bubbles:!1,cancelable:!0},E=(0,i.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:o,...l}=e,[c,s]=(0,i.useState)(null),f=(0,h.W)(a),p=(0,h.W)(o),v=(0,i.useRef)(null),m=(0,d.e)(t,e=>s(e)),E=(0,i.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,i.useEffect)(()=>{if(r){function handleFocusIn(e){if(E.paused||!c)return;let t=e.target;c.contains(t)?v.current=t:$d3863c46a17e8a28$var$focus(v.current,{select:!0})}function handleFocusOut(e){if(E.paused||!c)return;let t=e.relatedTarget;null===t||c.contains(t)||$d3863c46a17e8a28$var$focus(v.current,{select:!0})}function handleMutations(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&$d3863c46a17e8a28$var$focus(c)}document.addEventListener("focusin",handleFocusIn),document.addEventListener("focusout",handleFocusOut);let e=new MutationObserver(handleMutations);return c&&e.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",handleFocusIn),document.removeEventListener("focusout",handleFocusOut),e.disconnect()}}},[r,c,E.paused]),(0,i.useEffect)(()=>{if(c){w.add(E);let e=document.activeElement,t=c.contains(e);if(!t){let t=new CustomEvent(b,$);c.addEventListener(b,f),c.dispatchEvent(t),t.defaultPrevented||($d3863c46a17e8a28$var$focusFirst($d3863c46a17e8a28$var$removeLinks($d3863c46a17e8a28$var$getTabbableCandidates(c)),{select:!0}),document.activeElement===e&&$d3863c46a17e8a28$var$focus(c))}return()=>{c.removeEventListener(b,f),setTimeout(()=>{let t=new CustomEvent(y,$);c.addEventListener(y,p),c.dispatchEvent(t),t.defaultPrevented||$d3863c46a17e8a28$var$focus(null!=e?e:document.body,{select:!0}),c.removeEventListener(y,p),w.remove(E)},0)}}},[c,f,p,E]);let C=(0,i.useCallback)(e=>{if(!n&&!r||E.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,a=document.activeElement;if(t&&a){let t=e.currentTarget,[r,o]=$d3863c46a17e8a28$var$getTabbableEdges(t),i=r&&o;i?e.shiftKey||a!==o?e.shiftKey&&a===r&&(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(o,{select:!0})):(e.preventDefault(),n&&$d3863c46a17e8a28$var$focus(r,{select:!0})):a===t&&e.preventDefault()}},[n,r,E.paused]);return(0,i.createElement)(g.WV.div,(0,u.Z)({tabIndex:-1},l,{ref:m,onKeyDown:C}))});function $d3863c46a17e8a28$var$focusFirst(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if($d3863c46a17e8a28$var$focus(r,{select:t}),document.activeElement!==n)return}function $d3863c46a17e8a28$var$getTabbableEdges(e){let t=$d3863c46a17e8a28$var$getTabbableCandidates(e),n=$d3863c46a17e8a28$var$findVisible(t,e),r=$d3863c46a17e8a28$var$findVisible(t.reverse(),e);return[n,r]}function $d3863c46a17e8a28$var$getTabbableCandidates(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function $d3863c46a17e8a28$var$findVisible(e,t){for(let n of e)if(!$d3863c46a17e8a28$var$isHidden(n,{upTo:t}))return n}function $d3863c46a17e8a28$var$isHidden(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}function $d3863c46a17e8a28$var$isSelectableInput(e){return e instanceof HTMLInputElement&&"select"in e}function $d3863c46a17e8a28$var$focus(e,{select:t=!1}={}){if(e&&e.focus){let n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&$d3863c46a17e8a28$var$isSelectableInput(e)&&t&&e.select()}}let w=$d3863c46a17e8a28$var$createFocusScopesStack();function $d3863c46a17e8a28$var$createFocusScopesStack(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=$d3863c46a17e8a28$var$arrayRemove(e,t)).unshift(t)},remove(t){var n;null===(n=(e=$d3863c46a17e8a28$var$arrayRemove(e,t))[0])||void 0===n||n.resume()}}}function $d3863c46a17e8a28$var$arrayRemove(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}function $d3863c46a17e8a28$var$removeLinks(e){return e.filter(e=>"A"!==e.tagName)}var C=n(2651),S=n(9115);let R=0;function $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(){(0,i.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:$3db38b7d1fb3fe6a$var$createFocusGuard()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:$3db38b7d1fb3fe6a$var$createFocusGuard()),R++,()=>{1===R&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),R--}},[])}function $3db38b7d1fb3fe6a$var$createFocusGuard(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function __rest(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function __spreadArray(e,t,n){if(n||2==arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var k="right-scroll-bar-position",_="width-before-scroll-bar";function assignRef(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}function useCallbackRef(e,t){var n=(0,i.useState)(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(value){var r=n.value;r!==value&&(n.value=value,n.callback(value,r))}}}})[0];return n.callback=t,n.facade}var T="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,D=new WeakMap;function useMergeRefs(e,t){var n=useCallbackRef(t||null,function(t){return e.forEach(function(e){return assignRef(e,t)})});return T(function(){var t=D.get(n);if(t){var r=new Set(t),a=new Set(e),o=n.current;r.forEach(function(e){a.has(e)||assignRef(e,null)}),a.forEach(function(e){r.has(e)||assignRef(e,o)})}D.set(n,e)},[e]),n}function ItoI(e){return e}var M=(void 0===r&&(r={}),(a=function innerCreateMedium(e,t){void 0===t&&(t=ItoI);var n=[],r=!1;return{read:function(){if(r)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(e){var a=t(e,r);return n.push(a),function(){n=n.filter(function(e){return e!==a})}},assignSyncMedium:function(e){for(r=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){r=!0;var t=[];if(n.length){var a=n;n=[],a.forEach(e),t=n}var executeQueue=function(){var n=t;t=[],n.forEach(e)},cycle=function(){return Promise.resolve().then(executeQueue)};cycle(),n={push:function(e){t.push(e),cycle()},filter:function(e){return t=t.filter(e),n}}}}}(null)).options=__assign({async:!0,ssr:!1},r),a),nothing=function(){},x=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:nothing,onWheelCapture:nothing,onTouchMoveCapture:nothing}),a=r[0],o=r[1],l=e.forwardProps,c=e.children,u=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,p=e.sideCar,v=e.noIsolation,m=e.inert,g=e.allowPinchZoom,h=e.as,b=void 0===h?"div":h,y=__rest(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),$=useMergeRefs([n,t]),E=__assign(__assign({},y),a);return i.createElement(i.Fragment,null,d&&i.createElement(p,{sideCar:M,removeScrollBar:s,shards:f,noIsolation:v,inert:m,setCallbacks:o,allowPinchZoom:!!g,lockRef:n}),l?i.cloneElement(i.Children.only(c),__assign(__assign({},E),{ref:$})):i.createElement(b,__assign({},E,{className:u,ref:$}),c))});x.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},x.classNames={fullWidth:_,zeroRight:k};var SideCar=function(e){var t=e.sideCar,n=__rest(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,__assign({},n))};function exportSidecar(e,t){return e.useMedium(t),SideCar}function makeStyleTag(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}function injectStyles(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function insertStyleTag(e){(document.head||document.getElementsByTagName("head")[0]).appendChild(e)}SideCar.isSideCarExport=!0;var stylesheetSingleton=function(){var e=0,t=null;return{add:function(n){0==e&&(t=makeStyleTag())&&(injectStyles(t,n),insertStyleTag(t)),e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},styleHookSingleton=function(){var e=stylesheetSingleton();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},styleSingleton=function(){var e=styleHookSingleton();return function(t){return e(t.styles,t.dynamic),null}},O={left:0,top:0,right:0,gap:0},parse=function(e){return parseInt(e||"",10)||0},getOffset=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],a=t["padding"===e?"paddingRight":"marginRight"];return[parse(n),parse(r),parse(a)]},getGapWidth=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return O;var t=getOffset(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},A=styleSingleton(),N="data-scroll-locked",getStyles=function(e,t,n,r){var a=e.left,o=e.top,i=e.right,l=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(l,"px ").concat(r,";\n  }\n  body[").concat(N,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(a,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(k," {\n    right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(_," {\n    margin-right: ").concat(l,"px ").concat(r,";\n  }\n  \n  .").concat(k," .").concat(k," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(_," .").concat(_," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(N,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(l,"px;\n  }\n")},getCurrentUseCounter=function(){var e=parseInt(document.body.getAttribute(N)||"0",10);return isFinite(e)?e:0},useLockAttribute=function(){i.useEffect(function(){return document.body.setAttribute(N,(getCurrentUseCounter()+1).toString()),function(){var e=getCurrentUseCounter()-1;e<=0?document.body.removeAttribute(N):document.body.setAttribute(N,e.toString())}},[])},RemoveScrollBar=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=void 0===r?"margin":r;useLockAttribute();var o=i.useMemo(function(){return getGapWidth(a)},[a]);return i.createElement(A,{styles:getStyles(o,!t,a,n?"":"!important")})},F=!1;if("undefined"!=typeof window)try{var L=Object.defineProperty({},"passive",{get:function(){return F=!0,!0}});window.addEventListener("test",L,L),window.removeEventListener("test",L,L)}catch(e){F=!1}var I=!!F&&{passive:!1},elementCanBeScrolled=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},locationCouldBeScrolled=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),elementCouldBeScrolled(e,n)){var r=getScrollVariables(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},elementCouldBeScrolled=function(e,t){return"v"===e?elementCanBeScrolled(t,"overflowY"):elementCanBeScrolled(t,"overflowX")},getScrollVariables=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},handleScroll=function(e,t,n,r,a){var o,i=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),l=i*r,c=n.target,u=t.contains(c),s=!1,d=l>0,f=0,p=0;do{var v=getScrollVariables(e,c),m=v[0],g=v[1]-v[2]-i*m;(m||g)&&elementCouldBeScrolled(e,c)&&(f+=g,p+=m),c=c.parentNode}while(!u&&c!==document.body||u&&(t.contains(c)||t===c));return d&&(a&&0===f||!a&&l>f)?s=!0:!d&&(a&&0===p||!a&&-l>p)&&(s=!0),s},getTouchXY=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},getDeltaXY=function(e){return[e.deltaX,e.deltaY]},extractRef=function(e){return e&&"current"in e?e.current:e},P=0,W=[],B=exportSidecar(M,function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(P++)[0],o=i.useState(function(){return styleSingleton()})[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var t=__spreadArray([e.lockRef.current],(e.shards||[]).map(extractRef),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var c=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!l.current.allowPinchZoom;var a,o=getTouchXY(e),i=n.current,c="deltaX"in e?e.deltaX:i[0]-o[0],u="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(c)>Math.abs(u)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=locationCouldBeScrolled(d,s);if(!f)return!0;if(f?a=d:(a="v"===d?"h":"v",f=locationCouldBeScrolled(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||u)&&(r.current=a),!a)return!0;var p=r.current||a;return handleScroll(p,t,e,"h"===p?c:u,!0)},[]),u=i.useCallback(function(e){if(W.length&&W[W.length-1]===o){var n="deltaY"in e?getDeltaXY(e):getTouchXY(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var a=(l.current.shards||[]).map(extractRef).filter(Boolean).filter(function(t){return t.contains(e.target)});(a.length>0?c(e,a[0]):!l.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,a){var o={name:e,delta:n,target:r,should:a};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),d=i.useCallback(function(e){n.current=getTouchXY(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,getDeltaXY(t),t.target,c(t,e.lockRef.current))},[]),p=i.useCallback(function(t){s(t.type,getTouchXY(t),t.target,c(t,e.lockRef.current))},[]);i.useEffect(function(){return W.push(o),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",u,I),document.addEventListener("touchmove",u,I),document.addEventListener("touchstart",d,I),function(){W=W.filter(function(e){return e!==o}),document.removeEventListener("wheel",u,I),document.removeEventListener("touchmove",u,I),document.removeEventListener("touchstart",d,I)}},[]);var v=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(o,{styles:"\n  .block-interactivity-".concat(a," {pointer-events: none;}\n  .allow-interactivity-").concat(a," {pointer-events: all;}\n")}):null,v?i.createElement(RemoveScrollBar,{gapMode:"margin"}):null)}),j=i.forwardRef(function(e,t){return i.createElement(x,__assign({},e,{ref:t,sideCar:B}))});j.classNames=x.classNames;var z=new WeakMap,Z=new WeakMap,X={},Y=0,unwrapHost=function(e){return e&&(e.host||unwrapHost(e.parentNode))},applyAttributeToOthers=function(e,t,n,r){var a=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=unwrapHost(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});X[n]||(X[n]=new WeakMap);var o=X[n],i=[],l=new Set,c=new Set(a),keep=function(e){!e||l.has(e)||(l.add(e),keep(e.parentNode))};a.forEach(keep);var deep=function(e){!e||c.has(e)||Array.prototype.forEach.call(e.children,function(e){if(l.has(e))deep(e);else try{var t=e.getAttribute(r),a=null!==t&&"false"!==t,c=(z.get(e)||0)+1,u=(o.get(e)||0)+1;z.set(e,c),o.set(e,u),i.push(e),1===c&&a&&Z.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return deep(t),l.clear(),Y++,function(){i.forEach(function(e){var t=z.get(e)-1,a=o.get(e)-1;z.set(e,t),o.set(e,a),t||(Z.has(e)||e.removeAttribute(r),Z.delete(e)),a||e.removeAttribute(n)}),--Y||(z=new WeakMap,z=new WeakMap,Z=new WeakMap,X={})}},hideOthers=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),applyAttributeToOthers(r,a,n,"aria-hidden")):function(){return null}},H=n(8426);let V="Dialog",[K,U]=(0,f.b)(V),[G,q]=K(V),Q=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=q("DialogTrigger",n),o=(0,d.e)(t,a.triggerRef);return(0,i.createElement)(g.WV.button,(0,u.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":a.open,"aria-controls":a.contentId,"data-state":$5d3850c4d0b4e6c7$var$getState(a.open)},r,{ref:o,onClick:(0,s.M)(e.onClick,a.onOpenToggle)}))}),J="DialogPortal",[ee,et]=K(J,{forceMount:void 0}),en="DialogOverlay",er=(0,i.forwardRef)((e,t)=>{let n=et(en,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=q(en,e.__scopeDialog);return o.modal?(0,i.createElement)(S.z,{present:r||o.open},(0,i.createElement)(ea,(0,u.Z)({},a,{ref:t}))):null}),ea=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=q(en,n);return(0,i.createElement)(j,{as:H.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,i.createElement)(g.WV.div,(0,u.Z)({"data-state":$5d3850c4d0b4e6c7$var$getState(a.open)},r,{ref:t,style:{pointerEvents:"auto",...r.style}})))}),eo="DialogContent",ei=(0,i.forwardRef)((e,t)=>{let n=et(eo,e.__scopeDialog),{forceMount:r=n.forceMount,...a}=e,o=q(eo,e.__scopeDialog);return(0,i.createElement)(S.z,{present:r||o.open},o.modal?(0,i.createElement)(el,(0,u.Z)({},a,{ref:t})):(0,i.createElement)(ec,(0,u.Z)({},a,{ref:t})))}),el=(0,i.forwardRef)((e,t)=>{let n=q(eo,e.__scopeDialog),r=(0,i.useRef)(null),a=(0,d.e)(t,n.contentRef,r);return(0,i.useEffect)(()=>{let e=r.current;if(e)return hideOthers(e)},[]),(0,i.createElement)(eu,(0,u.Z)({},e,{ref:a,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,s.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,s.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;r&&e.preventDefault()}),onFocusOutside:(0,s.M)(e.onFocusOutside,e=>e.preventDefault())}))}),ec=(0,i.forwardRef)((e,t)=>{let n=q(eo,e.__scopeDialog),r=(0,i.useRef)(!1),a=(0,i.useRef)(!1);return(0,i.createElement)(eu,(0,u.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,i;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,a.current=!1},onInteractOutside:t=>{var o,i;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target,c=null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l);c&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),eu=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:a,onCloseAutoFocus:o,...l}=e,c=q(eo,n),s=(0,i.useRef)(null),f=(0,d.e)(t,s);return $3db38b7d1fb3fe6a$export$b7ece24a22aeda8c(),(0,i.createElement)(i.Fragment,null,(0,i.createElement)(E,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:a,onUnmountAutoFocus:o},(0,i.createElement)(m.XB,(0,u.Z)({role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":$5d3850c4d0b4e6c7$var$getState(c.open)},l,{ref:f,onDismiss:()=>c.onOpenChange(!1)}))),!1)}),es="DialogTitle",ed=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=q(es,n);return(0,i.createElement)(g.WV.h2,(0,u.Z)({id:a.titleId},r,{ref:t}))}),ef=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=q("DialogDescription",n);return(0,i.createElement)(g.WV.p,(0,u.Z)({id:a.descriptionId},r,{ref:t}))}),ep=(0,i.forwardRef)((e,t)=>{let{__scopeDialog:n,...r}=e,a=q("DialogClose",n);return(0,i.createElement)(g.WV.button,(0,u.Z)({type:"button"},r,{ref:t,onClick:(0,s.M)(e.onClick,()=>a.onOpenChange(!1))}))});function $5d3850c4d0b4e6c7$var$getState(e){return e?"open":"closed"}let[ev,em]=(0,f.k)("DialogTitleWarning",{contentName:eo,titleName:es,docsSlug:"dialog"}),$5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:a,onOpenChange:o,modal:l=!0}=e,c=(0,i.useRef)(null),u=(0,i.useRef)(null),[s=!1,d]=(0,v.T)({prop:r,defaultProp:a,onChange:o});return(0,i.createElement)(G,{scope:t,triggerRef:c,contentRef:u,contentId:(0,p.M)(),titleId:(0,p.M)(),descriptionId:(0,p.M)(),open:s,onOpenChange:d,onOpenToggle:(0,i.useCallback)(()=>d(e=>!e),[d]),modal:l},n)},$5d3850c4d0b4e6c7$export$602eac185826482c=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:a}=e,o=q(J,t);return(0,i.createElement)(ee,{scope:t,forceMount:n},i.Children.map(r,e=>(0,i.createElement)(S.z,{present:n||o.open},(0,i.createElement)(C.h,{asChild:!0,container:a},e))))},eg={size:{type:"enum",values:["1","2","3","4"],default:"3",responsive:!0}};var eh=n(6776),eb=n(1042),ey=n(6445),e$=n(7162);let DialogRoot=e=>i.createElement($5d3850c4d0b4e6c7$export$be92b6f5f03c0fe9,{...e,modal:!0});DialogRoot.displayName="DialogRoot";let eE=i.forwardRef((e,t)=>i.createElement(Q,{...e,ref:t,asChild:!0}));eE.displayName="DialogTrigger";let ew=i.forwardRef((e,t)=>{let{className:n,forceMount:r,container:a,size:o=eg.size.default,...l}=e;return i.createElement($5d3850c4d0b4e6c7$export$602eac185826482c,{container:a,forceMount:r},i.createElement(e$.Q2,{asChild:!0},i.createElement(er,{className:"rt-DialogOverlay"},i.createElement(ei,{...l,ref:t,className:c()("rt-DialogContent",n,(0,eh.g)(o,"rt-r-size"))}))))});ew.displayName="DialogContent";let eC=i.forwardRef((e,t)=>i.createElement(ed,{asChild:!0},i.createElement(eb.X,{size:"5",mb:"3",trim:"start",...e,ref:t})));eC.displayName="DialogTitle";let eS=i.forwardRef((e,t)=>i.createElement(ef,{asChild:!0},i.createElement(ey.x,{as:"p",size:"3",...e,ref:t})));eS.displayName="DialogDescription";let eR=i.forwardRef((e,t)=>i.createElement(ep,{...e,ref:t,asChild:!0}));eR.displayName="DialogClose";let ek=Object.assign({},{Root:DialogRoot,Trigger:eE,Content:ew,Title:eC,Description:eS,Close:eR})},1042:function(e,t,n){"use strict";n.d(t,{X:function(){return m}});var r=n(7294),a=n(3967),o=n.n(a),i=n(8426),l=n(3416),c=n(617),u=n(7361),s=n(8291),d=n(6679);l.b.values;let f={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:"6",responsive:!0},weight:{...l.b,default:"bold"},align:c.L,trim:u.a,color:s.m,highContrast:d.B};var p=n(3843),v=n(6776);let m=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,p.FY)(e),{children:l,className:c,asChild:u=!1,as:s="h1",size:d=f.size.default,weight:m=f.weight.default,align:g=f.align.default,trim:h=f.trim.default,color:b=f.color.default,highContrast:y=f.highContrast.default,...$}=n;return r.createElement(i.g7,{"data-accent-color":b,...$,ref:t,className:o()("rt-Heading",c,(0,v.g)(d,"rt-r-size"),(0,v.g)(m,"rt-r-weight"),(0,v.g)(g,"rt-r-ta"),(0,v.g)(h,"rt-r-lt"),{"rt-high-contrast":y},(0,p.we)(a))},u?l:r.createElement(s,null,l))});m.displayName="Heading"},6445:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});var r=n(7294),a=n(3967),o=n.n(a),i=n(8426),l=n(3356),c=n(3843),u=n(6776);let s=r.forwardRef((e,t)=>{let{rest:n,...a}=(0,c.FY)(e),{children:s,className:d,asChild:f=!1,as:p="span",size:v=l.S.size.default,weight:m=l.S.weight.default,align:g=l.S.align.default,trim:h=l.S.trim.default,color:b=l.S.color.default,highContrast:y=l.S.highContrast.default,...$}=n;return r.createElement(i.g7,{"data-accent-color":b,...$,ref:t,className:o()("rt-Text",d,(0,u.g)(v,"rt-r-size"),(0,u.g)(m,"rt-r-weight"),(0,u.g)(g,"rt-r-ta"),(0,u.g)(h,"rt-r-lt"),{"rt-high-contrast":y},(0,c.we)(a))},f?s:r.createElement(p,null,s))});s.displayName="Text"},3356:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var r=n(3416),a=n(617),o=n(7361),i=n(8291),l=n(6679);let c={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:r.b,align:a.L,trim:o.a,color:i.m,highContrast:l.B}},6776:function(e,t,n){"use strict";function withBreakpoints(e,t="",n){var r,a,o,i;let l=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let i=null===(r=e[o])||void 0===r?void 0:r.toString(),c=null==i?void 0:i.startsWith("-"),u=""===t?"":"-",s=c?`-${t}`:t,d=c?null==i?void 0:i.substring(1):i;if(void 0===d)continue;let f=null!==(a=null==n?void 0:n[d])&&void 0!==a?a:d,p="initial"===o?`${s}${u}${f}`:`${o}:${s}${u}${f}`;l.push(p)}}if("string"==typeof e){let r=e.startsWith("-"),a=""===t?"":"-",i=r?`-${t}`:t,c=r?e.substring(1):e,u=null!==(o=null==n?void 0:n[c])&&void 0!==o?o:c;l.push(`${i}${a}${u}`)}if("boolean"==typeof e){let r=""===t?"":"-",a=e.toString(),o=null!==(i=null==n?void 0:n[a])&&void 0!==i?i:a;l.push(`${t}${r}${o}`)}return l.join(" ")}n.d(t,{g:function(){return withBreakpoints}})},8291:function(e,t,n){"use strict";n.d(t,{m:function(){return a}});var r=n(269);let a={type:"enum",values:r.yT.accentColor.values,default:void 0}},6679:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});let r={type:"boolean",default:void 0}},7361:function(e,t,n){"use strict";n.d(t,{a:function(){return r}});let r={type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0}},3843:function(e,t,n){"use strict";n.d(t,{FY:function(){return extractMarginProps},we:function(){return withMarginProps}});var r=n(6776);let a=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],o={m:{type:"enum",values:a,default:void 0,responsive:!0},mx:{type:"enum",values:a,default:void 0,responsive:!0},my:{type:"enum",values:a,default:void 0,responsive:!0},mt:{type:"enum",values:a,default:void 0,responsive:!0},mr:{type:"enum",values:a,default:void 0,responsive:!0},mb:{type:"enum",values:a,default:void 0,responsive:!0},ml:{type:"enum",values:a,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=o.m.default,mx:n=o.mx.default,my:r=o.my.default,mt:a=o.mt.default,mr:i=o.mr.default,mb:l=o.mb.default,ml:c=o.ml.default,...u}=e;return{m:t,mx:n,my:r,mt:a,mr:i,mb:l,ml:c,rest:u}}function withMarginProps(e){return[(0,r.g)(e.m,"rt-r-m"),(0,r.g)(e.mx,"rt-r-mx"),(0,r.g)(e.my,"rt-r-my"),(0,r.g)(e.mt,"rt-r-mt"),(0,r.g)(e.mr,"rt-r-mr"),(0,r.g)(e.mb,"rt-r-mb"),(0,r.g)(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}},617:function(e,t,n){"use strict";n.d(t,{L:function(){return r}});let r={type:"enum",values:["left","center","right"],default:void 0,responsive:!0}},3416:function(e,t,n){"use strict";n.d(t,{b:function(){return r}});let r={type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0}},5711:function(e,t,n){"use strict";n.d(t,{Z:function(){return createLucideIcon}});var r=n(7294),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let toKebabCase=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),createLucideIcon=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:o=24,strokeWidth:i=2,absoluteStrokeWidth:l,className:c="",children:u,...s},d)=>(0,r.createElement)("svg",{ref:d,...a,width:o,height:o,stroke:n,strokeWidth:l?24*Number(i)/Number(o):i,className:["lucide",`lucide-${toKebabCase(e)}`,c].join(" "),...s},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return n.displayName=`${e}`,n}},9894:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5711);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r.Z)("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},9008:function(e,t,n){e.exports=n(9201)},2729:function(e,t,n){"use strict";function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return _tagged_template_literal}})}}]);