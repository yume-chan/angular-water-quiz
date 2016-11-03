import {
    Component,
    Input,
    OnInit,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';
import { Router } from '@angular/router';

import { AppService, StepResult } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'result',
    templateUrl: 'result.component.html',
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
export class ResultComponent implements OnInit {
    constructor(private router: Router, public appService: AppService) {
    }

    @Input()
    result: StepResult;

    showForm: boolean;

    share: boolean;

    advanceMode: boolean = false;
    submitCount: number = 0;

    realName: string;

    change(event: Event) {
        this.appService.user.realName = (event.target as HTMLInputElement).value;
    }

    show() {
        this.appService
            .getUserRank()
            .then(data => {
                if (data.code == 6000)
                    this.showForm = true;
                else
                    this.submit();
            })
            .catch(() => { });
    }

    submit(): void {
        if (!this.appService.user.city)
            return;

        this.result.submit = true;
        this.appService
            .submitInfo(this.result)
            .then(() => this.router.navigate(["submit"]))
            .catch(() => this.result.submit = false);
    }

    ngOnInit() {
        if (this.appService.last == "city")
            this.showForm = true;

        this.realName = this.appService.user.realName || "";
    }
}