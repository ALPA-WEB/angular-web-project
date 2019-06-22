import {Component, OnInit} from '@angular/core';
import {FifonoticeComponent} from './fifo-notice.component';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../../@core/data/users.service';

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
  selector: 'ngx-fifo-inputs',
  styleUrls: ['./fifo-input.component.scss'],
  templateUrl: './fifo-input.component.html',
})

export class FifoinputComponent implements OnInit {
  starRate = 2;
  heartRate = 4;
  noticesCol: any;
  notices: Observable<Notice[]>;
  membersCol: any;
  members: Observable<Member[]>;
  usersCol: any;
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

  constructor(
    public userService: UserService) {
  }

  ngOnInit() {
    // this.noticesCol = this.afs.collection('academy').doc('FIFO').collection('notice');
    // this.notices = this.noticesCol.valueChanges();
    // this.membersCol = this.afs.collection('academy').doc('FIFO').collection('member');
    // this.members = this.membersCol.valueChanges();
    // this.usersCol = this.afs.collection('users');
    // this.users = this.usersCol.valueChanges();
  }

  addNotice() {
    // this.afs.collection('academy').doc('FIFO').collection('notice').add({
    //   'title': this.notice.title,
    //   'content': this.notice.content,
    //   'date': utc,
    // });
  }

  addMember() {
    // this.afs.collection('academy').doc('FIFO').collection('member').add({
    //   'duty': this.member.duty,
    //   'name': this.member.name,
    //   'email': this.member.email,
    //   'sid': this.member.sid,
    // });
  }
}
