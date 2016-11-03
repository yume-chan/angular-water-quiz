"use strict";

const Java = {
    Long: 'java.lang.Long',
    Integer: 'java.lang.Integer',
    String: 'java.lang.String',
    Array: function (inner) {
        return '[L' + inner + ';';
    }
}

function toResult(code, message, obj) {
    if (!obj)
        return { code, message };

    if (code !== undefined && code !== null)
        obj.code = code;
    else if (obj.code === undefined)
        obj.code = -1;

    if (message !== undefined && message !== null)
        obj.message = message;
    else if (obj.message === undefined)
        obj.message = "系统异常";

    return obj;
}

const ipRegex = /\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/;

function getIp(req) {
    var match = ipRegex.exec(req.user.addr);
    return match ? match[0] : "";
}

module.exports = { Java, toResult, getIp };