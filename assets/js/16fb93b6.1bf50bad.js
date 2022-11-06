"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[2677],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const a={version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["cloud","compute","kubernetes","role:software-engineer","size:medium"]},o="Implement stateless design",s={unversionedId:"catalog/cloud/implement-stateless-design",id:"catalog/cloud/implement-stateless-design",title:"Implement stateless design",description:"Description",source:"@site/docs/catalog/cloud/implement-stateless-design.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/implement-stateless-design",permalink:"/catalog/cloud/implement-stateless-design",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/implement-stateless-design.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"compute",permalink:"/tags/compute"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"tbd",category:"cloud",tags:["cloud","compute","kubernetes","role:software-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Terminate TLS at border gateway",permalink:"/catalog/cloud/evaluate-whether-to-use-TLS-termination"},next:{title:"Match your service level objectives to business needs",permalink:"/catalog/cloud/match-slo"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implement-stateless-design"},"Implement stateless design"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. "),(0,i.kt)("p",null,"Applications that consume large memory or on-disk data, require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks. "),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Remove state from your design to reduce the in-memory or on-disk data required by the workload to function, hence requiring smaller compute sizes for hosting."),(0,i.kt)("p",null,"State can be either externalized in a noSQL database or an in-memory cache service."),(0,i.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,i.kt)("p",null,"Regarding the SCI equation, implementing stateless design will impact:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E"),": Rightsizing the compute VM increases its utilization, hence increasing energy efficiency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M"),": stateless applications require smaller compute VMs, which reduces the total embodied carbon emissions.")),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"The application design supports externalization of state."),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the ",(0,i.kt)("a",{parentName:"li",href:"https://12factor.net/"},"The 12-factor app methodology")," to design stateless applications.")))}p.isMDXComponent=!0}}]);