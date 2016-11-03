import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppService } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public appService: AppService) { }

    loading: number = 0;

    ngOnInit() {
        this.appService.onLoading.subscribe(v => this.loading += v ? 1 : -1);
    }
}