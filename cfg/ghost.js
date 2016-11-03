var log4js = require('log4js');

log4js.loadAppender("dateFile");
log4js.addAppender(log4js.appenderMakers['dateFile']({
    filename: "D:/log/water",
    pattern: '.yyyy-MM-dd.log', alwaysIncludePattern: true,
    layout: {
        type: 'pattern',
        pattern: '[%d %p %c] %m%n'
    }
}), 'water');

const logger = log4js.getLogger('water');

module.exports = {
    get logger() {
        return logger;
    },
    dscm: {
        water: {
            addr: '192.168.18.86',
            port: 5521
        }
    }
}