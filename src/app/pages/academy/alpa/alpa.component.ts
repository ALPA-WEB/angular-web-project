
/**
 * Created by chou6 on 2017-11-20.
 */
import {Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlpamanageComponent } from './alpa-management.component';
import { AlpanoticeComponent } from './alpa-notice.component';
import { AlpanoticeinputComponent } from './alpa-noticeinput.component';
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
export class AlpaComponent implements OnInit {
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
      const activeModal = this.modalService.open(AlpanoticeComponent, { size: 'lg', container: 'nb-layout' });
      activeModal.componentInstance.modalHeader = gettitle;
      activeModal.componentInstance.modalContent = getcontent;
    }
    ngOnInit() {
    }

}
