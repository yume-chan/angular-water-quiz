import { Pipe } from '@angular/core';
export var LocaleNumberPipe = (function () {
    function LocaleNumberPipe() {
    }
    LocaleNumberPipe.prototype.transform = function (value) {
        return value.toLocaleString();
    };
    LocaleNumberPipe.decorators = [
        { type: Pipe, args: [{ name: 'localeNumber' },] },
    ];
    LocaleNumberPipe.ctorParameters = [];
    return LocaleNumberPipe;
}());
