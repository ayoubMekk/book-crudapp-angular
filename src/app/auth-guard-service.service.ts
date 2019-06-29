import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private location:Location
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.cookieService.check("iduser")
    if (isLoggedIn) {
      return true;
    } else {
      location.replace("/login")
      return false;
    }
  }

}