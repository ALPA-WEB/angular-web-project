import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

interface Notice {
    title: string;
    content: string;
    date: string;
}

@Component({
    selector: 'ngx-jaram-notice',
    templateUrl: 'jaram-notice.component.html',
})
export class JaramnoticeComponent implements OnInit {
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
                private afs: AngularFirestore) {
    }

    ngOnInit() {
        this.noticesCol = this.afs.collection('academy').doc('JARAM').collection('notice');
        this.notices = this.noticesCol.valueChanges();
    }

    closeModal() {
        this.activeModal.close();
    }

}