(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1466)}])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return i},ACTION_NAVIGATE:function(){return o},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let i="refresh",o="navigate",a="restore",l="server-patch",u="prefetch",s="fast-refresh",f="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(8754),i=n._(r(7294)),o=r(4450),a=r(2227),l=r(4364),u=r(109),s=r(3607),f=r(1823),d=r(9031),p=r(920),c=r(30),v=r(7192),h=r(7498),m=new Set;function prefetch(e,t,r,n,i,o){if(!o&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let i=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+i;if(m.has(o))return;m.add(o)}let l=o?e.prefetch(t,i):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,r,n,o,l,u,s,f,d){let{nodeName:p}=e.currentTarget,c="A"===p.toUpperCase();if(c&&(isModifiedEvent(e)||!f&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};f?i.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:l,children:m,prefetch:y=null,passHref:g,replace:w,shallow:b,scroll:k,locale:B,onClick:P,onMouseEnter:_,onTouchStart:C,legacyBehavior:E=!1,...x}=e;r=m,E&&("string"==typeof r||"number"==typeof r)&&(r=i.default.createElement("a",null,r));let O=i.default.useContext(f.RouterContext),j=i.default.useContext(d.AppRouterContext),M=null!=O?O:j,T=!O,N=!1!==y,R=null===y?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:L,as:I}=i.default.useMemo(()=>{if(!O){let e=formatStringOrUrl(a);return{href:e,as:l?formatStringOrUrl(l):e}}let[e,t]=(0,o.resolveHref)(O,a,!0);return{href:e,as:l?(0,o.resolveHref)(O,l):t||e}},[O,a,l]),A=i.default.useRef(L),S=i.default.useRef(I);E&&(n=i.default.Children.only(r));let $=E?n&&"object"==typeof n&&n.ref:t,[U,z,F]=(0,p.useIntersection)({rootMargin:"200px"}),H=i.default.useCallback(e=>{(S.current!==I||A.current!==L)&&(F(),S.current=I,A.current=L),U(e),$&&("function"==typeof $?$(e):"object"==typeof $&&($.current=e))},[I,$,L,F,U]);i.default.useEffect(()=>{M&&z&&N&&prefetch(M,L,I,{locale:B},{kind:R},T)},[I,L,z,B,N,null==O?void 0:O.locale,M,T,R]);let K={ref:H,onClick(e){E||"function"!=typeof P||P(e),E&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&linkClicked(e,M,L,I,w,b,k,B,T,N)},onMouseEnter(e){E||"function"!=typeof _||_(e),E&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(N||!T)&&prefetch(M,L,I,{locale:B,priority:!0,bypassPrefetchedCheck:!0},{kind:R},T)},onTouchStart(e){E||"function"!=typeof C||C(e),E&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(N||!T)&&prefetch(M,L,I,{locale:B,priority:!0,bypassPrefetchedCheck:!0},{kind:R},T)}};if((0,u.isAbsoluteUrl)(I))K.href=I;else if(!E||g||"a"===n.type&&!("href"in n.props)){let e=void 0!==B?B:null==O?void 0:O.locale,t=(null==O?void 0:O.isLocaleDomain)&&(0,c.getDomainLocale)(I,e,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);K.href=t||(0,v.addBasePath)((0,s.addLocale)(I,e,null==O?void 0:O.defaultLocale))}return E?i.default.cloneElement(n,K):i.default.createElement("a",{...x,...K},r)}),g=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),i=r(3436),o="function"==typeof IntersectionObserver,a=new Map,l=[];function createObserver(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let i=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:i},l.push(r),a.set(r,t),t}function observe(e,t,r){let{id:n,observer:i,elements:o}=createObserver(r);return o.set(e,t),i.observe(e),function(){if(o.delete(e),i.unobserve(e),0===o.size){i.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:a}=e,l=a||!o,[u,s]=(0,n.useState)(!1),f=(0,n.useRef)(null),d=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(o){if(l||u)return;let e=f.current;if(e&&e.tagName){let n=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,i.requestIdleCallback)(()=>s(!0));return()=>(0,i.cancelIdleCallback)(e)}},[l,r,t,u,f.current]);let p=(0,n.useCallback)(()=>{s(!1)},[]);return[d,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1466:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Component}});var n=r(2364),i=r(7294),o=r(3967),a=r.n(o),l=r(8426);let u={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}};function withBreakpoints(e,t="",r){var n,i,o,a;let l=[];if("object"==typeof e){for(let o of Object.keys(e))if(o in e){let a=null===(n=e[o])||void 0===n?void 0:n.toString(),u=null==a?void 0:a.startsWith("-"),s=""===t?"":"-",f=u?`-${t}`:t,d=u?null==a?void 0:a.substring(1):a;if(void 0===d)continue;let p=null!==(i=null==r?void 0:r[d])&&void 0!==i?i:d,c="initial"===o?`${f}${s}${p}`:`${o}:${f}${s}${p}`;l.push(c)}}if("string"==typeof e){let n=e.startsWith("-"),i=""===t?"":"-",a=n?`-${t}`:t,u=n?e.substring(1):e,s=null!==(o=null==r?void 0:r[u])&&void 0!==o?o:u;l.push(`${a}${i}${s}`)}if("boolean"==typeof e){let n=""===t?"":"-",i=e.toString(),o=null!==(a=null==r?void 0:r[i])&&void 0!==a?a:i;l.push(`${t}${n}${o}`)}return l.join(" ")}let s=["auto","0","1","2","3","4","5","6","7","8","9","-1","-2","-3","-4","-5","-6","-7","-8","-9"],f={m:{type:"enum",values:s,default:void 0,responsive:!0},mx:{type:"enum",values:s,default:void 0,responsive:!0},my:{type:"enum",values:s,default:void 0,responsive:!0},mt:{type:"enum",values:s,default:void 0,responsive:!0},mr:{type:"enum",values:s,default:void 0,responsive:!0},mb:{type:"enum",values:s,default:void 0,responsive:!0},ml:{type:"enum",values:s,default:void 0,responsive:!0}};function extractMarginProps(e){let{m:t=f.m.default,mx:r=f.mx.default,my:n=f.my.default,mt:i=f.mt.default,mr:o=f.mr.default,mb:a=f.mb.default,ml:l=f.ml.default,...u}=e;return{m:t,mx:r,my:n,mt:i,mr:o,mb:a,ml:l,rest:u}}function withMarginProps(e){return[withBreakpoints(e.m,"rt-r-m"),withBreakpoints(e.mx,"rt-r-mx"),withBreakpoints(e.my,"rt-r-my"),withBreakpoints(e.mt,"rt-r-mt"),withBreakpoints(e.mr,"rt-r-mr"),withBreakpoints(e.mb,"rt-r-mb"),withBreakpoints(e.ml,"rt-r-ml")].filter(Boolean).join(" ")}let d=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=v.p.default,px:r=v.px.default,py:n=v.py.default,pt:i=v.pt.default,pr:o=v.pr.default,pb:a=v.pb.default,pl:l=v.pl.default,...u}=e;return{p:t,px:r,py:n,pt:i,pr:o,pb:a,pl:l,rest:u}}function withPaddingProps(e){return[withBreakpoints(e.p,"rt-r-p"),withBreakpoints(e.px,"rt-r-px"),withBreakpoints(e.py,"rt-r-py"),withBreakpoints(e.pt,"rt-r-pt"),withBreakpoints(e.pr,"rt-r-pr"),withBreakpoints(e.pb,"rt-r-pb"),withBreakpoints(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let p=["auto","0","50%","100%"],c=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],v={p:{type:"enum",values:d,default:void 0,responsive:!0},px:{type:"enum",values:d,default:void 0,responsive:!0},py:{type:"enum",values:d,default:void 0,responsive:!0},pt:{type:"enum",values:d,default:void 0,responsive:!0},pr:{type:"enum",values:d,default:void 0,responsive:!0},pb:{type:"enum",values:d,default:void 0,responsive:!0},pl:{type:"enum",values:d,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:p,default:void 0,responsive:!0},top:{type:"enum",values:p,default:void 0,responsive:!0},right:{type:"enum",values:p,default:void 0,responsive:!0},bottom:{type:"enum",values:p,default:void 0,responsive:!0},left:{type:"enum",values:p,default:void 0,responsive:!0},width:{type:"enum",values:c,default:void 0,responsive:!0},height:{type:"enum",values:c,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...r}=extractPaddingProps(e),{position:n=v.position.default,width:i=v.width.default,height:o=v.height.default,inset:a=v.inset.default,top:l=v.top.default,bottom:u=v.bottom.default,left:s=v.left.default,right:f=v.right.default,shrink:d=v.shrink.default,grow:p=v.grow.default,...c}=t;return{...r,position:n,width:i,height:o,inset:a,top:l,bottom:u,left:s,right:f,shrink:d,grow:p,rest:c}}function withLayoutProps(e){return[withPaddingProps(e),withBreakpoints(e.position,"rt-r-position"),withBreakpoints(e.shrink,"rt-r-fs"),withBreakpoints(e.grow,"rt-r-fg"),withBreakpoints(e.width,"rt-r-w"),withBreakpoints(e.height,"rt-r-h"),withBreakpoints(e.inset,"rt-r-inset"),withBreakpoints(e.top,"rt-r-top"),withBreakpoints(e.bottom,"rt-r-bottom"),withBreakpoints(e.left,"rt-r-left"),withBreakpoints(e.right,"rt-r-right")].filter(Boolean).join(" ")}let h=i.forwardRef((e,t)=>{let{rest:r,...n}=extractMarginProps(e),{rest:o,...s}=extractLayoutProps(r),{className:f,asChild:d,display:p=u.display.default,direction:c=u.direction.default,align:v=u.align.default,justify:h=u.justify.default,wrap:m=u.wrap.default,gap:y=u.gap.default,...g}=o,w=d?l.g7:"div";return i.createElement(w,{...g,ref:t,className:a()("rt-Flex",f,withBreakpoints(p,"rt-r-display"),withBreakpoints(c,"rt-r-fd"),withBreakpoints(v,"rt-r-ai"),withBreakpoints(h,"rt-r-jc",{between:"space-between"}),withBreakpoints(m,"rt-r-fw"),withBreakpoints(y,"rt-r-gap"),withLayoutProps(s),withMarginProps(n))})});h.displayName="Flex";var m=r(269);let y={type:"enum",values:m.yT.accentColor.values,default:void 0},g={type:"boolean",default:void 0},w={size:{type:"enum",values:["1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0},weight:{type:"enum",values:["light","regular","medium","bold"],default:void 0,responsive:!0},align:{type:"enum",values:["left","center","right"],default:void 0,responsive:!0},trim:{type:"enum",values:["normal","start","end","both"],default:void 0,responsive:!0},color:y,highContrast:g},b=i.forwardRef((e,t)=>{let{rest:r,...n}=extractMarginProps(e),{children:o,className:u,asChild:s=!1,as:f="span",size:d=w.size.default,weight:p=w.weight.default,align:c=w.align.default,trim:v=w.trim.default,color:h=w.color.default,highContrast:m=w.highContrast.default,...y}=r;return i.createElement(l.g7,{"data-accent-color":h,...y,ref:t,className:a()("rt-Text",u,withBreakpoints(d,"rt-r-size"),withBreakpoints(p,"rt-r-weight"),withBreakpoints(c,"rt-r-ta"),withBreakpoints(v,"rt-r-lt"),{"rt-high-contrast":m},withMarginProps(n))},s?o:i.createElement(f,null,o))});b.displayName="Text";let k={size:w.size,weight:w.weight,trim:w.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:w.color,highContrast:w.highContrast},B=i.forwardRef((e,t)=>{let{children:r,className:n,asChild:o=!1,underline:l=k.underline.default,...u}=e;return i.createElement(b,{...u,ref:t,asChild:!0,className:a()("rt-reset","rt-Link",n,`rt-underline-${l}`)},o?r:i.createElement("a",null,r))});B.displayName="Link";let P={type:"enum",values:m.yT.radius.values,default:void 0},_={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:y,highContrast:g,radius:P},C=i.forwardRef((e,t)=>{let{rest:r,...n}=extractMarginProps(e),{className:o,asChild:u=!1,size:s=_.size.default,variant:f=_.variant.default,color:d=_.color.default,highContrast:p=_.highContrast.default,radius:c=_.radius.default,...v}=r,h=u?l.g7:"button";return i.createElement(h,{"data-disabled":v.disabled||void 0,"data-accent-color":d,"data-radius":c,...v,ref:t,className:a()("rt-reset","rt-BaseButton",o,withBreakpoints(s,"rt-r-size"),`rt-variant-${f}`,{"rt-high-contrast":p},withMarginProps(n))})});C.displayName="BaseButton";let E=i.forwardRef((e,t)=>i.createElement(C,{...e,ref:t,className:a()("rt-Button",e.className)}));E.displayName="Button";var x=r(1664),O=r.n(x),j=r(9008),M=r.n(j);function Component(){return(0,n.BX)(i.Fragment,{children:[(0,n.BX)(h,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,n.tZ)(B,{asChild:!0,children:(0,n.tZ)(O(),{href:"/login",passHref:!0,children:(0,n.tZ)(E,{children:(0,n.tZ)(b,{as:"p",children:"Pagina de login"})})})}),(0,n.tZ)(b,{as:"p",children:"YA SI !!!!"})]}),(0,n.BX)(M(),{children:[(0,n.tZ)("title",{children:"Link Bio | Index"}),(0,n.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},9008:function(e,t,r){e.exports=r(9201)},1664:function(e,t,r){e.exports=r(5170)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);