/*! kibana - v3.0.0m4pre - 2013-10-14
 * Copyright (c) 2013 Rashid Khan; Licensed Apache License */

define("css-embed",function(){function a(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("style"),d=document.createTextNode(a);c.type="text/css",c.styleSheet?c.styleSheet.cssText=d.nodeValue:c.appendChild(d),b.appendChild(c)}return a}),define("css!panels/query/query.css",["css-embed"],function(a){return a(".short-query{display:inline-block;margin-right:10px}.begin-query{position:absolute;left:13px;top:5px}.end-query{position:absolute;right:15px;top:5px}.panel-query{padding-left:35px!important;height:31px!important;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.form-search:hover .has-remove{padding-left:50px!important}.remove-query{opacity:0}.last-query{padding-right:45px!important}.form-search:hover .remove-query{opacity:1}.query-panel .pins{text-decoration:underline}.query-panel .pinned{margin-right:5px}"),!0}),define("panels/query/module",["angular","app","underscore","css!./query.css"],function(a,b,c){var d=a.module("kibana.panels.query",[]);b.useModule(d),d.controller("query",["$scope","querySrv","$rootScope",function(a,b,d){a.panelMeta={status:"Stable",description:"Manage all of the queries on the dashboard. You almost certainly need one of these somewhere. This panel allows you to add, remove, label, pin and color queries"};var e={query:"*",pinned:!0,history:[],remember:10};c.defaults(a.panel,e),a.querySrv=b,a.init=function(){},a.refresh=function(){f(c.pluck(a.querySrv.list,"query")),d.$broadcast("refresh")},a.render=function(){d.$broadcast("render")},a.toggle_pin=function(a){b.list[a].pin=b.list[a].pin?!1:!0};var f=function(b){if(a.panel.remember>0){a.panel.history=c.union(b.reverse(),a.panel.history);var d=a.panel.history.length;d>a.panel.remember&&(a.panel.history=a.panel.history.slice(0,a.panel.remember))}};a.init()}])});