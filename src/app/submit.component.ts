import {
    Component,
    Input,
    OnInit,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';

import { AppService } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'submit',
    templateUrl: 'submit.component.html',
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
export class SubmitComponent implements OnInit {
    constructor(public appService: AppService) {
        this.result = true;
    }

    @Input()
    result: boolean;

    ngOnInit() {
        this.appService.last = "submit";
    }
}