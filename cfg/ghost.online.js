var log4js = require('log4js');

log4js.loadAppender("dateFile");
log4js.addAppender(log4js.appenderMakers['dateFile']({  
    filename:"/home/u1/logs/webwine/webwine.log",  
    pattern: '.yyyy-MM-dd',alwaysIncludePattern: true,
    layout: {
        type: 'pattern',
        pattern: '[%d %p %c] %m%n'
    }  
}), 'webwine');

module.exports = {
    getLogger:function() {
        return log4js.getLogger('webwine');
    },
    dscm:{
        winecenter:{
            addr:'192.168.18.37',
            port:5531
        }
    },
    webwineHost:{
        url: "https://wechat.yatian1688.com/webwine"
    },
    html:{
        
    }
}