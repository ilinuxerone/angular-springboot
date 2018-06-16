import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class LoginGuard implements CanActivate {
    canActivate(): boolean | Observable<boolean> | Promise<boolean> {
        let loggedIn: boolean = Math.random() < 0.5;

        if (!loggedIn){
            console.log("用户为登录");
        }

        return loggedIn;
    }
}
