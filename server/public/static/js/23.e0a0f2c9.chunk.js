(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{387:function(e,t,a){"use strict";var n={};a.r(n),a.d(n,"getInfo",function(){return s}),a.d(n,"getList",function(){return m}),a.d(n,"save",function(){return f}),a.d(n,"remove",function(){return h}),a.d(n,"apply",function(){return g});var r={};a.r(r),a.d(r,"getInfo",function(){return E}),a.d(r,"getList",function(){return p}),a.d(r,"save",function(){return b}),a.d(r,"remove",function(){return _}),a.d(r,"apply",function(){return k}),a.d(r,"patch",function(){return y});var c={};a.r(c),a.d(c,"getInfo",function(){return x}),a.d(c,"getList",function(){return S}),a.d(c,"save",function(){return I}),a.d(c,"remove",function(){return w}),a.d(c,"apply",function(){return N});var o={};a.r(o),a.d(o,"getInfo",function(){return F}),a.d(o,"getList",function(){return O}),a.d(o,"save",function(){return M}),a.d(o,"remove",function(){return j}),a.d(o,"apply",function(){return z});var l={};a.r(l),a.d(l,"getInfo",function(){return K}),a.d(l,"getList",function(){return L}),a.d(l,"save",function(){return A}),a.d(l,"remove",function(){return V}),a.d(l,"apply",function(){return q});var u={};a.r(u),a.d(u,"getInfo",function(){return P}),a.d(u,"getList",function(){return J}),a.d(u,"save",function(){return Y}),a.d(u,"remove",function(){return B}),a.d(u,"apply",function(){return H});a(1),a(413);var i=a(56),d="/events";function m(e){var t="".concat(d,"/?venue_id=1");return i.a.get(t).then(function(e){return e.data})}function s(e){var t="".concat(d,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function f(e){var t="".concat(d,"/").concat(e.id);return e.id>0?i.a.put(t).then(function(e){return e.data}):i.a.post("".concat(d)).then(function(e){return e.data})}function h(e){var t="".concat(d,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function g(e){var t="".concat(d,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}var v="/regs";function p(e){var t="".concat(v,"/?event_id=").concat(e.event_id);return i.a.get(t).then(function(e){return e.data})}function E(e){var t="".concat(v,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function y(e){var t="".concat(v,"/").concat(e.id);return i.a.put(t,e).then(function(e){return e.data})}function b(e){var t="".concat(v,"/").concat(e.id);return e.id>0?i.a.put(t,e).then(function(e){return e.data}):i.a.post("".concat(v),e).then(function(e){return e.data})}function _(e){var t="".concat(v,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function k(e){var t="".concat(v,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}var C="/venues";function S(e){var t="".concat(C);return i.a.get(t).then(function(e){return e.data})}function x(e){var t="".concat(C,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function I(e){var t="".concat(C,"/").concat(e.id);return e.id>0?i.a.put(t).then(function(e){return e.data}):i.a.post("".concat(C)).then(function(e){return e.data})}function w(e){var t="".concat(C,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function N(e){var t="".concat(C,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}var D="/buildings";function O(e){var t="".concat(D,"/?venue_id=1");return i.a.get(t).then(function(e){return e.data})}function F(e){var t="".concat(D,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function M(e){var t="".concat(D,"/").concat(e.id);return e.id>0?i.a.put(t).then(function(e){return e.data}):i.a.post("".concat(D)).then(function(e){return e.data})}function j(e){var t="".concat(D,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function z(e){var t="".concat(D,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}var R="/allotments";function L(e){var t="".concat(R,"/?event_id=1");return i.a.get(t).then(function(e){return e.data})}function K(e){var t="".concat(R,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function A(e){var t="".concat(R,"/").concat(e.id);return e.id>0?i.a.put(t).then(function(e){return e.data}):i.a.post("".concat(R)).then(function(e){return e.data})}function V(e){var t="".concat(R,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function q(e){var t="".concat(R,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}var G="/food-requests";function J(e){var t="".concat(G,"/?event_id=1");return i.a.get(t).then(function(e){return e.data})}function P(e){var t="".concat(G,"/").concat(e.id);return i.a.get(t).then(function(e){return e.data})}function Y(e){var t="".concat(G,"/").concat(e.id);return e.id>0?i.a.put(t).then(function(e){return e.data}):i.a.post("".concat(G)).then(function(e){return e.data})}function B(e){var t="".concat(G,"/").concat(e.id);return i.a.delete(t).then(function(e){return e.data})}function H(e){var t="".concat(G,"/").concat(e.id);return i.a.post(t).then(function(e){return e.data})}a.d(t,"a",function(){return Q});var Q={eventSvc:n,regSvc:r,venueSvc:c,buildingSvc:o,allotmentSvc:l,foodReqSvc:u}},755:function(e,t,a){"use strict";a.r(t);var n=a(386),r=a(470),c=a(411),o=a.n(c),l=a(412),u=a(108),i=a(109),d=a(111),m=a(110),s=a(112),f=a(1),h=a.n(f),g=a(472),v=a.n(g),p=a(393),E=a(394),y=a(395),b=a(398),_=a(374),k=a(361),C=a(371),S=a(378),x=a(379),I=a(409),w=a(372),N=(a(426),a(485)),D=(a(471),a(402)),O=a(387),F=a(430),M=[{value:"Kumar",label:"Kumar"},{value:"OKumar",label:"OKumar"},{value:"Kumari",label:"Kumari"},{value:"Matha",label:"Matha"}],j=O.a.regSvc,z=O.a.eventSvc,R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={pageMode:0,eventInfo:{},regData:{amt_paid:!1}},a.componentDidMount=Object(l.a)(o.a.mark(function e(){var t,n,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((t=a.state.regData).id=a.props.match.params.regId,a.setState({regInfo:t,pageMode:t.id>0?1:0}),(n=v.a.parse(a.props.location.search)).event_id&&(t.event_id=n.event_id),!(t.id>0)){e.next=11;break}return e.next=8,j.getInfo({id:t.id});case 8:r=e.sent,n.event_id=r.data.event_id,a.setState({regData:r.data});case 11:z.getInfo({id:n.event_id}).then(function(e){a.setState({eventInfo:e.data}),console.log(e)});case 12:case"end":return e.stop()}},e)})),a.handleSwitch=function(e){var t=a.state.regData;t[e.target.name]=e.target.checked,a.setState({regData:t})},a.handleCategoryChange=function(e){var t=a.state.regData;t.category=e.value,a.setState({regData:t})},a.handleInputChange=function(e){var t=e.target,c=("checkbox"===t.type||"radio"===t.type?t.checked:t.value,t.name),o=Object(r.a)({},a.state.regData,Object(n.a)({},c,t.value));a.setState({regData:o})},a.handleSubmit=function(e){var t=a.state.regData;e.preventDefault();var n=new FormData(e.target),r=!0,c=!1,o=void 0;try{for(var l,u=n.keys()[Symbol.iterator]();!(r=(l=u.next()).done);r=!0){var i=l.value;"amt_paid"!=i&&"is_departed"!=i&&"is_arrived"!=i&&(t[i]=n.get(i))}}catch(d){c=!0,o=d}finally{try{r||null==u.return||u.return()}finally{if(c)throw o}}j.save(t).then(function(e){var n=t.id?"updated":"added";N.a.notify("Record "+n+" successfully."),e.data.id&&(t.id=e.data.id),a.setState({regData:t}),a.props.history.push("/regs/"+e.data.id)}),console.log(t)},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.eventInfo,a=e.pageMode,r=e.regData;return h.a.createElement("div",{className:"animated fadeIn"},h.a.createElement(p.a,null,h.a.createElement(E.a,{xs:"12",md:"12"},h.a.createElement(y.a,null,h.a.createElement(b.a,null,h.a.createElement("h5",null,t.title))))),h.a.createElement(p.a,null,h.a.createElement(E.a,{xs:"12",md:"12"},h.a.createElement(_.a,{onSubmit:this.handleSubmit},h.a.createElement(y.a,null,h.a.createElement(b.a,null,1===a&&h.a.createElement("strong",null,"Editing Registration - ",this.state.regInfo.id," "),0===a&&h.a.createElement("strong",null,"New Registrant Info "),h.a.createElement("div",{className:"pull-right"},h.a.createElement(k.a,{className:"mr-1",type:"submit",size:"sm",color:"primary"},h.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),h.a.createElement(k.a,{className:"ml-1",type:"reset",size:"sm",color:"danger"},h.a.createElement("i",{className:"fa fa-ban"})," Reset"))),h.a.createElement(C.a,null,h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{xs:"4"},h.a.createElement(S.a,null,h.a.createElement(x.a,{htmlFor:"fullname"},"Name"),h.a.createElement(I.a,{type:"text",id:"fullname",name:"fullname",placeholder:"enter fullname ",defaultValue:r.fullname,onChange:this.handleInputChange}))),h.a.createElement(E.a,{xs:"4"},h.a.createElement(S.a,null,h.a.createElement(x.a,{htmlFor:"centre"},"Centre"),h.a.createElement(I.a,{type:"text",id:"centre",name:"centre",placeholder:"enter centre name ",defaultValue:r.centre,onChange:this.handleInputChange})))),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{xs:"4"},h.a.createElement(x.a,null,"Gender:")," "),h.a.createElement(E.a,{xs:"2"},h.a.createElement(I.a,{className:"form-check-input",type:"radio",id:"reg_genderm",name:"gender",value:"M",checked:"M"===this.state.regData.gender,onChange:this.handleInputChange}),h.a.createElement(x.a,{className:"form-check-label",htmlFor:"reg_genderm"},"Male")),h.a.createElement(E.a,{xs:"2"},h.a.createElement(I.a,{className:"form-check-input",type:"radio",id:"reg_genderf",name:"gender",value:"F",checked:"F"===this.state.regData.gender,onChange:this.handleInputChange}),h.a.createElement(x.a,{className:"form-check-label",htmlFor:"reg_genderf"},"Female"))),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{xs:"4"},h.a.createElement(x.a,{htmlFor:"age"},"Lokik Age"),h.a.createElement(I.a,{value:r.age||"",type:"number",id:"reg_age",name:"age",placeholder:"enter lokik age",onChange:this.handleInputChange})," "),h.a.createElement(E.a,{xs:"4"},h.a.createElement(x.a,{htmlFor:"reg_age"},"Years in Gyan")," ",h.a.createElement(I.a,{value:r.gyan_age||"",onChange:this.handleInputChange,type:"text",id:"gyan_age",name:"gyan_age",placeholder:"enter years in gyan"})," ")),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{xs:"6"},h.a.createElement(x.a,{htmlFor:"reg_name"},"Mobile No")," ",h.a.createElement(I.a,{defaultValue:r.mobile_no,value:r.mobile_no||"",type:"text",id:"reg_mobile_no",name:"mobile_no",placeholder:"enter mobile number",onChange:this.handleInputChange})," ")),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{md:"3"},h.a.createElement(x.a,null,"Category")),h.a.createElement(E.a,{xs:"12",md:"9",style:{zIndex:"99999"}},h.a.createElement(D.a,Object(n.a)({name:"category",id:"category",isClearable:!0,isSearchable:!0,value:M.filter(function(e){return e.label===r.category}),onChange:this.handleCategoryChange,options:M,placeholder:"Select Category"},"isSearchable",!0)))),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{md:"3"},h.a.createElement(x.a,{htmlFor:"reg_email"},"Email ")),h.a.createElement(E.a,{xs:"12",md:"9"},h.a.createElement(I.a,{type:"email",id:"email_id",name:"email_id",defaultValue:r.email_id,placeholder:"enter email",autoComplete:"email"}))),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{md:"3"},h.a.createElement(x.a,null,"Other Status")),h.a.createElement(E.a,{md:"9"},h.a.createElement(S.a,null,h.a.createElement(F.n,{id:"amt_paid",name:"amt_paid",checked:r.amt_paid,onChange:this.handleSwitch,size:"sm",className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,dataOn:"\u2713",dataOff:"\u2715"}),h.a.createElement(x.a,{className:"form-check-label",check:!0,htmlFor:"amt-paid"},"Amt Paid ?")),h.a.createElement(S.a,null,h.a.createElement(F.n,{id:"is_arrived",name:"is_arrived",checked:r.is_arrived,onChange:this.handleSwitch,size:"sm",className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,dataOn:"\u2713",dataOff:"\u2715"}),h.a.createElement(x.a,{className:"form-check-label",check:!0,htmlFor:"is_arrived"},"Arrived ?")),h.a.createElement(S.a,null,h.a.createElement(F.n,{id:"is_departed",name:"is_departed",checked:r.is_departed,onChange:this.handleSwitch,size:"sm",className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,dataOn:"\u2713",dataOff:"\u2715"}),h.a.createElement(x.a,{className:"form-check-label",check:!0,htmlFor:"departed"},"Departed ?")))),h.a.createElement(S.a,{row:!0},h.a.createElement(E.a,{md:"3"},h.a.createElement(x.a,{htmlFor:"reg_remarks"},"Remarks")),h.a.createElement(E.a,{xs:"12",md:"9"},h.a.createElement(I.a,{type:"textarea",value:r.remarks,name:"remarks",id:"reg_remarks",rows:"3",placeholder:"Remarks...",onChange:this.handleInputChange})))),h.a.createElement(w.a,null,h.a.createElement(k.a,{className:"mr-1",type:"submit",size:"sm",color:"primary"},h.a.createElement("i",{className:"fa fa-dot-circle-o"})," Submit"),h.a.createElement(k.a,{className:"ml-1",type:"reset",size:"sm",color:"danger"},h.a.createElement("i",{className:"fa fa-ban"})," Reset")))))))}}]),t}(f.Component);t.default=R}}]);