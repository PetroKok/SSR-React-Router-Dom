webpackHotUpdate(0,{378:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{issues:e.issues,user:e.user}}function c(e){return(0,d.bindActionCreators)({loadRepos:_.loadRepos,loadUser:_.loadUser},e)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(6),p=o(l),f=n(147),d=n(102),_=n(383),b=n(387),m=o(b),h=n(388),A=void o(h),y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"handleShow",value:function(e){e.preventDefault(),this.props.loadUser(A)}},{key:"sh",value:function(){console.log(this.props.user)}},{key:"search",value:function(){return p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"md-2 mt-3 com-md-5"},p.default.createElement("form",{className:"form-inline form-group"},p.default.createElement("input",{onChange:this.onChangeInput.bind(this),type:"text",className:"form-control"}),p.default.createElement("button",{onClick:this.handleShow.bind(this),className:"btn btn-success ml-2"},"Confirm identity"),p.default.createElement("button",{onClick:this.sh.bind(this),className:"btn btn-success ml-2"},"SHOW"))))}},{key:"onChangeInput",value:function(e){A=e.target.value}},{key:"render",value:function(){return p.default.createElement("div",{className:"container"},this.search(),p.default.createElement(m.default,null,"this is the profile"))}}]),t}(l.Component),E=(0,f.connect)(s,c)(y);t.default=E,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(A,"USER","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(y,"About","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(s,"mapStateToProps","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(c,"mapDispatchToProps","D:/Node And React/CreateApp/src/client/component/About/About.js"),__REACT_HOT_LOADER__.register(E,"default","D:/Node And React/CreateApp/src/client/component/About/About.js"))}()}});
//# sourceMappingURL=0.f27f605ff7989e9a9c23.hot-update.js.map