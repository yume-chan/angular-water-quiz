/*! webchat 2016-06-23 version: 1.0.0*/
var baseView=function(a,b){var c=function(a){};a.extend(c.prototype,{initialize:function(){},render:function(c,d,e){b.templateSettings={evaluate:/<#([\s\S]+?)#>/g,interpolate:/<#=([\s\S]+?)#>/g,escape:/<#-([\s\S]+?)#>/g};var f=b.template(a(c).html()),g=f({data:d});return e?void a(e).html(g):g},renderData:function(b,c){if(b&&c)for(var d=a(b).find("[data-bind]"),e=0;e<d.length;e++){var f=d.eq(e),g="";(g=f.attr("data-bind"))&&void 0!==c[g]&&("INPUT"==d[e].tagName||"SELECT"==d[e].tagName?f.val(c[g]):f.html(c[g]))}},delegateEvents:function(b,c){var d=/^(\S+)\s*(.*)$/;if(!b&&!(b=this.events))return this;for(var e in b){var f=b[e];"function"!=typeof f&&(f=this[b[e]]||window[b[e]]);var g=e.match(d),h=g[1],i=g[2]?g[2]:null;c!==!0&&a(i).off(h),a(i).on(h,f)}return this},undelegateEvents:function(b){var c=/^(\S+)\s*(.*)$/;if(!b&&!(b=this.events))return this;for(var d in b){var e=d.match(c),f=e[1],g=e[2]?e[2]:null;a(g).off(f)}return this}});var d=new c;return d}($,_);