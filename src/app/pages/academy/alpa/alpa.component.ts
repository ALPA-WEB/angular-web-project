
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlpamanageComponent } from './alpa-management.component';
import { AlpanoticeComponent } from './alpa-notice.component';

@Component({
    selector: 'ngx-alpa',
    templateUrl: 'alpa.component.html',
})
export class AlpaComponent{
  constructor(private modalService: NgbModal) { }
    showLargeModal() {
      const activeModal = this.modalService.open(AlpanoticeComponent, { size: 'lg', container: 'nb-layout' });
  
      activeModal.componentInstance.modalHeader = '첫 공지사항';
    }
}
