(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),s=n(4),i=n(5),r=n(8),b=n(7),l=n(1),o=n.n(l),d=n(6),u=n.n(d),j=n(0),h=function(t){var e=t.tabs,n=t.selectedTabId,a=t.handleSelector;return Object(j.jsxs)("div",{className:"Tabs__tab",children:[e.map((function(t){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("button",{type:"button",className:u()("Tabs__button",{"Tabs__button--active":t.id===n}),onClick:function(){return a(t.id)},children:t.title},t.id)})})),Object(j.jsx)("p",{className:"Tabs__text",children:(e.find((function(t){return t.id===n}))||e[0]).content})]})},f=(n(14),n(15),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),p=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={selectedTab:"tab-1"},t.handleSelector=function(e){t.setState({selectedTab:e})},t}return Object(i.a)(n,[{key:"render",value:function(){var t,e=this.state.selectedTab;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{className:"App__title",children:["Selected tab is"," ",(t=e,f.find((function(e){return e.id===t}))||f[0]).title]}),Object(j.jsx)(h,{tabs:f,selectedTabId:e,handleSelector:this.handleSelector})]})}}]),n}(o.a.Component);c.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d52d3008.chunk.js.map