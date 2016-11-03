import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { QuestionComponent } from './question.component';
import { ResultComponent } from './result.component';
import { AppService } from './app.service';
export var ViewComponent = (function () {
    function ViewComponent(componentResolver, appService) {
        this.componentResolver = componentResolver;
        this.appService = appService;
    }
    ViewComponent.prototype.generateView = function (t) {
        var _this = this;
        var factory = this.componentResolver.resolveComponentFactory(t);
        var page = this.container.createComponent(factory);
        setTimeout(function () {
            if (_this.container.length > 1)
                _this.container.remove(0);
        }, 500);
        return page.instance;
    };
    ViewComponent.prototype.next = function (question) {
        this.generateView(QuestionComponent).question = question;
    };
    ViewComponent.prototype.end = function () {
        this.generateView(ResultComponent).result = this.appService.result;
    };
    ViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.appService.onNext.subscribe(_this.next.bind(_this));
            _this.appService.onEnd.subscribe(_this.end.bind(_this));
            if (_this.appService.last == "greeting")
                _this.appService.next();
            else
                _this.appService.end();
        }, 0);
    };
    ViewComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'view',
                    templateUrl: 'view.component.html'
                },] },
    ];
    ViewComponent.ctorParameters = [
        { type: ComponentFactoryResolver, },
        { type: AppService, },
    ];
    ViewComponent.propDecorators = {
        'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    };
    return ViewComponent;
}());
