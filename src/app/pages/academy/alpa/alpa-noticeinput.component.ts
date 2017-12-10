import { Component, OnInit } from '@angular/core';
import { AlpanoticeComponent } from './alpa-notice.component';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Notice {
  title: string;
  content: string;
  date: string;
}
var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
document.write(utc);
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
  
      notice: Notice = {
        title: "",
        content: "",
        date: ""
      }

      
      constructor(
        // private acdemyservice: AcademyService,
      private afs: AngularFirestore) { 
        }
        ngOnInit(){
          this.noticesCol = this.afs.collection('notice').doc('ALPA').collection('notice');
          this.notices = this.noticesCol.valueChanges();
        }
    
        addNotice(){
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
    }


    