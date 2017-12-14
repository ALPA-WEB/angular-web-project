
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {UnivNoticeComponent} from './modals/university.notice.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

interface Intro {
    content: string;
}
interface Notice {
    title: string;
    content: string;
}
interface Member {
    duty: string;
    name: string;
    email: string;
    sid: string;
}
@Component({
    selector: 'ngx-university',
    templateUrl: 'university.component.html',
    styleUrls: ['./university.component.scss'],
})
export class UniversityComponent implements OnInit {
    introsCol: AngularFirestoreCollection<Intro>;
    intros: Observable<Intro[]>;
    noticesCol: AngularFirestoreCollection<Notice>;
    notices: Observable<Notice[]>;
    noticeDoc: AngularFirestoreDocument<Notice>;
    membersCol: AngularFirestoreCollection<Member>;
    members: Observable<Member[]>;
    memberDoc: AngularFirestoreDocument<Member>;
    intro: Intro = {
      content: '',
    };
    notice: Notice = {
        title: '',
        content: '',
    };
    member: Member = {
        duty: '',
        name: '',
        email: '',
        sid: '',
    };
    constructor( private modalService: NgbModal, private afs: AngularFirestore ) { }
    ngOnInit() {
        this.introsCol = this.afs.collection('studentCouncil').doc('university').collection('intro');
        this.intros = this.introsCol.valueChanges();
        this.noticesCol = this.afs.collection('studentCouncil').doc('university').collection('notice');
        this.notices = this.noticesCol.valueChanges();
    }
    showLargeModal(gettitle, getcontent) {
        const activeModal = this.modalService.open(UnivNoticeComponent, { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = gettitle;
        activeModal.componentInstance.modalContent = getcontent;
    }
    addNotice() {
        this.afs.collection('studentCouncil').doc('university').collection('notice').add({
            'title': this.notice.title,
            'content': this.notice.content,
        });
    }
}
