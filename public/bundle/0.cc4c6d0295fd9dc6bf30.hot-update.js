webpackHotUpdate(0,{378:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{issues:e.issues,user:e.user}}function u(e){return(0,h.bindActionCreators)({loadRepos:_.loadRepos,loadUser:_.loadUser,resetRepos:_.resetRepos},e)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),c=o(5),p=n(c),f=o(147),d=o(54),h=o(102),_=o(383),m=o(387),b=n(m),A=o(388),R=function(e){function t(){s(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={linkToUser:null},e}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.setState({linkToUser:this.props.match.params.user}),void 0!==this.props.match.params.user&&this.props.loadUser(this.props.match.params.user)}},{key:"getInfo",value:function(){this.props.resetRepos(),this.props.loadUser(this.state.linkToUser),console.log("SUBMIT:  ",this.state.linkToUser)}},{key:"handleShow",value:function(){this.getInfo()}},{key:"onChangeInput",value:function(e){this.setState({linkToUser:e.target.value})}},{key:"getRepos",value:function(e){e.preventDefault(),console.log(this.state.linkToUser),this.props.loadRepos(this.state.linkToUser)}},{key:"render",value:function(){return p.default.createElement("div",{className:"container"},p.default.createElement("div",{className:"col"},p.default.createElement("div",{className:"row mr-lg-2 md-2 mt-3"},p.default.createElement("div",{className:"col input-group"},p.default.createElement("input",{onChange:this.onChangeInput.bind(this),type:"text",className:"form-control mr-2"}),p.default.createElement("div",{className:"input-group-append"},p.default.createElement(d.Link,{onClick:this.handleShow.bind(this),className:"btn btn-success",to:{pathname:"/about/"+this.state.linkToUser}},"OK"))))),p.default.createElement(A.Profile,{user:this.props.user,getRepos:this.getRepos.bind(this)}),p.default.createElement(b.default,{issues:this.props.issues,count:this.props.user.public_repos}))}}]),t}(c.Component),y=(0,f.connect)(i,u)(R);t.default=y,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(R,"About","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(i,"mapStateToProps","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(u,"mapDispatchToProps","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(y,"default","D:/Node And React/CreateApp/src/client/component/About/About.js"))}()}});
//# sourceMappingURL=0.cc4c6d0295fd9dc6bf30.hot-update.js.map