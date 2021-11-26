"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[809],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4990:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={sidebar_position:1,title:"API Documentation"},l="API Documentation",p={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"API Documentation",description:"This documentation is for the alpha version currently under development. This version is",source:"@site/api/index.md",sourceDirName:".",slug:"/index",permalink:"/webmidi/api/index",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"API Documentation"},sidebar:"tutorialSidebar",next:{title:"Enumerations",permalink:"/webmidi/api/classes/Enumerations"}},c=[{value:"Core Classes",id:"core-classes",children:[],level:2},{value:"Support Classes",id:"support-classes",children:[],level:2},{value:"DjipEvents Classes",id:"djipevents-classes",children:[],level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api-documentation"},"API Documentation"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This documentation is for the ",(0,i.kt)("strong",{parentName:"p"},"alpha")," version currently under development. This version is\nunstable and ",(0,i.kt)("strong",{parentName:"p"},"should not be used in production")," environments. "))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"While we port the API documentation over to the new system, the\n",(0,i.kt)("a",{parentName:"p",href:"https://djipco.github.io/webmidi/archives/api/v3/"},"old documentation format")," will remain be\navailable. "))),(0,i.kt)("h2",{id:"core-classes"},"Core Classes"),(0,i.kt)("p",null,"These classes are the ones developers are most likely to be dealing with while working on their MIDI\nprojects. Note that all these classes are pre-instantiated within WebMidi.js."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/WebMidi"},(0,i.kt)("strong",{parentName:"a"},"WebMidi"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Input"},(0,i.kt)("strong",{parentName:"a"},"Input"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/InputChannel"},(0,i.kt)("strong",{parentName:"a"},"InputChannel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Output"},(0,i.kt)("strong",{parentName:"a"},"Output"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/OutputChannel"},(0,i.kt)("strong",{parentName:"a"},"OutputChannel"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Message"},(0,i.kt)("strong",{parentName:"a"},"Message")))),(0,i.kt)("p",null,"The exception is the ",(0,i.kt)("a",{parentName:"p",href:"classes/Note"},(0,i.kt)("inlineCode",{parentName:"a"},"Note"))," class which you can instantiate when you need to store a\nmusical note:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Note"},(0,i.kt)("strong",{parentName:"a"},"Note")))),(0,i.kt)("h2",{id:"support-classes"},"Support Classes"),(0,i.kt)("p",null,"These classes are mostly for internal use, but you might find them useful in some contexts. The\n",(0,i.kt)("a",{parentName:"p",href:"classes/Enumerations"},(0,i.kt)("inlineCode",{parentName:"a"},"Enumerations"))," class contains static enums of MIDI messages, registered\nparameters, etc. The ",(0,i.kt)("a",{parentName:"p",href:"classes/Utilities"},(0,i.kt)("inlineCode",{parentName:"a"},"Utilities"))," class contains various static methods. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Enumerations"},(0,i.kt)("strong",{parentName:"a"},"Enumerations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Utilities"},(0,i.kt)("strong",{parentName:"a"},"Utilities")))),(0,i.kt)("h2",{id:"djipevents-classes"},"DjipEvents Classes"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Listener")," classes from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/djipco/djipevents"},"DjipEvents"),"\nmodule are extended by various WebMidi.js classes. So, in the interest of completeness, we include\ntheir full documentation here and cross-reference it with the core classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/EventEmitter"},(0,i.kt)("strong",{parentName:"a"},"EventEmitter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"classes/Listener"},(0,i.kt)("strong",{parentName:"a"},"Listener")))))}m.isMDXComponent=!0}}]);