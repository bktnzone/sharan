(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{749:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return s});var n=t(108),r=t(109),i=t(111),l=t(110),o=t(112),c=t(1),d=t.n(c),u=t(706),b=[],p=["A","B","C","D"];!function(e){for(var a=b.length,t=0;t<e;t++){var n=a+t;b.push({id:n,name:"Item name "+n,type:"B",active:t%2===0?"Y":"N"})}}(5);var s=function(e){function a(){return Object(n.a)(this,a),Object(i.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return d.a.createElement(u.BootstrapTable,{data:b,insertRow:!0},d.a.createElement(u.TableHeaderColumn,{dataField:"id",isKey:!0},"Job ID"),d.a.createElement(u.TableHeaderColumn,{dataField:"name",editable:{type:"textarea"}},"Job Name"),d.a.createElement(u.TableHeaderColumn,{dataField:"type",editable:{type:"select",options:{values:p}}},"Job Type"),d.a.createElement(u.TableHeaderColumn,{dataField:"active",editable:{type:"checkbox",options:{values:"Y:N"}}},"Active"))}}]),a}(d.a.Component)}}]);