(this["webpackJsonpwordify-craftercms-react-app"]=this["webpackJsonpwordify-craftercms-react-app"]||[]).push([[5,11],{200:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(94);a.default=function(e){var a=e.model,t=e.model,n=t.linkButtonText_s,s=t.showLinkButton_b,i=t.facebookLink_s,o=t.twitterLink_s,c=t.instagramLink_s,u=t.youTubeLink_s;return l.a.createElement(r.b,{className:"bio text-center",model:a},l.a.createElement(r.e,{component:"img",target:"src",model:a,fieldId:"profilePic_s",className:"img-fluid",alt:""}),l.a.createElement("div",{className:"bio-body"},l.a.createElement(r.e,{component:"h2",model:a,fieldId:"name_s"}),s&&n&&l.a.createElement("p",null,l.a.createElement(r.e,{component:"a",model:a,fieldId:"linkButtonText_s,linkButtonUrl_s",target:"children,href",className:"btn btn-primary btn-sm rounded"})),l.a.createElement(r.e,{component:"p",model:a,fieldId:"bio_t"}),l.a.createElement("p",{className:"social"},i&&l.a.createElement("a",{href:i,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-facebook"})),o&&l.a.createElement("a",{href:o,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-twitter"})),c&&l.a.createElement("a",{href:c,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-instagram"})),u&&l.a.createElement("a",{href:u,className:"p-2",target:"_blank",rel:"noreferrer noopener"},l.a.createElement("span",{className:"fa fa-youtube-play"})))))}},207:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(3),r=t(0),s=t.n(r),i=t(231),o=t(222),c=t(235),u=t(232),d=t(230),m=t(223),f=t(94),p=t(109),g=t(233),b=t(224),v=t(107);a.default=function(e){var a=e.model,t=e.meta,C=t.siteTitle,h=t.socialLinks,k=Object(r.useState)({itemsPerPage:10,currentPage:0}),N=Object(l.a)(k,2),P=N[0],E=N[1],y=Object(v.c)(P);return s.a.createElement(i.a,{siteTitle:C,socialLinks:h},s.a.createElement("section",{className:"site-section pt-5"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row blog-entries"},s.a.createElement("div",{className:"col-md-12 col-lg-8 main-content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement(f.e,{component:"h2",model:a,fieldId:"headline_s",className:"mb-4"}),s.a.createElement(f.e,{model:a,fieldId:"content_o",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,t){return s.a.createElement(f.b,{key:"".concat(e.craftercms.id,"_").concat(t),className:"mb-5",model:a,fieldId:"content_o",index:t},s.a.createElement(f.a,{model:e,contentTypeMap:p.a}))}))}}))),s.a.createElement("div",{className:"row mb-5 mt-5"},s.a.createElement("div",{className:"col-md-12 mb-5"},s.a.createElement("h2",null,s.a.createElement(c.a,{id:"common.latestPostSectionTitle",defaultMessage:"Latest Posts"}))),s.a.createElement("div",{className:"col-md-12"},null===y||void 0===y?void 0:y.items.map((function(e){return s.a.createElement(o.d,{model:e,format:o.b,key:e.craftercms.id})})))),(null===y||void 0===y?void 0:y.pageCount)>1&&s.a.createElement("nav",{"aria-label":"Posts navigation",className:"text-center"},s.a.createElement(b.a,{pageCount:y.pageCount,onPageChange:function(e){return E(Object(n.a)({},P,{currentPage:e*P.itemsPerPage}))}}))),s.a.createElement("div",{className:"col-md-12 col-lg-4 sidebar"},s.a.createElement(m.a,null),s.a.createElement(d.a,{model:a,fieldId:"bios_o"}),s.a.createElement(u.a,null),s.a.createElement(g.a,null),s.a.createElement(g.b,null))))))}},223:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(199),s=t(234),i=t(229),o=Object(r.a)({searchFormPlaceholder:{id:"home.searchFormPlaceholder",defaultMessage:"Type a keyword and hit enter"}});a.a=function(){var e=Object(s.a)().formatMessage;return l.a.createElement("div",{className:"sidebar-box search-form-wrap"},l.a.createElement(i.a,{id:"s",placeholder:e(o.searchFormPlaceholder),classes:{form:"search-form",input:"form-control",inputWrapper:"form-group"}}))}},224:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(225),s=t.n(r);a.a=function(e){var a=e.pageCount,t=e.onPageChange;return l.a.createElement(s.a,{containerClassName:"pagination",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageRangeDisplayed:3,marginPagesDisplayed:3,activeClassName:"active",initialPage:0,pageCount:a,onPageChange:function(e){var a=e.selected;return t(a)},disableInitialCallback:!0,previousLabel:l.a.createElement("span",null,"<"),nextLabel:l.a.createElement("span",null,">")})}},225:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n,l=t(226),r=(n=l)&&n.__esModule?n:{default:n};a.default=r.default},226:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),l=t(0),r=c(l),s=c(t(56)),i=c(t(227)),o=c(t(228));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));t.handlePreviousPage=function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)},t.handleNextPage=function(e){var a=t.state.selected,n=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<n-1&&t.handlePageSelected(a+1,e)},t.handlePageSelected=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))},t.handleBreakClick=function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var n=t.state.selected;t.handlePageSelected(n<e?t.getForwardJump():t.getBackwardJump(),a)},t.callCallback=function(e){"undefined"!==typeof t.props.onPageChange&&"function"===typeof t.props.onPageChange&&t.props.onPageChange({selected:e})},t.pagination=function(){var e=[],a=t.props,n=a.pageRangeDisplayed,l=a.pageCount,s=a.marginPagesDisplayed,i=a.breakLabel,c=a.breakClassName,u=a.breakLinkClassName,d=t.state.selected;if(l<=n)for(var m=0;m<l;m++)e.push(t.getPageElement(m));else{var f=n/2,p=n-f;d>l-n/2?f=n-(p=l-d):d<n/2&&(p=n-(f=d));var g=void 0,b=void 0,v=void 0,C=function(e){return t.getPageElement(e)};for(g=0;g<l;g++)(b=g+1)<=s||b>l-s||g>=d-f&&g<=d+p?e.push(C(g)):i&&e[e.length-1]!==v&&(v=r.default.createElement(o.default,{key:g,breakLabel:i,breakClassName:c,breakLinkClassName:u,onClick:t.handleBreakClick.bind(null,g)}),e.push(v))}return e};var n=void 0;return n=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:n},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),n(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,n=e.extraAriaContext;"undefined"===typeof a||t||this.callCallback(a),n&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){"undefined"!==typeof this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,n=e+a.pageRangeDisplayed;return n>=t?t-1:n}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,n=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<n)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,n=t.pageClassName,l=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,c=t.extraAriaContext;return r.default.createElement(i.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:n,pageLinkClassName:l,activeClassName:s,activeLinkClassName:o,extraAriaContext:c,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.previousClassName,n=e.nextClassName,l=e.pageCount,s=e.containerClassName,i=e.previousLinkClassName,o=e.previousLabel,c=e.nextLinkClassName,u=e.nextLabel,d=this.state.selected,m=t+(0===d?" "+a:""),f=n+(d===l-1?" "+a:""),p=0===d?"true":"false",g=d===l-1?"true":"false";return r.default.createElement("ul",{className:s},r.default.createElement("li",{className:m},r.default.createElement("a",{onClick:this.handlePreviousPage,className:i,href:this.hrefBuilder(d-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":p},o)),this.pagination(),r.default.createElement("li",{className:f},r.default.createElement("a",{onClick:this.handleNextPage,className:c,href:this.hrefBuilder(d+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":g},u)))}}]),a}(l.Component);u.propTypes={pageCount:s.default.number.isRequired,pageRangeDisplayed:s.default.number.isRequired,marginPagesDisplayed:s.default.number.isRequired,previousLabel:s.default.node,nextLabel:s.default.node,breakLabel:s.default.oneOfType([s.default.string,s.default.node]),hrefBuilder:s.default.func,onPageChange:s.default.func,initialPage:s.default.number,forcePage:s.default.number,disableInitialCallback:s.default.bool,containerClassName:s.default.string,pageClassName:s.default.string,pageLinkClassName:s.default.string,activeClassName:s.default.string,activeLinkClassName:s.default.string,previousClassName:s.default.string,nextClassName:s.default.string,previousLinkClassName:s.default.string,nextLinkClassName:s.default.string,disabledClassName:s.default.string,breakClassName:s.default.string,breakLinkClassName:s.default.string,extraAriaContext:s.default.string,ariaLabelBuilder:s.default.func},u.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},a.default=u},227:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.pageClassName,t=e.pageLinkClassName,l=e.onClick,r=e.href,s=e.ariaLabel||"Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),i=null;return e.selected&&(i="page",s=e.ariaLabel||"Page "+e.page+" is your current page",a="undefined"!==typeof a?a+" "+e.activeClassName:e.activeClassName,"undefined"!==typeof t?"undefined"!==typeof e.activeLinkClassName&&(t=t+" "+e.activeLinkClassName):t=e.activeLinkClassName),n.default.createElement("li",{className:a},n.default.createElement("a",{onClick:l,role:"button",className:t,href:r,tabIndex:"0","aria-label":s,"aria-current":i,onKeyPress:l},e.page))};s.propTypes={onClick:l.default.func.isRequired,selected:l.default.bool.isRequired,pageClassName:l.default.string,pageLinkClassName:l.default.string,activeClassName:l.default.string,activeLinkClassName:l.default.string,extraAriaContext:l.default.string,href:l.default.string,ariaLabel:l.default.string,page:l.default.number.isRequired},a.default=s},228:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=r(t(0)),l=r(t(56));function r(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var a=e.breakLabel,t=e.breakClassName,l=e.breakLinkClassName,r=e.onClick,s=t||"break";return n.default.createElement("li",{className:s},n.default.createElement("a",{className:l,onClick:r,role:"button",tabIndex:"0",onKeyPress:r},a))};s.propTypes={breakLabel:l.default.oneOfType([l.default.string,l.default.node]),breakClassName:l.default.string,breakLinkClassName:l.default.string,onClick:l.default.func.isRequired},a.default=s},230:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n),r=t(200),s=t(94);function i(e){var a=e.model,t=e.fieldId;return l.a.createElement(s.e,{model:a,fieldId:t,className:"bio-zone",format:function(e){return null===e||void 0===e?void 0:e.map((function(e,n){return l.a.createElement(s.b,{key:"".concat(e.craftercms.id,"_").concat(n),model:a,fieldId:t,index:n,className:"sidebar-box"},l.a.createElement(r.default,{model:e}))}))}})}}}]);
//# sourceMappingURL=5.226513f8.chunk.js.map