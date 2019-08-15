import { Injectable, OnInit, } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {of} from 'rxjs';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  round:number = Math.random();

  firebaseConfig: object = {
    apiKey: "AIzaSyDQL5kW9DBCEJjXPFB91NfkLMHIWUIPZHs",
    authDomain: "dev-ink.firebaseapp.com",
    databaseURL: "https://dev-ink.firebaseio.com",
    projectId: "dev-ink",
    storageBucket: "",
    messagingSenderId: "954474519050",
    appId: "1:954474519050:web:e4f61e88cb114417"
  };

  loginSuccessful: Observable<any> = new Observable<any>();

  constructor() {
  }

  ngOnInit() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    firebase.initializeApp(this.firebaseConfig);
  }

  listen(){
    return this.loginSuccessful;
  }

  login(email: string, password: string) {
     firebase.auth().signInWithEmailAndPassword(email, password)
       .then((text)=>{
         this.loginSuccessful = new Observable<any>((text => {
           // console.log('loginServise');
           text.next(false);
         }))


       })
      .catch(function (error) {

      });


    return this.loginSuccessful;
  }

  registration(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
      })
      .catch(function (error) {

      });
  }


  googleAuto(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }
}
