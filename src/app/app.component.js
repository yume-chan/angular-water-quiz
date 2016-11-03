import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';
export var AppComponent = (function () {
    function AppComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
        this.loading = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.onLoading.subscribe(function (v) { return _this.loading += v ? 1 : -1; });
    };
    AppComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'app',
                    templateUrl: 'app.component.html'
                },] },
    ];
    AppComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
        { type: AppService, },
    ];
    return AppComponent;
}());
