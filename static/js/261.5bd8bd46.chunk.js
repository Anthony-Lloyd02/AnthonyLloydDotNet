"use strict";(self.webpackChunkAnthonyLloydDotNet=self.webpackChunkAnthonyLloydDotNet||[]).push([[261,244,398],{261:function(e,t,n){n.r(t);var a=n(4506),r=n(9439),c=n(2791),o=n.n(c),l=n(2648);n(1174),n(2244),n(4398);t.default=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],i=(0,c.useState)([]),u=(0,r.Z)(i,2),m=u[0],d=u[1];(0,c.useEffect)((function(){fetch("https://raw.githubusercontent.com/Anthony-Lloyd02/AnthonyLloydDotNet/main/public/about/about.md").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.text()})).then((function(e){var t=e.split("\n## "),n=(0,a.Z)(t),r=n[0],c=n.slice(1);s(r.trim());var o=c.map((function(e){var t=e.split("\n"),n=(0,a.Z)(t),r=n[0],c=n.slice(1);return{title:r.replace("##","").trim(),content:c.join("\n").trim()}}));d(o)})).catch((function(e){return console.error(e)}))}),[]);var f=function(e){return{__html:(0,l.TU)(e)}};return o().createElement("section",{className:"bg-light text-dark py-5",id:"About"},o().createElement("div",{className:"container"},o().createElement("div",{className:"row justify-content-center mb-5"},o().createElement("div",{className:"col-lg-8 text-center"},o().createElement("h2",{className:"display-4 mb-4"},"About Me"),o().createElement("p",{className:"lead",dangerouslySetInnerHTML:f(n)})," ")),o().createElement("div",{className:"row"},m.map((function(e,t){return o().createElement("div",{key:t,className:"col-md-4 mb-4"},o().createElement("div",{className:"card"},o().createElement("div",{className:"card-body"},o().createElement("h3",{className:"card-title"},e.title),o().createElement("div",{className:"card-text",dangerouslySetInnerHTML:f(e.content)}))))})))))}},1174:function(){},2244:function(e,t,n){n.r(t),t.default={}},4398:function(e,t,n){n.r(t),t.default={}},4506:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(3878),r=n(9199),c=n(181),o=n(5267);function l(e){return(0,a.Z)(e)||(0,r.Z)(e)||(0,c.Z)(e)||(0,o.Z)()}}}]);
//# sourceMappingURL=261.5bd8bd46.chunk.js.map