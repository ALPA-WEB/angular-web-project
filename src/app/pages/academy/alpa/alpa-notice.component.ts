import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { AcademyService } from '../../../@core/data/academy.service';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';




interface Notice {
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'ngx-alpa-notice',
  template: `
  
  <div class="modal-body" class="modal-header">
    <span>{{ modalHeader }}</span>
  </div>
  <div class="modal-body">
    {{modalContent}}
   </div>
  
  
  <div class="modal-footer">
  <button class="btn btn-md btn-primary" (click)="closeModal()">Confirm</button>
  </div>
  `,
})
export class AlpanoticeComponent implements OnInit{
    noticesCol: AngularFirestoreCollection<Notice>;
    notices: Observable<Notice[]>;
    noticeDoc: AngularFirestoreDocument<Notice>;

    notice: Notice = {
      title: "",
      content: "",
      date: ""
    }

    modalHeader: string;
    // modalContent = `그딴거 없어 ^^ 돌아가~~`;
  
    constructor(private activeModal: NgbActiveModal,
    // private acdemyservice: AcademyService,
  private afs: AngularFirestore) { 
    }
    ngOnInit(){
      this.noticesCol = this.afs.collection('academy').doc('ALPA').collection('notice');
      this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
      this.activeModal.close();
    }

    // addNotice(){
    //   this.afs.collection('notice').add({
    //     'title': this.notice.title,
    //     'content': this.notice.content,
    //   })
    // }
  }
  