import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalComponent} from '../ui-features/modals/modal/modal.component';
import {ACADEMY_ITEMS} from './academy-menu';
import {Subscription} from 'rxjs/Subscription';
import {NbMenuItem, NbMenuService} from '@nebular/theme';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss',
  '../ui-features/tabs/tabs.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  academy = 'dashboard';
  academy_menu = ACADEMY_ITEMS;
  content = '내용';
  protected acaClick$: Subscription;
  constructor(private modalService: NgbModal,
              protected menuService: NbMenuService,
              ) {
    this.acaClick$ = this.menuService.onItemSelect()
        .subscribe((value: {tag: string, item: NbMenuItem}) => {
      if (value.tag === 'dashboaard') {
        this.content = value.item.title;
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
}
