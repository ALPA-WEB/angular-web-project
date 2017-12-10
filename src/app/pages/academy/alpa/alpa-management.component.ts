import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../../../@core/data/users.service'
@Component({
    selector: 'ngx-alpa-manage',
    template: `<ng2-smart-table [settings]="settings" [source]="source" (createConfirm)="userService.googleLogin()" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>`,
    styles: [`
        nb-card {
        transform: translate3d(0, 0, 0);
        }
    `],
    providers: [AngularFireAuth],
})
export class AlpamanageComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      duty: {
        title: '직책',
        type: 'string',
      },
      name: {
        title: '이름',
        type: 'string',
      },
      id: {
        title: '학번',
        type: 'number',
      },
      email: {
        title: 'E-mail',
        type: 'string',
    },
  }
}

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,
    public userService: UserService,
    public afAuth: AngularFireAuth) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
