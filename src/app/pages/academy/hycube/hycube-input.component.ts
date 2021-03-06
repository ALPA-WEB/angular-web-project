import { Component, OnInit } from '@angular/core';
import { HycubenoticeComponent } from './hycube-notice.component';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../../../@core/data/users.service';

interface Notice {
  title: string;
  content: string;
  date: string;
}
interface Member {
  duty: string;
  name: string;
  email: string;
  sid: string;
}
interface User {
  ALPA: boolean;
  uid: string;
  email: string;
  displayName: string;
  HYCUBE: boolean;
  JARAM: boolean;
  ZERONE: boolean;
  FIFO: boolean;
}

const utc = () => new Date().toJSON().slice(0, 10).replace(/-/g, '/');
@Component({
    selector: 'ngx-hycube-inputs',
    styleUrls: ['./hycube-input.component.scss'],
    templateUrl: './hycube-input.component.html',
  })

export class HycubeinputComponent implements OnInit {
      starRate = 2;
      heartRate = 4;
      notices: Observable<Notice[]>;
      members: Observable<Member[]>;
      users: Observable<User[]>;
      userSubscription: any;
      notice: Notice = {
        title: '',
        content: '',
        date: '',
      };
      member: Member = {
        duty: '',
        name: '',
        email: '',
        sid: '',
      };

      user: User = {
        ALPA: false,
        uid: '',
        email: '',
        displayName: '',
        HYCUBE: false,
        JARAM: false,
        ZERONE: false,
        FIFO: false,
      };
    constructor(public userService: UserService) {
      }
        ngOnInit() {
          // this.noticesCol = this.afs.collection('academy').doc('HYCUBE').collection('notice');
          // this.notices = this.noticesCol.valueChanges();
          // this.membersCol = this.afs.collection('academy').doc('HYCUBE').collection('member');
          // this.members = this.membersCol.valueChanges();
          // this.usersCol = this.afs.collection('users');
          // this.users = this.usersCol.valueChanges();
        }
        addNotice() {
          // this.afs.collection('academy').doc('HYCUBE').collection('notice').add({
          //   'title': this.notice.title,
          //   'content': this.notice.content,
          //   'date': utc,
          // });
        }
        addMember() {
          // this.afs.collection('academy').doc('HYCUBE').collection('member').add({
          //   'duty': this.member.duty,
          //   'name': this.member.name,
          //   'email': this.member.email,
          //   'sid': this.member.sid,
          // });
          // this.users.subscribe((data) => {for ( const el of data ) {
          //
          //   if(el.email == this.member.email) {
          //     const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${el.email}`);
          //     const data: User = {
          //       uid: el.uid,
          //       email: el.email,
          //       displayName: el.displayName,
          //       ALPA: el.ALPA,
          //       HYCUBE: true,
          //       JARAM: el.JARAM,
          //       ZERONE: el.ZERONE,
          //       FIFO: el.FIFO,
          //     }
          //     userRef.update(data);
          //   }
          // }});
        }
    }


