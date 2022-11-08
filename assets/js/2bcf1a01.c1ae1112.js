"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[6686],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",tags:["ai","machine-learning","role:data-scientist","size:small"]},o="Use energy efficient AI/ML models",l={unversionedId:"catalog/ai/energy-efficent-models",id:"catalog/ai/energy-efficent-models",title:"Use energy efficient AI/ML models",description:"Description",source:"@site/docs/catalog/ai/energy-efficent-models.md",sourceDirName:"catalog/ai",slug:"/catalog/ai/energy-efficent-models",permalink:"/catalog/ai/energy-efficent-models",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/green-software-patterns/docs/catalog/ai/energy-efficent-models.md",tags:[{label:"ai",permalink:"/tags/ai"},{label:"machine-learning",permalink:"/tags/machine-learning"},{label:"role:data-scientist",permalink:"/tags/role-data-scientist"},{label:"size:small",permalink:"/tags/size-small"}],version:"current",frontMatter:{version:1,submitted_by:"navveenb",published_date:"tbd",category:"ai",tags:["ai","machine-learning","role:data-scientist","size:small"]},sidebar:"tutorialSidebar",previous:{title:"Select a more energy efficient AI/ML framework",permalink:"/catalog/ai/energy-efficent-framework"},next:{title:"Use sustainable regions for AI/ML training",permalink:"/catalog/ai/leverage-sustainable-regions"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-energy-efficient-aiml-models"},"Use energy efficient AI/ML models"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Large AI/ML and deep learning network models have a significant carbon footprint. Evaluate and use alternative, more energy efficient, models that provide similar functionality."),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Evaluate energy efficient AI/ML models for development and inference. For example, DistilBERT provides similar functionality to the BERT model, running 60% faster while preserving 97% of BERT's performance. GPT-Neo 125M provides balanced results for energy consumption and accuracy compared to GPT-J 6B or GPT Neo 2.7B models."),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Using energy efficient AI/ML models impacts SCI as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),":  Having an energy-efficient AI/ML model would provide efficient resource utilization and reduces the energy consumption of the compute resources and consequently, the E number should decrease.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("p",null,"None "),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("p",null,"None"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://blog.tensorflow.org/2020/05/how-hugging-face-achieved-2x-performance-boost-question-answering.html"},"DistilBERT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Green-Software-Foundation/eval_sci_of_foundation_models/blob/main/Report/SCI_Foundation_Models_Preliminary_Results.pdf"},"SCI Foundation Models Results"))))}p.isMDXComponent=!0}}]);