import { Component } from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Member {
  duty: string;
  name: string;
  email: string;
  sid: string;
}
@Component({
  selector: 'ngx-alpa-manage',
  // template: `<ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>`,
  styleUrls: ['alpa-management.component.scss'],
  template: `
    <table class="w3-table-all w3-hoverable">
      <thead>
        <tr class="w3-light-grey">
          <th scope="cols">직책</th>
          <th scope="cols">이름</th>
          <th scope="cols">학번</th>
          <th scope="cols">이메일</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let member of members | async" >
          <td>{{member.duty}}</td>
          <td>{{member.name}}</td>
          <td>{{member.sid}}</td>
          <td>{{member.email}}</td>
        </tr> 
      </tbody>
    </table>`,
})
export class AlpamanageComponent implements OnInit{
  membersCol: AngularFirestoreCollection<Member>;
  members: Observable<Member[]>;

  member: Member = {
    duty: "",
    name: "",
    email: "",
    sid: "",
  }
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
        title: 'duty',
        type: 'string',
      },
      name: {
        title: 'name',
        type: 'string',
      },
      id: {
        title: 'sid',
        type: 'number',
      },
      email: {
        title: 'email',
        type: 'string',
    },
  }
}

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,private afs: AngularFirestore,
    ) {

    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit(){
    this.membersCol = this.afs.collection('academy').doc('ALPA').collection('member');
    this.members = this.membersCol.valueChanges();
  }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
