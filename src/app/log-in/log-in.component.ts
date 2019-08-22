import {Component, NgModule, OnInit, Output, EventEmitter} from '@angular/core';
import {AuthorizationService} from '../authorization.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']

})
export class LogInComponent implements OnInit {
  emailLogin: string = 'abcabc@mail.ru';
  passwordLogin: string = 'abcabc';

  constructor(private authorizationService: AuthorizationService) {  }

  @Output() onChanged = new EventEmitter<boolean>();

  ngOnInit() {
    this.emailLogin = this.authorizationService.user.signUp;
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
  ]);


  closeForm() {
    this.onChanged.emit(false);
  }

  login(emailLogin, passwordLogin): void {
    if (this.emailFormControl.status === 'VALID' && this.passwordFormControl.status === 'VALID') {
      this.authorizationService.loginAuthorization(emailLogin, passwordLogin);
    }
  }

  googleStart(): void {
    this.authorizationService.googleAuthorization();
  }

  gitHubStart(): void {
    this.authorizationService.gitHubAuthorization();
  }

  facebookStart(): void {
    this.authorizationService.facebookAuthorization();
  }

}
