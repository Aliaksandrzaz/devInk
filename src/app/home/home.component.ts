import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../authorization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginUser: string = '';

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {
    this.loginUser = this.authorizationService.user.logIn;
  }

}
