import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from '../authorization.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  emailSignUp: string = '';
  passwordSignUp: string = '';

  constructor(private authorizationService: AuthorizationService) {
  }

  ngOnInit() {

  }

  registration(emailSignUp, passwordSignUp) {
    console.log(emailSignUp, passwordSignUp);
    this.authorizationService.registration(emailSignUp, passwordSignUp);
  }

}
