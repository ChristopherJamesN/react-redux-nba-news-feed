(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{131:function(e,t,n){e.exports=n(220)},137:function(e,t,n){},138:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);n(132);var a=n(1),r=n.n(a),o=n(12),c=n.n(o),l=(n(137),n(15)),i=n(16),s=n(18),u=n(17),p=(n(138),n(22)),m=n(44),d=n(13),h=n(221),g=function(e){var t=e.notes;t.sort((function(e,t){return e.id-t.id}));var n=t.map((function(e,t){return r.a.createElement(h.a,{key:e.id},r.a.createElement(p.b,{key:e.id,className:"list-group-item list-group-item-action",to:"/notes/".concat(e.id)},e.name))}));return r.a.createElement("div",null,n)},f=(n(144),"568a09824e1a4dd3b96e50bccd29bc88");function E(){return function(e){return e({type:"LOADING_NOTES"}),fetch("/api/notes",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(t){return e({type:"SHOW_NOTES",payload:t})}))}}function b(e,t,n,a){var r=JSON.stringify({note:{name:e,description:t,link:n,comments:a}});return function(e){return e({type:"SAVING_NOTE"}),fetch("/api/notes",{method:"post",body:r,headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(t){return e({type:"ADD_NOTES",payload:t})}))}}function O(e,t,n,a,r){return function(o){return o({type:"SAVING_NOTE"}),fetch("/api/notes/".concat(e),{method:"put",body:JSON.stringify({note:{name:t,description:n,link:a,comments:r}}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){return o({type:"SAVING_NOTE"})})).then((function(e){return o({type:"LOADING_NOTES"}),fetch("/api/notes",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){return o({type:"SHOW_NOTES",payload:e})}))}))}}function v(e){return function(t){return t({type:"DELETING_NOTE"}),fetch("/api/notes/".concat(e),{method:"delete",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return t({type:"LOADING_NOTES"}),fetch("/api/notes",{method:"get",headers:{"Content-Type":"application/json",Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){return t({type:"SHOW_NOTES",payload:e})}))}))}}function y(){return function(e){return e({type:"LOADING_NEWS"}),fetch("https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=".concat(f)).then((function(e){return e.json()})).then((function(e){return e.articles})).then((function(t){return e({type:"FETCH_NEWS",news:t})}))}}function j(){return function(e){return e({type:"LOADING_NEWS"}),fetch("https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&apiKey=".concat(f)).then((function(e){return e.json()})).then((function(e){return e.articles})).then((function(t){return e({type:"ADD_FOX_SPORTS",news:t})}))}}function N(){return function(e){return e({type:"LOADING_NEWS"}),fetch("https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=".concat(f)).then((function(e){return e.json()})).then((function(e){return e.articles})).then((function(t){return e({type:"ADD_NFL_NEWS",news:t})}))}}function w(e,t){return function(n){return n({type:"LOADING"}),fetch("/user_token",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:e}).then((function(e){if(!(e.status>=200&&e.status<300))throw new Error("Network response was not ok.");e.json().then((function(e){return localStorage.setItem("jwt",e.jwt),n({type:"RETURN_JWT"}),n({type:"LOADING"}),fetch("/api/users/:id",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(e)),n({type:"CURRENT_USER",payload:e}),t.replace("/")}))}))})).catch((function(e){console.log("There has been a problem with your fetch operation: ",e.message),n({type:"INVALID_SIGNIN"})}))}}function S(e,t){return function(n){return n({type:"LOADING"}),fetch("/api/register",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json"},body:e}).then((function(e){if(!(e.status>=200&&e.status<300))throw new Error("Network response was not ok.");e.json().then((function(e){return localStorage.setItem("jwt",e.jwt),n({type:"RETURN_JWT"}),n({type:"LOADING"}),fetch("/api/users/:id",{method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}}).then((function(e){return e.json()})).then((function(e){localStorage.setItem("user",JSON.stringify(e)),n({type:"CURRENT_USER",payload:e}),t.replace("/")}))}))})).catch((function(e){console.log("There has been a problem with your fetch operation: ",e.message),n({type:"INVALID_SIGNUP"})}))}}function I(){return function(e){e({type:"LOGGED_OUT"}),window.location.replace("/login")}}var k=n(222),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).goBack=function(){window.history.back()},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(k.a,{color:"primary",onClick:this.goBack},"Back")}}]),n}(a.Component);C.contextTypes={router:function(){return null}};var _=C,L=n(14),A=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(){var t=e.props,n=t.deleteNote,a=t.history;n(e.props.noteId),a.push("/notes")},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(k.a,{color:"primary",onClick:this.handleClick},"Delete Story")}}]),n}(a.Component);A.contextTypes={router:function(){return null}};var T=Object(d.b)(null,(function(e){return Object(L.b)({deleteNote:v},e)}))(Object(m.f)(A)),D=n(40),R=n(238),G=n(223),x=n(224),F=n(225),W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnSubmit=function(e){e.preventDefault();var t=a.props,n=t.updateNote,r=t.history;n(a.props.id,a.props.name,a.props.description,a.props.link,a.state.comments),r.push("/notes/"+a.props.id),a.toggle()},a.handleOnChange=function(e){a.setState({comments:e.target.value})},a.state={comments:"",modal:!1},a.toggle=a.toggle.bind(Object(D.a)(a)),a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{color:"primary",onClick:this.toggle},"Add Comment"),r.a.createElement(R.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(G.a,{toggle:this.toggle},this.props.name),r.a.createElement(x.a,null,r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"comments",className:"form-control",onChange:this.handleOnChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add Comment"))),r.a.createElement(F.a,null,r.a.createElement(k.a,{color:"secondary",onClick:this.toggle},"Cancel"))))}}]),n}(a.Component),U=Object(d.b)(null,(function(e){return Object(L.b)({updateNote:O},e)}))(Object(m.f)(W)),B=n(226),P=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={name:a.props.note.name,description:a.props.note.description,link:a.props.note.link,comments:a.props.note.comments},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_,null)," \xa0",r.a.createElement(T,{noteId:this.props.note.id})),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("h3",null,this.props.note.name))),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("p",null,this.props.note.description))),this.props.note.comments.length>0?r.a.createElement(h.a,null,r.a.createElement(B.a,null,this.props.note.comments.map((function(e,t){return r.a.createElement("p",{key:t},e)})))):r.a.createElement(h.a,null,r.a.createElement(B.a,null,"No comments yet.")),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("a",{href:this.props.note.link,target:"_blank"},"Link to Associated Article"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(U,{id:this.props.note.id,name:this.props.note.name,description:this.props.note.description,link:this.props.note.link})))}}]),n}(a.Component),J=Object(d.b)((function(e,t){var n=e.notesReducer.notes.find((function(e){return e.id==t.match.params.noteId}));return n?{note:n}:{note:{}}}),(function(e){return Object(L.b)({updateNote:O},e)}))(P),V=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.getNotes()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"".concat(this.props.match.url,"/:noteId"),component:J}),r.a.createElement(m.a,{exact:!0,path:this.props.match.url,render:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Please select a story from the list."),r.a.createElement(g,{notes:e.props.notes}))}})))}}]),n}(a.Component),z=Object(d.b)((function(e){return{notes:e.notesReducer.notes}}),(function(e){return{getNotes:Object(L.b)(E,e)}}))(V),H=function(e){var t=e.news,n=r.a.createElement(h.a,{key:1},r.a.createElement(p.b,{key:1,className:"list-group-item list-group-item-action",to:"/news"},"No stories found"));return t&&(n=t.filter((function(e){return e.title})).map((function(e,t){return r.a.createElement(h.a,{key:t},r.a.createElement(p.b,{key:t,className:"list-group-item list-group-item-action",to:"/news/".concat(e.publishedAt)},e.title||"Story not found"))}))),r.a.createElement("div",null,n)},X=n(41),K=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleOnSubmit=function(e){e.preventDefault();var t=a.props,n=t.persistNote,r=t.history;n(a.state.name,a.state.description,a.state.link),r.push("/notes")},a.handleOnChange=function(e){a.setState(Object(X.a)({},e.target.name,e.target.value))},a.state={name:a.props.name,description:a.props.description,link:a.props.link,modal:!1},a.toggle=a.toggle.bind(Object(D.a)(a)),a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"render",value:function(){return this.props.isLoggedIn?r.a.createElement("div",null,r.a.createElement(k.a,{color:"primary",onClick:this.toggle},"Favorite Story"),r.a.createElement(R.a,{isOpen:this.state.modal,toggle:this.toggle},r.a.createElement(G.a,{toggle:this.toggle},"Favorite Story"),r.a.createElement(x.a,null,r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",value:this.props.name,placeholder:"Name",name:"name",className:"form-control",disabled:"true",onChange:this.handleOnChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",value:this.props.description,placeholder:"Description",name:"description",className:"form-control",disabled:"true",onChange:this.handleOnChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",value:this.props.link,placeholder:"Link to associated article",name:"link",className:"form-control",disabled:"true",onChange:this.handleOnChange})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Favorite Story"))),r.a.createElement(F.a,null,r.a.createElement(k.a,{color:"secondary",onClick:this.toggle},"Cancel")))):r.a.createElement("div",null,r.a.createElement("p",null,"Log in or sign up to favorite stories."))}}]),n}(a.Component),M=Object(d.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}),(function(e){return Object(L.b)({persistNote:b},e)}))(Object(m.f)(K)),Y=Object(d.b)((function(e,t){var n=e.newsReducer.news.find((function(e){return e.publishedAt==t.match.params.newsItemPublishedAt}));return n?{newsItem:n}:{newsItem:{}}}))((function(e){var t=e.newsItem;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_,null)),r.a.createElement("br",null),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("h3",null," ",t.title," "))),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("p",null,t.description))),r.a.createElement(h.a,null,r.a.createElement(B.a,null,r.a.createElement("a",{href:t.url,target:"_blank"},"Link to Full Story"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(M,{link:t.url,name:t.title,description:t.description})))})),$=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchNews(),this.props.fetchNFLNews(),this.props.fetchFoxSports()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"".concat(this.props.match.url,"/:newsItemPublishedAt"),component:Y}),r.a.createElement(m.a,{exact:!0,path:this.props.match.url,render:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Select a news item from the list to see more details."),r.a.createElement(H,{news:e.props.news}))}})))}}]),n}(a.Component),q=Object(d.b)((function(e){return{news:e.newsReducer.news}}),(function(e){return{fetchNews:Object(L.b)(y,e),fetchFoxSports:Object(L.b)(j,e),fetchNFLNews:Object(L.b)(N,e)}}))($),Q=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).signOut=function(){e.props.signOut()},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k.a,{href:"/",color:"primary",onClick:this.signOut},"Sign out"))}}]),n}(a.Component),Z=Object(d.b)(null,(function(e){return{signOut:Object(L.b)(I,e)}}))(Q),ee=n(227),te=n(228),ne=n(229),ae=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(X.a)({},e.target.name,e.target.value))},a.handleSignInClick=function(e){a.setState({loading:!0});var t='{"auth":{"email":"'.concat(a.state.email,'","password":"').concat(a.state.password,'"}}');e.preventDefault(),a.props.jwt(t,a.props.history)},a.state={email:"",password:"",loading:!1},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee.a,{color:"danger",isOpen:this.props.visible},"Invalid credentials."),r.a.createElement(te.a,null,r.a.createElement("div",{className:"form-group"},r.a.createElement(ne.a,{type:"email",name:"email",placeholder:"Email",className:"form-control",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(ne.a,{type:"password",name:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(k.a,{type:"submit",color:"primary",onClick:this.handleSignInClick},"Login")))}}]),n}(a.Component),re=Object(d.b)((function(e){return{visible:e.userReducer.signinError}}),(function(e){return Object(L.b)({jwt:w},e)}))(ae),oe=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleInputChange=function(e){a.setState(Object(X.a)({},e.target.name,e.target.value))},a.handleRegistrationClick=function(e){a.setState({loading:!0});var t='{"user":{"email":"'.concat(a.state.email,'","password":"').concat(a.state.password,'","password_confirmation":"').concat(a.state.password_confirmation,'"}}');e.preventDefault(),a.props.signUp(t,a.props.history)},a.state={email:"",password:"",password_confirmation:"",loading:!1},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee.a,{color:"danger",isOpen:this.props.visible},"Invalid credentials."),r.a.createElement(te.a,null,r.a.createElement("div",{className:"form-group"},r.a.createElement(ne.a,{type:"email",name:"email",placeholder:"Email",className:"form-control",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(ne.a,{type:"password",name:"password",placeholder:"Password",className:"form-control",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(ne.a,{type:"password",name:"password_confirmation",placeholder:"Confirm password",className:"form-control",value:this.state.password_confirmation,onChange:this.handleInputChange})),r.a.createElement(k.a,{type:"submit",color:"primary",onClick:this.handleRegistrationClick},"Sign Up")))}}]),n}(a.Component),ce=Object(d.b)((function(e){return{visible:e.userReducer.signupError}}),(function(e){return{signUp:Object(L.b)(S,e)}}))(oe),le=n(230),ie=n(231),se=function(){return r.a.createElement("div",null,r.a.createElement(le.a,null,r.a.createElement(ie.a,null,r.a.createElement("h2",null,"Welcome to the Sports News Feed App"))),r.a.createElement(le.a,null,r.a.createElement(ie.a,null,r.a.createElement("p",null,"This app pulls NBA, NFL, and other sports news, from ESPN, Fox Sports, and NFL News via NewsAPI. You can read a short description, favorite, and take notes on stories. Links to the stories open in a new tab. Sign in or sign up to favorite and take notes on stories."))),r.a.createElement(le.a,null,r.a.createElement(ie.a,null,r.a.createElement("h3",null,r.a.createElement(p.c,{to:"/news"},"News Feed")))))},ue=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ee.a,{color:"info",isOpen:this.props.isLoggedIn},"You are logged in."),r.a.createElement(ee.a,{color:"info",isOpen:!this.props.isLoggedIn},"You are logged out."),r.a.createElement(se,null))}}]),n}(a.Component),pe=Object(d.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}))(ue),me=n(232),de=n(233),he=n(234),ge=n(235),fe=n(236),Ee=n(237),be=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).toggle=a.toggle.bind(Object(D.a)(a)),a.state={isOpen:!1},a}return Object(i.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(me.a,{color:"light",light:!0,expand:"md",className:"sticky-top"},r.a.createElement(de.a,{onClick:this.toggle}),r.a.createElement(he.a,{href:"/"},"Home"),r.a.createElement(ge.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(fe.a,{className:"ml-auto",navbar:!0},r.a.createElement("br",null),r.a.createElement(Ee.a,null,r.a.createElement(p.c,{to:"/news",style:{textDecoration:"none"},onClick:this.toggle},"\xa0 News Feed \xa0")),r.a.createElement("br",null),this.props.isLoggedIn?r.a.createElement(fe.a,{navbar:!0},r.a.createElement(Ee.a,null,r.a.createElement(p.c,{to:"/notes",style:{textDecoration:"none"},onClick:this.toggle},"\xa0 Saved Stories \xa0")),r.a.createElement("br",null),r.a.createElement(Ee.a,null,r.a.createElement(p.c,{to:"/signout",style:{textDecoration:"none"},onClick:this.toggle},"\xa0 Sign Out \xa0")),r.a.createElement("br",null)):r.a.createElement(fe.a,{navbar:!0},r.a.createElement(Ee.a,null,r.a.createElement(p.c,{to:"/signin",style:{textDecoration:"none"},onClick:this.toggle},"\xa0 Login \xa0")),r.a.createElement("br",null),r.a.createElement(Ee.a,null,r.a.createElement(p.c,{to:"/signup",style:{textDecoration:"none"},onClick:this.toggle},"\xa0 Sign Up \xa0")),r.a.createElement("br",null)))))}}]),n}(a.Component),Oe=Object(d.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}))(be),ve=n(130),ye=function(){return r.a.createElement(ve.a,{header:"Thanks to https://newsapi.org/ for the API.",bsStyle:"default"})},je=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"Nav-home"},r.a.createElement(Oe,null),r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{path:"/notes",component:!0===this.props.isLoggedIn?z:re}),r.a.createElement(m.a,{path:"/news",component:q}),r.a.createElement(m.a,{path:"/signout",component:Z}),r.a.createElement(m.a,{path:"/signin",component:re}),r.a.createElement(m.a,{path:"/signup",component:ce}),r.a.createElement(m.a,{exact:!0,path:"/",component:pe}),r.a.createElement("br",null),r.a.createElement(ye,null))))}}]),n}(a.Component),Ne=Object(d.b)((function(e){return{isLoggedIn:e.userReducer.isLoggedIn}}))(je),we=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Se(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ie=n(129);var ke={id:"",email:"",isLoggedIn:!1,loading:!1,signupError:!1,signinError:!1},Ce=n(23),_e={loading:"",notes:[]},Le={loading:"",news:[]},Ae=Object(L.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RETURN_JWT":return{loading:!1};case"CURRENT_USER":var n=Object.assign({},e,t.payload);return{id:n.id,email:n.email,isLoggedIn:!0,loading:!1,signupError:!1,signinError:!1};case"LOGGED_OUT":return{loading:!1,isLoggedIn:!1,id:null,email:null,signupError:!1,signinError:!1};case"INVALID_SIGNUP":return{loading:!1,isLoggedIn:!1,id:null,email:null,signupError:!0,signinError:!1};case"INVALID_SIGNIN":return{loading:!1,isLoggedIn:!1,id:null,email:null,signupError:!1,signinError:!0};default:return e}},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return{loading:!0};case"NOTLOADING":return{loading:!1};default:return e}},notesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_NOTES":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0});case"SHOW_NOTES":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,notes:t.payload});case"SAVING_NOTE":case"DELETING_NOTE":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1});case"ADD_NOTES":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,notes:e.notes.concat(t.payload)});default:return e}},newsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_NEWS":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!0});case"FETCH_NEWS":return Object(Ce.a)(Object(Ce.a)({},e),{},{loading:!1,news:t.news});case"ADD_FOX_SPORTS":case"ADD_NFL_NEWS":return Object.assign({},e,{news:e.news.concat(t.news)});default:return e}}}),Te=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),De=[Ie.a],Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,Ge=Object(L.e)(Ae,Te,Re(L.a.apply(void 0,De)));Ge.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}({userReducer:Ge.getState().userReducer,notesReducer:Ge.getState().notesReducer,newsReducer:Ge.getState().newsReducer})}));var xe=Ge;c.a.render(r.a.createElement(d.a,{store:xe},r.a.createElement(Ne,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");we?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Se(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):Se(e)}))}}()}},[[131,1,2]]]);
//# sourceMappingURL=main.eff275f3.chunk.js.map