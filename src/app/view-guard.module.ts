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
export class ViewGuard implements CanActivate {
    constructor(
        private router: Router,
        private appService: AppService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        switch (this.appService.last) {
            case "greeting":
            case "city":
            case "submit":
            case "answer":
                return true;
            default:
                this.router.navigate(["/"], { preserveQueryParams: true });
                return false;
        }
    }
}