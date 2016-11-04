/// <reference path="../jweixin.d.ts" />

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';

export interface Province {
    id: number;
    name: string;
    children?: Province[];
}

export interface ResponseData {
    code: number;
    message: string;
}

export enum QuestionType {
    choice = 1,
    judge
}

export interface Question {
    content: string;
    order: number;
    subjectId: number;
    type: QuestionType;
}

export interface Option {
    id: number;
    optionDetail: string;
    checked: boolean;
}

export interface QuestionWithOptions extends Question {
    subjectOptionList: Option[];
    userExamId: number;
}

export interface StepResult extends ResponseData {
    allScore: number;
    isCorrect: boolean;
    score: number;
    isEnd: boolean;
    imgUrl: string;
    comment: string;
    userExamId: number;

    submit: boolean;
}

export interface RankItem {
    city: string;
    realName: string;
    province: string;
    score: number;
}

export interface UserRank extends ResponseData {
    rank: number;
    score: number;
}

export interface Answer {
    isCorrect: string;
    correctDetail: string;
}

export interface Content {
    content: string;
    linkUrl: string;
    title: string;
    imgUrl: string;
    contentId: number;
}

export interface User {
    userId: number;
    nickName: string;
    realName: string;
    province: string;
    city: string;
    headImgUrl: string;
}

@Injectable()
export class AppService {
    constructor(private http: Http, private router: Router) { }

    get appId(): string {
        return "wxe1331332af6001e2";
    }

    private onLoadingSource: Subject<boolean> = new Subject<boolean>();
    onLoading = this.onLoadingSource.asObservable();
    private loading(value: boolean) {
        this.onLoadingSource.next(value);
    }

    private get(url: string, showIndicator: boolean = true): Promise<any> {
        if (showIndicator)
            this.loading(true);
        return this.http
            .get(url)
            .timeout(20000, new Error("timeout"))
            .toPromise()
            .then(response => {
                if (showIndicator)
                    this.loading(false);
                return response.json();
            }, err => {
                if (showIndicator)
                    this.loading(false);
                alert("请求失败，请检查网络或稍后再试")
                throw err;
            });
    }

    private post(url: string, data: any, showIndicator: boolean = true): Promise<any> {
        if (showIndicator)
            this.loading(true);
        return this.http
            .post(url, data)
            .timeout(20000, new Error("timeout"))
            .toPromise()
            .then(response => {
                if (showIndicator)
                    this.loading(false);
                let data = response.json();
                let code = data["code"] as number;
                if (code != 0 && code != 6000) {
                    let message = data["message"];
                    alert(message);
                    throw message;
                } else {
                    return data;
                }
            }, err => {
                if (showIndicator)
                    this.loading(false);
                alert("请求失败，请检查网络或稍后再试")
                throw err;
            });
    }

