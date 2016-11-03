import {
    Component,
    Input,
    OnInit,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Answer, AppService, Question } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'answer',
    templateUrl: 'answer.component.html',
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
export class AnswerComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public appService: AppService) { }

    questions: Question[];

    id: number;

    ngOnInit(): void {
        this.appService.last = "answer";

        this.id = +this.route.snapshot.params["id"];
        this.appService
            .getProjects(this.id)
            .then(questions => this.questions = questions)
            .catch(err => history.back());
    }

    disabled: boolean;
    current: Answer;

    showAnswer(item: Question) {
        if (this.disabled)
            return;

        this.appService
            .getAndCheckAnswer(item, this.id)
            .then(answer => {
                this.current = answer;
                this.disabled = true;
            })
            .catch(err => { });
    }
}