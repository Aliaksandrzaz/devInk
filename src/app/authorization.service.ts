import {Injectable} from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import {Subject} from "rxjs/internal/Subject";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  round: number = Math.random();

  firebaseConfig: object = {
    apiKey: "AIzaSyDQL5kW9DBCEJjXPFB91NfkLMHIWUIPZHs",
    authDomain: "dev-ink.firebaseapp.com",
    databaseURL: "https://dev-ink.firebaseio.com",
    projectId: "dev-ink",
    storageBucket: "",
    messagingSenderId: "954474519050",
    appId: "1:954474519050:web:e4f61e88cb114417"
  };

  loginSuccessful: Subject<boolean> = new Subject<boolean>();
  registrationLoginDone: Subject<boolean> = new Subject<boolean>();

  user = {
    signUp: '',
    logIn: ''
  };

  constructor() {
  }


  initializeFirebase() {
    firebase.initializeApp(this.firebaseConfig);
  }

  saveLocalStorageKey(result): void {
    this.loginSuccessful.next(false);
    localStorage.setItem('flag', 'true');
    this.user.logIn = result;
  }

  loginAuthorization(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((text) => {
        this.saveLocalStorageKey(email);
        this.user.logIn = email;

      })
      .catch(function (error) {
        console.log('sdf')
      });
  }

  registration(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.user.signUp = email;
        this.registrationLoginDone.next(true);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }


  googleAuthorization() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
      this.saveLocalStorageKey(result.user.displayName);
    }).catch(function (error) {
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

  gitHubAuthorization() {
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.saveLocalStorageKey(result.additionalUserInfo.username);
    }).catch(function (error) {
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

  facebookAuthorization() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.saveLocalStorageKey(result.user.displayName);
    }).catch(function (error) {
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
