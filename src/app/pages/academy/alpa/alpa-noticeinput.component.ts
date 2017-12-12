import { Component, OnInit } from '@angular/core';
import { AlpanoticeComponent } from './alpa-notice.component';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
@Component({
    selector: 'ngx-alpa-noticeinputs',
    styleUrls: ['./alpa-noticeinput.component.scss'],
    templateUrl: './alpa-noticeinput.component.html',
  })

export class AlpanoticeinputComponent implements OnInit{
      starRate = 2;
      heartRate = 4;
      noticesCol: AngularFirestoreCollection<Notice>;
      notices: Observable<Notice[]>;
      noticeDoc: AngularFirestoreDocument<Notice>;
      membersCol: AngularFirestoreCollection<Member>;
      members: Observable<Member[]>;
      memberDoc: AngularFirestoreDocument<Member>;
      notice: Notice = {
        title: "",
        content: "",
        date: ""
      };
      member: Member = {
        duty: "",
        name: "",
        email: "",
        sid: "",
      };
    constructor(
        // private acdemyservice: AcademyService,
      private afs: AngularFirestore) {}
        ngOnInit() {
          this.noticesCol = this.afs.collection('academy').doc('ALPA').collection('notice');
          this.notices = this.noticesCol.valueChanges();
          this.membersCol = this.afs.collection('academy').doc('ALPA').collection('member');
          this.members = this.membersCol.valueChanges();
        }
        addNotice() {
          // this.afs.collection('notice').add({
          //   'title': this.notice.title,
          //   'content': this.notice.content,
          // })
          this.afs.collection('academy').doc('ALPA').collection('notice').add({
            'title': this.notice.title,
            'content': this.notice.content,
            'date': utc,
          })
        }
        addMember(){
          this.afs.collection('academy').doc('ALPA').collection('member').add({
            'duty': this.member.duty,
            'name': this.member.name,
            'email': this.member.email,
            'sid': this.member.sid,
          })
        }
    }


    