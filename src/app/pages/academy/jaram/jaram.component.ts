
/**
 * Created by chou6 on 2017-11-20.
 */
import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { JarammanageComponent } from './jaram-management.component';
import { JaramnoticeComponent } from './jaram-notice.component';
import { JaraminputComponent } from './jaram-input.component';

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
    selector: 'ngx-jaram',
    styleUrls: ['jaram.component.scss'],
    templateUrl: 'jaram.component.html',
})
export class JaramComponent implements OnInit {
  user: any;
  noticesCol: AngularFirestoreCollection<Notice>;
  notices: Observable<Notice[]>;
  mastersCol: AngularFirestoreCollection<Master>;
  masters: Observable<Master[]>;
  notice: Notice = {
    title: '',
    content: '',
    date: '',
  };
  master: Master = {
    uid: '',
  };
  constructor(private modalService: NgbModal, public userService: UserService) { }
  showLargeModal(gettitle, getcontent) {
      const activeModal = this.modalService.open(JaramnoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }
    ngOnInit () {
    }

}
