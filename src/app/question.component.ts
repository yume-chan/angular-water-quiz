import {
    Component,
    Input,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';
import { Router } from '@angular/router';

import { AppService, QuestionType, QuestionWithOptions, Option, StepResult } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'question',
    templateUrl: 'question.component.html',
    // host: {
    //     "[@enter]": "true"
    // },
    // animations: [
    //     trigger('enter', [
    //         transition(':enter', [
    //             style({ transform: 'translateX(100%)' }),
    //             animate('0.5s ease')
    //         ])
    //     ])
    // ]
})
export class QuestionComponent {
    constructor(public appService: AppService) { }

    @Input()
    question: QuestionWithOptions;

    canNext: boolean = false;
    enabled: boolean = true;

    change(target: Option) {
        if (this.question.type == QuestionType.judge) {
            for (let item of this.question.subjectOptionList)
                item.checked = item == target;
            this.canNext = true;
        } else {
            target.checked = !target.checked;
            if (target.checked) {
                this.canNext = true;
                return;
            } else {
                for (let item of this.question.subjectOptionList) {
                    if (item.checked) {
                        this.canNext = true;
                        return;
                    }
                }
            }
            this.canNext = false;
        }
    }

    result: StepResult;

    countdown: number = 3;
    interval: NodeJS.Timer;

    submit(): void {
        if (!this.canNext)
            return;

        this.canNext = false;
        this.appService
            .getAnswer(this.question)
            .then(result => {
                if (result.code == 6000) {
                    alert(result.message);
                    this.result = result;
                    this.next();
                    return;
                }

                this.result = result;
                this.interval = setInterval(() => {
                    this.countdown--;
                    if (this.countdown == 0)
                        this.next();
                }, 1000);
            })
            .catch(err => this.canNext = true);
    }

    next(): void {
        if (!this.enabled)
            return;

        this.enabled = false;
        clearInterval(this.interval);

        if (this.result.isEnd)
            this.appService.end();
        else
            this.appService.next();
    }
}