import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
// import { AcademyService } from '../../../@core/data/academy.service';


import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';




interface Notice {
  title: string;
  content: string;
  deadline: string;
}
@Component({
  selector: 'ngx-alpa-notice',
  template: `
  <div class="modal-header">
    <span>{{ modalHeader }}</span>
    <button class="close" aria-label="Close" (click)="closeModal()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div *ngFor="let notice of notices | async" class="modal-body">
    {{ notice.title }} {{notice.content}}
  </div>
  <div class="modal-footer">
    <button class="btn btn-md btn-primary" (click)="closeModal()">Save changes</button>
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
      deadline: ""
    }

    modalHeader: string;
    // modalContent = `그딴거 없어 ^^ 돌아가~~`;
  
    constructor(private activeModal: NgbActiveModal,
    // private acdemyservice: AcademyService,
  private afs: AngularFirestore) { 
    }
    ngOnInit(){
      this.noticesCol = this.afs.collection('notice');
      this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
      this.activeModal.close();
    }

    
  }
  