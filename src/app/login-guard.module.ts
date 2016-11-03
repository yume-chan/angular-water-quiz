import { Injectable } from "@angular/core"
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router"
import { Observable } from 'rxjs/Observable';

import { AppService } from './app.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private appService: AppService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.appService.user) {
            let code = route.queryParams["code"];
            if (code) {
                return this.appService.login(code, route.queryParams["userId"]);
            } else {
                this.appService.goToLogin();
                return false;
            }
        }

        return true;
    }
}