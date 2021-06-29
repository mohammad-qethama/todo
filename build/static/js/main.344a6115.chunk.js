(this["webpackJsonpdemo-context-api"]=this["webpackJsonpdemo-context-api"]||[]).push([[0],{51:function(e,t,a){e.exports=a(81)},59:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(22),l=a(23),c=a(33),r=a(31),o=a(0),u=a.n(o),i=a(13),m=a.n(i),s=a(7),d=a(88),f=a(48),p=a(25),h=a(38),E=function(e){var t=Object(o.useState)({}),a=Object(s.a)(t,2),n=a[0],l=a[1];return[n,function(e){l(Object(h.a)(Object(h.a)({},n),{},Object(p.a)({},e.target.name,e.target.value)))},function(t){t.preventDefault(),t.target.reset(),e.handleSubmit(n);l({})}]},b=function(e){var t=E(e),a=Object(s.a)(t,3),n=a[1],l=a[2];return u.a.createElement(u.a.Fragment,null,u.a.createElement("h3",null,"Add Item"),u.a.createElement(d.a,{onSubmit:l},u.a.createElement(d.a.Group,null,u.a.createElement(d.a.Label,null,u.a.createElement(d.a.Text,null,"To Do Item"),u.a.createElement(d.a.Control,{name:"text",placeholder:"Add To Do List Item",onChange:n})),u.a.createElement(d.a.Label,null,u.a.createElement(d.a.Text,null,"Difficulty Rating"),u.a.createElement(d.a.Control,{defaultValue:"1",type:"range",min:"1",max:"5",name:"difficulty",onChange:n})),u.a.createElement(d.a.Label,null,u.a.createElement(d.a.Text,null,"Assigned To"),u.a.createElement(d.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:n})),u.a.createElement(f.a,{type:"submit"},"Add Item"))))},g=a(89),v=a(86),j=(a(59),u.a.createContext()),O=function(e){var t=Object(o.useState)(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],c=Object(o.useState)("Ascending"),r=Object(s.a)(c,2),i=r[0],m=r[1],d=Object(o.useState)(3),f=Object(s.a)(d,2),p={showCompleted:n,difficulty:i,itemPerPage:f[0],setShowCompleted:l,setDifficulty:m,setItemPerPage:f[1]};return u.a.createElement(j.Provider,{value:p},e.children)},C=function(e){var t=Object(o.useContext)(j),a=Object(o.useState)(0),n=Object(s.a)(a,2),l=n[0],c=n[1],r=e.list.length,i=Object(o.useState)(t.itemPerPage),m=Object(s.a)(i,2),d=m[0],p=m[1];return Object(o.useEffect)((function(){p(l+t.itemPerPage)}),[t.itemPerPage,l]),u.a.createElement("div",null,u.a.createElement("div",{hidden:!0},r=e.list.length),e.list.filter((function(e){return!!t.showCompleted||!e.complete})).sort((function(e,a){var n;return n="Ascending"===t.difficulty?-1:1,e.difficulty>a.difficulty?n:e.difficulty<a.difficulty?-1*n:0})).slice(l,d).map((function(t){return u.a.createElement(g.a,{onClose:function(){return e.handleDelete(t._id)},key:t._id},u.a.createElement(g.a.Header,{closeLabel:"DeleteTask"},u.a.createElement(v.a,{pill:!0,variant:t.complete?"danger":"success",onClick:function(){return e.handleComplete(t._id)}},t.complete?"Completed":"Pending"),u.a.createElement("strong",null,t.assignee)),u.a.createElement(g.a.Body,null,u.a.createElement("div",{className:"toastBody"},u.a.createElement("span",null,t.text),u.a.createElement("small",null,"Difficulty:",t.difficulty))))})),u.a.createElement("div",{className:"buttons"},u.a.createElement(f.a,{onClick:function(){d<r&&(c(l+t.itemPerPage),p(d+t.itemPerPage))}}," Next "),u.a.createElement(f.a,{onClick:function(){l>0&&(c(l-t.itemPerPage),p(d-t.itemPerPage))}}," Previous ")))},y=a(90),P=a(50),D=a(21),x=a.n(D),S="https://api-js401.herokuapp.com/api/v1/todo",T=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],l=function(){x.a.get(S,{headers:{mode:"cors",cache:"no-cache"}}).then((function(e){return n(e.data.results)})).catch(console.error)};return Object(o.useEffect)(l,[]),[a,l,function(e){var t=a.filter((function(t){return t._id===e}))[0]||{};if(t._id){t.complete=!t.complete;var l="".concat(S,"/").concat(e);x.a.put(l,t,{headers:{mode:"cors",cache:"no-cache","Content-Type":"application/json"}}).then((function(e){n(a.map((function(a){return a._id===t._id?e.data:a})))})).catch(console.error)}},function(e){e.due=new Date,x.a.post(S,e,{headers:{mode:"cors",cache:"no-cache","Content-Type":"application/json"}}).then((function(e){n([].concat(Object(P.a)(a),[e.data]))})).catch(console.error)},function(e){var t="".concat(S,"/").concat(e);x.a.delete(t,{headers:{mode:"cors",cache:"no-cache","Content-Type":"application/json"}}).then((function(e){n(a.filter((function(t){return t._id!==e.data._id})))}))}]},k=(a(78),function(){var e=T(),t=Object(s.a)(e,5),a=t[0],n=t[2],l=t[3],c=t[4];return u.a.createElement(u.a.Fragment,null,u.a.createElement("header",null,u.a.createElement(y.a,{bg:"dark"},u.a.createElement("h2",null,"There are ",a.filter((function(e){return!e.complete})).length," Items To Complete"))),u.a.createElement("section",{className:"todo"},u.a.createElement("div",null,u.a.createElement(b,{handleSubmit:l})),u.a.createElement("div",null,u.a.createElement(C,{list:a,handleComplete:n,handleDelete:c}))))}),w=a(87),I=function(e){var t=Object(o.useContext)(j),a=function(e,a){a.preventDefault(),console.log(a.target.value),t.setDifficulty(a.target.value)};return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(f.a,{onClick:function(e){e.preventDefault(),t.setShowCompleted(!t.showCompleted)}}," ",t.showCompleted?"Hide Completed":"Show Completed")),u.a.createElement("div",null,u.a.createElement(w.a,null,u.a.createElement(w.a.Toggle,{variant:"success",id:"dropdown-basic"},"Order By Difficulty"),u.a.createElement(w.a.Menu,null,u.a.createElement(w.a.Item,{onSelect:a,as:"button",value:"Descending"},"Ascending"),u.a.createElement(w.a.Item,{onSelect:a,as:"button",value:"Ascending"},"Descending")))),u.a.createElement("div",null,u.a.createElement("label",{htmlFor:"Rap"}," Number of Results Per Page"),u.a.createElement("input",{name:"Rap",type:"number",min:1,max:10,placeholder:"input a number between 1 and 10",onChange:function(e){var a=parseInt(e.target.value,10);a&&t.setItemPerPage(a)}})))},A=(a(80),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(O,null,u.a.createElement(k,null),u.a.createElement(I,null)))}}]),a}(u.a.Component)),_=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return u.a.createElement(A,null)}}]),a}(u.a.Component),L=document.getElementById("root");m.a.render(u.a.createElement(_,null),L)}},[[51,1,2]]]);
//# sourceMappingURL=main.344a6115.chunk.js.map