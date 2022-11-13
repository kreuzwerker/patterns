"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[2677],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(4137));const n={version:1,submitted_by:"yelghali",published_date:new Date("2022-11-10T00:00:00.000Z"),category:"cloud",description:"Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks.",tags:["cloud","compute","kubernetes","role:software-engineer","size:medium"]},o="Implement stateless design",s={unversionedId:"catalog/cloud/implement-stateless-design",id:"catalog/cloud/implement-stateless-design",title:"Implement stateless design",description:"Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks.",source:"@site/docs/catalog/cloud/implement-stateless-design.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/implement-stateless-design",permalink:"/catalog/cloud/implement-stateless-design",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/cloud/implement-stateless-design.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"compute",permalink:"/tags/compute"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"2022-11-10T00:00:00.000Z",category:"cloud",description:"Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks.",tags:["cloud","compute","kubernetes","role:software-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Terminate TLS at border gateway",permalink:"/catalog/cloud/evaluate-whether-to-use-TLS-termination"},next:{title:"Match your service level objectives to business needs",permalink:"/catalog/cloud/match-slo"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"implement-stateless-design"},"Implement stateless design"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Service state refers to the in-memory or on-disk data required by a service to function. State includes the data structures and member variables that the service reads and writes. Depending on how the service is architected, the state might also include files or other resources stored on the disk. "),(0,i.kt)("p",null,"Applications that consume large memory or on-disk data require larger VM sizes, especially for cloud computing where you would need larger VM SKUs to support high RAM capacity and multiple data disks. "),(0,i.kt)("h2",{id:"solution"},"Solution"),(0,i.kt)("p",null,"Remove state from your design to reduce the in-memory or on-disk data required by the workload to function, hence requiring smaller compute sizes for hosting."),(0,i.kt)("p",null,"State can be either externalized in a noSQL database or an in-memory cache service."),(0,i.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,i.kt)("p",null,"Implementing stateless design will impact SCI as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"E"),": Rightsizing the compute VM increases its utilization and therefore its energy efficiency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"M"),": Stateless applications require smaller compute VMs, which means lower total embodied carbon emissions.")),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"The application design supports externalization of state."),(0,i.kt)("h2",{id:"considerations"},"Considerations"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://12factor.net/"},"The 12-factor app methodology")," to design stateless applications."))}d.isMDXComponent=!0}}]);