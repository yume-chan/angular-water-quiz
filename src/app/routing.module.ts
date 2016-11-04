import {
    NgModule,
} from '@angular/core';
import {
    RouterModule,
} from '@angular/router';

import { AnswerComponent } from './answer.component';
import { CityComponent } from './city.component';
import { GrettingComponent } from './greeting.component';
import { NotFoundComponent } from './not-found.component';
import { SubmitComponent } from './submit.component';
import { RankComponent } from './rank.component';
import { ViewComponent } from './view.component';

import { NotFoundGuard } from './not-found-guard.module';
import { LoginGuard } from './login-guard.module';
import { ViewGuard } from './view-guard.module';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'greeting', component: GrettingComponent, canActivate: [LoginGuard] },
            { path: 'answer/:id', component: AnswerComponent, canActivate: [LoginGuard] },
            { path: 'answer', redirectTo: '' },
            { path: 'city', component: CityComponent, canActivate: [LoginGuard] },
            { path: 'city/:province', component: CityComponent, canActivate: [LoginGuard] },
            { path: 'rank', component: RankComponent, canActivate: [LoginGuard] },
            { path: 'question', component: ViewComponent, canActivate: [ViewGuard] },
            { path: 'submit', component: SubmitComponent, canActivate: [LoginGuard] },
            { path: '**', component: NotFoundComponent, canActivate: [NotFoundGuard] }
        ], {
                useHash: true
            })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        NotFoundGuard,
        LoginGuard,
        ViewGuard,
    ]
})
export class AppRoutingModule { }