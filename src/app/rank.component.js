import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppService } from './app.service';
export var RankComponent = (function () {
    function RankComponent(appService) {
        this.appService = appService;
        this.list = [];
        this.pageIndex = 0;
        this.pageSize = 15;
        this.hasMore = true;
        this.rank = null;
    }
    RankComponent.prototype.load = function () {
        var _this = this;
        this.appService
            .getRank(this.pageIndex++, this.pageSize)
            .then(function (list) {
            (_a = _this.list).push.apply(_a, list);
            if (list.length < _this.pageSize)
                _this.hasMore = false;
            var _a;
        })
            .catch(function (err) { });
        ;
    };
    RankComponent.prototype.scroll = function (e) {
        if (!this.hasMore)
            return;
        var target = e.target;
        if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
            this.load();
        }
    };
    RankComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.pageSize = Math.ceil(this.container.nativeElement.clientHeight / 25) + 1;
        this.load();
        this.appService
            .getUserRank()
            .then(function (rank) {
            if (rank.code == 6000) {
                _this.rank = null;
                return;
            }
            _this.rank = rank;
        })
            .catch(function (err) { });
    };
    RankComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'rank',
                    templateUrl: 'rank.component.html',
                },] },
    ];
    RankComponent.ctorParameters = [
        { type: AppService, },
    ];
    RankComponent.propDecorators = {
        'container': [{ type: ViewChild, args: ["scroller", { read: ElementRef },] },],
    };
    return RankComponent;
}());
