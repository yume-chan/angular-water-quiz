import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
export var QuestionType;
(function (QuestionType) {
    QuestionType[QuestionType["choice"] = 1] = "choice";
    QuestionType[QuestionType["judge"] = 2] = "judge";
})(QuestionType || (QuestionType = {}));
export var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.onLoadingSource = new Subject();
        this.onLoading = this.onLoadingSource.asObservable();
        this.first = true;
        this.onNextSource = new Subject();
        this.onNext = this.onNextSource.asObservable();
        this.onEndSource = new Subject();
        this.onEnd = this.onEndSource.asObservable();
    }
    Object.defineProperty(AppService.prototype, "appId", {
        get: function () {
            return "wx4d4af0fa9db19479";
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.loading = function (value) {
        this.onLoadingSource.next(value);
    };
    AppService.prototype.get = function (url, showIndicator) {
        var _this = this;
        if (showIndicator === void 0) { showIndicator = true; }
        if (showIndicator)
            this.loading(true);
        return this.http
            .get(url)
            .timeout(20000, new Error("timeout"))
            .toPromise()
            .then(function (response) {
            if (showIndicator)
                _this.loading(false);
            return response.json();
        }, function (err) {
            if (showIndicator)
                _this.loading(false);
            alert("请求失败，请检查网络或稍后再试");
            throw err;
        });
    };
    AppService.prototype.post = function (url, data, showIndicator) {
        var _this = this;
        if (showIndicator === void 0) { showIndicator = true; }
        if (showIndicator)
            this.loading(true);
        return this.http
            .post(url, data)
            .timeout(20000, new Error("timeout"))
            .toPromise()
            .then(function (response) {
            if (showIndicator)
                _this.loading(false);
            var data = response.json();
            var code = data["code"];
            if (code != 0 && code != 6000) {
                var message = data["message"];
                alert(message);
                throw message;
            }
            else {
                return data;
            }
        }, function (err) {
            if (showIndicator)
                _this.loading(false);
            alert("请求失败，请检查网络或稍后再试");
            throw err;
        });
    };
    AppService.prototype.goToLogin = function () {
        var a = document.createElement("a");
        a.href = "wx.html?redirect_uri=" + encodeURIComponent(location.hash);
        location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.appId + "&redirect_uri=" + encodeURIComponent(a.href) + "&response_type=code&scope=snsapi_userinfo#wechat_redirect";
    };
    AppService.prototype.shareLog = function (contentId, type) {
        this.post('data/share-log.cgi', {
            userId: this.user.userId,
            contentId: contentId,
            type: type
        }, false).catch(function (err) { });
    };
    AppService.prototype.login = function (code, userId) {
        var _this = this;
        this.code = code;
        return this.post('data/login.cgi', {
            code: code,
            userId: userId
        }).then(function (data) {
            if (data["code"] == 6000) {
                if (!_this.first)
                    alert(data["message"]);
                _this.goToLogin();
                return false;
            }
            _this.first = false;
            _this.user = data.user;
            _this.getWxSignature()
                .then(function (config) {
                config.jsApiList = ["onMenuShareTimeline", "onMenuShareAppMessage"];
                wx.config(config);
                wx.ready(function () {
                    _this.getContent(1)
                        .then(function (data) {
                        wx.onMenuShareTimeline({
                            title: data.title,
                            imgUrl: data.imgUrl,
                            link: data.linkUrl,
                            complete: function (p) { return _this.shareLog(data.contentId, 1); }
                        });
                        wx.onMenuShareAppMessage({
                            title: data.title,
                            imgUrl: data.imgUrl,
                            link: data.linkUrl,
                            desc: data.content,
                            complete: function (p) { return _this.shareLog(data.contentId, 1); }
                        });
                    })
                        .catch(function (err) { });
                });
            })
                .catch(function (err) { });
            return true;
        }).catch(function (err) {
            _this.goToLogin();
            return false;
        });
    };
    AppService.prototype.getVisitCount = function () {
        return 1546121;
    };
    AppService.prototype.getRank = function (currentPage, pageSize) {
        return this.post('data/get-rank.cgi', {
            currentPage: currentPage,
            pageSize: pageSize
        }).then(function (data) { return data.content; });
    };
    AppService.prototype.getUserRank = function () {
        return this.post('data/get-user-rank.cgi', {
            userId: this.user.userId
        }).then(function (data) { return data; });
    };
    AppService.prototype.reset = function () {
        this.index = -1;
        this.questions = null;
    };
    AppService.prototype.next = function () {
        this.index++;
        this.onNextSource.next(this.questions[this.index]);
    };
    AppService.prototype.getProject = function () {
        var _this = this;
        return this.post('data/get-project.cgi', {
            userId: this.user.userId
        }).then(function (data) {
            _this.questions = data.subject;
        });
    };
    AppService.prototype.getProjects = function (userExamId) {
        return this.post('data/get-projects.cgi', {
            userExamId: userExamId,
            userId: this.user.userId
        }).then(function (data) {
            if (data.code == 6000) {
                alert(data.message);
                throw new Error(data.message);
            }
            return data.subject;
        });
    };
    AppService.prototype.getAnswer = function (question) {
        var _this = this;
        var items = question.subjectOptionList.filter(function (i) { return i.checked; }).map(function (i) { return i.id; });
        return this.post('data/get-answer.cgi', {
            items: items,
            subjectId: question.subjectId,
            userExamId: question.userExamId,
            userId: this.user.userId
        }).then(function (data) {
            _this.result = data;
            return _this.result;
        });
    };
    AppService.prototype.end = function () {
        this.onEndSource.next();
    };
    AppService.prototype.goExternal = function () {
        this.getContent(2).then(function (data) { return location.href = data.linkUrl; });
    };
    AppService.prototype.submitInfo = function (result) {
        return this.post('data/submit-info.cgi', {
            province: this.user.province,
            city: this.user.city,
            realName: this.user.realName || this.user.nickName,
            userId: this.user.userId,
            userExamId: result.userExamId
        });
    };
    AppService.prototype.getAndCheckAnswer = function (item, userExamId) {
        return this.post('data/get-and-check-answer.cgi', {
            subjectId: item.subjectId,
            userExamId: userExamId,
            userId: this.user.userId
        });
    };
    AppService.prototype.getCityData = function () {
        var _this = this;
        if (this.cityData)
            return Promise.resolve(this.cityData);
        else
            return this.get('data/city.json')
                .then(function (data) {
                _this.cityData = data;
                return data;
            }).catch(function (err) {
                throw err;
            });
    };
    AppService.prototype.getContent = function (type) {
        return this.post('data/get-content.cgi', { type: type, userId: this.user.userId }, false);
    };
    AppService.prototype.getWxSignature = function () {
        return this.post('data/get-wx-signature.cgi', { url: location.href }, false);
    };
    AppService.decorators = [
        { type: Injectable },
    ];
    AppService.ctorParameters = [
        { type: Http, },
    ];
    return AppService;
}());
