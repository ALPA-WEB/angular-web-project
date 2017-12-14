import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {ACADEMY_ITEMS} from './academy-menu';
import {Subscription} from 'rxjs/Subscription';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Academy{
  ALPA: boolean;
  uid: string;
  email: string;
  displayName: string;
  HYCUBE: boolean;
  JARAM: boolean;
  ZERONE: boolean;
  FIFO: boolean;
}
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss',
  '../ui-features/tabs/tabs.component.scss'],
  templateUrl: './dashboard.component.html',
  providers: [AngularFireAuth],
})
export class DashboardComponent implements OnInit {
  academysCol : AngularFirestoreCollection<Academy>;
  academys: Observable<Academy[]>;
  academic : Academy = {
    ALPA: false,
    JARAM: false,
    ZERONE: false,
    HYCUBE: false,
    FIFO: false,
    uid: "",
    email: "",
    displayName: "",    
  }
  acaSubscription: any;
  item: NbMenuItem = {
    title: "",
  }


  academy = 'dashboard';
  academy_menu = ACADEMY_ITEMS;
  content = '내용';
  username: any;
  useremail: any;
  protected acaClick$: Subscription;
  constructor(private modalService: NgbModal,
              protected menuService: NbMenuService,
              public afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              ) {
    afAuth.authState.subscribe((user: firebase.User) => { if (user) { this.username = user.displayName; this.useremail = user.email} });
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.changeName(user.displayName);
      }
    });
    this.acaClick$ = this.menuService.onItemSelect()
        .subscribe((value: {tag: string, item: NbMenuItem}) => {
      if (value.tag === 'dashboard') {
        this.content = value.item.title + this.username;
      }
    });
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
    for(var i = 0; i < ACADEMY_ITEMS.length; i++) {
      ACADEMY_ITEMS.pop();
    }
    this.academysCol = this.afs.collection('users');
    this.academys = this.academysCol.valueChanges();
    
    this.acaSubscription = this.academys.subscribe((data) => { for ( const el of data ) {
      // alert(this.useremail + "|" + el.email);
      if(this.useremail == el.email) {
        // alert("In" + this.useremail + "|" + el.email);

        for(var i = 0; i < ACADEMY_ITEMS.length; i++) {
          ACADEMY_ITEMS.pop();
        }
        if(el.ALPA===true){
          this.item.title = "ALPA";
          ACADEMY_ITEMS.push({title:"ALPA"});
        }if(el.HYCUBE===true){
          this.item.title = "HYCUBE";
          ACADEMY_ITEMS.push({title:"HYCUBE"});
        }if(el.JARAM===true){
          this.item.title = "JARAM";
          ACADEMY_ITEMS.push({title:"JARAM"});
        }if(el.FIFO===true){
          this.item.title = "FIFO";
          ACADEMY_ITEMS.push({title:"FIFO"});
        }if(el.ZERONE===true){
          this.item.title = "ZERONE";
          ACADEMY_ITEMS.push({title:"ZERONE"});
        }
      }
    } });

    if (this.username === '') {
      this.username = '사용자없음';
    }
  }
  changeName(userName): void {
    this.username = userName;
  }
}
