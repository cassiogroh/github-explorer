(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{15:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},33:function(n,e,t){n.exports=t.p+"static/media/github-background.0b819d63.svg"},41:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(32),l=t.n(o),i=t(7),c=t(4),u=t(5),s=t(33),p=t.n(s);function m(){var n=Object(c.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #F0F0F5 url(",") no-repeat 70% top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return m=function(){return n},n}var d=Object(u.a)(m(),p.a),b=t(1),g=t(17),f=t.n(g),x=t(40),E=t(37),h=t(8),v=t(13),y=t(38),O=t.n(y).a.create({baseURL:"https://api.github.com"}),j=t(15),k=t.n(j),w=t(39);function F(){var n=Object(c.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: #FFF;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n  }\n\n  img {\n    width: 64px;\n    height: 64px;\n    border-radius: 50%;\n  }\n\n  div {\n    margin: 0 16px;\n    flex: 1;\n\n    strong {\n    font-size: 20px;\n    color: #3d3d4d;\n    }\n\n    p {\n    font-size: 18px;\n    color: #a8a8b3;\n    margin-top: 4px;\n    }\n  }\n\n  svg {\n      margin-left: auto;\n      color: #cbcbd6;\n     }\n"]);return F=function(){return n},n}function z(){var n=Object(c.a)(["\n  display: block;\n  color: #c53030;\n  margin-top: 8px;\n"]);return z=function(){return n},n}function S(){var n=Object(c.a)(["\n        border-color: #c53030;\n      "]);return S=function(){return n},n}function _(){var n=Object(c.a)(["\n    margin-top: 40px;\n    max-width: 700px;\n\n    display: flex;\n\n    input {\n      flex: 1;\n      height: 70px;\n      padding: 0 24px;\n      border: 0;\n      border-radius: 5px 0 0 5px;\n      color: #3a3a3a;\n      border: 2px solid #FFF;\n      border-right: 0;\n\n      ","\n\n      &::placeholder {\n        color: #a8a8b3;\n      }\n    }\n\n    button {\n      height: 70px;\n      width: 210px;\n      background: #04D361;\n      border-radius: 0 5px 5px 0;\n      border: 0;\n      color: #FFF;\n      font-weight: bold;\n      transition: background-color 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n"]);return _=function(){return n},n}function D(){var n=Object(c.a)(["\n  font-size: 48px;\n  color: #3A3A3A;\n  max-width: 450px;\n  line-height: 56px;\n  margin-top: 80px;\n"]);return D=function(){return n},n}var G=u.c.h1(D()),I=u.c.form(_(),(function(n){return n.hasError&&Object(u.b)(S())}),Object(w.a)(.2,"#04D361")),J=u.c.span(z()),A=u.c.div(F()),N=function(){var n=Object(r.useState)(""),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)(""),c=Object(h.a)(l,2),u=c[0],s=c[1],p=Object(r.useState)((function(){var n=localStorage.getItem("@GithubExplorer:repositories");return n?JSON.parse(n):[]})),m=Object(h.a)(p,2),d=m[0],b=m[1];function g(){return(g=Object(E.a)(f.a.mark((function n(e){var r,a;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return s("Digite autor/nome do resposit\xf3rio"),n.abrupt("return");case 4:return n.prev=5,n.next=8,O.get("repos/".concat(t));case 8:r=n.sent,a=r.data,b([].concat(Object(x.a)(d),[a])),o(""),s(""),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),s("Erro na busca por esse reposit\xf3rio");case 18:case"end":return n.stop()}}),n,null,[[5,15]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GithubExplorer:repositories",JSON.stringify(d))}),[d]),a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{src:k.a,alt:"Github explorer"}),a.a.createElement(G,null,"Explore reposit\xf3rios no Github"),a.a.createElement(I,{hasError:!!u,onSubmit:function(n){return g.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite o nome do resposit\xf3rio"}),a.a.createElement("button",{type:"submit"},"Pesqusiar")),u&&a.a.createElement(J,null,u),a.a.createElement(A,null,d.map((function(n){return a.a.createElement(i.b,{key:n.full_name,to:"/repository/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(v.a,{size:20}))}))))};function R(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  a {\n    background: #FFF;\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n    transition: transform 0.2s;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    &:hover {\n      transform: translateX(10px);\n    }\n  }\n\n  div {\n    margin: 0 16px;\n    flex: 1;\n\n    strong {\n    font-size: 20px;\n    color: #3d3d4d;\n    }\n\n    p {\n    font-size: 18px;\n    color: #a8a8b3;\n    margin-top: 4px;\n    }\n  }\n\n  svg {\n      margin-left: auto;\n      color: #cbcbd6;\n     }\n"]);return R=function(){return n},n}function X(){var n=Object(c.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      p {\n        font-size: 18px;\n        color: #737380;\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n        color: #3d3d4d;\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: #6c6c80;\n      }\n    }\n  }\n"]);return X=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: #a8a8b3;\n    transition: color 0.2s;\n\n    &:hover {\n      color: #666;\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return q=function(){return n},n}var B=u.c.header(q()),C=u.c.section(X()),L=u.c.div(R()),M=function(){var n=Object(r.useState)(null),e=Object(h.a)(n,2),t=e[0],o=e[1],l=Object(r.useState)([]),c=Object(h.a)(l,2),u=c[0],s=c[1],p=Object(b.f)().params;return Object(r.useEffect)((function(){O.get("/repos/".concat(p.repository)).then((function(n){o(n.data)})),O.get("/repos/".concat(p.repository,"/issues")).then((function(n){s(n.data)}))}),[p.repository]),a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null,a.a.createElement("img",{src:k.a,alt:"Github Explorer"}),a.a.createElement(i.b,{to:"/"},a.a.createElement(v.b,{size:16}),"Voltar")),t&&a.a.createElement(C,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Stars")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues abertas")))),a.a.createElement(L,null,u.map((function(n){return a.a.createElement("a",{key:n.id,href:n.html_url},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(v.a,{size:20}))}))))},P=function(){return a.a.createElement(b.c,null,a.a.createElement(b.a,{path:"/",exact:!0,component:N}),a.a.createElement(b.a,{path:"/repository/:repository+",exact:!0,component:M}))},U=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,null,a.a.createElement(P,null)),a.a.createElement(d,null))};l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(U,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d1be5b7a.chunk.js.map