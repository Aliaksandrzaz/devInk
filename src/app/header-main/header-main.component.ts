import {Component, NgModule, NgZone, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss']
})
export class HeaderMainComponent {
  logIn: boolean = false;
  signUp: boolean = false;
  flagSignUp: boolean = false;

  constructor(private authorizationService: AuthorizationService, private router: Router, private ngZone: NgZone) {
  }

  ngOnInit() {
    this.authorizationService.loginSuccessful.subscribe((bool) => {
      this.flagSignUp = bool;
      this.goHomePage();
    });

    this.authorizationService.registrationLoginDone.subscribe((subscriber)=>{
      this.logIn = true;
      this.signUp = false;
    })
  }

  goHomePage(): void {
    this.ngZone.run(() => {
      this.router.navigate(['/home']);
    });
  }

  onChanged(){
    this.logIn = false;
    this.signUp = false;
  }

  showLogIn(): void {
    if (this.signUp) {
      this.signUp = !this.signUp;
    }
    this.logIn = !this.logIn;
  }

  showSignUp(): void {
    if (this.logIn) {
      this.logIn = !this.logIn;
    }
    this.signUp = !this.signUp;

  }

}
