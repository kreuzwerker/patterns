"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[7647],{4137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const o={version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","role:web-developer","size:small"]},i="Defer Offscreen Images",l={unversionedId:"catalog/web/defer-offscreen-images",id:"catalog/web/defer-offscreen-images",title:"Defer Offscreen Images",description:"Description",source:"@site/docs/catalog/web/defer-offscreen-images.md",sourceDirName:"catalog/web",slug:"/catalog/web/defer-offscreen-images",permalink:"/catalog/web/defer-offscreen-images",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/web/defer-offscreen-images.md",tags:[{label:"web",permalink:"/tags/web"},{label:"role:web-developer",permalink:"/tags/role-web-developer"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"markus-ntt-seidl",published_date:"TBD",category:"web",tags:["web","role:web-developer","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Avoid Tracking Unnecessary Data",permalink:"/catalog/web/avoid-tracking-unnecessary-data"},next:{title:"Deprecate GIFs for animated content",permalink:"/catalog/web/deprecate-gifs"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defer-offscreen-images"},"Defer Offscreen Images"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Web pages offer a lot of images that aren't displayed on the first loaded screen. They can also hide these images behind other interactions, like tabs and accordions. This content is dynamically displayed and therefore doesn't need to be loaded when it isn't displayed.\nThe fact that images are loaded on-demand, only when they are about to be displayed, is often called \"lazy-loading\"."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Load images on demand, which are unlikely to be displayed on first page load. This can be done via the newer browser attribute ",(0,a.kt)("inlineCode",{parentName:"p"},'loading="lazy"')," on the image tag and can also be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mfranzke/loading-attribute-polyfill"},"polyfilled")," for older browsers."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Concerning the SCI equation, lazy-loading images  will impact as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": Images are only loaded when needed, saving bandwidth and processing power on the client and server, therefore reducing the needed energy.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This assumes that the HTML for the image tags can be modified in the application")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/offscreen-images/"},"Detailed description"))))}p.isMDXComponent=!0}}]);