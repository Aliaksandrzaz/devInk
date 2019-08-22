import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LogInComponent} from './log-in/log-in.component';
import {AuthorizationService} from "./authorization.service";
import {HomeComponent} from './home/home.component';
import {HeaderMainComponent} from './header-main/header-main.component';
import {HomeGuardGuard} from "./home/home-guard.guard";

import {MaterialModule} from "./material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HeaderMainComponent},
  {path: 'home', component: HomeComponent, canActivate: [HomeGuardGuard]},
  {path: '**', component: HeaderMainComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LogInComponent,
    HomeComponent,
    HeaderMainComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
   ],
  providers: [AuthorizationService, HomeGuardGuard],
  bootstrap: [AppComponent],

})
export class AppModule {
}
