(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{324:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},325:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(318),r=t(319),l=t(0),c=t.n(l),i=t(4),u=t.n(i),d=t(316),p=t.n(d),m=t(315),b={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(r.a)(Object(r.a)(t))),t}Object(n.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],n=e.block,r=e.className,l=e.close,i=e.cssModule,u=e.color,d=e.outline,b=e.size,f=e.tag,g=e.innerRef,j=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof j.children&&(j.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+u,y=Object(m.mapToCssModules)(p()(r,{close:l},l||"btn",l||h,!!b&&"btn-"+b,!!n&&"btn-block",{active:a,disabled:this.props.disabled}),i);j.href&&"button"===f&&(f="a");var v=l?"Close":null;return c.a.createElement(f,Object(s.a)({type:"button"===f&&j.onClick?"button":void 0},j,{className:y,ref:g,onClick:this.onClick,"aria-label":t||v}))},a}(c.a.Component);f.propTypes=b,f.defaultProps={color:"secondary",tag:"button"},a.a=f},326:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(316),u=t.n(i),d=t(315),p={tag:d.tagPropType,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool},m=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,l=e.tag,c=e.form,i=Object(o.a)(e,["className","cssModule","noGutters","tag","form"]),p=Object(d.mapToCssModules)(u()(a,n?"no-gutters":null,c?"form-row":"row"),t);return r.a.createElement(l,Object(s.a)({},i,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},327:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(324),r=t.n(n),l=t(0),c=t.n(l),i=t(4),u=t.n(i),d=t(316),p=t.n(d),m=t(315),b=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),push:Object(m.deprecated)(b,'Please use the prop "order"'),pull:Object(m.deprecated)(b,'Please use the prop "order"'),order:b,offset:b})]),g={tag:m.tagPropType,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},j={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},y=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,i=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];n.forEach(function(a,s){var o=e[a];if(delete i[a],o||""===o){var n=!s;if(r()(o)){var l,c=n?"-":"-"+a+"-",d=h(n,a,o.size);u.push(Object(m.mapToCssModules)(p()(((l={})[d]=o.size||""===o.size,l["order"+c+o.order]=o.order||0===o.order,l["offset"+c+o.offset]=o.offset||0===o.offset,l)),t))}else{var b=h(n,a,o);u.push(b)}}}),u.length||u.push("col");var d=Object(m.mapToCssModules)(p()(a,u),t);return c.a.createElement(l,Object(s.a)({},i,{className:d}))};y.propTypes=g,y.defaultProps=j,a.a=y},328:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(316),u=t.n(i),d=t(315),p={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),i=Object(d.mapToCssModules)(u()(a,"card-body"),t);return r.a.createElement(l,Object(s.a)({},c,{className:i,ref:n}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},330:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(316),u=t.n(i),d=t(315),p={tag:d.tagPropType,inverse:c.a.bool,color:c.a.string,block:Object(d.deprecated)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},m=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.block,c=e.body,i=e.inverse,p=e.outline,m=e.tag,b=e.innerRef,f=Object(o.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(d.mapToCssModules)(u()(a,"card",!!i&&"text-white",!(!l&&!c)&&"card-body",!!n&&(p?"border":"bg")+"-"+n),t);return r.a.createElement(m,Object(s.a)({},f,{className:g,ref:b}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},332:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(316),u=t.n(i),d=t(315),p={tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),c=Object(d.mapToCssModules)(u()(a,"card-header"),t);return r.a.createElement(n,Object(s.a)({},l,{className:c}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},392:function(e,a,t){"use strict";var s=t(44),o=t(317),n=t(0),r=t.n(n),l=t(4),c=t.n(l),i=t(316),u=t.n(i),d=t(315),p={tag:d.tagPropType,fluid:c.a.bool,className:c.a.string,cssModule:c.a.object},m=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=e.fluid,c=Object(o.a)(e,["className","cssModule","tag","fluid"]),i=Object(d.mapToCssModules)(u()(a,"jumbotron",!!l&&"jumbotron-fluid"),t);return r.a.createElement(n,Object(s.a)({},c,{className:i}))};m.propTypes=p,m.defaultProps={tag:"div"},a.a=m},790:function(e,a,t){"use strict";t.r(a);var s=t(97),o=t(98),n=t(100),r=t(99),l=t(101),c=t(0),i=t.n(c),u=t(326),d=t(327),p=t(330),m=t(332),b=t(328),f=t(392),g=t(325),j=t(416),h=function(e){function a(){return Object(s.a)(this,a),Object(n.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(u.a,null,i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("div",{className:"card-header-actions"},i.a.createElement("a",{href:"https://reactstrap.github.io/components/jumbotron/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},i.a.createElement("small",{className:"text-muted"},"docs")))),i.a.createElement(b.a,null,i.a.createElement(f.a,null,i.a.createElement("h1",{className:"display-3"},"Hello, world!"),i.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information."),i.a.createElement("hr",{className:"my-2"}),i.a.createElement("p",null,"It uses utility classes for typgraphy and spacing to space content out within the larger container."),i.a.createElement("p",{className:"lead"},i.a.createElement(g.a,{color:"primary"},"Learn More")))))),i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(m.a,null,i.a.createElement("i",{className:"fa fa-align-justify"}),i.a.createElement("strong",null,"Jumbotron"),i.a.createElement("small",null," fluid")),i.a.createElement(b.a,null,i.a.createElement(f.a,{fluid:!0},i.a.createElement(j.a,{fluid:!0},i.a.createElement("h1",{className:"display-3"},"Fluid jumbotron"),i.a.createElement("p",{className:"lead"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))))))))}}]),a}(c.Component);a.default=h}}]);
//# sourceMappingURL=42.ed4e7d1d.chunk.js.map