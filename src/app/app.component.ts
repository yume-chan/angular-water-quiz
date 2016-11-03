/// <reference path="../jweixin.d.ts" />

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

    loading: boolean;

    ngOnInit() {
        this.appService.onLoading.subscribe(v => this.loading = v);

        this.appService
            .getWxSignature()
            .then(config => {
                // config.debug = true;
                config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage"];
                wx.config(config);
                wx.ready(() => {
                    this.appService
                        .getContent(1)
                        .then(data => {
                            wx.onMenuShareTimeline({
                                title: data.title,
                                imgUrl: data.imgUrl,
                                link: data.linkUrl,
                                complete: p => {
                                },
                                trigger: p => {
                                }
                            });
                            wx.onMenuShareAppMessage({
                                title: data.title,
                                imgUrl: data.imgUrl,
                                link: data.linkUrl,
                                desc: data.content,
                                complete: p => {
                                },
                                trigger: p => {
                                }
                            });
                        })
                        .catch(err => { });
                });
            })
            .catch(err => { });
    }
}