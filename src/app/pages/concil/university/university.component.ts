
/**
 * Created by chou6 on 2017-11-20.
 */
import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {UnivNoticeComponent} from './modals/university.notice.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../../../@core/data/users.service';

interface Intro {
    content: string;
}
interface Notice {
    title: string;
    content: string;
}
interface Member {
    name: string;
    role: string;
}
interface Master {
    uid: string;
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
    mastersCol: AngularFirestoreCollection<Master>;
    masters: Observable<Master[]>;
    department = [
        {name: 'finance', value: '총무부'},
        {name: 'execution', value: '집행부'},
        {name: 'advertise', value: '홍보부'},
    ];
    selectedValue = null;
    intro: Intro = {
      content: '',
    };
    notice: Notice = {
        title: '',
        content: '',
    };
    member: Member = {
        name: '',
        role: '',
    };
    constructor( private modalService: NgbModal, private afs: AngularFirestore, public userService: UserService ) { }
    ngOnInit() {
        this.introsCol = this.afs.collection('studentCouncil').doc('university').collection('intro');
        this.intros = this.introsCol.valueChanges();
        this.noticesCol = this.afs.collection('studentCouncil').doc('university').collection('notice');
        this.notices = this.noticesCol.valueChanges();
        this.mastersCol = this.afs.collection('master');
        this.masters = this.mastersCol.valueChanges();
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
    addMember() {
        if (!this.selectedValue) {
            return;
        }
        this.afs.collection('studentCouncil').doc('university').collection('members').doc('l2I9usSkn2Y5EGHYqdCW')
            .collection(this.selectedValue).add({
            'name': this.member.name,
            'role': this.member.role,
        });
    }
}
