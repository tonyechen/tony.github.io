(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4783)}])},2103:function(e,t,n){"use strict";var i=n(5893),r=n(1664),a=n.n(r),o=n(7294);t.Z=function(e){var t=(0,o.useState)(),n=t[0],r=t[1];return(0,o.useEffect)((function(){if(n)"light"===n?document.body.classList.remove("dark"):document.body.classList.add("dark"),window.localStorage.setItem("theme",n);else{var e=window.localStorage.getItem("theme");e?r(e):(window.localStorage.setItem("theme","light"),r("light"))}}),[n]),(0,i.jsxs)("div",{className:"navbar",children:[(0,i.jsx)("div",{className:"navbar__logo",children:(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("img",{src:"/tony-chen-logo.svg",alt:"logo",className:"navbar__logo__image"})})}),(0,i.jsxs)("div",{className:"navbar__content",children:[(0,i.jsx)(a(),{href:"/about",children:(0,i.jsx)("a",{children:"About"})}),(0,i.jsx)(a(),{href:"/projects",children:(0,i.jsx)("a",{children:"Projects"})}),(0,i.jsx)("a",{onClick:function(){r("light"===n?"dark":"light")},children:"light"===n?(0,i.jsx)(i.Fragment,{children:"\u263d"}):(0,i.jsx)(i.Fragment,{children:"\u263c"})})]})]})}},9749:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(s){l=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,l=void 0!==i&&i,s=e.priority,c=void 0!==s&&s,g=e.loading,p=e.lazyRoot,j=void 0===p?null:p,k=e.lazyBoundary,N=void 0===k?"200px":k,O=e.className,E=e.quality,L=e.width,C=e.height,P=e.style,R=e.objectFit,q=e.objectPosition,M=e.onLoadingComplete,D=e.placeholder,U=void 0===D?"empty":D,W=e.blurDataURL,F=b(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),B=d.useContext(h.ImageConfigContext),T=d.useMemo((function(){var e=v||B||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return y({},e,{allSizes:t,deviceSizes:n})}),[B]),H=F,V=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(V=H.layout),delete H.layout);var G=z;if("loader"in H){if(H.loader){var J=H.loader;G=function(e){e.config;var t=b(e,["config"]);return J(t)}}delete H.loader}var X="";if(function(e){return"object"===typeof e&&(x(e)||function(e){return void 0!==e.src}(e))}(t)){var Z=x(t)?t.default:t;if(!Z.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));if(W=W||Z.blurDataURL,X=Z.src,(!V||"fill"!==V)&&(C=C||Z.height,L=L||Z.width,!Z.height||!Z.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))}t="string"===typeof t?t:X;var Q=A(L),$=A(C),K=A(E),Y=!c&&("lazy"===g||"undefined"===typeof g);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,Y=!1);w.has(t)&&(Y=!1);var ee,te=a(d.useState(!1),2),ne=te[0],ie=te[1],re=a(m.useIntersection({rootRef:j,rootMargin:N,disabled:!Y}),3),ae=re[0],oe=re[1],le=re[2],se=!Y||oe,ce={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ue=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:R,objectPosition:q};0;0;var me=Object.assign({},P,"raw"===V?{}:fe),he="blur"!==U||ne?{}:{filter:"blur(20px)",backgroundSize:R||"cover",backgroundImage:'url("'.concat(W,'")'),backgroundPosition:q||"0% 0%"};if("fill"===V)ce.display="block",ce.position="absolute",ce.top=0,ce.left=0,ce.bottom=0,ce.right=0;else if("undefined"!==typeof Q&&"undefined"!==typeof $){var ge=$/Q,pe=isNaN(ge)?"100%":"".concat(100*ge,"%");"responsive"===V?(ce.display="block",ce.position="relative",ue=!0,de.paddingTop=pe):"intrinsic"===V?(ce.display="inline-block",ce.position="relative",ce.maxWidth="100%",ue=!0,de.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Q,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===V&&(ce.display="inline-block",ce.position="relative",ce.width=Q,ce.height=$)}else 0;var ye={src:_,srcSet:void 0,sizes:void 0};se&&(ye=S({config:T,src:t,unoptimized:l,layout:V,width:Q,quality:K,sizes:n,loader:G}));var be=t;0;var ve,we="imagesrcset",_e="imagesizes";we="imageSrcSet",_e="imageSizes";var je=(r(ve={},we,ye.srcSet),r(ve,_e,ye.sizes),ve),xe=d.default.useLayoutEffect,Se=d.useRef(M),Ae=d.useRef(t);d.useEffect((function(){Se.current=M}),[M]),xe((function(){Ae.current!==t&&(le(),Ae.current=t)}),[le,t]);var ze=y({isLazy:Y,imgAttributes:ye,heightInt:$,widthInt:Q,qualityInt:K,layout:V,className:O,imgStyle:me,blurStyle:he,loading:g,config:T,unoptimized:l,placeholder:U,loader:G,srcString:be,onLoadingCompleteRef:Se,setBlurComplete:ie,setIntersection:ae,isVisible:se},H);return d.default.createElement(d.default.Fragment,null,"raw"===V?d.default.createElement(I,Object.assign({},ze)):d.default.createElement("span",{style:ce},ue?d.default.createElement("span",{style:de},ee?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,d.default.createElement(I,Object.assign({},ze))),c?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+ye.src+ye.srcSet+ye.sizes,rel:"preload",as:"image",href:ye.srcSet?void 0:ye.src},je))):null)};var s,c,d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};i.get||i.set?Object.defineProperty(t,n,i):t[n]=e[n]}return t.default=e,t}(n(7294)),u=(s=n(3121))&&s.__esModule?s:{default:s},f=n(139),m=n(9246),h=n(8730),g=(n(670),n(2700));function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){for(var t=arguments,n=function(n){var i=null!=t[n]?t[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){p(e,t,i[t])}))},i=1;i<arguments.length;i++)n(i);return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}c={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1};var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},w=new Set,_=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var j=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t.path).concat(N(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(N(n))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(N(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function x(e){return void 0!==e.default}function S(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,l=e.quality,s=e.sizes,c=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var d=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n||"raw"===n)){for(var l,s=/(^|\s)(1?\d?\d)vw/g,c=[];l=s.exec(i);l)c.push(parseInt(l[2]));if(c.length){var d,u=.01*(d=Math).min.apply(d,o(c));return{widths:a.filter((function(e){return e>=r[0]*u})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,s),u=d.widths,f=d.kind,m=u.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:u.map((function(e,i){return"".concat(c({config:t,src:n,quality:l,width:e})," ").concat("w"===f?e:i+1).concat(f)})).join(", "),src:c({config:t,src:n,quality:l,width:u[m]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",i=j.get(n);if(i)return i(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,i,r,a){e&&e.src!==_&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(w.add(t),"blur"===i&&a(!0),null===r||void 0===r?void 0:r.current)){var n=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:o})}})))}var I=function(e){var t=e.imgAttributes,n=e.heightInt,i=e.widthInt,r=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,c=e.isLazy,u=e.placeholder,f=e.loading,m=e.srcString,h=e.config,g=e.unoptimized,p=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,_=e.setIntersection,j=e.onLoad,x=e.onError,A=(e.isVisible,b(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},A,t,"raw"===a?{height:n,width:i}:{},{decoding:"async","data-nimg":a,className:o,style:y({},l,s),ref:d.useCallback((function(e){_(e),(null===e||void 0===e?void 0:e.complete)&&k(e,m,0,u,v,w)}),[_,m,a,u,v,w]),onLoad:function(e){k(e.currentTarget,m,0,u,v,w),j&&j(e)},onError:function(e){"blur"===u&&w(!0),x&&x(e)}})),(c||"blur"===u)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},A,S({config:h,src:m,unoptimized:g,layout:a,width:i,quality:r,sizes:t.sizes,loader:p}),"raw"===a?{height:n,width:i}:{},{decoding:"async","data-nimg":a,style:l,className:o,loading:f||"lazy"}))))};function N(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4783:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(5893),r=n(2103),a=n(7294),o=n(5675),l=n.n(o),s=function(e){return(0,i.jsx)("img",{className:e.class,src:e.img,alt:e.alt})},c=function(e){return(0,i.jsx)("a",{target:"_blank",rel:"noreferrer",href:e.href,children:(0,i.jsx)(s,{class:e.class,img:e.img,alt:e.alt})})},d=n(1664),u=n.n(d),f=function(e){return(0,i.jsxs)("div",{className:"project__container",children:[(0,i.jsx)("img",{className:"main__intro__project",src:e.image,alt:"amazon clone"}),(0,i.jsx)("p",{children:e.text})]})},m=["I am a Full Stack software developer","I study Computer Science at UCLA","I am a Web Developer for UCLA Anderson","I am passionate about building software","I love learning new things","I am a hard core caffeine addict","I LOVE a good bowl of RAMEN","I am a horrible speller"],h=m.length,g=function(){var e=(0,a.useState)(m[0].split(" ").map((function(e){return(0,i.jsx)("span",{className:"special",children:e},e)}))),t=e[0],n=e[1];return(0,a.useEffect)((function(){setInterval((function(){var e,t=null!==(e=m[Math.round(Math.random()*h)])&&void 0!==e?e:m[0];n(t.split(" ").map((function(e){return(0,i.jsx)("span",{className:"special",children:e},e+t)})))}),5500)}),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"main",children:[(0,i.jsxs)("div",{className:"main__card",children:[(0,i.jsx)("div",{className:"main__image",children:(0,i.jsx)("div",{className:"main__image__wrapper",children:(0,i.jsx)(l(),{src:"/tony_chen.JPG",width:"300",height:"300",layout:"responsive"})})}),(0,i.jsxs)("div",{className:"main__card__info",children:[(0,i.jsxs)("div",{className:"main__card__link_container",children:[(0,i.jsx)(c,{href:"https://www.instagram.com/chen.thonyy/",class:"main__card__links",img:"/instagram.svg",alt:"instagram"}),(0,i.jsx)(c,{href:"https://github.com/tonyechen",class:"main__card__links",img:"/github.svg",alt:"github"}),(0,i.jsx)(c,{href:"https://www.linkedin.com/in/anthony-tony-chen/",class:"main__card__links",img:"/linkedin.svg",alt:"linkedin"}),(0,i.jsx)(c,{href:"https://mail.google.com/mail/u/0/?fs=1&to=anchen082016@gmail.com&tf=cm",class:"main__card__links",img:"/email.svg",alt:"email"})]}),(0,i.jsx)("p",{className:"main__card__text",children:"I am a second year student at UCLA studying Computer Science. I am currently an NSA for UCLA NSAP and a Web Developer for UCLA Anderson!"}),(0,i.jsxs)("div",{className:"main__card__redirect",children:[(0,i.jsx)(u(),{href:"/about",children:(0,i.jsx)("a",{className:"main__card__button",children:"More Me!"})}),(0,i.jsx)(u(),{href:"/resume.pdf",children:(0,i.jsx)("a",{className:"main__card__button",children:"Resume"})})]})]})]}),(0,i.jsxs)("div",{className:"main__intro",children:[(0,i.jsxs)("div",{className:"main__intro__text",children:[(0,i.jsx)("h4",{children:"Hi, I'm"}),(0,i.jsx)("h1",{children:"Tony Chen."}),(0,i.jsx)("div",{children:(0,i.jsx)("p",{className:"pop-up-texts",children:t})})]}),(0,i.jsxs)("div",{className:"main__intro__feature__projects",children:[(0,i.jsx)("h4",{children:"Featured Projects:"}),(0,i.jsxs)("div",{className:"main__intro__projects",children:[(0,i.jsx)(f,{image:"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",text:"Amazon Clone",link:""}),(0,i.jsx)(f,{image:"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",text:"Amazon Clone",link:""})]})]})]})]})})};function p(){return(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(g,{})]})}},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[664,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);