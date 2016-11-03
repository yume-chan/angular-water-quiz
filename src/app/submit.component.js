import { Component, Input } from '@angular/core';
import { AppService } from './app.service';
export var SubmitComponent = (function () {
    function SubmitComponent(appService) {
        this.appService = appService;
        this.result = true;
    }
    SubmitComponent.prototype.ngOnInit = function () {
        this.appService.last = "submit";
    };
    SubmitComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'submit',
                    templateUrl: 'submit.component.html',
                },] },
    ];
    SubmitComponent.ctorParameters = [
        { type: AppService, },
    ];
    SubmitComponent.propDecorators = {
        'result': [{ type: Input },],
    };
    return SubmitComponent;
}());
