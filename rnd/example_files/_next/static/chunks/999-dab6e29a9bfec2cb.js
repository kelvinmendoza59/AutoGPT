(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{64671:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},44458:function(e,t,n){"use strict";n.d(t,{Ee:function(){return x},NY:function(){return M},fC:function(){return y}});var r=n(2265),o=n(98324),a=n(75137),l=n(1336),u=n(25171),i=n(57437),c="Avatar",[s,d]=(0,o.b)(c),[f,p]=s(c),m=r.forwardRef((e,t)=>{let{__scopeAvatar:n,...o}=e,[a,l]=r.useState("idle");return(0,i.jsx)(f,{scope:n,imageLoadingStatus:a,onImageLoadingStatusChange:l,children:(0,i.jsx)(u.WV.span,{...o,ref:t})})});m.displayName=c;var v="AvatarImage",h=r.forwardRef((e,t)=>{let{__scopeAvatar:n,src:o,onLoadingStatusChange:c=()=>{},...s}=e,d=p(v,n),f=function(e){let[t,n]=r.useState("idle");return(0,l.b)(()=>{if(!e){n("error");return}let t=!0,r=new window.Image,o=e=>()=>{t&&n(e)};return n("loading"),r.onload=o("loaded"),r.onerror=o("error"),r.src=e,()=>{t=!1}},[e]),t}(o),m=(0,a.W)(e=>{c(e),d.onImageLoadingStatusChange(e)});return(0,l.b)(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,i.jsx)(u.WV.img,{...s,ref:t,src:o}):null});h.displayName=v;var g="AvatarFallback",w=r.forwardRef((e,t)=>{let{__scopeAvatar:n,delayMs:o,...a}=e,l=p(g,n),[c,s]=r.useState(void 0===o);return r.useEffect(()=>{if(void 0!==o){let e=window.setTimeout(()=>s(!0),o);return()=>window.clearTimeout(e)}},[o]),c&&"loaded"!==l.imageLoadingStatus?(0,i.jsx)(u.WV.span,{...a,ref:t}):null});w.displayName=g;var y=m,x=h,M=w},13569:function(e,t,n){"use strict";n.d(t,{oC:function(){return tf},VY:function(){return ti},ZA:function(){return tc},ck:function(){return td},wU:function(){return tv},__:function(){return ts},Uv:function(){return tu},Ee:function(){return tp},Rk:function(){return tm},fC:function(){return ta},Z0:function(){return th},Tr:function(){return tg},tu:function(){return ty},fF:function(){return tw},xz:function(){return tl}});var r=n(2265),o=n(78149),a=n(1584),l=n(98324),u=n(91715),i=n(25171),c=n(71538),s=n(57437);function d(e){let t=e+"CollectionProvider",[n,o]=(0,l.b)(t),[u,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),a=r.useRef(new Map).current;return(0,s.jsx)(u,{scope:t,itemMap:a,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",p=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=i(f,n),l=(0,a.e)(t,o.collectionRef);return(0,s.jsx)(c.g7,{ref:l,children:r})});p.displayName=f;let m=e+"CollectionItemSlot",v="data-radix-collection-item",h=r.forwardRef((e,t)=>{let{scope:n,children:o,...l}=e,u=r.useRef(null),d=(0,a.e)(t,u),f=i(m,n);return r.useEffect(()=>(f.itemMap.set(u,{ref:u,...l}),()=>void f.itemMap.delete(u))),(0,s.jsx)(c.g7,{[v]:"",ref:d,children:o})});return h.displayName=m,[{Provider:d,Slot:p,ItemSlot:h},function(t){let n=i(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},o]}var f=r.createContext(void 0);function p(e){let t=r.useContext(f);return e||t||"ltr"}var m=n(53938),v=n(20589),h=n(80467),g=n(53201),w=n(77683),y=n(56935),x=n(31383),M=n(75137),b="rovingFocusGroup.onEntryFocus",C={bubbles:!1,cancelable:!0},R="RovingFocusGroup",[j,_,k]=d(R),[D,S]=(0,l.b)(R,[k]),[E,I]=D(R),T=r.forwardRef((e,t)=>(0,s.jsx)(j.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(j.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(P,{...e,ref:t})})}));T.displayName=R;var P=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:c=!1,dir:d,currentTabStopId:f,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:v,onEntryFocus:h,preventScrollOnEntryFocus:g=!1,...w}=e,y=r.useRef(null),x=(0,a.e)(t,y),R=p(d),[j=null,k]=(0,u.T)({prop:f,defaultProp:m,onChange:v}),[D,S]=r.useState(!1),I=(0,M.W)(h),T=_(n),P=r.useRef(!1),[N,F]=r.useState(0);return r.useEffect(()=>{let e=y.current;if(e)return e.addEventListener(b,I),()=>e.removeEventListener(b,I)},[I]),(0,s.jsx)(E,{scope:n,orientation:l,dir:R,loop:c,currentTabStopId:j,onItemFocus:r.useCallback(e=>k(e),[k]),onItemShiftTab:r.useCallback(()=>S(!0),[]),onFocusableItemAdd:r.useCallback(()=>F(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>F(e=>e-1),[]),children:(0,s.jsx)(i.WV.div,{tabIndex:D||0===N?-1:0,"data-orientation":l,...w,ref:x,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{P.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!P.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(b,C);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=T().filter(e=>e.focusable);L([e.find(e=>e.active),e.find(e=>e.id===j),...e].filter(Boolean).map(e=>e.ref.current),g)}}P.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>S(!1))})})}),N="RovingFocusGroupItem",F=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:a=!0,active:l=!1,tabStopId:u,...c}=e,d=(0,g.M)(),f=u||d,p=I(N,n),m=p.currentTabStopId===f,v=_(n),{onFocusableItemAdd:h,onFocusableItemRemove:w}=p;return r.useEffect(()=>{if(a)return h(),()=>w()},[a,h,w]),(0,s.jsx)(j.ItemSlot,{scope:n,id:f,focusable:a,active:l,children:(0,s.jsx)(i.WV.span,{tabIndex:m?0:-1,"data-orientation":p.orientation,...c,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a?p.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>p.onItemFocus(f)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){p.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return A[o]}(e,p.orientation,p.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=p.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>L(o))}})})})});F.displayName=N;var A={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function L(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var O=n(78369),K=n(49418),V=["Enter"," "],W=["ArrowUp","PageDown","End"],G=["ArrowDown","PageUp","Home",...W],U={ltr:[...V,"ArrowRight"],rtl:[...V,"ArrowLeft"]},B={ltr:["ArrowLeft"],rtl:["ArrowRight"]},z="Menu",[X,Y,H]=d(z),[Z,J]=(0,l.b)(z,[H,w.D7,S]),q=(0,w.D7)(),Q=S(),[$,ee]=Z(z),[et,en]=Z(z),er=e=>{let{__scopeMenu:t,open:n=!1,children:o,dir:a,onOpenChange:l,modal:u=!0}=e,i=q(t),[c,d]=r.useState(null),f=r.useRef(!1),m=(0,M.W)(l),v=p(a);return r.useEffect(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,s.jsx)(w.fC,{...i,children:(0,s.jsx)($,{scope:t,open:n,onOpenChange:m,content:c,onContentChange:d,children:(0,s.jsx)(et,{scope:t,onClose:r.useCallback(()=>m(!1),[m]),isUsingKeyboardRef:f,dir:v,modal:u,children:o})})})};er.displayName=z;var eo=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e,o=q(n);return(0,s.jsx)(w.ee,{...o,...r,ref:t})});eo.displayName="MenuAnchor";var ea="MenuPortal",[el,eu]=Z(ea,{forceMount:void 0}),ei=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:o}=e,a=ee(ea,t);return(0,s.jsx)(el,{scope:t,forceMount:n,children:(0,s.jsx)(x.z,{present:n||a.open,children:(0,s.jsx)(y.h,{asChild:!0,container:o,children:r})})})};ei.displayName=ea;var ec="MenuContent",[es,ed]=Z(ec),ef=r.forwardRef((e,t)=>{let n=eu(ec,e.__scopeMenu),{forceMount:r=n.forceMount,...o}=e,a=ee(ec,e.__scopeMenu),l=en(ec,e.__scopeMenu);return(0,s.jsx)(X.Provider,{scope:e.__scopeMenu,children:(0,s.jsx)(x.z,{present:r||a.open,children:(0,s.jsx)(X.Slot,{scope:e.__scopeMenu,children:l.modal?(0,s.jsx)(ep,{...o,ref:t}):(0,s.jsx)(em,{...o,ref:t})})})})}),ep=r.forwardRef((e,t)=>{let n=ee(ec,e.__scopeMenu),l=r.useRef(null),u=(0,a.e)(t,l);return r.useEffect(()=>{let e=l.current;if(e)return(0,O.Ry)(e)},[]),(0,s.jsx)(ev,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)})}),em=r.forwardRef((e,t)=>{let n=ee(ec,e.__scopeMenu);return(0,s.jsx)(ev,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)})}),ev=r.forwardRef((e,t)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:u,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:f,onEntryFocus:p,onEscapeKeyDown:g,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:M,onDismiss:b,disableOutsideScroll:C,...R}=e,j=ee(ec,n),_=en(ec,n),k=q(n),D=Q(n),S=Y(n),[E,I]=r.useState(null),P=r.useRef(null),N=(0,a.e)(t,P,j.onContentChange),F=r.useRef(0),A=r.useRef(""),L=r.useRef(0),O=r.useRef(null),V=r.useRef("right"),U=r.useRef(0),B=C?K.Z:r.Fragment,z=C?{as:c.g7,allowPinchZoom:!0}:void 0,X=e=>{var t,n;let r=A.current+e,o=S().filter(e=>!e.disabled),a=document.activeElement,l=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,u=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0])?t[0]:t,a=(r=Math.max(n?e.indexOf(n):-1,0),e.map((t,n)=>e[(r+n)%e.length]));1===o.length&&(a=a.filter(e=>e!==n));let l=a.find(e=>e.toLowerCase().startsWith(o.toLowerCase()));return l!==n?l:void 0}(o.map(e=>e.textValue),r,l),i=null===(n=o.find(e=>e.textValue===u))||void 0===n?void 0:n.ref.current;!function e(t){A.current=t,window.clearTimeout(F.current),""!==t&&(F.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};r.useEffect(()=>()=>window.clearTimeout(F.current),[]),(0,v.EW)();let H=r.useCallback(e=>{var t,n,r;return V.current===(null===(t=O.current)||void 0===t?void 0:t.side)&&!!(r=null===(n=O.current)||void 0===n?void 0:n.area)&&function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let l=t[e].x,u=t[e].y,i=t[a].x,c=t[a].y;u>r!=c>r&&n<(i-l)*(r-u)/(c-u)+l&&(o=!o)}return o}({x:e.clientX,y:e.clientY},r)},[]);return(0,s.jsx)(es,{scope:n,searchRef:A,onItemEnter:r.useCallback(e=>{H(e)&&e.preventDefault()},[H]),onItemLeave:r.useCallback(e=>{var t;H(e)||(null===(t=P.current)||void 0===t||t.focus(),I(null))},[H]),onTriggerLeave:r.useCallback(e=>{H(e)&&e.preventDefault()},[H]),pointerGraceTimerRef:L,onPointerGraceIntentChange:r.useCallback(e=>{O.current=e},[]),children:(0,s.jsx)(B,{...z,children:(0,s.jsx)(h.M,{asChild:!0,trapped:u,onMountAutoFocus:(0,o.M)(i,e=>{var t;e.preventDefault(),null===(t=P.current)||void 0===t||t.focus({preventScroll:!0})}),onUnmountAutoFocus:d,children:(0,s.jsx)(m.XB,{asChild:!0,disableOutsidePointerEvents:f,onEscapeKeyDown:g,onPointerDownOutside:y,onFocusOutside:x,onInteractOutside:M,onDismiss:b,children:(0,s.jsx)(T,{asChild:!0,...D,dir:_.dir,orientation:"vertical",loop:l,currentTabStopId:E,onCurrentTabStopIdChange:I,onEntryFocus:(0,o.M)(p,e=>{_.isUsingKeyboardRef.current||e.preventDefault()}),preventScrollOnEntryFocus:!0,children:(0,s.jsx)(w.VY,{role:"menu","aria-orientation":"vertical","data-state":eU(j.open),"data-radix-menu-content":"",dir:_.dir,...k,...R,ref:N,style:{outline:"none",...R.style},onKeyDown:(0,o.M)(R.onKeyDown,e=>{let t=e.target.closest("[data-radix-menu-content]")===e.currentTarget,n=e.ctrlKey||e.altKey||e.metaKey,r=1===e.key.length;t&&("Tab"===e.key&&e.preventDefault(),!n&&r&&X(e.key));let o=P.current;if(e.target!==o||!G.includes(e.key))return;e.preventDefault();let a=S().filter(e=>!e.disabled).map(e=>e.ref.current);W.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,o.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(F.current),A.current="")}),onPointerMove:(0,o.M)(e.onPointerMove,eX(e=>{let t=e.target,n=U.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>U.current?"right":"left";V.current=t,U.current=e.clientX}}))})})})})})})});ef.displayName=ec;var eh=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,s.jsx)(i.WV.div,{role:"group",...r,ref:t})});eh.displayName="MenuGroup";var eg=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,s.jsx)(i.WV.div,{...r,ref:t})});eg.displayName="MenuLabel";var ew="MenuItem",ey="menu.itemSelect",ex=r.forwardRef((e,t)=>{let{disabled:n=!1,onSelect:l,...u}=e,c=r.useRef(null),d=en(ew,e.__scopeMenu),f=ed(ew,e.__scopeMenu),p=(0,a.e)(t,c),m=r.useRef(!1);return(0,s.jsx)(eM,{...u,ref:p,disabled:n,onClick:(0,o.M)(e.onClick,()=>{let e=c.current;if(!n&&e){let t=new CustomEvent(ey,{bubbles:!0,cancelable:!0});e.addEventListener(ey,e=>null==l?void 0:l(e),{once:!0}),(0,i.jH)(e,t),t.defaultPrevented?m.current=!1:d.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,o.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&V.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})})});ex.displayName=ew;var eM=r.forwardRef((e,t)=>{let{__scopeMenu:n,disabled:l=!1,textValue:u,...c}=e,d=ed(ew,n),f=Q(n),p=r.useRef(null),m=(0,a.e)(t,p),[v,h]=r.useState(!1),[g,w]=r.useState("");return r.useEffect(()=>{let e=p.current;if(e){var t;w((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[c.children]),(0,s.jsx)(X.ItemSlot,{scope:n,disabled:l,textValue:null!=u?u:g,children:(0,s.jsx)(F,{asChild:!0,...f,focusable:!l,children:(0,s.jsx)(i.WV.div,{role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0,...c,ref:m,onPointerMove:(0,o.M)(e.onPointerMove,eX(e=>{l?d.onItemLeave(e):(d.onItemEnter(e),e.defaultPrevented||e.currentTarget.focus({preventScroll:!0}))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eX(e=>d.onItemLeave(e))),onFocus:(0,o.M)(e.onFocus,()=>h(!0)),onBlur:(0,o.M)(e.onBlur,()=>h(!1))})})})}),eb=r.forwardRef((e,t)=>{let{checked:n=!1,onCheckedChange:r,...a}=e;return(0,s.jsx)(eE,{scope:e.__scopeMenu,checked:n,children:(0,s.jsx)(ex,{role:"menuitemcheckbox","aria-checked":eB(n)?"mixed":n,...a,ref:t,"data-state":ez(n),onSelect:(0,o.M)(a.onSelect,()=>null==r?void 0:r(!!eB(n)||!n),{checkForDefaultPrevented:!1})})})});eb.displayName="MenuCheckboxItem";var eC="MenuRadioGroup",[eR,ej]=Z(eC,{value:void 0,onValueChange:()=>{}}),e_=r.forwardRef((e,t)=>{let{value:n,onValueChange:r,...o}=e,a=(0,M.W)(r);return(0,s.jsx)(eR,{scope:e.__scopeMenu,value:n,onValueChange:a,children:(0,s.jsx)(eh,{...o,ref:t})})});e_.displayName=eC;var ek="MenuRadioItem",eD=r.forwardRef((e,t)=>{let{value:n,...r}=e,a=ej(ek,e.__scopeMenu),l=n===a.value;return(0,s.jsx)(eE,{scope:e.__scopeMenu,checked:l,children:(0,s.jsx)(ex,{role:"menuitemradio","aria-checked":l,...r,ref:t,"data-state":ez(l),onSelect:(0,o.M)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,n)},{checkForDefaultPrevented:!1})})})});eD.displayName=ek;var eS="MenuItemIndicator",[eE,eI]=Z(eS,{checked:!1}),eT=r.forwardRef((e,t)=>{let{__scopeMenu:n,forceMount:r,...o}=e,a=eI(eS,n);return(0,s.jsx)(x.z,{present:r||eB(a.checked)||!0===a.checked,children:(0,s.jsx)(i.WV.span,{...o,ref:t,"data-state":ez(a.checked)})})});eT.displayName=eS;var eP=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,s.jsx)(i.WV.div,{role:"separator","aria-orientation":"horizontal",...r,ref:t})});eP.displayName="MenuSeparator";var eN=r.forwardRef((e,t)=>{let{__scopeMenu:n,...r}=e,o=q(n);return(0,s.jsx)(w.Eh,{...o,...r,ref:t})});eN.displayName="MenuArrow";var eF="MenuSub",[eA,eL]=Z(eF),eO=e=>{let{__scopeMenu:t,children:n,open:o=!1,onOpenChange:a}=e,l=ee(eF,t),u=q(t),[i,c]=r.useState(null),[d,f]=r.useState(null),p=(0,M.W)(a);return r.useEffect(()=>(!1===l.open&&p(!1),()=>p(!1)),[l.open,p]),(0,s.jsx)(w.fC,{...u,children:(0,s.jsx)($,{scope:t,open:o,onOpenChange:p,content:d,onContentChange:f,children:(0,s.jsx)(eA,{scope:t,contentId:(0,g.M)(),triggerId:(0,g.M)(),trigger:i,onTriggerChange:c,children:n})})})};eO.displayName=eF;var eK="MenuSubTrigger",eV=r.forwardRef((e,t)=>{let n=ee(eK,e.__scopeMenu),l=en(eK,e.__scopeMenu),u=eL(eK,e.__scopeMenu),i=ed(eK,e.__scopeMenu),c=r.useRef(null),{pointerGraceTimerRef:d,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=r.useCallback(()=>{c.current&&window.clearTimeout(c.current),c.current=null},[]);return r.useEffect(()=>m,[m]),r.useEffect(()=>{let e=d.current;return()=>{window.clearTimeout(e),f(null)}},[d,f]),(0,s.jsx)(eo,{asChild:!0,...p,children:(0,s.jsx)(eM,{id:u.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":u.contentId,"data-state":eU(n.open),...e,ref:(0,a.F)(t,u.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,o.M)(e.onPointerMove,eX(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||c.current||(i.onPointerGraceIntentChange(null),c.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,o.M)(e.onPointerLeave,eX(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,l=o[a?"left":"right"],u=o[a?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:l,y:o.top},{x:u,y:o.top},{x:u,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(d.current),d.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,o.M)(e.onKeyDown,t=>{let r=""!==i.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&U[l.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})})});eV.displayName=eK;var eW="MenuSubContent",eG=r.forwardRef((e,t)=>{let n=eu(ec,e.__scopeMenu),{forceMount:l=n.forceMount,...u}=e,i=ee(ec,e.__scopeMenu),c=en(ec,e.__scopeMenu),d=eL(eW,e.__scopeMenu),f=r.useRef(null),p=(0,a.e)(t,f);return(0,s.jsx)(X.Provider,{scope:e.__scopeMenu,children:(0,s.jsx)(x.z,{present:l||i.open,children:(0,s.jsx)(X.Slot,{scope:e.__scopeMenu,children:(0,s.jsx)(ev,{id:d.contentId,"aria-labelledby":d.triggerId,...u,ref:p,align:"start",side:"rtl"===c.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;c.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>{e.target!==d.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,o.M)(e.onEscapeKeyDown,e=>{c.onClose(),e.preventDefault()}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=B[c.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=d.trigger)||void 0===r||r.focus(),e.preventDefault()}})})})})})});function eU(e){return e?"open":"closed"}function eB(e){return"indeterminate"===e}function ez(e){return eB(e)?"indeterminate":e?"checked":"unchecked"}function eX(e){return t=>"mouse"===t.pointerType?e(t):void 0}eG.displayName=eW;var eY="DropdownMenu",[eH,eZ]=(0,l.b)(eY,[J]),eJ=J(),[eq,eQ]=eH(eY),e$=e=>{let{__scopeDropdownMenu:t,children:n,dir:o,open:a,defaultOpen:l,onOpenChange:i,modal:c=!0}=e,d=eJ(t),f=r.useRef(null),[p=!1,m]=(0,u.T)({prop:a,defaultProp:l,onChange:i});return(0,s.jsx)(eq,{scope:t,triggerId:(0,g.M)(),triggerRef:f,contentId:(0,g.M)(),open:p,onOpenChange:m,onOpenToggle:r.useCallback(()=>m(e=>!e),[m]),modal:c,children:(0,s.jsx)(er,{...d,open:p,onOpenChange:m,dir:o,modal:c,children:n})})};e$.displayName=eY;var e0="DropdownMenuTrigger",e1=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,disabled:r=!1,...l}=e,u=eQ(e0,n),c=eJ(n);return(0,s.jsx)(eo,{asChild:!0,...c,children:(0,s.jsx)(i.WV.button,{type:"button",id:u.triggerId,"aria-haspopup":"menu","aria-expanded":u.open,"aria-controls":u.open?u.contentId:void 0,"data-state":u.open?"open":"closed","data-disabled":r?"":void 0,disabled:r,...l,ref:(0,a.F)(t,u.triggerRef),onPointerDown:(0,o.M)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(u.onOpenToggle(),u.open||e.preventDefault())}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&u.onOpenToggle(),"ArrowDown"===e.key&&u.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})})});e1.displayName=e0;var e7=e=>{let{__scopeDropdownMenu:t,...n}=e,r=eJ(t);return(0,s.jsx)(ei,{...r,...n})};e7.displayName="DropdownMenuPortal";var e5="DropdownMenuContent",e3=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,l=eQ(e5,n),u=eJ(n),i=r.useRef(!1);return(0,s.jsx)(ef,{id:l.contentId,"aria-labelledby":l.triggerId,...u,...a,ref:t,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=l.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,o.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!l.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});e3.displayName=e5;var e2=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eh,{...o,...r,ref:t})});e2.displayName="DropdownMenuGroup";var e8=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eg,{...o,...r,ref:t})});e8.displayName="DropdownMenuLabel";var e9=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(ex,{...o,...r,ref:t})});e9.displayName="DropdownMenuItem";var e4=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eb,{...o,...r,ref:t})});e4.displayName="DropdownMenuCheckboxItem";var e6=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(e_,{...o,...r,ref:t})});e6.displayName="DropdownMenuRadioGroup";var te=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eD,{...o,...r,ref:t})});te.displayName="DropdownMenuRadioItem";var tt=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eT,{...o,...r,ref:t})});tt.displayName="DropdownMenuItemIndicator";var tn=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eP,{...o,...r,ref:t})});tn.displayName="DropdownMenuSeparator",r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eN,{...o,...r,ref:t})}).displayName="DropdownMenuArrow";var tr=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eV,{...o,...r,ref:t})});tr.displayName="DropdownMenuSubTrigger";var to=r.forwardRef((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,o=eJ(n);return(0,s.jsx)(eG,{...o,...r,ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}})});to.displayName="DropdownMenuSubContent";var ta=e$,tl=e1,tu=e7,ti=e3,tc=e2,ts=e8,td=e9,tf=e4,tp=e6,tm=te,tv=tt,th=tn,tg=e=>{let{__scopeDropdownMenu:t,children:n,open:r,onOpenChange:o,defaultOpen:a}=e,l=eJ(t),[i=!1,c]=(0,u.T)({prop:r,defaultProp:a,onChange:o});return(0,s.jsx)(eO,{...l,open:i,onOpenChange:c,children:n})},tw=tr,ty=to},79512:function(e,t,n){"use strict";n.d(t,{ThemeProvider:function(){return i}});var r=n(2265),o=["light","dark"],a="(prefers-color-scheme: dark)",l="undefined"==typeof window,u=r.createContext(void 0),i=e=>r.useContext(u)?e.children:r.createElement(s,{...e}),c=["light","dark"],s=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:l=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:v=c,defaultTheme:h=l?"system":"light",attribute:g="data-theme",value:w,children:y,nonce:x}=e,[M,b]=r.useState(()=>f(s,h)),[C,R]=r.useState(()=>f(s)),j=w?Object.values(w):v,_=r.useCallback(e=>{let t=e;if(!t)return;"system"===e&&l&&(t=m());let r=w?w[t]:t,a=n?p():null,u=document.documentElement;if("class"===g?(u.classList.remove(...j),r&&u.classList.add(r)):r?u.setAttribute(g,r):u.removeAttribute(g),i){let e=o.includes(h)?h:null,n=o.includes(t)?t:e;u.style.colorScheme=n}null==a||a()},[]),k=r.useCallback(e=>{let t="function"==typeof e?e(e):e;b(t);try{localStorage.setItem(s,t)}catch(e){}},[t]),D=r.useCallback(e=>{R(m(e)),"system"===M&&l&&!t&&_("system")},[M,t]);r.useEffect(()=>{let e=window.matchMedia(a);return e.addListener(D),D(e),()=>e.removeListener(D)},[D]),r.useEffect(()=>{let e=e=>{e.key===s&&k(e.newValue||h)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[k]),r.useEffect(()=>{_(null!=t?t:M)},[t,M]);let S=r.useMemo(()=>({theme:M,setTheme:k,forcedTheme:t,resolvedTheme:"system"===M?C:M,themes:l?[...v,"system"]:v,systemTheme:l?C:void 0}),[M,k,t,C,l,v]);return r.createElement(u.Provider,{value:S},r.createElement(d,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:l,enableColorScheme:i,storageKey:s,themes:v,defaultTheme:h,attribute:g,value:w,children:y,attrs:j,nonce:x}),y)},d=r.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:u,enableColorScheme:i,defaultTheme:c,value:s,attrs:d,nonce:f}=e,p="system"===c,m="class"===l?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),v=i?(o.includes(c)?c:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(c,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=s?s[e]:e,a=t?e+"|| ''":"'".concat(r,"'"),u="";return i&&n&&!t&&o.includes(e)&&(u+="d.style.colorScheme = '".concat(e,"';")),"class"===l?t||r?u+="c.add(".concat(a,")"):u+="null":r&&(u+="d[s](n,".concat(a,")")),u},g=t?"!function(){".concat(m).concat(h(t),"}()"):u?"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(p,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(h("dark"),"}else{").concat(h("light"),"}}else if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(h(s?"x[e]":"e",!0),"}").concat(p?"":"else{"+h(c,!1,!1)+"}").concat(v,"}catch(e){}}()"):"!function(){try{".concat(m,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(h(s?"x[e]":"e",!0),"}else{").concat(h(c,!1,!1),";}").concat(v,"}catch(t){}}();");return r.createElement("script",{nonce:f,dangerouslySetInnerHTML:{__html:g}})}),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},m=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);