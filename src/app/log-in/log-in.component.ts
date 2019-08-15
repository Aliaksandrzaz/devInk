import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']

})
export class LogInComponent implements OnInit {

  emailLogin: string = 'abc@mail.ru';
  passwordLogin: string = 'abcabc';

  constructor(private authorizationService: AuthorizationService) {

  }

  ngOnInit() {
  }

  login(emailLogin, passwordLogin) {
    this.authorizationService.login(emailLogin, passwordLogin);
  }

  googleStart() {
    this.authorizationService.googleAuto();
  }

}
