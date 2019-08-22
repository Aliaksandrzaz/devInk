import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthorizationService} from "../authorization.service";

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {

  constructor(private authorizationService: AuthorizationService, private router:Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('flag')) {
      localStorage.getItem('flag');
      let x = localStorage.getItem('flag');
      JSON.parse(x);
      return JSON.parse(x);
    }
    else {
      this.router.navigate(['/']);
      return false;
    }

  }

}
