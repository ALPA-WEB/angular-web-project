import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {User} from './user';
const counter = 0;

@Injectable()
export class UserService {
  private firebaseApp: firebase.app.App;
  private db: firebase.firestore.Firestore;
  private auth: firebase.auth.Auth;
  private googleProvider: firebase.auth.GoogleAuthProvider;
  private currentUser: User;
  constructor(private router: Router) {
    this.firebaseApp = firebase.initializeApp({
      authDomain: 'forestvue-8424e.firebaseapp.com',
      apiKey: 'AIzaSyC_bQgvZYtcQjwmmXR2I1YfyZLM7P1t9tQ',
      projectId: 'forestvue-8424e',
    });
    this.db = this.firebaseApp.firestore();
    this.auth = this.firebaseApp.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.auth.onAuthStateChanged(this.updateUser);
    this.currentUser = new User();
  }
  public login(data): void {
    this.auth.signInWithEmailAndPassword(data.id, data.pw);
  }
  public googleLogin(): void {
    this.auth.signInWithPopup(this.googleProvider);
  }
  private updateUser(user): void {
    if (!user || user.uid === undefined) {return; }
    this.findUser(user.uid).then(res => {
        if (res.exists) {
        }else {
        }
    });
  }
  findUser (uid): Promise<firebase.firestore.DocumentSnapshot> {
    return this.db.collection('').doc(uid)
      .get();
  }
  signOut(): void {
    this.auth.signOut();
  }
}
