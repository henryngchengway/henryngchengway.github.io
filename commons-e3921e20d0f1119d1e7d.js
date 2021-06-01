/*! For license information please see commons-e3921e20d0f1119d1e7d.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[351],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var o=i.apply(null,n);o&&e.push(o)}else if("object"===a)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},8090:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}t.default=e}(n(5697));var r=s(n(3971)),i=s(n(5641)),a=s(n(7294)),o=s(n(8532));n(279);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,r.default)(e,t)}))},c=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return(0,i.default)(e,t)}))},p=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).onEnter=function(e,n){var r=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),u(e,r),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var r=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,r),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var r=t.getClassNames("appear").doneClassName,i=t.getClassNames("enter").doneClassName,a=n?r+" "+i:i;t.removeClasses(e,n?"appear":"enter"),u(e,a),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),u(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),u(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,r="string"==typeof n,i=r?(r&&n?n+"-":"")+e:n[e];return{className:i,activeClassName:r?i+"-active":n[e+"Active"],doneClassName:r?i+"-done":n[e+"Done"]}},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.removeClasses=function(e,t){var n=this.getClassNames(t),r=n.className,i=n.activeClassName,a=n.doneClassName;r&&c(e,r),i&&c(e,i),a&&c(e,a)},i.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,u(e,t))},i.render=function(){var e=l({},this.props);return delete e.classNames,a.default.createElement(o.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},r}(a.default.Component);p.defaultProps={classNames:""},p.propTypes={};var f=p;t.default=f,e.exports=t.default},8577:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;o(n(5697));var r=o(n(7294)),i=n(3935),a=o(n(2643));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function o(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=o.prototype;return s.handleLifecycle=function(e,t,n){var a,o=this.props.children,s=r.default.Children.toArray(o)[t];s.props[e]&&(a=s.props)[e].apply(a,n),this.props[e]&&this.props[e]((0,i.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","in"]),o=r.default.Children.toArray(t),s=o[0],l=o[1];return delete i.onEnter,delete i.onEntering,delete i.onEntered,delete i.onExit,delete i.onExiting,delete i.onExited,r.default.createElement(a.default,i,n?r.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):r.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},o}(r.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},8532:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(5697)),i=s(n(7294)),a=s(n(3935)),o=n(3639);n(279);function s(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var u="exited";t.EXITED=u;var c="entering";t.ENTERING=c;var p="entered";t.ENTERED=p;var f="exiting";t.EXITING=f;var d=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var i,a=n.transitionGroup,o=a&&!a.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(i=u,r.appearStatus=c):i=p:i=t.unmountOnExit||t.mountOnEnter?l:u,r.state={status:i},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.getChildContext=function(){return{transitionGroup:null}},r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:u}:null},o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==c&&n!==p&&(t=c):n!==c&&n!==p||(t=f)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=a.default.findDOMNode(this);t===c?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===u&&this.setState({status:l})},o.performEnter=function(e,t){var n=this,r=this.props.enter,i=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,a=this.getTimeouts(),o=i?a.appear:a.enter;t||r?(this.props.onEnter(e,i),this.safeSetState({status:c},(function(){n.props.onEntering(e,i),n.onTransitionEnd(e,o,(function(){n.safeSetState({status:p},(function(){n.props.onEntered(e,i)}))}))}))):this.safeSetState({status:p},(function(){n.props.onEntered(e)}))},o.performExit=function(e){var t=this,n=this.props.exit,r=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:f},(function(){t.props.onExiting(e),t.onTransitionEnd(e,r.exit,(function(){t.safeSetState({status:u},(function(){t.props.onExited(e)}))}))}))):this.safeSetState({status:u},(function(){t.props.onExited(e)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t,n){this.setNextCallback(n);var r=null==t&&!this.props.addEndListener;e&&!r?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(t,["children"]);if(delete r.in,delete r.mountOnEnter,delete r.unmountOnExit,delete r.appear,delete r.enter,delete r.exit,delete r.timeout,delete r.addEndListener,delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,"function"==typeof n)return n(e,r);var a=i.default.Children.only(n);return i.default.cloneElement(a,r)},r}(i.default.Component);function h(){}d.contextTypes={transitionGroup:r.object},d.childContextTypes={transitionGroup:function(){}},d.propTypes={},d.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:h,onEntering:h,onEntered:h,onExit:h,onExiting:h,onExited:h},d.UNMOUNTED=0,d.EXITED=1,d.ENTERING=2,d.ENTERED=3,d.EXITING=4;var E=(0,o.polyfill)(d);t.default=E},2643:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=s(n(5697)),i=s(n(7294)),a=n(3639),o=n(1777);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},p=function(e){var t,n;function r(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind(u(u(r)));return r.state={handleExited:i,firstRender:!0},r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},a.componentDidMount=function(){this.appeared=!0,this.mounted=!0},a.componentWillUnmount=function(){this.mounted=!1},r.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?(0,o.getInitialChildMapping)(e,r):(0,o.getNextChildMapping)(e,n,r),firstRender:!1}},a.handleExited=function(e,t){var n=(0,o.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=l({},t.children);return delete n[e.key],{children:n}})))},a.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["component","childFactory"]),a=c(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?a:i.default.createElement(t,r,a)},r}(i.default.Component);p.childContextTypes={transitionGroup:r.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,a.polyfill)(p);t.default=f,e.exports=t.default},5999:function(e,t,n){"use strict";var r=s(n(8090)),i=s(n(8577)),a=s(n(2643)),o=s(n(8532));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:o.default,TransitionGroup:a.default,ReplaceTransition:i.default,CSSTransition:r.default}},1777:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=i,t.mergeChildMappings=a,t.getInitialChildMapping=function(e,t){return i(e.children,(function(n){return(0,r.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:o(n,"appear",e),enter:o(n,"enter",e),exit:o(n,"exit",e)})}))},t.getNextChildMapping=function(e,t,n){var s=i(e.children),l=a(t,s);return Object.keys(l).forEach((function(i){var a=l[i];if((0,r.isValidElement)(a)){var u=i in t,c=i in s,p=t[i],f=(0,r.isValidElement)(p)&&!p.props.in;!c||u&&!f?c||!u||f?c&&u&&(0,r.isValidElement)(p)&&(l[i]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:p.props.in,exit:o(a,"exit",e),enter:o(a,"enter",e)})):l[i]=(0,r.cloneElement)(a,{in:!1}):l[i]=(0,r.cloneElement)(a,{onExited:n.bind(null,a),in:!0,exit:o(a,"exit",e),enter:o(a,"enter",e)})}})),l};var r=n(7294);function i(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function a(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),a=[];for(var o in e)o in t?a.length&&(i[o]=a,a=[]):a.push(o);var s={};for(var l in t){if(i[l])for(r=0;r<i[l].length;r++){var u=i[l][r];s[i[l][r]]=n(u)}s[l]=n(l)}for(r=0;r<a.length;r++)s[a[r]]=n(a[r]);return s}function o(e,t,n){return null!=n[t]?n[t]:e.props[t]}},279:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var r;(r=n(5697))&&r.__esModule;t.timeoutsShape=null;t.classNamesShape=null},3033:function(e,t,n){"use strict";n.d(t,{mx:function(){return o},CE:function(){return s},ei:function(){return l},wF:function(){return c},rb:function(){return p},E5:function(){return f}});var r,i=n(5697),a=n.n(i);function o(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function l(e,t){for(var n,r=Array.isArray(t)?t:[t],i=r.length,a={};i>0;)a[n=r[i-=1]]=e[n];return a}var u="object"==typeof window&&window.Element||function(){};a().oneOfType([a().string,a().func,function(e,t,n){if(!(e[t]instanceof u))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]),a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]);var c={Fade:150,Collapse:350,Modal:300,Carousel:600},p=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"==typeof window||!window.document||window.document.createElement},3906:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(7294),i=n(5444),a=n(7490),o=n(2265),s=n(5900),l=n.n(s),u=n(3033),c=function(e){var t,n=e.expand,i=e.className,s=e.cssModule,c=e.light,p=e.dark,f=e.fixed,d=e.sticky,h=e.color,E=e.tag,v=(0,o.Z)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),m=(0,u.mx)(l()(i,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":c,"navbar-dark":p})["bg-"+h]=h,t["fixed-"+f]=f,t["sticky-"+d]=d,t)),s);return r.createElement(E,(0,a.Z)({},v,{className:m}))};c.defaultProps={tag:"nav",expand:!1};var p=c,f=function(e){var t=e.className,n=e.cssModule,i=e.tag,s=(0,o.Z)(e,["className","cssModule","tag"]),c=(0,u.mx)(l()(t,"navbar-brand"),n);return r.createElement(i,(0,a.Z)({},s,{className:c}))};f.defaultProps={tag:"a"};var d=f,h=function(e){var t=e.className,n=e.cssModule,i=e.children,s=e.tag,c=(0,o.Z)(e,["className","cssModule","children","tag"]),p=(0,u.mx)(l()(t,"navbar-toggler"),n);return r.createElement(s,(0,a.Z)({"aria-label":"Toggle navigation"},c,{className:p}),i||r.createElement("span",{className:(0,u.mx)("navbar-toggler-icon",n)}))};h.defaultProps={tag:"button",type:"button"};var E=h,v=n(5342),m=n(1943);function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x,y=n(5999);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=N(N({},y.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:u.wF.Collapse}),C=((x={})[u.E5.ENTERING]="collapsing",x[u.E5.ENTERED]="collapse show",x[u.E5.EXITING]="collapsing",x[u.E5.EXITED]="collapse",x);function _(e){return e.scrollHeight}var j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){n[e]=n[e].bind((0,v.Z)(n))})),n}(0,m.Z)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:_(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:_(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,i=t.isOpen,s=t.className,c=t.navbar,p=t.cssModule,f=t.children,d=(t.innerRef,(0,o.Z)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),h=this.state.height,E=(0,u.ei)(d,u.rb),v=(0,u.CE)(d,u.rb);return r.createElement(y.Transition,(0,a.Z)({},E,{in:i,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var i=function(e){return C[e]||"collapse"}(t),o=(0,u.mx)(l()(s,i,c&&"navbar-collapse"),p),d=null===h?null:{height:h};return r.createElement(n,(0,a.Z)({},v,{style:N(N({},v.style),d),className:o,ref:e.props.innerRef}),f)}))},t}(r.Component);j.defaultProps=O;var w=j,T=function(e){var t=e.className,n=e.cssModule,i=e.tabs,s=e.pills,c=e.vertical,p=e.horizontal,f=e.justified,d=e.fill,h=e.navbar,E=e.card,v=e.tag,m=(0,o.Z)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=(0,u.mx)(l()(t,h?"navbar-nav":"nav",!!p&&"justify-content-"+p,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(c),{"nav-tabs":i,"card-header-tabs":E&&i,"nav-pills":s,"card-header-pills":E&&s,"nav-justified":f,"nav-fill":d}),n);return r.createElement(v,(0,a.Z)({},m,{className:g}))};T.defaultProps={tag:"ul",vertical:!1};var M=T,k=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],a=(0,i.useStaticQuery)("3159585216");return r.createElement(p,{fixed:"top",expand:"sm"},r.createElement(d,{href:"/"},a.site.siteMetadata.title),r.createElement(E,{onClick:function(){return n(!t)}}),r.createElement(w,{isOpen:t,navbar:!0},r.createElement(M,{className:"mr-auto",navbar:!0})))},S=function(){var e=(0,i.useStaticQuery)("440568431");return r.createElement("div",{className:"footer-module--footer_container--10Lrp"},r.createElement("footer",null,"Created By"," ",r.createElement("a",null,e.site.siteMetadata.author)," ","© ",(new Date).getFullYear()))},P=function(e){return r.createElement("div",null,r.createElement(k,null),e.children,r.createElement(S,null))}},5342:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},7490:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},2265:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})},3971:function(e,t,n){"use strict";var r=n(8580);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,i.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var i=r(n(5962));e.exports=t.default},5962:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},5641:function(e){"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}}}]);
//# sourceMappingURL=commons-e3921e20d0f1119d1e7d.js.map