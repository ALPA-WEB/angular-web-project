import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-alpa-notice',
  template: `
  <div class="modal-header">
    <span>{{ modalHeader }}</span>
    <button class="close" aria-label="Close" (click)="closeModal()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    {{ modalContent }}
  </div>
  <div class="modal-footer">
    <button class="btn btn-md btn-primary" (click)="closeModal()">Save changes</button>
  </div>
  `,
})
export class AlpanoticeComponent {
  
    modalHeader: string;
    modalContent = `그딴거 없어 ^^ 돌아가~~`;
  
    constructor(private activeModal: NgbActiveModal) { }
  
    closeModal() {
      this.activeModal.close();
    }
  }
  