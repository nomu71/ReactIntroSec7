(this.webpackJsonpreactintrosec7=this.webpackJsonpreactintrosec7||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(6),r=n.n(l),o=n(1),i=n(4),u=(n(12),function(e){var t=e.todoText,n=e.onChange,a=e.onClick;return c.a.createElement("div",{className:"input-area"},c.a.createElement("input",{placeholder:"TODO\u3092\u5165\u529b",value:t,onChange:n}),c.a.createElement("button",{onClick:a},"\u8ffd\u52a0"))}),m=function(e){var t=e.todos,n=e.onClickComplete,a=e.onClickDelete;return c.a.createElement("div",{className:"incomplete-area"},c.a.createElement("p",{className:"title"},"\u672a\u5b8c\u4e86\u306eTODO"),c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement("div",{key:e,className:"list-row"},c.a.createElement("li",null,e),c.a.createElement("button",{onClick:function(){return n(t)}},"\u5b8c\u4e86"),c.a.createElement("button",{onClick:function(){return a(t)}},"\u524a\u9664"))}))))},s=function(e){var t=e.todos,n=e.onClickBack;return c.a.createElement("div",{className:"complete-area"},c.a.createElement("p",{className:"title"},"\u5b8c\u4e86\u6e08\u306eTODO"),c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement("div",{key:e,className:"list-row"},c.a.createElement("li",null,e),c.a.createElement("button",{onClick:function(){return n(t)}},"\u623b\u3059"))}))))},E=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)([]),E=Object(i.a)(r,2),p=E[0],b=E[1],f=Object(a.useState)([]),k=Object(i.a)(f,2),v=k[0],O=k[1];return console.log(8),c.a.createElement(c.a.Fragment,null,c.a.createElement(u,{todoText:n,onChange:function(e){return l(e.target.value)},onClick:function(){if(""!==n){var e=[].concat(Object(o.a)(p),[n]);b(e),l("")}}}),c.a.createElement(m,{todos:p,onClickComplete:function(e){var t=Object(o.a)(p);t.splice(e,1);var n=[].concat(Object(o.a)(v),[p[e]]);b(t),O(n)},onClickDelete:function(e){var t=Object(o.a)(p);t.splice(e,1),b(t)}}),c.a.createElement(s,{todos:v,onClickBack:function(e){var t=Object(o.a)(v);t.splice(e,1);var n=[].concat(Object(o.a)(p),[v[e]]);O(t),b(n)}}))};r.a.render(c.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5c274c49.chunk.js.map