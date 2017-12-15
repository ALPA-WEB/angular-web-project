import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { allResolved } from 'q';

let counter = 0;
interface User {
  uid: string;
  email: string;
  displayName: string;
  ALPA: boolean;
  HYCUBE: boolean;
  JARAM: boolean;
  ZERONE: boolean;
  FIFO: boolean;
}

@Injectable()
export class UserService {    
  usercom: User = {uid: "", email:"", displayName:"", ALPA:false, HYCUBE: false,
  JARAM: false,
  ZERONE: false,
  FIFO: false,};
  user: Observable<User>;
  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router) {
      //// Get auth data, then get firestore user document || null
      this.user = this.afAuth.authState
        .switchMap(user => {
          if (user) {
            return this.afs.doc<User>(`users/${user.email}`).valueChanges();
          } else {
            return Observable.of(null);
          }
        });
  }
  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.email}`);
    userRef.valueChanges().subscribe((data) => this.usercom = data);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      ALPA: false,
      HYCUBE: false,
      JARAM: false,
      ZERONE: false,
      FIFO: false,
    }
      // alert(user.email + "|" + this.usercom.email);
    if(user.email == this.usercom.email){
      return null;
    }else{
      return userRef.set(data);
    }
  }
  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }
}
