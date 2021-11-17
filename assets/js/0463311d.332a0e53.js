"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8008:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),s=["components"],i={},o="Message",p={unversionedId:"classes/Message",id:"classes/Message",isDocsHomePage:!1,title:"Message",description:"The Message class represents a single MIDI message. It has several properties that make it",source:"@site/api/classes/Message.md",sourceDirName:"classes",slug:"/classes/Message",permalink:"/webmidi/api/classes/Message",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Listener",permalink:"/webmidi/api/classes/Listener"},next:{title:"Note",permalink:"/webmidi/api/classes/Note"}},d=[{value:"<code>Constructor</code>",id:"constructor",children:[],level:3},{value:"Properties",id:"properties",children:[{value:"<code>.channel</code>",id:"channel",children:[],level:3},{value:"<code>.command</code>",id:"command",children:[],level:3},{value:"<code>.data</code>",id:"data",children:[],level:3},{value:"<code>.dataBytes</code>",id:"dataBytes",children:[],level:3},{value:"<code>.isChannelMessage</code>",id:"isChannelMessage",children:[],level:3},{value:"<code>.isSystemMessage</code>",id:"isSystemMessage",children:[],level:3},{value:"<code>.manufacturerId</code>",id:"manufacturerId",children:[],level:3},{value:"<code>.rawData</code>",id:"rawData",children:[],level:3},{value:"<code>.rawDataBytes</code>",id:"rawDataBytes",children:[],level:3},{value:"<code>.statusByte</code>",id:"statusByte",children:[],level:3},{value:"<code>.type</code>",id:"type",children:[],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"message"},"Message"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Message")," class represents a single MIDI message. It has several properties that make it\neasy to make sense of the binary data it contains."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since"),": 3.0.0"),(0,l.kt)("h3",{id:"constructor"},(0,l.kt)("inlineCode",{parentName:"h3"},"Constructor")),(0,l.kt)("p",null,"  ",(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"new Message(data)"))),(0,l.kt)("div",{class:"parameter-table-container"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"data"))),(0,l.kt)("td",{parentName:"tr",align:null},"Uint8Array",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The raw data of the MIDI message as a ",(0,l.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"},(0,l.kt)("inlineCode",{parentName:"a"},"Uint8Array"))," of integers between ",(0,l.kt)("inlineCode",{parentName:"td"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"255"),"."))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"channel"},(0,l.kt)("inlineCode",{parentName:"h3"},".channel")),(0,l.kt)("p",null,"The MIDI channel number (",(0,l.kt)("inlineCode",{parentName:"p"},"1")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"16"),") that the message is targeting. This is only for\nchannel-specific messages. For system messages, this will be left undefined."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"command"},(0,l.kt)("inlineCode",{parentName:"h3"},".command")),(0,l.kt)("p",null,"An integer identifying the MIDI command. For channel-specific messages, the value will be\nbetween ",(0,l.kt)("inlineCode",{parentName:"p"},"8")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"14"),". For system messages, the value will be between ",(0,l.kt)("inlineCode",{parentName:"p"},"240")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h3"},".data")),(0,l.kt)("p",null,"An array containing the bytes of the MIDI message. Each byte is an integer between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","number",">",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"dataBytes"},(0,l.kt)("inlineCode",{parentName:"h3"},".dataBytes")),(0,l.kt)("p",null,"An array of the the data byte(s) of the MIDI message. When the message is a system exclusive\nmessage (sysex), ",(0,l.kt)("inlineCode",{parentName:"p"},"dataBytes")," explicitly excludes the manufacturer ID and the sysex end\nbyte so only the actual data is included."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","number",">",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"isChannelMessage"},(0,l.kt)("inlineCode",{parentName:"h3"},".isChannelMessage")),(0,l.kt)("p",null,"A boolean indicating whether the MIDI message is a channel-specific message."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"isSystemMessage"},(0,l.kt)("inlineCode",{parentName:"h3"},".isSystemMessage")),(0,l.kt)("p",null,"A boolean indicating whether the MIDI message is a system message (not specific to a\nchannel)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"manufacturerId"},(0,l.kt)("inlineCode",{parentName:"h3"},".manufacturerId")),(0,l.kt)("p",null,"When the message is a system exclusive message (sysex), this property contains an array with\neither 1 or 3 entries that identify the manufacturer targeted by the message."),(0,l.kt)("p",null,"To know how to translate these entries into manufacturer names, check out the official list:\n",(0,l.kt)("a",{parentName:"p",href:"https://www.midi.org/specifications-old/item/manufacturer-id-numbers"},"https://www.midi.org/specifications-old/item/manufacturer-id-numbers")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Array.","<","number",">",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"rawData"},(0,l.kt)("inlineCode",{parentName:"h3"},".rawData")),(0,l.kt)("p",null,"A\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"},(0,l.kt)("inlineCode",{parentName:"a"},"Uint8Array")),"\ncontaining the bytes of the MIDI message. Each byte is an integer between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Uint8Array",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"rawDataBytes"},(0,l.kt)("inlineCode",{parentName:"h3"},".rawDataBytes")),(0,l.kt)("p",null,"A\n",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array"},(0,l.kt)("inlineCode",{parentName:"a"},"Uint8Array")),"\nof the data byte(s) of the MIDI message. When the message is a system exclusive message\n(sysex), ",(0,l.kt)("inlineCode",{parentName:"p"},"rawDataBytes")," explicitly excludes the manufacturer ID and the sysex end byte so\nonly the actual data is included."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Uint8Array",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"statusByte"},(0,l.kt)("inlineCode",{parentName:"h3"},".statusByte")),(0,l.kt)("p",null,"The MIDI status byte of the message as an integer between ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"255"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)),(0,l.kt)("h3",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h3"},".type")),(0,l.kt)("p",null,"The type of message as a string (",(0,l.kt)("inlineCode",{parentName:"p"},'"noteon"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"controlchange"'),", ",(0,l.kt)("inlineCode",{parentName:"p"},'"sysex"'),", etc.)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": string",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Attributes"),": read-only",(0,l.kt)("br",null)))}c.isMDXComponent=!0}}]);