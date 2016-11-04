import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
export var ResultComponent = (function () {
    function ResultComponent(router, appService) {
        this.router = router;
        this.appService = appService;
        this.advanceMode = false;
        this.submitCount = 0;
    }
    ResultComponent.prototype.change = function (event) {
        this.appService.user.realName = event.target.value;
    };
    ResultComponent.prototype.show = function () {
        var _this = this;
        this.appService
            .getUserRank()
            .then(function (data) {
            if (data.code == 6000)
                _this.showForm = true;
            else
                _this.submit();
        })
            .catch(function () { });
    };
    ResultComponent.prototype.submit = function () {
        var _this = this;
        if (!this.appService.user.city)
            return;
        this.result.submit = true;
        this.appService
            .submitInfo(this.result)
            .then(function () { return _this.router.navigate(["submit"]); })
            .catch(function () { return _this.result.submit = false; });
    };
    ResultComponent.prototype.ngOnInit = function () {
        if (this.appService.last == "city")
            this.showForm = true;
        this.realName = this.appService.user.realName || "";
    };
    ResultComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'result',
                    templateUrl: 'result.component.html',
                },] },
    ];
    ResultComponent.ctorParameters = [
        { type: Router, },
        { type: AppService, },
    ];
    ResultComponent.propDecorators = {
        'result': [{ type: Input },],
    };
    return ResultComponent;
}());