    goToLogin() {
        let a = document.createElement("a");
        let url = this.router.url;
        a.href = "wx.html?redirect_uri=" + encodeURIComponent(url);
        location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appId}&redirect_uri=${encodeURIComponent(a.href)}&response_type=code&scope=snsapi_userinfo#wechat_redirect`;
    }

    shareLog(contentId: number, type: number): void {
        this.post('data/share-log.cgi', {
            userId: this.user.userId,
            contentId,
            type
        }, false).catch(err => { });
    }

    first: boolean = true;
    code: string;
    user: User;
    login(code: string, userId: number | null): Promise<boolean> {
        // this.user = {
        //     userId: 4,
        //     city: "123",
        //     headImgUrl: "",
        //     nickName: "123",
        //     province: "",
        //     realName: ""
        // }
        // return Promise.resolve(true);

        if (this.code == code)
            return Promise.resolve(false);

        this.code = code;
        return this.post('data/login.cgi', {
            code,
            userId
        }).then(data => {
            if (data["code"] == 6000) {
                if (!this.first)
                    alert(data["message"]);
                this.goToLogin();
                return false;
            }

            this.first = false;
            this.user = data.user as User;

            this.getWxSignature()
                .then(config => {
                    // config.debug = true;
                    config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage"];
                    wx.config(config);
                    wx.ready(() => {
                        this.getContent(1)
                            .then(data => {
                                wx.onMenuShareTimeline({
                                    title: data.title,
                                    imgUrl: data.imgUrl,
                                    link: data.linkUrl,
                                    complete: p => this.shareLog(data.contentId, 1)
                                });
                                wx.onMenuShareAppMessage({
                                    title: data.title,
                                    imgUrl: data.imgUrl,
                                    link: data.linkUrl,
                                    desc: data.content,
                                    complete: p => this.shareLog(data.contentId, 1)
                                });
                            })
                            .catch(err => { });
                    });
                })
                .catch(err => { });

            return true;
        }).catch(err => {
            this.goToLogin();
            return false;
        });
    }

    getVisitCount(): number {
        return 1546121;
    }

    getRank(currentPage: number, pageSize: number): Promise<RankItem[]> {
        return this.post('data/get-rank.cgi', {
            currentPage,
            pageSize
        }).then(data => data.content as RankItem[]);
    }

    getUserRank(): Promise<UserRank> {
        return this.post('data/get-user-rank.cgi', {
            userId: this.user.userId
        }).then(data => data as UserRank)
    }

    reset(): void {
        this.index = -1;
        this.questions = null;
    }

    private index: number;
    private onNextSource: Subject<QuestionWithOptions> = new Subject<QuestionWithOptions>();
    onNext = this.onNextSource.asObservable();
    next() {
        this.index++;
        this.onNextSource.next(this.questions[this.index]);
    }

    private questions: QuestionWithOptions[];
    getProject(): Promise<void> {
        return this.post('data/get-project.cgi', {
            userId: this.user.userId
        }).then(data => {
            this.questions = data.subject as QuestionWithOptions[]
        });
    }

    getProjects(userExamId: number): Promise<Question[]> {
        return this.post('data/get-projects.cgi', {
            userExamId,
            userId: this.user.userId
        }).then(data => {
            if (data.code == 6000) {
                alert(data.message);
                throw new Error(data.message);
            }
            return data.subject as Question[];
        });
    }

    result: StepResult;
    getAnswer(question: QuestionWithOptions): Promise<StepResult> {
        let items = question.subjectOptionList.filter(i => i.checked).map(i => i.id);

        return this.post('data/get-answer.cgi', {
            items,
            subjectId: question.subjectId,
            userExamId: question.userExamId,
            userId: this.user.userId
        }).then(data => {
            this.result = data as StepResult;
            return this.result;
        });
    }

    private onEndSource: Subject<void> = new Subject<void>();
    onEnd = this.onEndSource.asObservable();
    end() {
        this.onEndSource.next();
    }

    last: string;
    goExternal(): void {
        this.getContent(2).then(data => location.href = data.linkUrl);
    }

    submitInfo(result: StepResult): Promise<void> {
        return this.post('data/submit-info.cgi', {
            province: this.user.province,
            city: this.user.city,
            realName: this.user.realName || this.user.nickName,
            userId: this.user.userId,
            userExamId: result.userExamId
        });
    }

    getAndCheckAnswer(item: Question, userExamId: number): Promise<Answer> {
        return this.post('data/get-and-check-answer.cgi', {
            subjectId: item.subjectId,
            userExamId,
            userId: this.user.userId
        });
    }

    private cityData: Province[];
    getCityData(): Promise<Province[]> {
        if (this.cityData)
            return Promise.resolve(this.cityData);
        else
            return this.get('data/city.json')
                .then(data => {
                    this.cityData = data;
                    return data;
                }).catch(err => {
                    throw err;
                });
    }

    getContent(type: number): Promise<Content> {
        return this.post('data/get-content.cgi', { type, userId: this.user.userId }, false);
    }

    getWxSignature(): Promise<wx.WxConfig> {
        return this.post('data/get-wx-signature.cgi', { url: location.href }, false);
    }
}