import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {FormControl, Validators} from "@angular/forms";

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

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);

  ngOnInit() {  }

  @Output() onChanged = new EventEmitter<boolean>();

  closeForm() {
    this.onChanged.emit(false);
  }

  registrationLogin(emailSignUp, passwordSignUp) {
    this.authorizationService.registration(emailSignUp, passwordSignUp);
  }

  registrationFacebook(): void {
    this.authorizationService.facebookAuthorization();
  }

  registrationGoogle(): void {
    this.authorizationService.googleAuthorization();
  }

  registrationGitHub(): void {
    this.authorizationService.gitHubAuthorization();
  }

}
