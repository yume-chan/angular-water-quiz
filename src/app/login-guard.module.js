import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AppService } from './app.service';
export var LoginGuard = (function () {
    function LoginGuard(router, appService) {
        this.router = router;
        this.appService = appService;
    }
    LoginGuard.prototype.canActivate = function (route, state) {
        if (!this.appService.user) {
            var code = route.queryParams["code"];
            if (code) {
                alert(location.href);
                return this.appService.login(code, route.queryParams["userId"]);
            }
            else {
                this.appService.goToLogin();
                return false;
            }
        }
        return true;
    };
    LoginGuard.decorators = [
        { type: Injectable },
    ];
    LoginGuard.ctorParameters = [
        { type: Router, },
        { type: AppService, },
    ];
    return LoginGuard;
}());
