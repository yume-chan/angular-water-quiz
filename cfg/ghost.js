var log4js = require('log4js');

log4js.loadAppender("dateFile");
log4js.addAppender(log4js.appenderMakers['dateFile']({  
    filename:"D:/dev/webfile/logger/webwine.log",  
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
            addr:'192.168.18.246',
            port:7521
        }
        // winecenter:{
        //     addr:'192.168.18.93',
        //     port:8520
        // }
        // winecenter:{
        //     addr:'192.168.18.35',
        //     port:7521
        // }
    },
    webwineHost:{
        url: "http://wechat.yatian1688.com:80/webwine"
    },
    html:{
        
    }
}