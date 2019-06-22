import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {ACADEMY_ITEMS} from './academy-menu';
import {Subscription} from 'rxjs/Subscription';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import { Observable } from 'rxjs/Observable';

import { AlpanoticeComponent } from '../academy/alpa/alpa-notice.component';

interface Academy {
  ALPA: boolean;
  uid: string;
  email: string;
  displayName: string;
  HYCUBE: boolean;
  JARAM: boolean;
  ZERONE: boolean;
  FIFO: boolean;
}
interface Notice {
  title: '';
  content: '';
}
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss',
  '../ui-features/tabs/tabs.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  academysCol: any;
  academys: Observable<Academy[]>;
  academic: Academy = {
    ALPA: false,
    JARAM: false,
    ZERONE: false,
    HYCUBE: false,
    FIFO: false,
    uid: '',
    email: '',
    displayName: '',
  };

  uninoticesCol: any;
  uninotices: Observable<Notice[]>;
  softnoticesCol: any;
  softnotices: Observable<Notice[]>;
  ictnoticesCol: any;
  ictnotices: Observable<Notice[]>;
  // uninotice: UniNotice = {
  //   title: "",
  //   content: "",
  // }
  acaSubscription: any;
  item: NbMenuItem = {
    title: '',
  };


  academy = 'dashboard';
  academy_menu = ACADEMY_ITEMS;
  content = '내용';
  username: any;
  useremail: any;
  constructor(private modalService: NgbModal,
              protected menuService: NbMenuService,
              ) {
  }
  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }
  ngOnInit(): void {
    for (let i = 0; i < ACADEMY_ITEMS.length; i++) {
      ACADEMY_ITEMS.pop();
    }
    // this.academysCol = this.afs.collection('users');
    // this.academys = this.academysCol.valueChanges();
    // this.acaSubscription = this.academys.subscribe((data) => { for ( const el of data ) {
    //   // alert(this.useremail + "|" + el.email);
    //   if(this.useremail == el.email) {
    //     // alert("In" + this.useremail + "|" + el.email);
    //
    //     for(var i = 0; i < ACADEMY_ITEMS.length; i++) {
    //       ACADEMY_ITEMS.pop();
    //     }
    //     if(el.ALPA===true){
    //       this.item.title = "ALPA";
    //       ACADEMY_ITEMS.push({title:"ALPA"});
    //     }if(el.HYCUBE===true){
    //       this.item.title = "HYCUBE";
    //       ACADEMY_ITEMS.push({title:"HYCUBE"});
    //     }if(el.JARAM===true){
    //       this.item.title = "JARAM";
    //       ACADEMY_ITEMS.push({title:"JARAM"});
    //     }if(el.FIFO===true){
    //       this.item.title = "FIFO";
    //       ACADEMY_ITEMS.push({title:"FIFO"});
    //     }if(el.ZERONE===true){
    //       this.item.title = "ZERONE";
    //       ACADEMY_ITEMS.push({title:"ZERONE"});
    //     }
    //   }
    // } });

    if (this.username === '') {
      this.username = '사용자없음';
    }

    // this.uninoticesCol = this.afs.collection("studentCouncil").doc("university").collection("notice");
    // this.uninotices = this.uninoticesCol.valueChanges();
    // this.softnoticesCol = this.afs.collection("studentCouncil").doc("soft").collection("notice");
    // this.softnotices = this.softnoticesCol.valueChanges();
    // this.ictnoticesCol = this.afs.collection("studentCouncil").doc("ict").collection("notice");
    // this.ictnotices = this.ictnoticesCol.valueChanges();
  }
  changeName(userName): void {
    this.username = userName;
  }
  showLargeModal(gettitle, getcontent) {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = gettitle;
    activeModal.componentInstance.modalContent = getcontent;
  }
}
