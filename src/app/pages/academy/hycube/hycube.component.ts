
/**
 * Created by chou6 on 2017-11-20.
 */
import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HycubemanageComponent } from './hycube-management.component';
import { HycubenoticeComponent } from './hycube-notice.component';
import { HycubeinputComponent } from './hycube-input.component';
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
    selector: 'ngx-hycube',
    styleUrls: ['hycube.component.scss'],
    templateUrl: 'hycube.component.html',
})
export class HycubeComponent implements OnInit {
  user: any;
  notices: Observable<Notice[]>;
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
      const activeModal = this.modalService.open(HycubenoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }
    ngOnInit () {
      // this.noticesCol = this.afs.collection('academy').doc('HYCUBE').collection('notice', ref  => ref.orderBy('date','desc'));
      // this.notices = this.noticesCol.valueChanges();
      // this.mastersCol = this.afs.collection('master');
      // this.masters = this.mastersCol.valueChanges();
    }

}
