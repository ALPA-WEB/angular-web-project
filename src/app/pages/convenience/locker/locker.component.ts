
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';


interface Locker {
    no: string;
    user: string;
    use: boolean;
}
@Component({
    selector: 'ngx-locker',
    templateUrl: 'locker.component.html',
    styleUrls: ['locker.component.scss'],
})
export class LockerComponent implements OnInit {
    useremail: any;
    // lockersCol: AngularFirestoreCollection<Locker>;
    // lockersDoc: AngularFirestoreDocument<Locker>;
    lockers: Observable<Locker[]>;
    constructor() {
        // afAuth.authState.subscribe((user: firebase.User) => { if (user) { this.useremail = user.email} });
    }
    ngOnInit() {
        // this.lockersCol = this.afs.collection('convenience').doc('locker').collection('register');
        // this.lockers = this.lockersCol.valueChanges();
        // const lockersDoc: AngularFirestoreDocument<any> = this.afs.doc(`conveninece/locker`);
        // lockersDoc.valueChanges().subscribe((data) => this.locker = data);
        // alert(this.locker.user);
    }

    register(lockerno) {
        // this.lockersCol.valueChanges().subscribe((data) => {for (const el of data) {
        //     const lockerRef: AngularFirestoreDocument<any> = this.afs.doc(`convenience/locker/register/${el.no}`);
        //     if(el.no == lockerno){
        //         const data: Locker = {
        //             no: el.no,
        //             user: this.useremail,
        //             use: true,
        //           }
        //           lockerRef.update(data);
        //     }
        // }
        //
        // })
    }

    registered(lockerno) {
        alert(lockerno + '번 사물함은 사용중입니다.');
    }
}
