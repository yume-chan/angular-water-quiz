import { Injectable } from "@angular/core"
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot
} from "@angular/router"
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotFoundGuard implements CanActivate {
    constructor(
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        this.router.navigate(["greeting"], { queryParams: route.queryParams });
        return false;
    }
}