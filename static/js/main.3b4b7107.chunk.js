(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{140:function(e,t){},142:function(e,t){},194:function(e,t,n){},195:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(23),r=n.n(o),c=(n(89),n(5)),i=n(6),u=n(7),l=n(14),h=n(8),d=n.n(h),p=n(26),v=n(25),f=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany"}],j=n(50),b=n.n(j),m=n(37),w=n.n(m),g=(n(108),function(e){var t=e.map((function(e){return e.location}));return Object(v.a)(new Set(t))}),O=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return w.a.done(),e.abrupt("return",f);case 4:return e.next=6,x();case 6:if(!(t=e.sent)){e.next=16;break}return k(),n="https://0yf1ourm1f.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,b.a.get(n);case 12:return(a=e.sent).data&&(s=g(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(s))),w.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a,s,o,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,O(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(s=e.sent){e.next=20;break}return e.next=17,b.a.get("https://0yf1ourm1f.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,r=o.data.authUrl,e.abrupt("return",window.location.href=r);case 20:return e.abrupt("return",s&&x(s));case 21:return e.abrupt("return");case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},S=(n(194),n(195),n(1)),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={isCollasped:!0},e.handleClick=function(){e.setState({isCollasped:!e.state.isCollasped})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.isCollasped,t=this.props.event;return Object(S.jsxs)("div",{className:"event",children:[Object(S.jsx)("h3",{children:"Event"}),Object(S.jsx)("p",{children:t.location}),Object(S.jsx)("p",{children:t.summary}),!e&&Object(S.jsxs)("div",{className:"".concat(this.state.isCollasped?"hide":"show"),children:[Object(S.jsx)("h4",{children:"Description"}),Object(S.jsx)("p",{className:"event-description",children:t.description}),Object(S.jsxs)("div",{children:["Created: ",Object(S.jsx)("span",{children:t.created})]})]}),Object(S.jsx)("button",{className:"".concat(this.state.isCollasped?"show":"hide","-details"),onClick:this.handleClick,children:e?"Show Details":"Hide Details"})]})}}]),n}(a.Component),Z=C,N=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(S.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(Z,{event:e})},e.id)}))})}}]),n}(a.Component),M=N,W=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{className:"CitySearch",children:[Object(S.jsx)("input",{className:"city",placeholder:"search city",type:"text",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(S.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(S.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(S.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(S.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),A=W,E=n(84),J=[{value:"32",label:"32 Events"},{value:"16",label:"16 Events"},{value:"8",label:"8 Events"}],T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedOption:null},e.chooseNumberEvents=function(t){e.setState({selectedOption:t})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.selectedOption;return Object(S.jsxs)("div",{children:[Object(S.jsx)("h3",{children:"Choose Number of Events"}),Object(S.jsx)(E.a,{value:e,onChange:this.chooseNumberEvents,options:J,className:"event-options"})]})}}]),n}(a.Component),I=T,L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={events:[],locations:[]},e.updateEvents=function(t){y().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,y().then((function(t){e.mounted&&e.setState({events:t,locations:g(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(A,{locations:this.state.locations,updateEvents:this.updateEvents,events:this.state.events}),Object(S.jsx)(I,{}),Object(S.jsx)(M,{events:this.state.events})]})}}]),n}(a.Component),R=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),o(e),r(e)}))};r.a.render(Object(S.jsx)(s.a.StrictMode,{children:Object(S.jsx)(R,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()},89:function(e,t,n){}},[[207,1,2]]]);
//# sourceMappingURL=main.3b4b7107.chunk.js.map