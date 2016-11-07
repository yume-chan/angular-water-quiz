import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
export var GrettingComponent = (function () {
    function GrettingComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.enabled = true;
    }
    GrettingComponent.prototype.start = function () {
        var _this = this;
        if (!this.enabled)
            return;
        this.enabled = false;
        this.appService
            .getProject()
            .then(function () { return _this.router.navigate(['question']); })
            .catch(function (err) { return _this.enabled = true; });
    };
    GrettingComponent.prototype.ngOnInit = function () {
        this.appService.reset();
        this.appService.last = "greeting";
    };
    GrettingComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'gretting',
                    templateUrl: 'gretting.component.html',
                },] },
    ];
    GrettingComponent.ctorParameters = [
        { type: Router, },
        { type: AppService, },
    ];
    return GrettingComponent;
}());
