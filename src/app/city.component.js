import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';
export var CityComponent = (function () {
    function CityComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    CityComponent.prototype.next = function (item) {
        if (this.province) {
            this.appService.user.province = item.name;
            if (!item.children) {
                this.appService.user.city = "";
                this.appService.user.noCity = true;
                history.go(-1);
            }
            else {
                this.appService.user.city = null;
                this.router.navigate(["city", item.id]);
            }
        }
        else {
            this.appService.user.city = item.name;
            history.go(-2);
        }
    };
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.last = "city";
        setTimeout(function () {
            _this.appService
                .getCityData()
                .then(function (data) {
                var params = _this.route.snapshot.params;
                if (!params["province"]) {
                    _this.list = data;
                    _this.province = true;
                    return;
                }
                var id = parseInt(params["province"]);
                var p = data.find(function (i) { return i.id == id; });
                _this.list = p.children;
            })
                .catch(function (err) { return history.back(); });
        }, 0);
    };
    CityComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'city',
                    templateUrl: 'city.component.html',
                },] },
    ];
    CityComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
        { type: AppService, },
    ];
    return CityComponent;
}());
