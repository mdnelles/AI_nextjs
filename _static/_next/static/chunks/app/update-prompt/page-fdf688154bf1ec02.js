(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[69],{9393:function(e,t,s){Promise.resolve().then(s.bind(s,8482))},8482:function(e,t,s){"use strict";s.r(t);var a=s(9268),r=s(6006),l=s(6008),o=s(4038);t.default=()=>{let e=(0,l.useRouter)(),t=(0,l.useSearchParams)(),s=t.get("id"),[n,c]=(0,r.useState)({prompt:"",tag:""}),[i,p]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e=async()=>{let e=await fetch("/api/prompt/".concat(s));console.log("..............................response"),console.log(e);let t=await e.json();c({prompt:t.prompt,tag:t.tag})};s&&e()},[s]);let m=async t=>{t.preventDefault(),p(!0),console.log(" ..post (inside updatePrompt)"),console.log(n);let{prompt:a,tag:r}=n;if(!s)return alert("Missing PromptId!");try{let t=await fetch("/api/prompt/".concat(s),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a,tag:r})});t.ok&&e.push("/")}catch(e){console.log(e)}finally{p(!1)}};return(0,a.jsx)(o.Z,{type:"Edit",post:n,submitting:i,handleSubmit:m,setPost:c})}},4038:function(e,t,s){"use strict";var a=s(9268),r=s(5846),l=s.n(r);s(6006),t.Z=e=>{let{type:t,post:s,setPost:r,submitting:o,handleSubmit:n}=e;return(0,a.jsxs)("section",{className:"w-full max-w-full flex-start flex-col",children:[(0,a.jsx)("h1",{className:"head_text text-left",children:(0,a.jsxs)("span",{className:"blue_gradient",children:[t," Post"]})}),(0,a.jsxs)("p",{className:"desc text-left max-w-md",children:[t," ChatGPT prompt and leave it on the wall for others to see."]}),(0,a.jsxs)("form",{onSubmit:n,className:"mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism",children:[(0,a.jsxs)("label",{children:[(0,a.jsx)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:"Your AI Prompt"}),(0,a.jsx)("textarea",{value:s.prompt,onChange:e=>r({...s,prompt:e.target.value}),placeholder:"Write your post here",required:!0,className:"form_textarea "})]}),(0,a.jsxs)("label",{children:[(0,a.jsxs)("span",{className:"font-satoshi font-semibold text-base text-gray-700",children:["Field of Prompt ",(0,a.jsx)("span",{className:"font-normal"})]}),(0,a.jsx)("input",{value:s.tag,onChange:e=>r({...s,tag:e.target.value}),type:"text",placeholder:"#Tag",required:!0,className:"form_input"})]}),(0,a.jsxs)("div",{className:"flex-end mx-3 mb-5 gap-4",children:[(0,a.jsx)(l(),{href:"/",className:"text-gray-500 text-sm",children:"Cancel"}),(0,a.jsx)("button",{type:"submit",disabled:o,className:"px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white",children:o?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("svg",{className:"mr-3 h-5 w-5 animate-spin text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,a.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,a.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})}):t})]})]})]})}},3177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(6006),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,s){var a,l={},i=null,p=null;for(a in void 0!==s&&(i=""+s),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,a)&&!c.hasOwnProperty(a)&&(l[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===l[a]&&(l[a]=t[a]);return{$$typeof:r,type:e,key:i,ref:p,props:l,_owner:n.current}}t.Fragment=l,t.jsx=i,t.jsxs=i},9268:function(e,t,s){"use strict";e.exports=s(3177)},6008:function(e,t,s){e.exports=s(794)}},function(e){e.O(0,[846,253,769,744],function(){return e(e.s=9393)}),_N_E=e.O()}]);