import {
    AfterViewInit,
    Component,
    ComponentFactory,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { Type } from '@angular/core/src/type';

import { QuestionComponent } from './question.component';
import { ResultComponent } from './result.component';
import { AppService, QuestionWithOptions, StepResult } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'view',
    templateUrl: 'view.component.html'
})
export class ViewComponent implements AfterViewInit {
    constructor(
        private componentResolver: ComponentFactoryResolver,
        public appService: AppService) { }

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    private generateView<T>(t: Type<T>): T {
        let factory = this.componentResolver.resolveComponentFactory(t);
        let page = this.container.createComponent(factory);
        setTimeout(() => {
            if (this.container.length > 1)
                this.container.remove(0);
        }, 500);
        return page.instance;
    }

    private next(question: QuestionWithOptions): void {
        this.generateView(QuestionComponent).question = question;
    }

    private end(): void {
        this.generateView(ResultComponent).result = this.appService.result;
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.appService.onNext.subscribe(this.next.bind(this));
            this.appService.onEnd.subscribe(this.end.bind(this));

            if (this.appService.last == "greeting")
                this.appService.next();
            else
                this.appService.end();
        }, 0);
    }
}