import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import {FirebaseService} from '../../firebase.service';
const counter = 0;

@Injectable()
export class UserService {
  private firebaseApp: firebase.app.App;
  private currentUser: Observable<User>;
  private tempUser: Observable<User>;
  private userCol: firebase.firestore.CollectionReference;

  constructor(private router: Router, private fs: FirebaseService) {
    this.userCol = fs.getDB().collection('alpa-web')
      .doc('users')
      .collection('list');
    this.currentUser = new Observable(observer => fs.getAuth().onAuthStateChanged(observer))
      .switchMap(data => {
        if (!data) {
          return Observable.of(new User());
        }
        return Observable.fromPromise(this.updateUser(data));
      });
  }

  public login(data): void {
    this.fs.login(data);
  }

  public googleLogin(): void {
    this.fs.googleLogin();
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  private updateUser(user): Promise<User> {
    if (!user || user.uid === undefined) {
      return;
    }
    return new Promise<User>(resolve => {
      this.findUser(user.uid).then(res => {
        const resolveUser = new User();
        resolveUser.uid = user.uid;
        resolveUser.email = user.email;
        resolveUser.displayName = user.displayName;
        if (res.exists) {
          const userData = res.data();
          resolveUser.ALPA = userData.ALPA;
          resolveUser.HYCUBE = userData.HYCUBE;
          resolveUser.JARAM = userData.JARAM;
          resolveUser.ZERONE = userData.ZERONE;
          resolveUser.FIFO = userData.FIFO;
          resolve(resolveUser);
        } else {
          this.createUser(user).then(() => {
            resolveUser.ALPA = false;
            resolveUser.HYCUBE = false;
            resolveUser.JARAM = false;
            resolveUser.ZERONE = false;
            resolveUser.FIFO = false;
            resolve(resolveUser);
          }).catch((err) => console.log(err));
        }
      });
    });
  }

  createUser(data) {
    return this.userCol.doc(data.uid).set({
      uid: data.uid,
      email: data.email,
      displayName: data.displayName,
      ALPA: false,
      HYCUBE: false,
      JARAM: false,
      ZERONE: false,
      FIFO: false,
    });
  }

  findUser(uid): Promise<firebase.firestore.DocumentSnapshot> {
    return this.userCol.doc(uid)
      .get();
  }

  signOut(): void {
    this.fs.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
