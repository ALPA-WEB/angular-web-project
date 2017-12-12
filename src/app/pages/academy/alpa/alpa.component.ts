
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlpamanageComponent } from './alpa-management.component';
import { AlpanoticeComponent } from './alpa-notice.component';
import { AlpanoticeinputComponent } from './alpa-noticeinput.component';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Notice {
  title: string;
  content: string;
  date: string;
}
@Component({
    selector: 'ngx-alpa',
    styleUrls: ['alpa.component.scss'],
    templateUrl: 'alpa.component.html',
})
export class AlpaComponent{
  noticesCol: AngularFirestoreCollection<Notice>;
  notices: Observable<Notice[]>;
  noticearr: Notice[];
  notice: Notice = {
    title: "",
    content: "",
    date: ""
  }



  constructor(private modalService: NgbModal, private afs:AngularFirestore) { }



  showLargeModal(gettitle, getcontent) {
      const activeModal = this.modalService.open(AlpanoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }


    ngOnInit(){
      this.noticesCol = this.afs.collection('academy').doc('ALPA').collection('notice');
      this.notices = this.noticesCol.valueChanges();
    }
}
