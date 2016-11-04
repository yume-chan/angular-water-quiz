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

    next(item: Province) {
        if (this.province) {
            this.appService.user.province = item.name;

            if (!item.children) {
                this.appService.user.city = "";
                this.appService.user.noCity = true;
                history.go(-1);
            } else {
                this.appService.user.city = null;
                this.router.navigate(["city", item.id]);
            }
        } else {
            this.appService.user.city = item.name;
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