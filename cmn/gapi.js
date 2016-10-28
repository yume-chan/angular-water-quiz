var ghost = require(process.argv[2]+'/webwine/cfg/ghost.js'); 
function ClassAPI() { }
ClassAPI.prototype.construct = function() {};
ClassAPI.extend = function(def) {
    var classDef = function(uuid) {
        if (arguments[0] !== ClassAPI) { this.construct.apply(this, arguments); }
        this.uuid= uuid;
    };
    
    var proto = new this(ClassAPI);
    var superClass = this.prototype;
    var uuid;

    for (var n in def) {
        var item = def[n];    
        if (item instanceof Function) item.$ = superClass;
        proto[n] = item;
    }

    classDef.prototype = proto;
    
    classDef.extend = this.extend;        
    return classDef;
};

var BaseAPI = ClassAPI.extend({  
    conf: function() {
	    return { auth: false, type: "json", itfs: [] };
    },
    
    output: function(req, res, fld, fle) {
    	return this.doOutput(req, res, fld, fle);
    },

    callFunc: function(req, res, fld, fle) {
    	return this.doCallFunc(this.uuid, req, res, fld, fle);
    }
});

exports.BaseAPI = BaseAPI;


//修复登录验证不能引用AuthorizeAPI的问题, 登录验证放在调用服务之前, 未登录code统一为401 fixed by fwh
exports.AuthorizeAPI = BaseAPI.extend({  
    output: function(req, res, fld, fle) {
        //输出之前再次验证登录状态 fixed by fwh
    	if(!req || !req.user || !req.user.user) {
            var conf = this.conf();
            if (conf.type=="json") {
                res.jsonp({"code":401,"message":"请先登录"});
            } else {    //  
                var webRoot = ghost.webwineHost.url;
                res.writeHead(302, {
                    'Location': webRoot+"/login.html"
                });
                res.end();
            }
            return null;
    	}
    	
        return this.doOutput(req, res, fld, fle);
    },

    callFunc: function(req, res, fld, fle) {
        //调用服务之前登录验证
        if(!req || !req.user || !req.user.user) {
            var conf = this.conf();
            if (conf.type=="json") {
                res.jsonp({"code":401,"message":"请先登录"});
            } else {    //  
                var webRoot = ghost.webwineHost.url;
                res.writeHead(302, {
                    'Location': webRoot+"/login.html"
                });
                res.end();
            }
            return null;
        }
    	
        return this.doCallFunc(this.uuid, req, res, fld, fle);
    }
});

exports.getParameter = function getParameter(req,name) {
    var value = req.query[name];
    if(value == null){
        value = req.body[name];
    }

    return value;
}

exports.getIPv4 = function getIPv4(ip) {
    var match =  /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/.exec(ip);
    return match?match[0]:"";
}

function extend(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
}

exports.toResult = function toResult(code, message, obj) {
    var _default = {
        "code": 0,
        "message": ""
    };
    var rslt = extend(_default, obj);
    //如果code、message不为空，则覆盖原来的code,message 
    if(code || code==0){
        rslt.code = code;
    }
    if(message) {
        rslt.message = message;
    }
    
    return rslt;
}

exports.emptyEqual = function emptyEqual(tval, dval) {
	if(tval == null || (dval != null && tval == dval)) {
		return true;
	}
	
	return false;
}

exports.emptyNoequal = function emptyNoequal(tval, dval) {
	if(tval == null || (dval != null && tval != dval)) {
		return true;
	}
	
	return false;
}

exports.isValidNumber = function isValidNumber(tval, min, max) {
    if(isNaN(tval)) {
        return false;
    }
    var rslt = true;
    if(min != null) {
        rslt &= tval>=min;
    }
    if (max != null) {
        rslt &= tval<=max;
    }
    return rslt;
}

exports.isPhoneNumber = function isPhoneNumber(val) {
    if(/^1\d{10}$/.test(val)) {
        return true;
    }
    return false;
}

exports.hideBankNumber = function hideBankNumber(bankNumber) {
    if(bankNumber.length<8) {
        return "";
    }
    var rslt = bankNumber.substring(0,4)+"****"+bankNumber.substring(bankNumber.length-4)
    return rslt;
}

exports.hidePhoneNumber = function hidePhoneNumber(phoneNumber) {
    if(phoneNumber.length<8) {
        return "";
    }
    var rslt = phoneNumber.substring(0,3)+"****"+phoneNumber.substring(phoneNumber.length-4)
    return rslt;
}