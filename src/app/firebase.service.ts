import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {Injectable} from '@angular/core';

@Injectable()
export class FirebaseService {
  private firebaseApp: firebase.app.App;
  private _db: firebase.firestore.Firestore;
  private _auth: firebase.auth.Auth;
  private googleProvider: firebase.auth.GoogleAuthProvider;
  constructor() {
    this.firebaseApp = firebase.initializeApp({
      authDomain: 'forestvue-8424e.firebaseapp.com',
      apiKey: 'AIzaSyC_bQgvZYtcQjwmmXR2I1YfyZLM7P1t9tQ',
      projectId: 'forestvue-8424e',
    });
    this._db = this.firebaseApp.firestore();
    this._auth = this.firebaseApp.auth();
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }
  public login(data): void {
    this._auth.signInWithEmailAndPassword(data.id, data.pw);
  }

  public googleLogin(): void {
    this._auth.signInWithPopup(this.googleProvider);
  }
  signOut(): Promise<void> {
    return this._auth.signOut();
  }
  getDB(): firebase.firestore.Firestore {
    return this._db;
  }

  getAuth(): firebase.auth.Auth {
    return this._auth;
  }
}

