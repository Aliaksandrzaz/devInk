import {Component, OnInit, DoCheck} from '@angular/core';
import {AuthorizationService} from './authorization.service';
import {Observable} from "rxjs/internal/Observable";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devInkubator';
  logIn: boolean = false;
  signIn: boolean = false;
  valueObserve: string = 'start';
  flagSignIn: Observable<boolean> = new Observable<boolean>();

  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService = authorizationService
  }

  ngOnInit() {
    this.authorizationService.initializeFirebase();
    this.flagSignIn = this.authorizationService.listen();
    this.flagSignIn.subscribe((sub) => {
      console.log('suc');
      this.logIn = false;
    })
  }

  ngDoCheck(){
    // this.flagSignIn = this.authorizationService.listen();
    // this.flagSignIn.subscribe((sub) => {
    //   console.log('suc');
    //   this.logIn = false;
    // })
  }

  showLogIn() {
    if (this.signIn) {
      this.signIn = !this.signIn;
    }
    this.logIn = !this.logIn;
  }

  showSignIn() {
    if (this.logIn) {
      this.logIn = !this.logIn;
    }
    this.signIn = !this.signIn;

  }

}
