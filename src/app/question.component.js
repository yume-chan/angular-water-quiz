import { Component, Input } from '@angular/core';
import { AppService, QuestionType } from './app.service';
export var QuestionComponent = (function () {
    function QuestionComponent(appService) {
        this.appService = appService;
        this.canNext = false;
        this.enabled = true;
        this.countdown = 3;
    }
    QuestionComponent.prototype.change = function (target) {
        if (this.question.type == QuestionType.judge) {
            for (var _i = 0, _a = this.question.subjectOptionList; _i < _a.length; _i++) {
                var item = _a[_i];
                item.checked = item == target;
            }
            this.canNext = true;
        }
        else {
            target.checked = !target.checked;
            if (target.checked) {
                this.canNext = true;
                return;
            }
            else {
                for (var _b = 0, _c = this.question.subjectOptionList; _b < _c.length; _b++) {
                    var item = _c[_b];
                    if (item.checked) {
                        this.canNext = true;
                        return;
                    }
                }
            }
            this.canNext = false;
        }
    };
    QuestionComponent.prototype.submit = function () {
        var _this = this;
        if (!this.canNext)
            return;
        this.canNext = false;
        this.appService
            .getAnswer(this.question)
            .then(function (result) {
            if (result.code == 6000) {
                alert(result.message);
                _this.result = result;
                _this.next();
                return;
            }
            _this.result = result;
            _this.interval = setInterval(function () {
                _this.countdown--;
                if (_this.countdown == 0)
                    _this.next();
            }, 1000);
        })
            .catch(function (err) { return _this.canNext = true; });
    };
    QuestionComponent.prototype.next = function () {
        if (!this.enabled)
            return;
        this.enabled = false;
        clearInterval(this.interval);
        if (this.result.isEnd)
            this.appService.end();
        else
            this.appService.next();
    };
    QuestionComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'question',
                    templateUrl: 'question.component.html',
                },] },
    ];
    QuestionComponent.ctorParameters = [
        { type: AppService, },
    ];
    QuestionComponent.propDecorators = {
        'question': [{ type: Input },],
    };
    return QuestionComponent;
}());
