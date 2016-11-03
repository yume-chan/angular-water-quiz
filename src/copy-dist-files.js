"use strict";

const fs = require('fs');

let resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'index.css',
    // 'web-animations.min.js',
    'wx.html'
];
resources.map(function (f) {
    let path = f.split('/');
    let t = 'aot/' + path[path.length - 1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

fs.readdir('data', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    for (let f of files) {
        fs.stat('data/' + f, (err, stats) => {
            if (err) {
                console.log(err);
                return;
            }

            if (stats.isFile()) {
                let path = f.split('/');
                let t = 'aot/data/' + path[path.length - 1];
                fs.createReadStream('data/' + f).pipe(fs.createWriteStream(t));
            }
        });
    }
});