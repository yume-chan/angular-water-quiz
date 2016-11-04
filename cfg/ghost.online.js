var log4js = require('log4js');
log4js.loadAppender("dateFile");
log4js.addAppender(log4js.appenderMakers['dateFile']({
    filename: "/home/u1/logs/webwater/webwater",
    pattern: '.yyyy-MM-dd.log', alwaysIncludePattern: true,
    layout: {
        type: 'pattern',
        pattern: '[%d %p %c] %m%n'
    }
}), 'webwater');

const logger = log4js.getLogger('webwater');

module.exports = {
    get logger() {
        return logger;
    },
    dscm: {
        water: {
            addr: '172.16.0.3',
            port: 5538
        }
    }
}