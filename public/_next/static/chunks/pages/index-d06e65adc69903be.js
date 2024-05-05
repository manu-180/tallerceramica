(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4152:function(e,t,n){"use strict";n.d(t,{z:function(){return v}});var r=n(7294),o=n(3967),l=n.n(o),a=n(8426),u=n(8291),i=n(6679),s=n(8219);let f={size:{type:"enum",values:["1","2","3","4"],default:"2",responsive:!0},variant:{type:"enum",values:["classic","solid","soft","surface","outline","ghost"],default:"solid"},color:u.m,highContrast:i.B,radius:s.C};var d=n(3843),c=n(6776);let p=r.forwardRef((e,t)=>{let{rest:n,...o}=(0,d.FY)(e),{className:u,asChild:i=!1,size:s=f.size.default,variant:p=f.variant.default,color:v=f.color.default,highContrast:g=f.highContrast.default,radius:h=f.radius.default,...m}=n,y=i?a.g7:"button";return r.createElement(y,{"data-disabled":m.disabled||void 0,"data-accent-color":v,"data-radius":h,...m,ref:t,className:l()("rt-reset","rt-BaseButton",u,(0,c.g)(s,"rt-r-size"),`rt-variant-${p}`,{"rt-high-contrast":g},(0,d.we)(o))})});p.displayName="BaseButton";let v=r.forwardRef((e,t)=>r.createElement(p,{...e,ref:t,className:l()("rt-Button",e.className)}));v.displayName="Button"},467:function(e,t,n){"use strict";n.d(t,{k:function(){return d}});var r=n(7294),o=n(3967),l=n.n(o),a=n(8426),u=n(2032),i=n(3843),s=n(134),f=n(6776);let d=r.forwardRef((e,t)=>{let{rest:n,...o}=(0,i.FY)(e),{rest:d,...c}=(0,s.F8)(n),{className:p,asChild:v,display:g=u.l.display.default,direction:h=u.l.direction.default,align:m=u.l.align.default,justify:y=u.l.justify.default,wrap:b=u.l.wrap.default,gap:_=u.l.gap.default,...C}=d,w=v?a.g7:"div";return r.createElement(w,{...C,ref:t,className:l()("rt-Flex",p,(0,f.g)(g,"rt-r-display"),(0,f.g)(h,"rt-r-fd"),(0,f.g)(m,"rt-r-ai"),(0,f.g)(y,"rt-r-jc",{between:"space-between"}),(0,f.g)(b,"rt-r-fw"),(0,f.g)(_,"rt-r-gap"),(0,s.yt)(c),(0,i.we)(o))})});d.displayName="Flex"},2032:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});let r={display:{type:"enum",values:["none","inline-flex","flex"],default:"flex",responsive:!0},direction:{type:"enum",values:["row","column","row-reverse","column-reverse"],default:void 0,responsive:!0},align:{type:"enum",values:["start","center","end","baseline","stretch"],default:void 0,responsive:!0},justify:{type:"enum",values:["start","center","end","between"],default:"start",responsive:!0},wrap:{type:"enum",values:["nowrap","wrap","wrap-reverse"],default:void 0,responsive:!0},gap:{type:"enum",values:["0","1","2","3","4","5","6","7","8","9"],default:void 0,responsive:!0}}},134:function(e,t,n){"use strict";n.d(t,{$G:function(){return withPaddingProps},F8:function(){return extractLayoutProps},Lp:function(){return extractPaddingProps},yt:function(){return withLayoutProps}});var r=n(6776);let o=["0","1","2","3","4","5","6","7","8","9"];function extractPaddingProps(e){let{p:t=u.p.default,px:n=u.px.default,py:r=u.py.default,pt:o=u.pt.default,pr:l=u.pr.default,pb:a=u.pb.default,pl:i=u.pl.default,...s}=e;return{p:t,px:n,py:r,pt:o,pr:l,pb:a,pl:i,rest:s}}function withPaddingProps(e){return[(0,r.g)(e.p,"rt-r-p"),(0,r.g)(e.px,"rt-r-px"),(0,r.g)(e.py,"rt-r-py"),(0,r.g)(e.pt,"rt-r-pt"),(0,r.g)(e.pr,"rt-r-pr"),(0,r.g)(e.pb,"rt-r-pb"),(0,r.g)(e.pl,"rt-r-pl")].filter(Boolean).join(" ")}let l=["auto","0","50%","100%"],a=["auto","min-content","max-content","100%","0","1","2","3","4","5","6","7","8","9"],u={p:{type:"enum",values:o,default:void 0,responsive:!0},px:{type:"enum",values:o,default:void 0,responsive:!0},py:{type:"enum",values:o,default:void 0,responsive:!0},pt:{type:"enum",values:o,default:void 0,responsive:!0},pr:{type:"enum",values:o,default:void 0,responsive:!0},pb:{type:"enum",values:o,default:void 0,responsive:!0},pl:{type:"enum",values:o,default:void 0,responsive:!0},position:{type:"enum",values:["static","relative","absolute","fixed","sticky"],default:void 0,responsive:!0},inset:{type:"enum",values:l,default:void 0,responsive:!0},top:{type:"enum",values:l,default:void 0,responsive:!0},right:{type:"enum",values:l,default:void 0,responsive:!0},bottom:{type:"enum",values:l,default:void 0,responsive:!0},left:{type:"enum",values:l,default:void 0,responsive:!0},width:{type:"enum",values:a,default:void 0,responsive:!0},height:{type:"enum",values:a,default:void 0,responsive:!0},shrink:{type:"enum",values:["0","1"],default:void 0,responsive:!0},grow:{type:"enum",values:["0","1"],default:void 0,responsive:!0}};function extractLayoutProps(e){let{rest:t,...n}=extractPaddingProps(e),{position:r=u.position.default,width:o=u.width.default,height:l=u.height.default,inset:a=u.inset.default,top:i=u.top.default,bottom:s=u.bottom.default,left:f=u.left.default,right:d=u.right.default,shrink:c=u.shrink.default,grow:p=u.grow.default,...v}=t;return{...n,position:r,width:o,height:l,inset:a,top:i,bottom:s,left:f,right:d,shrink:c,grow:p,rest:v}}function withLayoutProps(e){return[withPaddingProps(e),(0,r.g)(e.position,"rt-r-position"),(0,r.g)(e.shrink,"rt-r-fs"),(0,r.g)(e.grow,"rt-r-fg"),(0,r.g)(e.width,"rt-r-w"),(0,r.g)(e.height,"rt-r-h"),(0,r.g)(e.inset,"rt-r-inset"),(0,r.g)(e.top,"rt-r-top"),(0,r.g)(e.bottom,"rt-r-bottom"),(0,r.g)(e.left,"rt-r-left"),(0,r.g)(e.right,"rt-r-right")].filter(Boolean).join(" ")}},8219:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(269);let o={type:"enum",values:r.yT.radius.values,default:void 0}},5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5556)}])},7498:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return l},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return u},ACTION_PREFETCH:function(){return i},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return f}});let o="refresh",l="navigate",a="restore",u="server-patch",i="prefetch",s="fast-refresh",f="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(8754),o=r._(n(7294)),l=n(4450),a=n(2227),u=n(4364),i=n(109),s=n(3607),f=n(1823),d=n(9031),c=n(920),p=n(30),v=n(7192),g=n(7498),h=new Set;function prefetch(e,t,n,r,o,l){if(!l&&!(0,a.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}let u=l?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(u).catch(e=>{})}function isModifiedEvent(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}function linkClicked(e,t,n,r,l,u,i,s,f,d){let{nodeName:c}=e.currentTarget,p="A"===c.toUpperCase();if(p&&(isModifiedEvent(e)||!f&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==i||i;"beforePopState"in t?t[l?"replace":"push"](n,r,{shallow:u,locale:s,scroll:e}):t[l?"replace":"push"](r||n,{forceOptimisticNavigation:!d,scroll:e})};f?o.default.startTransition(navigate):navigate()}function formatStringOrUrl(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=o.default.forwardRef(function(e,t){let n,r;let{href:a,as:u,children:h,prefetch:m=null,passHref:y,replace:b,shallow:_,scroll:C,locale:w,onClick:P,onMouseEnter:O,onTouchStart:x,legacyBehavior:E=!1,...k}=e;n=h,E&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let j=o.default.useContext(f.RouterContext),F=o.default.useContext(d.AppRouterContext),R=null!=j?j:F,T=!j,L=!1!==m,N=null===m?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:M,as:I}=o.default.useMemo(()=>{if(!j){let e=formatStringOrUrl(a);return{href:e,as:u?formatStringOrUrl(u):e}}let[e,t]=(0,l.resolveHref)(j,a,!0);return{href:e,as:u?(0,l.resolveHref)(j,u):t||e}},[j,a,u]),A=o.default.useRef(M),S=o.default.useRef(I);E&&(r=o.default.Children.only(n));let Z=E?r&&"object"==typeof r&&r.ref:t,[B,U,z]=(0,c.useIntersection)({rootMargin:"200px"}),D=o.default.useCallback(e=>{(S.current!==I||A.current!==M)&&(z(),S.current=I,A.current=M),B(e),Z&&("function"==typeof Z?Z(e):"object"==typeof Z&&(Z.current=e))},[I,Z,M,z,B]);o.default.useEffect(()=>{R&&U&&L&&prefetch(R,M,I,{locale:w},{kind:N},T)},[I,M,U,w,L,null==j?void 0:j.locale,R,T,N]);let H={ref:D,onClick(e){E||"function"!=typeof P||P(e),E&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&linkClicked(e,R,M,I,b,_,C,w,T,L)},onMouseEnter(e){E||"function"!=typeof O||O(e),E&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(L||!T)&&prefetch(R,M,I,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)},onTouchStart(e){E||"function"!=typeof x||x(e),E&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(L||!T)&&prefetch(R,M,I,{locale:w,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)}};if((0,i.isAbsoluteUrl)(I))H.href=I;else if(!E||y||"a"===r.type&&!("href"in r.props)){let e=void 0!==w?w:null==j?void 0:j.locale,t=(null==j?void 0:j.isLocaleDomain)&&(0,p.getDomainLocale)(I,e,null==j?void 0:j.locales,null==j?void 0:j.domainLocales);H.href=t||(0,v.addBasePath)((0,s.addLocale)(I,e,null==j?void 0:j.defaultLocale))}return E?o.default.cloneElement(r,H):o.default.createElement("a",{...k,...H},n)}),y=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(3436),l="function"==typeof IntersectionObserver,a=new Map,u=[];function createObserver(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},u.push(n),a.set(n,t),t}function observe(e,t,n){let{id:r,observer:o,elements:l}=createObserver(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,u=a||!l,[i,s]=(0,r.useState)(!1),f=(0,r.useRef)(null),d=(0,r.useCallback)(e=>{f.current=e},[]);(0,r.useEffect)(()=>{if(l){if(u||i)return;let e=f.current;if(e&&e.tagName){let r=observe(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,n,t,i,f.current]);let c=(0,r.useCallback)(()=>{s(!1)},[]);return[d,i,c]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5556:function(e,t,n){"use strict";n.r(t),n.d(t,{Fragment_6499b51736be44284c15de43340cb16c:function(){return Fragment_6499b51736be44284c15de43340cb16c},Fragment_cb5edf864ed730e6ef1545318d0da5a2:function(){return Fragment_cb5edf864ed730e6ef1545318d0da5a2},default:function(){return Component}});var r=n(2729),o=n(6811),l=n(7294),a=n(687),u=n(6608),i=n(9894),s=n(917),f=n(5830),d=n(6445),c=n(467),p=n(3967),v=n.n(p),g=n(3356);let h={size:g.S.size,weight:g.S.weight,trim:g.S.trim,underline:{type:"enum",values:["auto","hover","always"],default:"auto"},color:g.S.color,highContrast:g.S.highContrast},m=l.forwardRef((e,t)=>{let{children:n,className:r,asChild:o=!1,underline:a=h.underline.default,...u}=e;return l.createElement(d.x,{...u,ref:t,asChild:!0,className:v()("rt-reset","rt-Link",r,`rt-underline-${a}`)},o?n:l.createElement("a",null,n))});m.displayName="Link";var y=n(4152),b=n(3954),_=n(1664),C=n.n(_),w=n(9008),P=n.n(w);function _templateObject(){let e=(0,r._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}let O=(0,s.F4)(_templateObject());function Fragment_cb5edf864ed730e6ef1545318d0da5a2(){let[e,t]=(0,l.useContext)(a.DR);return(0,o.tZ)(l.Fragment,{children:(0,u.oA)(t.length>0)?(0,o.tZ)(l.Fragment,{children:(0,o.tZ)(i.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"30px",right:"30px",animation:"".concat(O," 1s infinite")},size:32})}):(0,o.tZ)(l.Fragment,{})})}function Fragment_6499b51736be44284c15de43340cb16c(){let[e,t]=(0,l.useContext)(a.DR);return(0,o.tZ)(l.Fragment,{children:(0,u.oA)(t.length>=2)?(0,o.tZ)(l.Fragment,{children:(0,o.tZ)(f.Vq.Root,{css:{zIndex:9999},open:t.length>=2,children:(0,o.BX)(f.Vq.Content,{children:[(0,o.tZ)(f.Vq.Title,{children:"Connection Error"}),(0,o.BX)(d.x,{as:"p",children:["Cannot connect to server: ",t.length>0?t[t.length-1].message:"",". Check if server is reachable at ",(0,u.LH)(b.Ks).href]})]})})}):(0,o.tZ)(l.Fragment,{})})}function Component(){return(0,o.BX)(l.Fragment,{children:[(0,o.BX)(l.Fragment,{children:[(0,o.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},children:(0,o.tZ)(Fragment_cb5edf864ed730e6ef1545318d0da5a2,{})}),(0,o.tZ)(Fragment_6499b51736be44284c15de43340cb16c,{})]}),(0,o.tZ)(c.k,{css:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,o.tZ)(m,{asChild:!0,children:(0,o.tZ)(C(),{href:"/login",passHref:!0,children:(0,o.tZ)(y.z,{children:(0,o.tZ)(d.x,{as:"p",children:"Pagina de login"})})})})}),(0,o.BX)(P(),{children:[(0,o.tZ)("title",{children:"Link Bio | Index"}),(0,o.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},1664:function(e,t,n){e.exports=n(5170)}},function(e){e.O(0,[261,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);