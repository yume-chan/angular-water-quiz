import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing.module';
import { AppService } from './app.service';
import { LocaleNumberPipe } from './locale-number.pipe';
import { AnswerComponent } from './answer.component';
import { CityComponent } from './city.component';
import { AppComponent } from './app.component';
import { GrettingComponent } from './greeting.component';
import { NotFoundComponent } from './not-found.component';
import { QuestionComponent } from './question.component';
import { RankComponent } from './rank.component';
import { ResultComponent } from './result.component';
import { SubmitComponent } from './submit.component';
import { ViewComponent } from './view.component';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        HttpModule,
                        AppRoutingModule
                    ],
                    declarations: [
                        LocaleNumberPipe,
                        AnswerComponent,
                        CityComponent,
                        AppComponent,
                        GrettingComponent,
                        NotFoundComponent,
                        QuestionComponent,
                        RankComponent,
                        ResultComponent,
                        SubmitComponent,
                        ViewComponent,
                    ],
                    entryComponents: [
                        GrettingComponent,
                        QuestionComponent,
                        ResultComponent,
                    ],
                    bootstrap: [AppComponent],
                    providers: [AppService]
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
