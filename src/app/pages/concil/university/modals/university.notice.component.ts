/**
 * Created by chou6 on 2017-12-14.
 */

import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


import {AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

interface Notice {
    title: string;
    content: string;
}

@Component({
    selector: 'ngx-university-notice',
    templateUrl: 'university.notice.component.html',
})
export class UnivNoticeComponent implements OnInit {
    noticesCol: AngularFirestoreCollection<Notice>;
    notices: Observable<Notice[]>;
    noticeDoc: AngularFirestoreDocument<Notice>;

    notice: Notice = {
        title: '',
        content: '',
    };

    modalHeader: string;
    modalContent: string;
    // modalContent = `그딴거 없어 ^^ 돌아가~~`;

    constructor(private activeModal: NgbActiveModal,
                // private acdemyservice: AcademyService,
                private afs: AngularFirestore) {
    }

    ngOnInit() {
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
