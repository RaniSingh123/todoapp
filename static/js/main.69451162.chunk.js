(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(4),s=n.n(a),r=(n(14),n(7)),u=n(5),d=n(6),o=n(2),h=n(9),j=n(8),l=(n.p,n(15),n(16),n(0));var m=function(t){var e=t.items.map((function(t){return Object(l.jsx)("div",{className:"list",children:Object(l.jsx)("p",{children:t.text})},"item.key")}));return Object(l.jsx)("div",{className:"listitems",children:e})},b=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},c.handleInput=c.handleInput.bind(Object(o.a)(c)),c.addItem=c.addItem.bind(Object(o.a)(c)),c}return Object(d.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(r.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"render",value:function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"Todo App"}),Object(l.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(l.jsx)("button",{type:"submit",children:"Add"})]})]}),Object(l.jsx)(m,{items:this.state.items})]})}}]),n}(i.a.Component),p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.69451162.chunk.js.map