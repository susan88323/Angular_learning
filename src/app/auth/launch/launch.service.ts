import { Router } from '@angular/router';
//import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class LaunchService {
  //token: string;

  constructor(private router: Router) {}

  // signupUser(email: string, password: string) {
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //     .catch(
  //       error => console.log(error)
  //     )
  // }

  signinUser(username: string, password: string) {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getToken()
    //         .then(
    //           (token: string) => this.token = token
    //         )
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
    this.router.navigate(['./home']);
  }

  // logout() {
  //   firebase.auth().signOut();
  //   this.token = null;
  // }

  // getToken() {
  //   firebase.auth().currentUser.getToken()
  //     .then(
  //       (token: string) => this.token = token
  //     );
  //   return this.token;
  // }

  // isAuthenticated() {
  //   return this.token != null;
  // }
}
