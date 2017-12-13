
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
    selector: 'ngx-alpa',
    styleUrls: ['alpa.component.scss'],
    templateUrl: 'alpa.component.html',
})
export class AlpaComponent{
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
  // user: User = {
  //   master: false,
  //   name: "",
  //   email: "",
  //   uid: "",
  // }



  constructor(private modalService: NgbModal, private afs:AngularFirestore, public userService:UserService) { }



  showLargeModal(gettitle, getcontent) {
      const activeModal = this.modalService.open(AlpanoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }


    ngOnInit(){
      this.noticesCol = this.afs.collection('academy').doc('ALPA').collection('notice');
      this.notices = this.noticesCol.valueChanges();
      this.mastersCol = this.afs.collection('master');
      this.masters = this.mastersCol.valueChanges();
      // this.usersCol = this.afs.collection('user');
      // this.users = this.usersCol.valueChanges();
    }

    // isMaster(){
    //   if(this.userService.user.master){
    //       return true;
    //   }
    //   return false;
    // }
}
