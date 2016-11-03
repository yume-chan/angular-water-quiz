import {
    Component,
    Input,
    OnInit,

    animate,
    style,
    transition,
    trigger,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import { AppService, Province } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'city',
    templateUrl: 'city.component.html',
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
export class CityComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public appService: AppService) {

    }

    list: Province[];

    province: boolean;

    next(id: number, name: string) {
        if (this.province) {
            this.appService.user.province = name;
            this.router.navigate(["city", id]);
        } else {
            this.appService.user.city = name;
            history.go(-2);
        }
    }

    ngOnInit(): void {
        this.appService.last = "city";

        setTimeout(() => {
            this.appService
                .getCityData()
                .then(data => {
                    let params = this.route.snapshot.params;
                    if (!params["province"]) {
                        this.list = data;
                        this.province = true;
                        return;
                    }

                    let id = parseInt(params["province"]);
                    let p = data.find(i => i.id == id);
                    this.list = p.children;
                })
                .catch(err => history.back());
        }, 0);
    }
}