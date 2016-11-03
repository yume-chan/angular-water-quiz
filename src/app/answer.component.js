import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';
export var AnswerComponent = (function () {
    function AnswerComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.last = "answer";
        this.id = +this.route.snapshot.params["id"];
        this.appService
            .getProjects(this.id)
            .then(function (questions) {
            _this.questions = questions;
        })
            .catch(function (err) { return history.back(); });
    };
    AnswerComponent.prototype.showAnswer = function (item) {
        var _this = this;
        if (this.disabled)
            return;
        this.appService
            .getAndCheckAnswer(item, this.id)
            .then(function (answer) {
            _this.current = answer;
            _this.disabled = true;
        })
            .catch(function (err) { });
    };
    AnswerComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'answer',
                    templateUrl: 'answer.component.html',
                },] },
    ];
    AnswerComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
        { type: AppService, },
    ];
    return AnswerComponent;
}());
