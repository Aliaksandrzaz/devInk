import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from './authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.authorizationService.initializeFirebase();
    // this.authorizationService.changeLoginPassword();
  }

}
