import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {ACADEMY_ITEMS} from './academy-menu';
import {Subscription} from 'rxjs/Subscription';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss',
  '../ui-features/tabs/tabs.component.scss'],
  templateUrl: './dashboard.component.html',
  providers: [AngularFireAuth],
})
export class DashboardComponent implements OnInit {
  academy = 'dashboard';
  academy_menu = ACADEMY_ITEMS;
  content = '내용';
  username: any;
  protected acaClick$: Subscription;
  constructor(private modalService: NgbModal,
              protected menuService: NbMenuService,
              public afAuth: AngularFireAuth,
              ) {
    afAuth.authState.subscribe((user: firebase.User) => { if (user) { this.username = user.displayName; } });
    afAuth.auth.onAuthStateChanged(function (user) {
      if (user && this.username) {
        this.username = user.displayName;
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
    this.username = '사용자없음';
  }
}
