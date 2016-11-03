import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';
export var AppComponent = (function () {
    function AppComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.onLoading.subscribe(function (v) { return _this.loading = v; });
        this.appService
            .getWxSignature()
            .then(function (config) {
            config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage"];
            wx.config(config);
            wx.ready(function () {
                _this.appService
                    .getContent(1)
                    .then(function (data) {
                    wx.onMenuShareTimeline({
                        title: data.title,
                        imgUrl: data.imgUrl,
                        link: data.linkUrl,
                        complete: function (p) {
                        },
                        trigger: function (p) {
                        }
                    });
                    wx.onMenuShareAppMessage({
                        title: data.title,
                        imgUrl: data.imgUrl,
                        link: data.linkUrl,
                        desc: data.content,
                        complete: function (p) {
                        },
                        trigger: function (p) {
                        }
                    });
                })
                    .catch(function (err) { });
            });
        })
            .catch(function (err) { });
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
