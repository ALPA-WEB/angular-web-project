
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ZeroonemanageComponent } from './zeroone-management.component';
import { ZeroonenoticeComponent } from './zeroone-notice.component';
import { ZerooneinputComponent } from './zeroone-input.component';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {UserService} from '../../../@core/data/users.service';

interface Notice {
  title: string;
  content: string;
  date: string;
}
interface Master {
  uid: string;
}
@Component({
    selector: 'ngx-zeroone',
    styleUrls: ['zeroone.component.scss'],
    templateUrl: 'zeroone.component.html',
})
export class ZerooneComponent{
  user: any;
  noticesCol: AngularFirestoreCollection<Notice>;
  notices: Observable<Notice[]>;
  mastersCol: AngularFirestoreCollection<Master>;
  masters: Observable<Master[]>;
  notice: Notice = {
    title: "",
    content: "",
    date: ""
  }
  master: Master = {
    uid: "",
  }

  constructor(private modalService: NgbModal, private afs:AngularFirestore, public userService:UserService) { }



  showLargeModal(gettitle, getcontent) {
      const activeModal = this.modalService.open(ZeroonenoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }


    ngOnInit(){
      this.noticesCol = this.afs.collection('academy').doc('ZERONE').collection('notice', ref  => ref.orderBy('date','desc'));
      this.notices = this.noticesCol.valueChanges();
      this.mastersCol = this.afs.collection('master');
      this.masters = this.mastersCol.valueChanges();
    }

}
