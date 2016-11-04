import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from './app.service';
export var ViewGuard = (function () {
    function ViewGuard(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    ViewGuard.prototype.canActivate = function (route, state) {
        switch (this.appService.last) {
            case "greeting":
            case "city":
            case "submit":
            case "answer":
                return true;
            default:
                this.router.navigate(["greeting"], { queryParams: route.queryParams });
                return false;
        }
    };
    ViewGuard.decorators = [
        { type: Injectable },
    ];
    ViewGuard.ctorParameters = [
        { type: Router, },
        { type: AppService, },
    ];
    return ViewGuard;
}());
