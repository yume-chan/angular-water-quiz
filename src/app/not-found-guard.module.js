import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
export var NotFoundGuard = (function () {
    function NotFoundGuard(router) {
        this.router = router;
    }
    NotFoundGuard.prototype.canActivate = function (route, state) {
        this.router.navigate(["greeting"], { queryParams: route.queryParams });
        return false;
    };
    NotFoundGuard.decorators = [
        { type: Injectable },
    ];
    NotFoundGuard.ctorParameters = [
        { type: Router, },
    ];
    return NotFoundGuard;
}());
