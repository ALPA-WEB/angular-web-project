import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
// import { AcademyService } from '../../../@core/data/academy.service';


import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

interface Notice {
    title: string;
    content: string;
    date: string;
}

@Component({
    selector: 'ngx-alpa-notice',
    templateUrl: 'alpa-notice.component.html',
})
export class AlpanoticeComponent implements OnInit {
    noticesCol: AngularFirestoreCollection<Notice>;
    notices: Observable<Notice[]>;
    noticeDoc: AngularFirestoreDocument<Notice>;

    notice: Notice = {
        title: '',
        content: '',
        date: '',
    }

    modalHeader: string;
    modalContent: string;

    constructor(private activeModal: NgbActiveModal,
                // private acdemyservice: AcademyService,
                private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.noticesCol = this.afs.collection('academy').doc('ALPA').collection('notice');
        this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
        this.activeModal.close();
    }

    // addNotice(){
    //   this.afs.collection('notice').add({
    //     'title': this.notice.title,
    //     'content': this.notice.content,
    //   })
    // }
}