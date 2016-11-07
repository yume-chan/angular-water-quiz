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

import { AppService } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'gretting',
    templateUrl: 'gretting.component.html',
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
export class GrettingComponent implements OnInit {
    constructor(private router: Router, public appService: AppService) { }

    enabled: boolean = true;

    start() {
        if (!this.enabled)
            return;

        this.enabled = false;
        this.appService
            .getProject()
            .then(() => this.router.navigate(['question']))
            .catch(err => this.enabled = true);
    }

    // visitCount: number;

    ngOnInit(): void {
        this.appService.reset();
        this.appService.last = "greeting";

        // this.visitCount = this.appService.getVisitCount();
    }
}